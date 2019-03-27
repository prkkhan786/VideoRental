import React from 'react';
import { Component } from 'react';
import Joi from 'joi-browser';
import {Redirect} from "react-router-dom";


class Register extends Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    
    schema  = {
        username:Joi.string().required(),
        password:Joi.string().required(),
        name:Joi.string().required().min(5)
     }

    state = { 
        user:{
            username:"",
            password:"",
            name:""
        },
        errors:{}
     }



     handleChange(e){
    
         const user  = {...this.state.user};
         user[e.currentTarget.name] = e.currentTarget.value;
         this.setState({
             user:user
         })
         console.log(this.state.user);
    
     }

     validate(){
        const result = Joi.validate(
            this.state.user
        ,this.schema,{abortEarly:false})
        if(result.error===null){
           return null;
        }else{
            const errors = {};
            for(let er of result.error.details){
                errors[er.path[0]] =   er.message;
            }
            this.setState({
                errors:errors
            })
        }
       

     }

     handleSubmit(e){
        e.preventDefault();
        if(this.validate()===null){
            console.log("succes");
            this.props.history.push("/");
        }


    }
    render() { 
        return (
            <div>
            <h1>Register</h1>
            <form onSubmit={this.handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" 
        className="form-control"
        autoFocus
         id="exampleInputEmail1" aria-describedby="emailHelp" 
         placeholder="username"
         value={this.state.username}
         onChange={this.handleChange} 
         name="username"/>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" 
        className="form-control"
         id="exampleInputPassword1"
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" 
        className="form-control"
        autoFocus
         id="name" aria-describedby="emailHelp" 
         placeholder="Name"
         value={this.state.name}
         onChange={this.handleChange} 
         name="name"/>
      </div>
      <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
    </form>
        
    {Object.keys(this.state.errors).length ? <div className="alert alert-warning" role="alert">
               {this.state.errors.username} <br/>
               {this.state.errors.password} <br />
               {this.state.errors.name}
</div>:""}
    
        </div>
        );
    }
}
 
export default Register;