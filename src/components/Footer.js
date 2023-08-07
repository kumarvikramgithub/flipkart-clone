import React from 'react'

export default function Footer(props) {
  return (
    <div className='my-5'>
        <div className="row fixed-bottom bg-dark text-light" style={{height:'50px'}}>
            <div className="col-8 m-auto text-end" style={{height:'50px', lineHeight: '50px'}}>
                <div className='px-1'>TotalAmount:</div>
            </div>
            <div className="col-1 m-auto" style={{height:'50px', lineHeight: '50px'}}>
                <div className='pe-2'>{props.totalAmount}</div>
            </div>
            <div className="col-2 m-auto" style={{height:'50px', lineHeight: '50px'}}>
                <button disabled = {props.totalAmount===0} className='btn btn-success'>Pay Now</button>
            </div>
            <div className="col-1 m-auto" style={{height:'50px', lineHeight: '50px'}}>
                <button disabled = {props.totalAmount===0} className='btn btn-danger text-end' onClick={props.resetUserCart} >Reset</button>
            </div>
        </div>
    </div>
  )
}
