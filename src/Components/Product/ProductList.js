import React, { Component } from 'react'
import { ProductConsumer } from '../../Components/Context'
import Title from '../Product/Title'
import Product from './Product'


export default class ProductList extends Component {
    
    render() {
        return (
        <React.Fragment>
            <div className="py=5">
              <div className="container">
               <Title name="our" title="products"/>
                 <div className="row">
                     <ProductConsumer>
                         {(value)=>{
                             return value.products.map( product =>{
                                //  console.log(value)
                                   return <Product key={ product.id} product={product}/> 

                             })
                             
                         }}
                     </ProductConsumer>
                 </div>
              </div>
            </div>
        </React.Fragment>
            
        );
    }
}
