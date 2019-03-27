import React from 'react';
    const Genre = (props) =>{

        const {onSelectgenre,selectedItem} = props;
        return ( 
            <ul className="list-group">
               <li className="list-group-item"
               onClick={()=>onSelectgenre([])}>All Genre</li>
               {props.items.map((genre)=>(
                   <li key={genre._id}
                    onClick={()=>onSelectgenre(genre)} 
                    className={genre===selectedItem?  "list-group-item active" : "list-group-item"}>{genre.name}</li>
               ))}
           </ul>
                );
           }
export default Genre;