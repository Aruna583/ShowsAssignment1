import React from 'react';
import RecommendedContainer from './RecommendedContainer';
import UpComingEventsContainer from './UpComingEventsContainer';
import { useSelector } from 'react-redux';
import './SecondaryContainer.css';
import useUpCommingShows from '../hooks/useUpCommingShows';

const SecondaryContainer = () => {
    const {loading} = useUpCommingShows();
    const events = useSelector((store) => store?.recommended?.recommendedEvents)
    const upcomingData = useSelector((store) => store?.upcomming?.upComingEvents)
    console.log("upcomingData", upcomingData)
    if(events === null) return;
  return (
    <div className='secondaryContainer'>
        <RecommendedContainer data={events}/>
        <UpComingEventsContainer data={upcomingData}/>
        {loading && <p>Loading....</p>}
    </div>
  )
}

export default SecondaryContainer