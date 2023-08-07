import React from 'react'

export default function Product( props) {
  return (
    <div className='row my-3'>
        <div className='col-4'>
            {props.product.name}  <span className="badge bg-secondary">{props.product.price}</span>
        </div>
        <div className='col-4'>
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button disabled={ props.product.quantity===0 } type="button" className="btn btn-danger" onClick={()=>{
                    props.modifyProduct(props.index, 'decrementQuantity')
                }}>-</button>
                <input type='number' value={props.product.quantity} onChange = {(event)=>{
                    props.modifyProduct(props.index, event.target)
                }} style={{width: '100px'}} />
                <button type="button" className="btn btn-success" onClick={()=>{
                    props.modifyProduct(props.index, 'incrementQuantity')
                }}>+</button>
            </div>
        </div>
        <div className='col-2'>
            {props.product.price * props.product.quantity}
        </div>
        <div className='col-2'>
            <button className='btn btn-danger' onClick={()=>{
                    props.modifyProduct(props.index, 'removeProduct')
                }} > Remove</button>
        </div>
    </div>
  )
}
