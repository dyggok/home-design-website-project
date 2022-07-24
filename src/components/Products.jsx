import Modal from './Modal';
import React, { useState } from 'react';
import {Container, Row, Col, CarouselItem} from "react-bootstrap";
import Rating from './Rating';
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import Carousel from 'react-bootstrap/Carousel';

function Products(props){
  const {products, setItemCode, itemCode} = props;
  const [isClicked, setIsClicked] = useState(false);
  const [code, setCode] = useState("");
  const [showModal, setShowModal] = useState(false);

  function addToCart(code){
    setIsClicked(true);
    setCode(code);
    setShowModal(true); 
  }
  return(<>
    <Container>
    <Row>
    {products.map(d => 
      <div id={d.code} className={localStorage.getItem("addToCart").includes(d.code) ? "card col m-2 green-card" : "card col m-2"} key={d.code} >      
      <div className="card-body" id='cardOnHover'>
      <div className='d-flex justify-content-end'>{d.wishListContains ? <div className='border rounded-circle'><FcLike/></div> : <div className=' p-2 border rounded-circle d-flex justify-content-center'> <FcLikePlaceholder /></div>}</div>
      <Carousel variant="dark">
        {d.images.map(d => (
          <CarouselItem key={d.format}>
              <img src={d.url} alt="productImages" width="150px"/>
          </CarouselItem>
        ))}
      </Carousel>
      <Row>
        <Col>
          <Rating averageRating={d.averageRating}/>
        </Col>
        <Col className='d-flex justify-content-start'>
          {d.averageRating - parseInt(d.averageRating) !== 0 ? (d.averageRating).toFixed(1) : d.averageRating}
        </Col>
      </Row>
      
        <h6 className="card-title">{d.name}</h6>
        {Math.round(100 - ((d.priceWithDiscount.value * 100) / d.price.value)) !== 0 ?
          <Row>
            <Col className="bg-danger rounded-pill">
              <div className='text-light my-4'>
                <b>%{Math.round(100 - ((d.priceWithDiscount.value * 100) / d.price.value))}
                </b></div>     
            </Col>
            <Col>
            <div className='text-decoration-line-through'>{d.price.value} TL</div>
            <div>{d.priceWithDiscount.value} TL</div>
            </Col>

          </Row>
          : 
          <Row>
            <div>{d.price.value} TL</div>
          </Row>
        }
          <button id={d.showAddToCartFlag ? "addProduct" : "notAddProduct"} type="button" className="btn btn-success mx-auto my-3" onClick={() => addToCart(d.code)} disabled={localStorage.getItem("addToCart").includes(d.code) ? true : false}>Sepete Ekle</button>
        </div>
      </div>         
        )}
    </Row>
  </Container>
  {
    isClicked ? <Modal code={code} showModal = {showModal} setShowModal={setShowModal} setItemCode={setItemCode} itemCode={itemCode}
    products={products}/> : ""
  }
  </>)
}

export default Products;