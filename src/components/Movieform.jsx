import React from 'react';

const MovieForm = (props) => {
    console.log(props);
    return ( <div>
            <h1>
                Movie id {props.match.params.id}
               
            </h1>
            <button className="btn btn-primary" onClick={()=>props.history.push('/movies')}>Save</button>
    </div> );
}
 
export default MovieForm;