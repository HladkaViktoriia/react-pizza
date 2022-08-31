import {Routes, Route} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';

import {Header} from './components';
import {Home, Cart} from './pages';

export default function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:3000/db.json').then(({data}) => {
          setPizzas(data.pizzas);
      });

    // fetch('http://localhost:3000/db.json')
    //   .then(res => res.json())
    //   .then(json => {
    //     setPizzas(json.pizzas)
    //   })
  }, []);

  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home items={pizzas} />} exact />
          <Route path="/cart" element={<Cart />} exact />
        </Routes>
      </div>
    </div>
  );
};