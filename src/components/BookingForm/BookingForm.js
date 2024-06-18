import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import styles from './BookingForm.module.css';

const validationSchema = Yup.object({
  date: Yup.date()
    .required('Please choose a date')
    .min(new Date().toISOString().split('T')[0], 'Date cannot be in the past'),
  time: Yup.string().required('Please choose a time'),
  guests: Yup.number()
    .required('Please enter the number of guests')
    .min(2, 'Minimum 2 guests')
    .max(10, 'Maximum 10 guests')
    .test('integer', 'Please enter an integer value', (value) =>
      !Number.isInteger(value) || String(value).includes('.') ? false : true
    ),
  occasion: Yup.string().required('Please select an occasion'),
});

function BookingForm({ availableTimes }) {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      date: '',
      time: '',
      guests: '',
      occasion: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      navigate('/confirmedbooking', {
        state: { bookingData: values },
        replace: true,
      });
    },
  });

  return (
    <main>
      <h1 style={{ textAlign: 'center', backgroundColor: '#495E57' }}>
        Reserve a table
      </h1>
      <section className={styles.formSection}>
        <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
          <label
            className={styles.formLabel}
            htmlFor="date"
            aria-label="Choose a date"
          >
            Choose date
          </label>
          <input
            className={styles.formInput}
            type="date"
            id="date"
            required
            min={new Date().toISOString().split('T')[0]}
            {...formik.getFieldProps('date')}
          />
          {formik.touched.date && formik.errors.date ? (
            <div style={{ color: 'red' }}>{formik.errors.date}</div>
          ) : null}

          <label
            className={styles.formLabel}
            htmlFor="time"
            aria-label="Choose a time"
          >
            Choose time
          </label>
          <select
            className={`${styles.formInput} ${styles.formSelect}`}
            id="time"
            required
            {...formik.getFieldProps('time')}
          >
            <option value="">Select a time</option>
            {Array.isArray(availableTimes) &&
              availableTimes.map((availableTime, index) => (
                <option key={index} value={availableTime}>
                  {availableTime}
                </option>
              ))}
          </select>
          {formik.touched.time && formik.errors.time ? (
            <div style={{ color: 'red' }}>{formik.errors.time}</div>
          ) : null}

          <label
            className={styles.formLabel}
            htmlFor="guests"
            aria-label="Put in number of guests"
          >
            Number of guests
          </label>
          <input
            className={styles.formInput}
            type="number"
            id="guests"
            {...formik.getFieldProps('guests')}
            placeholder="2"
            min="2"
            max="10"
            step="1"
            required
          />
          {formik.touched.guests && formik.errors.guests ? (
            <div style={{ color: 'red' }}>{formik.errors.guests}</div>
          ) : null}

          <label
            className={styles.formLabel}
            htmlFor="occasion"
            aria-label="Select Occasion"
          >
            Occasion
          </label>
          <select
            className={`${styles.formInput} ${styles.formSelect}`}
            id="occasion"
            required
            {...formik.getFieldProps('occasion')}
          >
            <option value="">Select an occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          {formik.touched.occasion && formik.errors.occasion ? (
            <div style={{ color: 'red' }}>{formik.errors.occasion}</div>
          ) : null}

          <button
            className={styles.formButton}
            type="submit"
            disabled={!(formik.isValid && formik.dirty)}
          >
            Make Your Reservation
          </button>
        </form>
      </section>
    </main>
  );
}

export default BookingForm;
