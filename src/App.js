import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import AddItem from './components/addItem';

function App() {
  const productLists = [
    {
      name: 'Iphone',
      quantity: 0,
      price: 100000
    },
    {
      name: 'Iphone-14',
      quantity: 0,
      price: 99999
    },
    {
      name: 'Iphone-12',
      quantity: 0,
      price: 70099
    }
  ]

  let [productList, setProductList] = useState(productLists);
  let [totalAmount, setTotalAmount] = useState(0);
  let [numberOfItemInCart, setItemCountInCart] = useState(productLists.length);

  const modifyProduct = (index, operation) =>{
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProductList[index].quantity*newProductList[index].price;
    if(operation==='incrementQuantity'){
      newProductList[index].quantity++;
    }else if(operation==='decrementQuantity'){
      newProductList[index].quantity--;
    }else if(operation==='removeProduct'){
      newProductList.splice(index,1);
    }else{
      newProductList[index].quantity = operation.value;
    }

    if(operation!=='removeProduct'){
      newProductList[index].quantity = newProductList[index].quantity <= 0 ? 0 : newProductList[index].quantity;
      newTotalAmount += newProductList[index].quantity*newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
    setItemCountInCart(newProductList.length);
  }

  const resetUserCart = () =>{
    setProductList(productLists);
    setTotalAmount(0);
  }

  const addItem = (name, price) =>{
    let newProductList = [...productList];
    newProductList.push({
      name: name,
      quantity: 0,
      price: price
    });
    setProductList(newProductList);
    setItemCountInCart(newProductList.length);
  }
  return (
    <>
      <Navbar numberOfItemInCart = {numberOfItemInCart} />
      <main className='container mt-5'>
        <AddItem addItem={addItem} />
        <ProductList productList = {productList} modifyProduct = {modifyProduct} />
      </main>
      <Footer totalAmount = {totalAmount} resetUserCart = {resetUserCart} />
    </>
  );
}

export default App;
