import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Reservation from './Reservation';

describe('Reservation component', () => {
  it('should render reservation form and submit with valid data', async () => {
    render(<Reservation />);

    // Fill out the form fields
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '2024-06-06' } });
    fireEvent.change(screen.getByLabelText(/time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '4' } });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText(/reservation successful/i)).toBeInTheDocument();
    });

    // Ensure the success message disappears after clicking close button
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    await waitFor(() => {
      expect(screen.queryByText(/reservation successful/i)).not.toBeInTheDocument();
    });
  });

  it('should display validation errors if form fields are not filled', async () => {
    render(<Reservation />);

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    // Ensure validation errors are displayed
    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/date is required/i)).toBeInTheDocument();
      expect(screen.getByText(/time is required/i)).toBeInTheDocument();
      expect(screen.getByText(/number of guests is required/i)).toBeInTheDocument();
    });
  });

  it('should display validation errors if invalid data is entered', async () => {
    render(<Reservation />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'invalid-email' } });
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '2024-06-06' } });
    fireEvent.change(screen.getByLabelText(/time/i), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '0' } });

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    // Ensure validation errors are displayed
    await waitFor(() => {
      expect(screen.getByText(/invalid email address/i)).toBeInTheDocument();
      expect(screen.getByText(/must be at least 1 guest/i)).toBeInTheDocument();
    });
  });
});
