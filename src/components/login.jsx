import React from 'react';
import { Component } from 'react';
class Login extends Component{
    constructor(){
        super();
        this.state={
           account :{
               username:"",
               password:""
           },
           errors:{}
        }
        this.validate = this.validate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        const account = {...this.state.account};
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({
           account
        })
    }

    validate = ()=>{
        const errors = {};
        if(this.state.account.username===""){
            console.log("into errors");
            errors.username = "username is requires"     
        }
        if(this.state.account.password===""){
            errors.password= "password is required"
        }
        return errors;
    }

    handleSubmit(e){
        e.preventDefault();
       const errors  = this.validate();  
        if(errors){
            this.setState({
                errors:errors
            })
        }  
    }
    render(){
        return ( <div>
            <h1>Login</h1>
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
          onChange={this.handleChange} />
      </div>
      <button type="submit" className="btn btn-primary" >Submit</button>
    </form>
        <div>
        {Object.keys(this.state.errors).length ? <div class="alert alert-warning" role="alert">
               {this.state.errors.username} <br/>
               {this.state.errors.password}
</div>:""}
        </div>
       
        </div>);
    }
   
}
 
export default Login;