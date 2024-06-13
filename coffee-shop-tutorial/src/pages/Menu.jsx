import React from 'react'
import { fakeMenuItems, fakeMerchItems } from '../fakeData'
import MenuItem from '../components/MenuItem'


export default function Menu(props) {
    console.log('fakeMenuItems => ', fakeMenuItems)
    console.log('fakeMerchItems => ', fakeMerchItems)


  return (
    <>
        <div>Menu</div>
        {fakeMenuItems && fakeMenuItems.length > 0 ?
        fakeMenuItems.map(item => (
            <MenuItem item={item} updateShoppingCart={props.updateShoppingCart}/>
        )) : null}
    </>
  )
}
