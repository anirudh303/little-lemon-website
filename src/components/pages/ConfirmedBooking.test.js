import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

test('displays the booking confirmation page after submitting the form', async () => {
  render(
    <MemoryRouter initialEntries={['/reservations']}>
      <App />
    </MemoryRouter>
  );

  expect(
    screen.queryByText('Your reservation was successful')
  ).not.toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText('Reserve a table')).toBeInTheDocument();
  });

  const dateInput = screen.getByLabelText('Choose date');
  fireEvent.change(dateInput, { target: { value: '2024-06-13' } });

  const timeInput = screen.getByLabelText('Choose time');
  fireEvent.change(timeInput, { target: { value: '18:00' } });

  const guestsInput = screen.getByLabelText('Number of guests');
  fireEvent.change(guestsInput, { target: { value: '4' } });

  const occasionInput = screen.getByLabelText('Occasion');
  fireEvent.change(occasionInput, { target: { value: 'Anniversary' } });

  fireEvent.submit(
    screen.getByRole('button', { name: /Make Your reservation/i })
  );

  await waitFor(() => {
    expect(
      screen.getByText(/Your reservation was successful!/)
    ).toBeInTheDocument();
  });
});
