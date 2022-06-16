import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home/home.component.jsx';
import Navbar from './routes/Navbar/navbar.component.jsx';
import Authentication from './routes/Authentication/Authentication.component.jsx';

const Shop = () => {
  return <div>Shop</div>;
};

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<Authentication />} />
      </Route>
      <Route path='*' element={<div>Not Found</div>} />
    </Routes>
  );
}

export default App;
