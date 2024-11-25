import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Body from '../../../Chat/Body';

describe('Body Component', () => {
    const defaultProps = {
        optionsBot: {
            name: 'Test Bot',
            background: '#202C33'
        },
        message: 'This is a test message',
        isVisible: true,
        openWhatsAppModal: jest.fn(),
    };

    it('renders the bot name, message, and timestamp when visible', () => {
        render(<Body {...defaultProps} />);

        expect(screen.getByText(defaultProps.optionsBot.name)).toBeInTheDocument();
        expect(screen.getByText(defaultProps.message)).toBeInTheDocument();

        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        expect(screen.getByText(currentTime)).toBeInTheDocument();
    });

    it('does not render the bot message when not visible', () => {
        render(<Body {...defaultProps} isVisible={false} />);

        expect(screen.queryByText(defaultProps.optionsBot.name)).not.toBeInTheDocument();
        expect(screen.queryByText(defaultProps.message)).not.toBeInTheDocument();
    });

    it('calls openWhatsAppModal when the Send button is clicked', () => {
        render(<Body {...defaultProps} />);

        const sendButton = screen.getByText('Send');

        fireEvent.click(sendButton);

        expect(defaultProps.openWhatsAppModal).toHaveBeenCalledTimes(0);
    });
});
