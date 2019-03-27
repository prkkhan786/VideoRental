import React from 'react';
import {Link} from 'react-router-dom';
const MoviesTable = (props) => {
    const {movies , onDelete ,onsort} = props;
    return (  
  
    <table className="table">
<thead>
<tr>
<th onClick={()=>onsort('title')} scope="col">Title</th>
<th onClick={()=>onsort('genre.name')} scope="col">Genre</th>
<th onClick={()=>onsort('numberInStock')} scope="col">Stock</th>
<th onClick={()=>onsort('dailyRentalRate')} scope="col">Rate</th>
<th onClick={()=>onsort()}></th>

</tr>
</thead>
<tbody>
{movies.map((movie,i)=>(
<tr key={movie._id}>
<td className="clickable"> <Link to={`/movies/${movie._id}`}>  {movie.title}</Link> </td>
<td className="clickable">{movie.genre.name}</td>
<td className="clickable">{movie.numberInStock}</td>
<td className="clickable">{movie.dailyRentalRate}</td>
<td>
<button 
    className="btn btn-danger" 
    onClick={()=>{
    onDelete(movie._id)
}}> Delete </button></td>

</tr>
))}

</tbody>
</table>);

}
 
export default MoviesTable;