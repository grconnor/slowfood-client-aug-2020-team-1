import React from 'react';
import ProductsList from './ProductsList';
import Header from './Header'

const App = () => {
  return (
    <>
      <h1 data-cy="header">Products list</h1>
      <ProductsList/>
    </>
  );
}

export default App;