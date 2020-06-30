import React, { Component } from 'react';
import { ProductConsumer } from '../Components/Context'
// import Product from './Product/Product';
import {ButtonContainer} from '../Components/Styled-Button/Button'
import { Link } from 'react-router-dom';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value =>{
                    const {id,title,info,inCart,img,price,company}=value.detailProduct;
                    return(
                        <div className="container py-2">

                        {/*  title start */}
                        <div className="row">
                            <div className="col-10 mx-auto  my-4"></div>
                                    <h1 className="text-blue mx-auto text-slanted ">{title}</h1>
                            </div>
                            {/* Prouct Info */}
                            <div className="row">
                               <div className="col-10 mx-auto col-md-6 my-5 p-5">
                                <img src={img} className="img-fluid"></img>
                                </div>

                                            {/* Sub-heading */}
                                <div className="col-10 mx-auto col-md-6 my-3 p-5 text-capitalize">
                                <h2>model : {title}</h2>
                                <h4 className="text-title text-uppercase mt-3 mb-2">
                                    made by : <span>{company}</span>
                                </h4>
                                <h4 className="text-blue">
                                    <strong>
                                        price: <span>$</span>
                                        {price}
                                    </strong>
                                </h4>
                                <p className="text-capitalize font-weight-bold">
                                    some info about product:
                                </p>
                                <p className="text-muted-lead">
                                    {info}
                                </p>
                                <div>
                                    <Link to="/">
                                       <ButtonContainer className="text-capitalize">
                                           Back to products
                                      </ButtonContainer>
                                </Link>
                                <ButtonContainer 
                                  cart className="text-capitalize m-2" 
                                  onClick={()=>{
                                      value.addToCart(id);
                                      value.openModalHandler(id)
                                  }}
                                  disabled={inCart?true:false}>
                                    {inCart? "In cart" : "add to cart"}
                                </ButtonContainer>
                                </div>
                                </div>
                            </div>
                        </div>


                    )

                 
                }}
            </ProductConsumer>
            
        )
    }
}
