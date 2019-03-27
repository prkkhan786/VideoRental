import React from 'react';
import { Component } from 'react';
import Movie from './components/movies';
import {Route,Redirect,Switch} from 'react-router-dom';
import Customer from './components/customers';
import Rentals from './components/rentals';
import Notfound from './components/notfound';
import Navigation from './components/navigationbar';
import MovieForm from './components/Movieform';
import Login from './components/login';
import Addmovie from './components/addmovie';
import './app.css';
import Register from './components/register';

class App extends Component {
    state = {  }
    render() { 

        return ( 
        <React.Fragment>
        <Navigation />
        <main className="container">
        <Switch>
            <Route path="/login" component = {Login}/>
            {/* <Route path="/movies/new" component={Addmovie}/> */}
            <Route path="/movies/:id" component={Addmovie}/>
            <Route path="/movies" exact component={Movie}></Route>
            <Route path="/customers" component={Customer}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/not-found" component={Notfound}></Route>
            <Route path="/register" component={Register } />
            

            <Redirect from="/" exact to="/movies"/>
            <Redirect to="not-found"/>
        </Switch>
         </main>
         </React.Fragment>
         );
    }
}
export default App; 