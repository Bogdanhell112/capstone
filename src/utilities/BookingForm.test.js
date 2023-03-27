import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../utilities/BookingForm';


describe('BookingForm', () => {
  test('renders BookingForm component', () => {
    render(<BookingForm />);
    const bookingFormElement = screen.getByRole('form');
    expect(bookingFormElement).toBeInTheDocument();
  });

  test('displays validation error when form is submitted with empty fields', async () => {
    render(<BookingForm />);
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    fireEvent.click(submitButton);

    const dateError = await screen.findByText(/date is required/i);
    const timeError = await screen.findByText(/time is required/i);
    const guestsError = await screen.findByText(/number of guests is required/i);
    const occasionError = await screen.findByText(/occasion is required/i);

    expect(dateError).toBeInTheDocument();
    expect(timeError).toBeInTheDocument();
    expect(guestsError).toBeInTheDocument();
    expect(occasionError).toBeInTheDocument();
  });

  test('displays validation error when form is submitted with invalid values', async () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText(/select date/i);
    const timeInput = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionInput = screen.getByLabelText(/occasion/i);
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });

    fireEvent.change(dateInput, { target: { value: '2022-01-01' } });
    fireEvent.change(timeInput, { target: { value: '' } });
    fireEvent.change(guestsInput, { target: { value: '11' } });
    fireEvent.change(occasionInput, { target: { value: '' } });

    fireEvent.click(submitButton);

    const timeError = await screen.findByText(/time is required/i);
    const guestsError = await screen.findByText(/cannot exceed 10/i);
    const occasionError = await screen.findByText(/occasion is required/i);

    expect(timeError).toBeInTheDocument();
    expect(guestsError).toBeInTheDocument();
    expect(occasionError).toBeInTheDocument();
  });
});
