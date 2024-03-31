import React from 'react';
import './EventCard.css';
import { getDate, getDirectImageUrl } from '../utils/Helpers';

const EventCard = ({event}) => {
  return (
    <div>
      <div className='event-card'>  
      <img 
      src={getDirectImageUrl(event.imgUrl)} 
      alt={event.eventName}
      loading='lazy'
      className='img-logo'
      />
      <div className='event-details'>
        <div className='align-div'>
          <p className='event-name'>{event.eventName}</p>
          <p className='event-cityName'>{event.cityName}</p>
        </div>
        <div className='align-div'>
          <p className='event-date'>{getDate(event.date)}</p>
          <div>
            <p className='event-weather'>{event.weather} | {Math.round(event.distanceKm / 1000)}km</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default EventCard