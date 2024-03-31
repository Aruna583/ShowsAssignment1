import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { recommendedShows } from "../utils/recommendedSlice";
import { RECOMMENDED_API } from '../utils/constants';

const useRecommendedShows = () => { 
    const dispatch = useDispatch();
    const getRecommendedShows = async() =>{
        const data = await fetch(RECOMMENDED_API);
        const json = await data.json();
        dispatch(recommendedShows(json.events))
    }

    useEffect(() => {
        getRecommendedShows();
    }, [])
}

export default useRecommendedShows;