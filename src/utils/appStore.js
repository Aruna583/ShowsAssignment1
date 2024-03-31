import {configureStore} from '@reduxjs/toolkit';
import recommendedReducer from './recommendedSlice';
import upcommingReducer from './upcommingShowsSlice';

const appStore = configureStore({  
    reducer:{
        recommended: recommendedReducer,
        upcomming: upcommingReducer
    }
})

export default appStore
