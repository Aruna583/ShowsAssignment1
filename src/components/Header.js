import React from 'react';
import {IoMenu} from 'react-icons/io5'; 
import { GrFavorite } from "react-icons/gr";
import'./Header.css';

const Header = () => {
  return (
    <div className='header'>
        <div className='header-items'>
        <h1 className='logo'>
            BookUsNow
        </h1>
        <div>
        <button className='category'>
            <IoMenu style={{color: 'white', fontSize: '20px'}}/>
            categories
        </button>
        <input type='text' className='input-element'/>
        </div>
        <button className='fav-button align-items'>
           <GrFavorite/>
            Favorites
        </button>
        <button className='sign-in'>
            Sign In
        </button>
        </div>
        <div className='categoryLists'>
            <p>Live Shows</p>
            <p>Streams</p>
            <p>Movies</p>
            <p>Plays</p>
            <p>Events</p>
            <p>Sports</p>
            <p>Activies</p>
        </div>
    </div>
  )
}

export default Header