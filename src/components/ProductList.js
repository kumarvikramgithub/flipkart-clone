import React from 'react'
 import Product from './Product'
export default function ProductList(props) {
    return (
        props.productList.length>0 ?
        props.productList.map((product,i) =>{
            return <Product product = { product } key = { i } index = {i} modifyProduct = {props.modifyProduct} />;
         })
         : 
         <h1 className='text-danger '>Your cart is Empty, Please add Item(s) to Buy.</h1>
    );
}
