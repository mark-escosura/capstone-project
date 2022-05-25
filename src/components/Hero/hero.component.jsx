import Categories from '../Categories/categories.component.jsx';

import './hero.styles.scss';

const Hero = () => {
  return (
    <div className='hero-container'>
      <h1>Fake Store</h1>
      <Categories />
      <button>Shop Now</button>
    </div>
  );
};

export default Hero;
