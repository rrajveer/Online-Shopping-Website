import React, { Component } from 'react'
import Title from '../Product/Title';
import CartColumn from './CartColumn';
import EmptyCart from './EmptyCard';
import { ProductConsumer } from '../Context'
import CartList from './CartList';
import CartTotals from './CartTotals'
export default class Cart extends Component {
    render() {
        return (
            <ProductConsumer>
              { value =>{
               const { cart }=value;
               if(cart.length >0){
                  return( 
                  <React.Fragment>
                    <Title name="your" title="card" />
                    <CartColumn />
                    <CartList value={value} />
                    <CartTotals value={value}/>
                  </React.Fragment>
                  );
                } 
                else{
                    return <EmptyCart />;
                 } 
               }  
              }     
            </ProductConsumer>
        )
    }
}
