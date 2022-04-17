const Category = ({ text, id, setCategory }) => {
  return (
    <p>
      <label>
        <input
          name="group1"
          type="radio"
          defaultChecked={id === 0 && true}
          onChange={() => setCategory(text)}
        />
        <span>{text}</span>
      </label>
    </p>
  );
};

export default Category;
