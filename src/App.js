import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/Menubar/Menubar';
import AllProducts from './components/AllProducts/AllProducts';
import { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [count, setCount] = useState(0);
  const addCart = () => setCount(count + 1);
  const removeCart = () => setCount(count - 1);

  useEffect(() => {
    AOS.init();
  }, [])


  if (count < 0) {
    setCount(0);
  };
  return (
    <div className="App">
      <Menubar count={count}></Menubar>
      <AllProducts setCartCount={{ addCart, removeCart }}></AllProducts>
    </div>
  );
}

export default App;
