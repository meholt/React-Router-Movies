import React, { useState } from 'react';
import { Router } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
  
  {/* Add two routes.
  * one route for `/` that loads the `MovieList` component.
  * one route that will take an `id` parameter after`/movies/` 
  (ex: `/movies/2`, `/movies/3` where the id is dynamic). 
  This route should load the `Movie` component. */}

      <Router path="/" component={MovieList} />
      <Router path="/movies/:id" component={Movie} />
      
    </div>
  );
};

export default App;
