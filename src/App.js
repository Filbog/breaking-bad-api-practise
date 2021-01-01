import React, {useEffect, useState } from 'react';
import './App.css'

import axios from 'axios';

import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [query, setQuery] = useState('');

  useEffect(() => {
      const fetchItems = async () => {
          //GET request. Result will represent what we get back from the API. It's a promise, therefore await. Inside backticks we'll
          //have our API endpoints
          const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
          console.log(result.data);
          setItems(result.data);
          //we want to set loading to false bc we got the data
          setIsLoading(false);
      }

      fetchItems();
  }, [query])



  return (
    <div className="container">
      <Header />
      <Search getQuery={q => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
