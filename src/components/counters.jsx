import React from 'react';
import {Component} from 'react';
import Counter from './counter';
class Counters extends Component {

    constructor(){
        super();
        this.resethander = this.resethander.bind(this);
    }

    state = {  
        counters:[
            {id:1,value:0},
            {id:2,value:0},
            {id:3,value:0},
            {id:4,value:0}
        ]
    }
    render() { 
        return ( <div className="container">
            <button className="btn btn-primary sm m-2" onClick={this.resethander}>Reset</button>
           {this.state.counters.map(count=> <Counter 
           key={count.id}
            onIncrement={this.handleIncrement} 
            count={count} 
            Ondelete={()=>this.deleteHandler(count)}/> )}
        </div> );
    }
    deleteHandler(count)
    {
        const filterArray = this.state.counters.filter((value)=> value.id!==count.id);
        this.setState({
            counters:filterArray
        })
    }

    handleIncrement = (count)=>{
        const counter = [...this.state.counters];
        const index = counter.indexOf(count);
        counter[index].value++;
        this.setState({
            counters:counter
        })        
    }

    resethander(){
        const counter = this.state.counters.map(count => {
             count.value=0
             return count;
        })

        this.setState({
            counters:counter
        })
    }
}
 
export default Counters;