import React, { Component } from 'react'
import { ProductConsumer } from '../Context'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class Product extends Component {
   
    render() {
        const { id,title,inCart,price,img } = this.props.product
        return (
            <ProductWrapper className= "col-9 mx-auto col-md-6 col-lg-3 my-3">
                  
                  <div className="card" >
                      <ProductConsumer>
                          { value =>(
                           <div className="img-container p-5"
                             onClick={ () =>
                                value.detailsHandler(id)}     
                             >
                               <Link to="/details">
                                <img src={img} alt="Mobile" className="card-img-top" />
                                   </Link>

                                <button className="cart-btn"
                                   disabled= {inCart? true: false}
                                    onClick={()=>{ 
                                        value.addToCart(id);
                                        value.openModalHandler(id)
                                    }
                                 }>
                               {
                                 (inCart) ?
                                   <p className="text-capitalize" disabled>in cart</p> :
                                      <i className="fas fa-cart-plus"></i>
                                }
                                </button>

                    </div>  
                          )} 
                    </ProductConsumer>                 
                        {/* Card Footer */}

                <div className="card-footer d-flex
                justify-content-between p-2">
                 <p className="align-self-center mb-0 ">
                     {title}
                 </p>
                 <h5 className="text-blue font-italic mb-0 ">
                     <span className="mr-0">
                        $
                     </span>
                     {price}
                 </h5>

                </div>
              </div>
            </ProductWrapper>
            
        );
    }
}

Product.propTypes = {
    product:PropTypes.shape({
 id:PropTypes.number,
 price:PropTypes.number,
 inCart:PropTypes.bool,
 title:PropTypes.string,
 img:PropTypes.string,
    })
}

const ProductWrapper = styled.div`

.card{
    border-color:transparent;
    transition: all 1s linear;
}
.card-footer{
    border-top:transparent;
    background:transparent;
    transition: all 1s linear;
}

&:hover  {
    .card{
    border: 0.04rem solig rgba(0,0,0,0.2);
    box-shadow: 2px 2px 5px 5px rgba(0,0,0,0.2);
}
 .card-footer{
     background: rgb(211,211,211,0.2);
 }

}

.img-container{
    position:relative;
    overflow:hidden;
}

.card-img-top{
    transition: all 1s linear;
}

.img-container:hover .card-img-top{

    transform:scale(1.2)
}

.cart-btn{
    position:absolute;
   height:2rem;
   width:3rem;
    right:0;
    bottom:0;
    background:var(--lightBlue);
    padding: 0.1rem 0.3rem;
    border:none;
    color:var(--mainWhite);
    font-size:1rem;
    border-radius: 0.5rem 0 0 0; 
    transform:translate(100%,100%);
    transition: all 1s linear;
}

.img-container:hover .cart-btn{
    transform:translate(0,0);
}

&:hover .cart-btn{
    color: var(--mainBlue);
    cursor:pointer
}

`;