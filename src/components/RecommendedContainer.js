import React from 'react';
import EventCard from './EventCard';
import './RecommendedContainer.css';
import { BsArrowRight } from "react-icons/bs";

const RecommendedContainer = ({data}) => {
  
  return (
    <div>
      <div className='recommendedContainer'>
      <h1 className="recommended-title">
        Recommended shows
        <BsArrowRight
    style={{
      color: "#ffffff",
    }}
  />
      </h1>
      <span className='see-all'>
        See All
      </span>
      </div>
      <div className='recommendedList'>
      {data.map((event, index) => {
        return(
          <EventCard event={event} key={index}/>
        )
      })}
      </div>
    </div>
  )
}

export default RecommendedContainer