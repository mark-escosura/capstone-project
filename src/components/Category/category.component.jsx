import './category.styles.scss';

const Category = (props) => {
  return (
    <div className='category-container'>
      <h2 className='category-title'>{props.category}</h2>
    </div>
  );
};

export default Category;
