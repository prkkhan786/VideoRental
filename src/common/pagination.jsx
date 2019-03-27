import React from 'react';
import _ from 'lodash';
const Pagination = (props) => {
    const {itemCounts , pageSize} = props;

    const pagescount = Math.ceil(itemCounts / pageSize) ;  // 3
    //create an array between these ranges

    if(pagescount ===1) {
        
        return null;
    }
     const pages = _.range(1,pagescount+1);
    return (
      
    <nav aria-label="Page navigation example">
        <ul className="pagination">
        {pages.map((page,i) =>(
             <li key={page} className={props.currentpage===page ? "page-item active" : "page-item"}><a className="page-link" onClick={()=>props.onPageChange(page)}>  {page} </a></li>
            ))}
           
        </ul>
    </nav> 
        
        
        );
}
 
export default Pagination;