import React from "react";
import BookingForm from "../BookingForm/BookingForm";
import { useReducer, useState } from "react";
import { fetchAPI, submitAPI } from "../../utils/api";
import { Routes, Route, useNavigate } from "react-router-dom";
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

function Reservations() {
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
    </>
  );
}

export default Reservations;
