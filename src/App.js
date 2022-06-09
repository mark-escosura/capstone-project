import { Routes, Route } from 'react-router-dom';

import Navbar from './routes/Navbar/navbar.component.jsx';
import Home from './routes/Home/home.component.jsx';

const Shop = () => {
  return <div>Shop</div>;
};

const SignIn = () => {
  return <div>SignIn</div>;
};

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path='*' element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
