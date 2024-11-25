import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import sinon from 'sinon';
import Main from '../../Main';

describe('Main Component', () => {
    const defaultProps = {
        params: {
            optionsPopup: {
                background: '#202C33',
                color: '#FFFFFF',
            },
            optionsIcon: {
                background: '#24CD63',
                color: '#FFFFFF',
            },
            optionsChat: {
                buttonTarget: 'https://api.whatsapp.com/send?',
                message: 'Hello everyone',
                phone: '+559999999999',
                text: 'Send message',
            },
            optionsBot: {
                name: 'Bot Ron',
                image: 'https://cdn-icons-png.flaticon.com/512/12383/12383841.png',
                messageDefault: 'Ambrósio? How can I help you?',
                messageTyping: 'is typing...',
                status: 'Online',
                icon: '🟢',
                background: '#202C33'
            },
        },
    };

    it('renders the WhatsApp widget icon', () => {
        render(<Main {...defaultProps} />);

        const widgetIcon = screen.getByAltText('WhatsApp Icon');
        expect(widgetIcon).toBeInTheDocument();
    });

    it('toggles chat visibility when clicking on the widget icon', () => {
        render(<Main {...defaultProps} />);

        const widgetTarget = screen.getByRole('img', { name: /WhatsApp Icon/i });

        expect(screen.queryByTestId('whatsapp-widget-chat')).not.toBeInTheDocument();

        fireEvent.click(widgetTarget);
        expect(screen.getByTestId('whatsapp-widget-chat')).toBeInTheDocument();

        fireEvent.click(widgetTarget);
        expect(screen.queryByTestId('whatsapp-widget-chat')).not.toBeInTheDocument();
    });

    it('shows bot typing status and default message after 2 seconds', async () => {
        render(<Main {...defaultProps} />);

        const widgetTarget = screen.getByRole('img', { name: /WhatsApp Icon/i });
        fireEvent.click(widgetTarget);

        expect(screen.getByText(defaultProps.params.optionsBot.messageTyping)).toBeInTheDocument();

        const searchText = await screen.findByText(`${defaultProps.params.optionsBot.status} ${defaultProps.params.optionsBot.icon}`, undefined, {
            timeout: 5000
        });

        expect(searchText).toBeInTheDocument();
    });

    it('opens WhatsApp modal with the correct URL on chat action', async () => {
        const openStub = sinon.stub(window, 'open');

        try {
            render(<Main {...defaultProps} />);

            const widgetTarget = screen.getByRole('img', { name: /WhatsApp Icon/i });
            fireEvent.click(widgetTarget);

            const inputField = screen.getByTestId('whatsapp-widget-chat-input');
            fireEvent.change(inputField, { target: { value: 'bestbot' } });
            await screen.findByDisplayValue('bestbot');
            expect(inputField.value).toBe('bestbot');

            const sendMessageButton = screen.getByTestId('whatsapp-widget-open-modal');
            expect(sendMessageButton).not.toBeDisabled();

            fireEvent.click(sendMessageButton);

            const expectedURL = `${defaultProps.params.optionsChat.buttonTarget}phone=${defaultProps.params.optionsChat.phone}&text=bestbot`;
            expect(openStub.calledOnce).toBe(true);
            expect(decodeURIComponent(openStub.firstCall.args[0])).toBe(expectedURL);

        } finally {
            openStub.restore();
        }
    });
});
