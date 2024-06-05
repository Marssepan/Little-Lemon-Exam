import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('Home component', () => {
  it('should render restaurant information and popular dishes', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Check restaurant name, location, and description
    const restaurantName = screen.getByRole('heading', { name: /little lemon/i });
    const restaurantLocation = screen.getByRole('heading', { name: /chicago/i });
    const restaurantDescription = screen.getByText(/family owned mediterranean restaurant/i);
    const reserveButton = screen.getByRole('link', { name: /reserve a table/i });

    expect(restaurantName).toBeInTheDocument();
    expect(restaurantLocation).toBeInTheDocument();
    expect(restaurantDescription).toBeInTheDocument();
    expect(reserveButton).toBeInTheDocument();

    // Check popular dishes
    const popularDishes = [
      { name: 'Greek Salad', description: 'A delicious starter.' },
      { name: 'Lemon Dessert', description: 'A tasty dessert.' },
      { name: 'Bruschetta', description: 'A tasty appetizer.' },
    ];

    popularDishes.forEach(dish => {
      const dishName = screen.getByText(dish.name);
      const dishDescription = screen.getByText(dish.description);

      expect(dishName).toBeInTheDocument();
      expect(dishDescription).toBeInTheDocument();
    });

    // Check place images
    const placeImages = [
      '/assets/MarioA.jpg',
      '/assets/MarioB.jpg',
      '/assets/chef.jpg',
      '/assets/restaurant.jpg',
      '/assets/restaurantfood.jpg',
    ];

    placeImages.forEach((image, index) => {
      const placeImage = screen.getByAltText(`Place image ${index + 1}`);
      expect(placeImage).toHaveAttribute('src', image);
    });
  });
});
