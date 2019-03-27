import React from 'react';
import {Component } from 'react';
import {movies, getMovies} from '../services/fakeMovieService'
import Pagination from '../common/pagination';
import { paginate } from '../utils/paginate';
import { getGenres } from '../services/fakeGenreService';
import Genre from './genre';
import MoviesTable from './moviesTable';
import {Link} from 'react-router-dom';
import _ from 'lodash';

class Movie extends Component {
    constructor(){
        super();
        this.state = {
            movies:movies,
            genre:[],
            pageSize:4,
            currentpage:1,
            selectedItem:{},
            selectedgenremovies:movies,
            sortcolumn:{path:'title',order:'asc'}
        }
        this.deletemovie = this.deletemovie.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    deletemovie(e){
       const filterArray = this.state.movies.filter((movie) =>(
            movie._id!==e
       ))
       this.setState({
           movies:filterArray,
           selectedgenremovies:filterArray
       })
    }
    handlePageChange(page){
        this.setState({
            currentpage:page
        })
        console.log(page);
    }

    handleSort(path){

        const columsort = {...this.state.sortcolumn};
        if(columsort.path===path){
            columsort.order = (columsort.order==='asc') ? 'desc' : 'asc';
        }else{
            columsort.path = path;
            columsort.order = 'asc';
        }
        this.setState({
            sortcolumn:{path:columsort.path,order:columsort.order}
        })
        console.log(columsort);
    }
    componentDidMount(){
        this.setState({
            genre:getGenres()
        })
    }

    onSelectgenre = (item) =>{
        this.setState({
            selectedItem:item,
            currentpage:1
        })

        if(item.length===0){
            this.setState({
                selectedgenremovies:getMovies()
            })
            return;
        }
        const selectedgenremovies = this.state.movies.filter(m=>(
            m.genre.name===item.name
        ))
        this.setState({
            selectedgenremovies:selectedgenremovies
        })

        //console.log(selectedgenremovies);
        // console.log(item);
    }

    handleSearch(e){
        const filterSearch = this.state.movies.filter((movie)=>{
            if(movie.title.toLowerCase().includes(e.target.value)){
                return movie
            }
        })
        this.setState({
            selectedgenremovies:filterSearch
        })
    }
    render() { 

        const filtermovies = this.state.selectedgenremovies;   //for sorting of movies

        const sorted = _.orderBy(filtermovies,this.state.sortcolumn.path,this.state.sortcolumn.order);



        const movies = paginate(sorted,this.state.currentpage,this.state.pageSize);
        if(this.state.movies.length===0){
            return "No movies in the database";
        }
        return ( 
            <div className="row">
                 <div className="col-2">
                 
                <Genre items={this.state.genre} 
                    onSelectgenre={this.onSelectgenre}
                    selectedItem={this.state.selectedItem}/>
                </div>
               
                <div className="col">
                <Link to="/movies/new"
                className="btn btn-primary"
                 style={{margin:20}}>New movie
                 </Link>
                 <input type="text"
                  className="form-control form-search"
                   aria-label="Text input with radio button"
                   placeholder="Search Movie"
                   onChange={this.handleSearch} />
                <p> Showing {this.state.selectedgenremovies.length}  movies in the database. </p>
        <MoviesTable movies={movies} onDelete={this.deletemovie} onsort={this.handleSort}/>
        <Pagination itemCounts={this.state.movies.length}  pageSize={this.state.pageSize} onPageChange={this.handlePageChange} currentpage={this.state.currentpage}/>
                </div>
            </div>
         );
    }
}
export default Movie;