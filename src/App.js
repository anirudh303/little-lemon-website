import React, { useReducer, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "./utils/api";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/pages/Home";

import Menu from "./components/pages/Menu";
import BookingForm from "./components/BookingForm/BookingForm";

import NotFound from "./components/pages/NotFound";
import ConfirmedBooking from "./components/pages/ConfirmedBooking";

export const initializeTimes = () => {
  const today = new Date();
  const availableTimes = fetchAPI(today);
  return availableTimes;
};

export const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.times;
    default:
      return state;
  }
};

function App() {
  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    [],
    initializeTimes
  );
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("");

  const handleTimeChange = (e) => setTime(e.target.value);
  const handleGuestsChange = (e) => setGuests(e.target.value);
  const handleOccasionChange = (e) => setOccasion(e.target.value);

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    setDate(e.target.value);
    const availableTimes = fetchAPI(selectedDate);
    dispatch({ type: "UPDATE_TIMES", times: availableTimes });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (submitAPI({ date, time, guests, occasion })) {
      navigate("/confirmedBooking");
    }
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/menu" element={<Menu />} />
        <Route
          path="/reservations"
          element={
            <BookingForm
              availableTimes={availableTimes}
              dispatch={dispatch}
              date={date}
              time={time}
              guests={guests}
              occasion={occasion}
              handleDateChange={handleDateChange}
              handleTimeChange={handleTimeChange}
              handleGuestsChange={handleGuestsChange}
              handleOccasionChange={handleOccasionChange}
              handleSubmit={submitForm}
            />
          }
        />

        <Route path="/confirmedbooking" element={<ConfirmedBooking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
