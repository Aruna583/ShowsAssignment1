import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { UPCOMING_API } from '../utils/constants';
import { upComingShows } from "../utils/upcommingShowsSlice";

const useUpCommingShows = () => { 
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    console.log(page, "Page...............")
    const getUpCommingShows = async() =>{
        setLoading(true);
        console.log("page", page)
        const data = await fetch(`${UPCOMING_API+page}`);
        const json = await data.json();
        console.log("json.events", json.events)
        dispatch(upComingShows(json.events))
        setLoading(false);
    }

    useEffect(() => {
        getUpCommingShows();
    }, [page])


    const handleScroll = () => {
        if (
          window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
          && !loading
        ) {
          setPage(prevPage => prevPage + 1);
        }
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      return {loading}
}


export default useUpCommingShows;