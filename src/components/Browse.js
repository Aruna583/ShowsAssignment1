import React from 'react';
import Header from './Header';
import useRecommendedShows from '../hooks/useRecommendedShows';
import useUpCommingShows from '../hooks/useUpCommingShows';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
    useRecommendedShows();
    useUpCommingShows();

  return (
    <div>
        <Header/>
        <MainContainer />
        <SecondaryContainer />
    </div>
  )
}

export default Browse