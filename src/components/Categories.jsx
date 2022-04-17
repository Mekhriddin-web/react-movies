import Category from './Category';

const Categories = ({ setCategory }) => {
  const categories = ['All', 'Comedy', 'Drama'];

  return (
    <form action="#">
      {categories.map((category, i) => (
        <Category text={category} key={i} id={i} setCategory={setCategory} />
      ))}
    </form>
  );
};

export default Categories;
