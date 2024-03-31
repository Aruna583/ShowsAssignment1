import React from 'react';
import { getDate, getDirectImageUrl } from '../utils/Helpers';
import './UpCommingEventCard.css';
import { IoLocationOutline } from "react-icons/io5";

const UpCommingEventCard = ({event}) => {
  return (
    <div>
      <div className='upcomming-card'>  
      <img 
      src={getDirectImageUrl(event.imgUrl)} 
      alt={event.eventName}
      loading='lazy'
      className='img-logo'
      />
      <div  className='upcomming-event-date'>
      <p>{getDate(event.date)}</p>
      </div>
      <div className='upcomming-card-details'>
        <div className='align-div'>
          <p className='upcomming-event-name'>{event.eventName}</p>
          
        </div>
        <div className='align-div'>
          <div className='weather-cityName'>
            <p className='event-cityName'>
                <IoLocationOutline />
                {event.cityName}
            </p>
            <p className='event-weather'>{event.weather} | {Math.round(event.distanceKm / 1000)}km</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default UpCommingEventCard