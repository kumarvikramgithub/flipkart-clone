import React, { Component } from 'react'

export default class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: '',
            productPrice: 0,
        }
    }
  render() {
    return (
        <form onSubmit={ (e) => {
            e.preventDefault();
            this.props.addItem(this.state.productName, Number(this.state.productPrice));
        }} className='row'>
        <div className="mb-3 col-4">
          <label htmlFor="productName" className="form-label">Name: </label>
          <input type="text" 
          className="form-control" 
          id="productName"
          value={this.state.productName}
          onChange={(event) => {
              this.setState({productName: event.target.value})
          }} />
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="productPrice" className="form-label">Price: </label>
          <input type="number"
           className="form-control"
            id="productPrice"
            value={this.state.productPrice}
            onChange={(event) => {
                this.setState({productPrice: event.target.value<0 ? 0 : Number(event.target.value)})
            }} />
        </div>
        <div className=' mb-3 mt-4 pt-2 col-2'>
            <button type="submit" className="btn btn-primary" disabled = {this.state.productName===""} >Submit</button>
        </div>
      </form>
    )
  }
}
