import { createSlice } from "@reduxjs/toolkit";

const upcommingSlice = createSlice({
    name: 'recommended',
    initialState: {
        upComingEvents: []
    },
    reducers: {
        upComingShows: (state, action) => {
           state.upComingEvents.push(...action.payload)
        }
    }
})


export const {upComingShows} = upcommingSlice.actions;

export default upcommingSlice.reducer;