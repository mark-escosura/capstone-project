import { useState, useEffect } from 'react';
import axios from 'axios';
import Category from '../../sub-components/Category/category.component';
import './categories.style.scss';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/categories`)
      .then((categories) => {
        setCategories(categories.data);
      })
      .catch((error) => console.log({ error }));
  }, []);

  return (
    <div className='categories-container'>
      {categories.map((data) => {
        const category = data.charAt(0).toUpperCase() + data.slice(1);
        return <Category key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Categories;
