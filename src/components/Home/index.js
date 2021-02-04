import React, { useState } from 'react';
import Gists from '../Gists';
import Search from '../Search';

// The Home view, that displays the public gists
const Home = () => {
  // Search component updates the search shate here, which is then passed on to the Gists component for filtering by owner
  const [searchText, setSearchText] = useState('');
  const searchTextUpdated = (text) => {
    setSearchText(text);
  }

  return (
    <div className='home-container'>
      <Search searchTextUpdated={searchTextUpdated} />
      <Gists searchText={searchText} />
    </div>
  )
  
}

export default Home;