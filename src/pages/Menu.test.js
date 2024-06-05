import React from 'react';
import { render, screen } from '@testing-library/react';
import Menu from './Menu';

describe('Menu component', () => {
  it('should render menu items grouped by category', () => {
    render(<Menu />);

    // Check if headings for each category are rendered
    const categories = ['Appetizer', 'Dessert', 'Main Dish'];
    categories.forEach(category => {
      const categoryHeading = screen.getByRole('heading', { name: category });
      expect(categoryHeading).toBeInTheDocument();
    });

    // Check if each menu item is rendered correctly
    const menuItems = [
      { name: 'Greek Salad', description: 'A delicious starter.', price: '$10' },
      { name: 'Lemon Dessert', description: 'A tasty dessert.', price: '$8' },
      { name: 'Bruschetta', description: 'A tasty appetizer.', price: '$12' },
      { name: 'Pasta Carbonara', description: 'Traditional Italian pasta with egg, cheese, and pancetta.', price: '$15' },
      { name: 'Chicken Caesar Salad', description: 'Grilled chicken breast, romaine lettuce, croutons, parmesan cheese, and Caesar dressing.', price: '$14' },
      { name: 'Margherita Pizza', description: 'Classic pizza with tomato sauce, mozzarella cheese, and fresh basil.', price: '$16' },
      { name: 'Tiramisu', description: 'Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.', price: '$9' },
      { name: 'Stuffed Mushrooms', description: 'Mushrooms stuffed with cheese and herbs.', price: '$9.00' },
      { name: 'Chocolate Cake', description: 'Rich chocolate cake with ganache.', price: '$8.00' },
    ];

    menuItems.forEach(item => {
      const itemName = screen.getByText(item.name);
      const itemDescription = screen.getByText(item.description);
      const itemPrice = screen.getByText(item.price);

      expect(itemName).toBeInTheDocument();
      expect(itemDescription).toBeInTheDocument();
      expect(itemPrice).toBeInTheDocument();
    });
  });
});
