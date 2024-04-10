import css from "./SearchBox.module.css";

const SearchBox = ({ value, onSearch }) => {
  return (
    <div>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        value={value}
        type="text"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;