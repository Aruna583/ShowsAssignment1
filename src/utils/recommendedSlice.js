import { createSlice } from "@reduxjs/toolkit";

const recommendedSlice = createSlice({
    name: 'recommended',
    initialState: {
        recommendedEvents: null
    },
    reducers: {
        recommendedShows: (state, action) => {
            state.recommendedEvents = action.payload;
        }
    }
})


export const {recommendedShows} = recommendedSlice.actions;

export default recommendedSlice.reducer;