import React, { useState, useEffect, useCallback } from 'react';
import { string, shape } from 'prop-types';
import Body from '../Chat/Body';
import Header from '../Chat/Header';

const Main = ({ params }) => {
    const { optionsBot, optionsChat } = params;
    const [isChatVisible, setChatVisible] = useState(false);
    const [displayMessage, setDisplayMessage] = useState(false);
    const [botStatus, setBotStatus] = useState(optionsBot.status);
    const [botMessage, setBotMessage] = useState(optionsBot.messageDefault);
    const whatsAppLogoUrl = 'https://imagepng.org/wp-content/uploads/2017/08/WhatsApp-icone.png';

    const checkVisibility = useCallback(() => {
        setDisplayMessage(false);

        if (isChatVisible) {
            setBotStatus(optionsBot.messageTyping);

            const timer = setTimeout(() => {
                setBotStatus(`${optionsBot.status} ${optionsBot.icon}`);
                setBotMessage(optionsBot.messageDefault);
                setDisplayMessage(true);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [isChatVisible, optionsBot]);

    useEffect(() => {
        checkVisibility();
    }, [checkVisibility]);

    const toggleChatVisibility = () => setChatVisible((prev) => !prev);

    const openWhatsAppModal = (message) => {
        const searchParams = new URLSearchParams({
            phone: optionsChat.phone,
            text: encodeURIComponent(message || optionsChat.message),
        });

        window.open(`${optionsChat.buttonTarget}${searchParams}`);
        setChatVisible(false);
    };

    return (
        <div id="whatsapp-widget" className="whatsapp-widget">
            <span
                onClick={(e) => {
                    e.preventDefault();
                    toggleChatVisibility();
                }}
                id="whatsapp-widget-target"
                className="whatsapp-widget-target pulse"
            >
                <img
                    id="whatsapp-widget-icon"
                    className="whatsapp-widget-icon"
                    src={whatsAppLogoUrl}
                    alt="WhatsApp Icon"
                />
            </span>

            {isChatVisible && (
                <div className="whatsapp-widget-chat" id="whatsapp-widget-chat" data-testid="whatsapp-widget-chat">
                    <Header
                        optionsBot={optionsBot}
                        onClose={toggleChatVisibility}
                        status={botStatus}
                    />
                    <Body
                        optionsBot={optionsBot}
                        message={botMessage}
                        isVisible={displayMessage}
                        openWhatsAppModal={openWhatsAppModal}
                    />
                </div>
            )}
        </div>
    );
};

Main.propTypes = {
    params: shape({
        optionsPopup: shape({
            background: string.isRequired,
            color: string.isRequired
        }).isRequired,
        optionsIcon: shape({
            background: string.isRequired,
            color: string.isRequired
        }).isRequired,
        optionsChat: shape({
            buttonTarget: string.isRequired,
            message: string.isRequired,
            phone: string.isRequired,
            text: string.isRequired
        }).isRequired,
        optionsBot: shape({
            name: string.isRequired,
            image: string.isRequired,
            messageDefault: string.isRequired,
            messageTyping: string.isRequired,
            status: string.isRequired,
            icon: string.isRequired,
            background: string.isRequired
        }).isRequired
    }).isRequired
};

// Default parameters
Main.defaultProps = {
    params: {
        optionsPopup: {
            background: '#202C33',
            color: '#FFFFFF'
        },
        optionsIcon: {
            background: '#24CD63',
            color: '#FFFFFF'
        },
        optionsChat: {
            buttonTarget: `https://api.whatsapp.com/send?`,
            message: 'Hello everyone',
            phone: '+559999999999',
            text: 'Send message'
        },
        optionsBot: {
            name: 'Bot Ron',
            image: 'https://cdn-icons-png.flaticon.com/512/12383/12383841.png',
            messageDefault: 'Ambrósio? How can I help you?',
            messageTyping: 'is typing...',
            status: 'Online',
            icon: '🟢',
            background: '#202C33',
            color: '#fff'
        }
    },
};

export default Main;
