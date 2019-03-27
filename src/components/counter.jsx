import React from 'react';
import { Component } from 'react';
class Counter extends Component {
    constructor(){
        super();
        
         //binding of methods
         //function in javascript are objects
    }
    styles = {
        fontSize:20,
        fontWeight:"bold"
    }
    render() { 
       
        return ( 
            <div>
                   <span style={this.styles}className={this.newMethod()}>{this.formatcount()} </span>
                    <button className="btn btn-primary" onClick={()=> this.props.onIncrement(this.props.count)}>  Incrment </button>
                    <button className="btn btn-danger sm m-2" onClick={this.props.Ondelete}> Delete</button>
            </div>
         );
    }
    newMethod() {
        let classes = "badge m-2 badge-";
        classes += this.props.count.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatcount(){
        return this.props.count.value===0 ? 'zero ': this.props.count.value
    }

}
export default Counter;