import React from 'react'

export default function MenuItem(props) {
    console.log('props in MenuItem', props.item)
  return (
    <div className="col-12 col-md-6 col-lg-4" style={{padding: '12px'}}>
    <div className="card">
      <img className="cardimg" src={props.item.image} style={{ borderBottom: '1px solid lightgray' }} />
      <div className="card-body">
        <h5 className="card-title">{props.item.item}</h5>
        <p className="card-text">Price: {props.item.price}</p>
        <button className="btn btn-primary mr-2" onClick={() => props.updateShoppingCart(props.item)}>Add To Cart</button>
      </div>
    </div>
  </div>
  )
}
