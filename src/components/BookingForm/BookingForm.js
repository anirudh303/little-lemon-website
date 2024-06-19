import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  date: Yup.date()
    .required("Please choose a date")
    .min(new Date().toISOString().split("T")[0], "Date cannot be in the past"),
  time: Yup.string().required("Please choose a time"),
  guests: Yup.number()
    .required("Please enter the number of guests")
    .min(2, "Minimum 2 guests")
    .max(10, "Maximum 10 guests"),
  occasion: Yup.string().required("Please select an occasion"),
});

function BookingForm({ availableTimes }) {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: "",
      occasion: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      navigate("/confirmedbooking", {
        state: { bookingData: values },
        replace: true,
      });
    },
  });

  return (
    <main className="flex flex-col items-center w-full max-w-md mx-auto p-5">
      <div className="flex flex-col justify-center items-center w-full mt-6  text-center p-4">
        <h1 className="text-5xl font-serif font-bold text-[#495e57]   w-[400px]">
          Reserve a Table
        </h1>
      </div>
      <form
        className="flex flex-col w-full gap-2.5 shadow-lg p-5 m-10 text-[#495e57] text-lg space-y-6"
        onSubmit={formik.handleSubmit}
      >
        <div className="space-y-2">
          <label htmlFor="date" className="font-bold mb-1">
            Choose date
          </label>
          <input
            type="date"
            id="date"
            className="p-2 border border-gray-300 rounded w-full"
            required
            min={new Date().toISOString().split("T")[0]}
            {...formik.getFieldProps("date")}
          />
          {formik.touched.date && formik.errors.date && (
            <div className="text-red-500">{formik.errors.date}</div>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="time" className="font-bold mb-1">
            Choose time
          </label>
          <select
            id="time"
            className="p-2 border border-gray-300 rounded w-full"
            required
            {...formik.getFieldProps("time")}
          >
            <option value="">Select a time</option>
            {availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
          {formik.touched.time && formik.errors.time && (
            <div className="text-red-500">{formik.errors.time}</div>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="guests" className="font-bold mb-1">
            Number of guests
          </label>
          <input
            type="number"
            id="guests"
            className="p-2 border border-gray-300 rounded w-full"
            placeholder="2"
            min="2"
            max="10"
            step="1"
            required
            {...formik.getFieldProps("guests")}
          />
          {formik.touched.guests && formik.errors.guests && (
            <div className="text-red-500">{formik.errors.guests}</div>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="occasion" className="font-bold mb-1">
            Occasion
          </label>
          <select
            id="occasion"
            className="p-2 border border-gray-300 rounded w-full"
            required
            {...formik.getFieldProps("occasion")}
          >
            <option value="">Select an occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          {formik.touched.occasion && formik.errors.occasion && (
            <div className="text-red-500">{formik.errors.occasion}</div>
          )}
        </div>

        <button
          type="submit"
          className="mt-4 bg-[#f4ce14] text-[#495e57] font-bold py-2 px-4 rounded-full shadow transition-all duration-300 ease-in-out hover:bg-[#495e57] hover:text-[#f4ce14] hover:-translate-y-1 hover:shadow-lg disabled:bg-gray-300 disabled:text-gray-600 disabled:shadow-none"
          disabled={!(formik.isValid && formik.dirty)}
        >
          Make Your Reservation
        </button>
      </form>
    </main>
  );
}

export default BookingForm;
