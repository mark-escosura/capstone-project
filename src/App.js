import Navbar from './components/Navbar/navbar.component.jsx';
import Hero from './components/Hero/hero.component.jsx';
import { Routes, Route } from 'react-router-dom';

import './App.styles.scss';

function App() {
  return (
    <>
      <Navbar />
      <div className='layout'>
        <Routes>
          <Route path='/' element={<Hero />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
