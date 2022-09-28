import {Routes, Route} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';

import {Header} from './components';
import {Home, Cart} from './pages';
import {setPizzas} from './redux/actions/pizzas'

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      axios.get('http://localhost:3001/pizzas').then(({data}) => {
          dispatch(setPizzas(data));
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/cart" element={<Cart />} exact />
        </Routes>
      </div>
    </div>
  );
};