import React from 'react';
import UpCommingEventCard from './UpCommingEventCard';
// import EventCard from './EventCard';
import { BsArrowRight } from "react-icons/bs";
import './UpComingContainer.css';

const UpComingEventsContainer = ({data}) => {
  return (
    <div>
      <div className='upcommingContainer'>
      <h1 className="upcomming-title">
        UpComing Shows
        <BsArrowRight
        style={{
            color: "black",
            paddingTop: "10px"
        }}
        />
      </h1>
      <h1>
        See All
      </h1>
      </div>
      <div className='upcommingList'>
      {data.map((event, index) => {
        return(
          <UpCommingEventCard event={event} key={index}/>
        )
      })}
      </div>
    </div>
  )
}

export default UpComingEventsContainer