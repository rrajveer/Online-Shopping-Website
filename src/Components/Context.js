import React, { Component } from 'react'
import { storeProducts,detailProduct} from '../Components/data'


const ProductContext = React.createContext();

class ProductProvider extends Component {

     state={
        products: [],
        detailProduct: detailProduct,
        cart:[],
        modalOpen: false,
        modalProduct:detailProduct,
        subTotal:0,
        total:0,
        tax:0,
    };
    componentDidMount(){
        this.setProducts();
    }

    setProducts = () =>{

        let tempProduct = [];
        storeProducts.forEach(item => {
           const singleItem={...item};
            tempProduct=[...tempProduct, singleItem]  ;   
        }); 
        this.setState(()=>{
            return{
                products:tempProduct
            };
        });  
    }

    getItem = (id) =>{
         
        const product = this.state.products.find(item => item.id===id);
        return product;
    }
    detailsHandler = (id) =>{

        const product = this.getItem(id);
        this.setState( () =>
            { 
                return{ detailProduct:product};
             });

    }

    productHander = () =>{
        console.log("from productHandler");
        
    }
    addToCart = (id) =>{
       
        let tempProduct = [...this.state.products];
        const index= tempProduct.indexOf(this.getItem(id));
        const product = tempProduct[index];
        product.inCart=true;
        product.count=1;
        const price = product.price;
        product.total = price;
        this.setState( () =>{
            return{
                products:tempProduct, cart:[...this.state.cart, product]
            };
        },
        ()=>{
        
            this.addTotals();
            // console.log(this.state);
            
        }
        );
    }; 
        
    openModalHandler = (id) =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {modalProduct:product, modalOpen:true}
        });
    }  
    
    closeModal = () =>{
        this.setState(() =>{
            return{modalOpen:false};
        })
        
    }
    incrementHandler = (id) =>{
        let tempCart = [...this.state.cart];

        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count=product.count +1;
        product.total=(product.count)*(product.price);
        this.setState(() =>{
            return{ total:product.total,count:product.count}
        }, () =>{
            this.addTotals();
        })
    }
    decrementHandler = (id) =>{

        let tempCart = [...this.state.cart];

        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count=product.count - 1;
        if(product.count<0){
            this.removeItemHandler(id);
        }
        else{
        product.total=(product.count)*(product.price);
        }
        this.setState(() =>{
            return{ total:product.total,count:product.count}
        }, () =>{
            this.addTotals();
        })
    }
    clearCartHandler = () =>{

        this.setState(() =>{
            return {cart:[]}
        },() =>{
            this.setProducts();
            this.addTotals();
        })
    }
    removeItemHandler = (id) =>{

        const tempProduct = [...this.state.products];
        let tempCart = [...this.state.cart];

         tempCart = tempCart.filter(item => item.id !== id );
        const index = tempProduct.indexOf(this.getItem(id));
        

        let removedProduct = tempProduct[index];
        removedProduct.inCart=false;
        removedProduct.total=0;
        removedProduct.subTotal=0;

        this.setState(() =>{
            return{ products:[...tempProduct] , cart:[...tempCart]}
        }, () =>{
             this.addTotals();
        })
    }
    addTotals = () =>{
        let subTotal = 0;
        this.state.products.map(item=>{
              subTotal += item.total;
        })
        const tempTax = subTotal * 0.1;
        const Tax = parseFloat(tempTax.toFixed(2));
        const Total = subTotal + Tax;
        this.setState(()=>{
            return { total:Total,tax:Tax,subTotal:subTotal}
        })
    }

 
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                productHander:this.productHander,
                addToCart:this.addToCart,
                detailsHandler:this.detailsHandler,
                openModalHandler:this.openModalHandler,
                closeModal:this.closeModal,
                incrementHandler:this.incrementHandler,
                decrementHandler:this.decrementHandler,
                removeItemHandler:this.removeItemHandler,
                clearCartHandler:this.clearCartHandler,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}


const ProductConsumer = ProductContext.Consumer;

export  { ProductConsumer, ProductProvider};