import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./BookingSlice";

const store = configureStore({
    reducer: {
        bookings: bookingReducer
    }
});

export default store;