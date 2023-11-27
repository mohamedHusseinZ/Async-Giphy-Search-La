import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch data from Giphy API based on the search term
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=YOUR_API_KEY&rating=g`
        );
        // Store the first 3 gifs in component state
        setGifs(response.data.data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Fetch data when component mounts or when search term changes
    fetchData();
  }, [searchTerm]);

  // Handler function to update search term
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <GifSearch onSearch={handleSearch} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;