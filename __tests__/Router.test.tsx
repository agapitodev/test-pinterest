import { expect, test, describe, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Home from '@/app/page';
import Message from '@/app/dashboard/messages/page';

describe('Test App Router', () => {
  test('Render home page', () => {
    render(<Home />);
    const main = within(screen.getByRole('main'));
    expect(main.getByText('Fake Pinterest, same idea.')).toBeDefined();
  });

  test('Go to Protected Route and redirect to Home', () => {
    render(<Message />);
    const main = within(screen.getByRole('main'));
    expect(main.getByText('Fake Pinterest, same idea.')).toBeDefined();
  });
});
