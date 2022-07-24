import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { AiFillHome } from "react-icons/ai";

function Pagination(props){
  const {perPage, totalProducts, paginate} = props;
  const pageNumbers = [];
  const [pageNumber, setPageNumber] = useState(1);
  for(let i = 1; i <= Math.ceil(totalProducts / perPage); i++){
    pageNumbers.push(i);
  }

  function pageFunction(pageProcess){
    if(pageProcess === "inc"){
      if(pageNumber !== 1){
        setPageNumber(pageNumber - 1);
        paginate(pageNumber - 1);
      }
    }else if(pageProcess === "dec"){
      if(pageNumber !== pageNumbers.length){
        setPageNumber(pageNumber + 1);
        paginate(pageNumber + 1);
      }
    }
  }
  return(
    <Container>
    <nav className="nav">
      <ul className="pagination">
      <li className="page-item">
        <a className="page-link"><AiFillHome color="#f97316"/></a>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a href="#" 
            onClick={() => {
                setPageNumber(number);
                paginate(number)}} className="page-link text-dark">
              {number}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link text-dark" href="#" aria-label="Next" onClick={() => pageFunction("dec")}>
            <span aria-hidden="true">&raquo;</span>         
          </a>
        </li>
      </ul>
    </nav>
    </Container>
  )
}

export default Pagination;