import { useState } from "react";
import css from "./SearchBar.module.css";

function SearchBar({ formSub }) {
  const [inputValue, setInputValue] = useState("");


  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={formSub}>
        <input
          className={css.inputField}
          type="text"
          autoComplete="off"
          autoFocus
          name="inputField"
          placeholder="Search images and photos"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className={css.subBtn}>
          Search
        </button>
      </form>
    </header>
  );
}

export default SearchBar;