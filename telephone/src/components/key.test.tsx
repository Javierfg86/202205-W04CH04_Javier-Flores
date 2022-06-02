import { render, screen } from '@testing-library/react';
import { Key } from './key';

describe('Given the component Key', () => {
    const mockKey = 'delete';

    describe('When calling it with a Key', () => {
        test('Then it should be rendered', () => {
            // Arrange
            render(<Key item={mockKey} />);

            // Assert
            expect(screen.getByText(mockKey)).toBeInTheDocument();
        });
    });
});
