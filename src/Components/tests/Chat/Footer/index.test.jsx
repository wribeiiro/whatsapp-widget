import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../../../Chat/Footer';

describe('Footer Component', () => {
    const mockOnSendMessage = jest.fn();
    const defaultProps = {
        onSendMessage: mockOnSendMessage,
        buttonText: 'Send',
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders the input field and button with the correct placeholder and text', () => {
        render(<Footer {...defaultProps} />);

        const inputField = screen.getByPlaceholderText('Write your best message here...');
        expect(inputField).toBeInTheDocument();

        const button = screen.getByText(defaultProps.buttonText);
        expect(button).toBeInTheDocument();
        expect(button).toBeDisabled();
    });

    it('enables the button when input is not empty', () => {
        render(<Footer {...defaultProps} />);

        const inputField = screen.getByPlaceholderText('Write your best message here...');
        const button = screen.getByText(defaultProps.buttonText);

        expect(button).toBeDisabled();

        fireEvent.change(inputField, { target: { value: 'Hello, world!' } });
        expect(inputField).toHaveValue('Hello, world!');
        expect(button).toBeEnabled();
    });

    it('calls onSendMessage with input value and clears input on button click', () => {
        render(<Footer {...defaultProps} />);

        const inputField = screen.getByPlaceholderText('Write your best message here...');
        const button = screen.getByText(defaultProps.buttonText);

        fireEvent.change(inputField, { target: { value: 'Test message' } });
        fireEvent.click(button);

        expect(mockOnSendMessage).toHaveBeenCalledTimes(1);
        expect(mockOnSendMessage).toHaveBeenCalledWith('Test message');
        expect(inputField).toHaveValue('');
    });

    it('does not call onSendMessage if the input is empty', () => {
        render(<Footer {...defaultProps} />);

        const button = screen.getByText(defaultProps.buttonText);

        expect(button).toBeDisabled();

        fireEvent.click(button);

        expect(mockOnSendMessage).not.toHaveBeenCalled();
    });
});
