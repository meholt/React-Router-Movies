import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

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

      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" component={Movie} />

    </div>
  );
};

export default App;
