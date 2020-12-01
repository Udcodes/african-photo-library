import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../searchBar/styles.css';

export const SearchBar = ({ value, onChange }) => {
  return (
    <>
      <form className="form">
        <div className="search-header">
          <header class="search-container">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input
              value={value}
              onChange={onChange}
              className="search-box"
              type="search"
              name="search"
              placeholder="Search for photo"
              aria-autocomplete="list"
              autocomplete="off"
            />
          </header>
        </div>
      </form>
    </>
  );
};
