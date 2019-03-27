import React from 'react';
import { Component } from 'react';
import {getGenres} from '../services/fakeGenreService';
import {getMovies} from '../services/fakeMovieService';
import Joi from 'joi-browser';

class Addmovie extends Component {
    constructor(){
        super();
        this.state = { 
            data:{
                title:"",
                genereId:"",
                numberInStock:"",
                dailyRentalRate:""
            },
            genres:[],
            errors:[]
         };
         this.handleChange = this.handleChange.bind(this);
    };

    schema = {
        title:Joi.string().required(),
        genereId:Joi.string().required(),
        numberInStock:Joi.number().required(),
        dailyRentalRate:Joi.number()
    }

    handleChange(e){
        const data = {...this.state.data};
        data[e.currentTarget.name] = e.target.value;
        this.setState({
            data
        })
        console.log(this.state.data);
    }

    componentDidMount(){
        this.setState({
            genres:getGenres()
        })
        
        if(this.props.match.params.id==="new"){
            return;
        }
        const movieId = this.props.match.params.id;
        //console.log(movieId);

        
        const movies = getMovies();
        const result = movies.filter((movie)=>{
            if(movie._id === movieId){
                return movie;
            } 
        })

        this.setState({
            data:{
                    title:result[0].title,
                    genereId:result[0].genre.name,
                    numberInStock:result[0].numberInStock,
                    dailyRentalRate:result[0].dailyRentalRate
            }
        })
    }

    
    render() {         
        return (  <div>
            <h1 align="center"> Add Movie</h1>
            <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Title </label>
              <input type="text"
               className="form-control"
                id="exampleFormControlInput1"
                 placeholder="xyz movie"
                 value={this.state.data.title}
                 onChange={this.handleChange}
                 name="title" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Genre</label>
              <select value={this.state.data.genereId}
               className="form-control" id="exampleFormControlSelect1"
               name="genereId">
              {
                  this.state.genres.map(g =>(
                    <option>{g.name}</option>
                  ))
              }
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">No in Stocks </label>
              <input type="number"
               className="form-control" 
               id="exampleFormControlInput1"
                placeholder="1" 
                value={this.state.data.numberInStrock}
                name="numberInStock"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Rating </label>
              <input type="number"
               className="form-control" 
               id="exampleFormControlInput1"
                placeholder="1-5" 
                value={this.state.data.dailyRentalRate}
                name="dailyRentalRate" />
            </div>
            <button align="center" type="submit" className="btn btn-primary" >Save</button>
          </form>
        </div>   );
    }
}
 
export default Addmovie;