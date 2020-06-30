import React from 'react'
import { ButtonContainer } from '../Styled-Button/Button';
import {Link } from 'react-router-dom'
export default function CartTotals({ value }) {
  const { subtotal, tax, subTotal,total, clearCartHandler } = value;
    return <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-8 mt-2 ml-sm-3 ml-md-auto col-sm-8 text-right text-capitalize mb-5">
                    <Link to="/">
                        <button className="btn btn-outline-danger text-uppercase mb-3 px-3" 
                           type="button" onClick={() =>clearCartHandler()}>
                               clear cart
                           </button>

                    </Link>
                     <h5>
                         <span className="text-title">
                             Subtotal : </span>
                             <strong>$ {subTotal}</strong>
                         
                     </h5>
                     <h5>
                         <span className="text-title">
                             Tax :
                         </span>
                         <strong>$ {tax}</strong>
                     </h5>
                     <h5>
                         <span className="text-title">
                             Total :
                         </span>
                         <strong>$ {total}</strong>
                     </h5>

                </div>
            </div>
        </div>
    </React.Fragment>
}
