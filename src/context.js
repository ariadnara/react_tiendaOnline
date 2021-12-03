import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
  state={
    //products:storeProducts,
    products:[],
    detailProduct:detailProduct
  };
  componentDidMount(){
    this.setProducts();
    }
    //...operador de prolongación
  setProducts=() =>{
    let tempProducts = [];
    storeProducts.forEach(item => {
        const singleItem = {...item};//creando un nuevo objeto con las caracteristicas de item
        tempProducts = [...tempProducts,singleItem];//similar a join array
    });
    this.setState(()=>{
        return {products:tempProducts};
        });  
  };
  getItem = id =>{
    const product=this.state.products.find(item=>item.id===id);
    return {detailProduct:product}    
  };
  handleDetail = ()=>{
     //const product=this.getItem();
     //this.setState(()=>{
     //   return {detailProduct:product}     
   // })
      console.log("hello from detail");
  };
  addToCart = (id)=>{
    console.log(`hola desde el carrito ${id}`);
  };
  
  
  render() {    
    return(
        <ProductContext.Provider value={{
            //creando nuevo objeto con las propiedades de this.state 
            //con las funciones handleDetail y addToCart de ProductProvider
            ...this.state,
            handleDetail:this.handleDetail,         
            addToCart:this.addToCart
            }}
        >
            {/*<button onClick={this.tester}>test me</button>*/}
			{this.props.children}
		</ProductContext.Provider>
    	)
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer};