import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "../Button";

import s from "../SearchForm/SearchForm.module.css";
import { BiSearchAlt } from "react-icons/bi";

function SearchForm({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    const { value } = e.currentTarget;
    setSearchQuery(value);
  };

  const reset = () => {
    setSearchQuery("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchQuery(searchQuery.trim().toLowerCase());

    if (searchQuery === "") {
      alert("Input is empty");
      return;
    }

    onSubmit(searchQuery);

    reset();
  };

  return (
    <form onSubmit={handleSubmit} className={s.searchForm}>
      <input
        className={s.searchFormInput}
        type="text"
        autoComplete="off"
        value={searchQuery}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        autoFocus
        placeholder="Search movies"
      />

      <Button type="submit" children={<BiSearchAlt size="20" />} />
    </form>
  );
}

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};
