import "./Searchfield.css";

const SearchField = ({ searchTerm, onChangeHandler }) => {
  return (
    <div className="search-field">
      <input
        className="search-input"
        type="search"
        id="search"
        name="search"
        defaultValue={searchTerm}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchField;
