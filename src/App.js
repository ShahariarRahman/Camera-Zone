import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Questions from './components/Questions/Questions';
import Shop from './components/Shop/Shop';
import cameras from './utilities/cameras';

function App() {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProduct(cameras);
  }, [products]);


  const getCart = (product) => {
    if (cart.length < 4) {
      const productDuplicate = cart.find(singleCart => singleCart.id === product.id);
      if (!productDuplicate) {
        setCart([...cart, product]);
      }
      else {
        alert('The Product already Added in Card. Please Do not Add Same Product in Cart.');
      }
    }
    else {
      alert("Please Don't Add More Than 4 Product In Your Cart, Sir !");
    }
  };

  const removeCartList = () => {
    setCart([]);
  };

  return (
    <div className='App'>
      <Header totalCart={cart.length}></Header>
      <Shop products={products} getCart={getCart} cart={cart} removeCartList={removeCartList}></Shop>
      {/* <Questions></Questions> */}
    </div>
  );
}

export default App;
