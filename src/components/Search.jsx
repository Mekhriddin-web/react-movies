import Categories from './Categories';

const Search = ({ search, setSearch, setCategory }) => {
  return (
    <>
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              placeholder="Search"
              type="search"
              className="validate"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      <Categories setCategory={setCategory} />
    </>
  );
};

export default Search;
