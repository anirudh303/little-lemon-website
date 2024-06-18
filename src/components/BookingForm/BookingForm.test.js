import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookingForm from './BookingForm';

const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

const renderWithRouter = (ui, { route = '/' } = {}) => {
  return render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>);
};

test('Renders the BookingForm heading', () => {
  renderWithRouter(<BookingForm availableTimes={availableTimes} />);
  const headingElement = screen.getByText('Reserve a table');
  expect(headingElement).toBeInTheDocument();
});

test('Date input has correct attributes', () => {
  renderWithRouter(<BookingForm availableTimes={availableTimes} />);
  const dateInput = screen.getByLabelText('Choose date');
  expect(dateInput).toHaveAttribute('type', 'date');
  expect(dateInput).toHaveAttribute(
    'min',
    new Date().toISOString().split('T')[0]
  );
  expect(dateInput).toBeRequired();
});

test('Time select has correct attributes', () => {
  renderWithRouter(<BookingForm availableTimes={availableTimes} />);
  const timeSelect = screen.getByLabelText('Choose time');
  expect(timeSelect).toBeRequired();
  expect(timeSelect).toHaveDisplayValue(['Select a time']);
});

test('Guests input has correct attributes', () => {
  renderWithRouter(<BookingForm availableTimes={availableTimes} />);
  const guestsInput = screen.getByLabelText('Number of guests');
  expect(guestsInput).toHaveAttribute('type', 'number');
  expect(guestsInput).toHaveAttribute('min', '2');
  expect(guestsInput).toHaveAttribute('max', '10');
  expect(guestsInput).toHaveAttribute('step', '1');
  expect(guestsInput).toBeRequired();
});

test('Occasion select has correct attributes', () => {
  renderWithRouter(<BookingForm availableTimes={availableTimes} />);
  const occasionSelect = screen.getByLabelText('Occasion');
  expect(occasionSelect).toBeRequired();
});

test('Validates date input', async () => {
  renderWithRouter(<BookingForm availableTimes={availableTimes} />);

  const dateInput = screen.getByLabelText('Choose date');
  fireEvent.change(dateInput, { target: { value: '2020-01-01' } });
  fireEvent.blur(dateInput);

  const errorMessage = await screen.findByText('Date cannot be in the past');
  expect(errorMessage).toBeInTheDocument();
});

test('Validates guests input', async () => {
  renderWithRouter(<BookingForm availableTimes={availableTimes} />);

  const guestsInput = screen.getByLabelText('Number of guests');
  fireEvent.change(guestsInput, { target: { value: '1' } });
  fireEvent.blur(guestsInput);

  const errorMessage = await screen.findByText('Minimum 2 guests');
  expect(errorMessage).toBeInTheDocument();

  fireEvent.change(guestsInput, { target: { value: '12' } });
  fireEvent.blur(guestsInput);

  const errorMessageMax = await screen.findByText('Maximum 10 guests');
  expect(errorMessageMax).toBeInTheDocument();
});

test('Validates occasion input', async () => {
  renderWithRouter(<BookingForm availableTimes={availableTimes} />);

  const occasionSelect = screen.getByLabelText('Occasion');
  fireEvent.change(occasionSelect, { target: { value: '' } });
  fireEvent.blur(occasionSelect);

  const errorMessage = await screen.findByText('Please select an occasion');
  expect(errorMessage).toBeInTheDocument();
});
