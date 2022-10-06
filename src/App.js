import {Routes, Route} from 'react-router-dom';

import {Header} from './components';
import {Home, Cart} from './pages';

export default function App() {

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