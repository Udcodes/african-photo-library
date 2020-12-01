import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import React, { useState } from 'react';
import './App.css';
import { PhotoCard } from './components/photoCard';
import { SearchBar } from './components/searchBar';

library.add(faSearch);

function App() {
  const [imageData, setImageData] = useState([]);
  const res = async () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const allData = res.data;
      setImageData({ allData });
    });
  };
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <button type="submit" className="search-btn"></button> */}
      {/* <div className="search-btn">
          {' '}
          <SearchIcon />
        </div>
        <input
          className="search-input"
          type="search"
          value=""
          autocomplete="off"
          aria-autocomplete="list"
          name="searchKeyword"
          placeholder="Search for photos"
          required=""
          spellcheck="false"
        /> */}
      <SearchBar />
      {/* </header> */}
      <div>
        <PhotoCard />
      </div>
    </div>
  );
}

export default App;
