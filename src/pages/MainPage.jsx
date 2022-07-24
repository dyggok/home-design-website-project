import React, { useState, useEffect } from 'react';
import productsData from '../ProductsData.json';
import Products from '../components/Products';
import Pagination from '../components/Pagination';
import Loading from '../components/Loading';

function MainPage(props){
  //parameters of pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const indexOfLastProduct = currentPage * perPage;
  const indexOfFirstProduct = indexOfLastProduct - perPage;
  const [currentProducts, setCurrenctProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [itemCode, setItemCode] = useState([]);
  
  useEffect(() => {
    setTimeout(() => {
      setCurrenctProducts(productsData.results.products.slice(indexOfFirstProduct, indexOfLastProduct));
      setIsLoading(false);
    }, "500");
  }, [currentPage]);

  useEffect(() => {
    if(!localStorage.getItem("addToCart")){
      localStorage.setItem("addToCart", []);
    }
    setTimeout(() => {
      setCurrenctProducts(productsData.results.products.slice(indexOfFirstProduct, indexOfLastProduct));
      setIsLoading(false);
    }, "1000");
    
  }, []);

  //change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return(
    <> 
    {!isLoading ?
      <div>
      <h2 className='m-5'>Ürünler</h2>
      <Products products = {currentProducts} setItemCode={setItemCode} itemCode={itemCode}/>
      <Pagination perPage = {perPage} totalProducts={productsData.results.products.length} paginate={paginate}/>
      </div> :
      <Loading /> 
    }
    
</>)
}

export default MainPage;