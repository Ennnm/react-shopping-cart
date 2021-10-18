import React, { useState } from 'react';
import axios from 'axios';

import Cart from './components/Cart.jsx';
import Items from './components/Items.jsx';
import ItemDetail from './components/ItemDetail.jsx';
import AddItem from './components/AddItem.jsx';

export default function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState();

  const addToCart = (item, quantity) => {
    const addedItem = { quantity, ...item };
    //check if cartItem in cart
    const getItem = cart.filter((x)=>x.name===addedItem.name)
    if( getItem.length===0){
      setCart([...cart, addedItem]);
    }
    else{
          const updatedCart = cart.map((cartItem)=>
    
  {if (cartItem.name===addedItem.name)
    {
      console.log('in if');
      return {...cartItem, quantity:cartItem.quantity+addedItem.quantity}
    }
    else{
      console.log('in else');

      return cartItem
    }})
    console.log('updatedCart :>> ', updatedCart);
    
    setCart([...updatedCart]);
    }

  };

  const setItemDetail = (itemIndex) => {
    setSelectedItemIndex(itemIndex);
  };

  const getItems = () => {
    axios.get('/items').then((result) => {
      console.log(result);
      setItems(result.data.items);
    });
  };
  const addItems =(item)=>{
    //name, desc, price
    axios.put('/items', item).then((result) => {
      console.log(result);
      getItems();
    });
  }

  const selectedItem = items[selectedItemIndex];

  return (
    <div className="container">
      <div className="row">
        <h1 className="page-title">Wow Shopping!</h1>
        <Items items={items} setItemDetail={setItemDetail} />
        {items.length === 0 && (
          <button type="button" onClick={getItems}>
            Get Items
          </button>
        )}
        <ItemDetail item={selectedItem} addToCart={addToCart} />
        <Cart items={cart} />
        <AddItem  addItems={addItems}/>
      </div>
    </div>
  );
}
