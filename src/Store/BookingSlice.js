import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookings: []
};

const bookingSlice = createSlice({
    name: "bookings",
    initialState,
    reducers: {
        addBooking: (state, action) => {
            state.bookings.push(action.payload);
        },
        updateBooking: (state, action) => {
            const index = state.bookings.findIndex(item => item.id === action.payload.id);

            if (index !== -1) {
                state.bookings[index] = action.payload;
            }
        },
        deleteBooking: (state, action) => {
            state.bookings = state.bookings.filter(item => item.id !== action.payload);
        }
    }
});

export const { addBooking, updateBooking, deleteBooking } = bookingSlice.actions;
export default bookingSlice.reducer;