import React, {Component} from 'react';
import css from './Searchbar.module.css';
// import { AiOutlineSearch } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
export const SearchBar = ({onSubmit}) => {

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={onSubmit}>
        <button type="submit" className={css.button}>
          <BsSearch/>
          <span className={css.buttonLabel}></span>
        </button>

        <input
          className={css.input}
          type="text"
          name="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};