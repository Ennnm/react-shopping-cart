import React, { useState } from 'react';

export default function AddItem({ addItems }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  const handleDesc = (event) => {
    setDescription(event.target.value);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handlePrice = (event) => {
    setPrice(event.target.value);
  };
  const handleSubmit = () => {
    console.log('item submitted');
    addItems({ name, description, price });
  };
  return (
    <div className="col-sm">
      <textarea onChange={handleDesc} />
      <input type="text" onChange={handleName} />
      <input type="number" onChange={handlePrice} />
      <button type="submit" onClick={handleSubmit}>Add Item</button>
    </div>
  );
}
