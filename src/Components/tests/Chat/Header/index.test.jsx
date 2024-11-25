import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../../../Chat/Header';

describe('Header Component', () => {
    const defaultProps = {
        optionsBot: {
            background: '#202C33',
            color: '#FFFFFF',
            name: 'Test Bot',
            image: 'https://cdn-icons-png.flaticon.com/512/12383/12383841.png',
        },
        onClose: jest.fn(),
        status: 'Online'
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders bot name, status, and image', () => {
        render(<Header {...defaultProps} />);
        expect(screen.getByText(defaultProps.optionsBot.name)).toBeInTheDocument();
        expect(screen.getByText(defaultProps.status)).toBeInTheDocument();

        const botImage = screen.getByAltText('Bot');
        expect(botImage).toBeInTheDocument();
        expect(botImage).toHaveAttribute('src', defaultProps.optionsBot.image);
    });

    it('applies the correct background and text color', () => {
        render(<Header {...defaultProps} />);

        const header = screen.getByTestId('whatsapp-widget-chat-header');
        expect(header).toHaveStyle({
            background: defaultProps.optionsBot.background,
            color: defaultProps.optionsBot.color,
        });
    });

    it('calls onClose when the close button is clicked', () => {
        render(<Header {...defaultProps} />);

        const closeButton = screen.getByText('✖');
        fireEvent.click(closeButton);

        expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
    });
});
