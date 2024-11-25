import React from 'react';
import { string, bool, shape, func } from 'prop-types';
import Footer from '../Footer';

const Body = ({ optionsBot, message, isVisible, openWhatsAppModal }) => (
    <div className="whatsapp-widget-chat-chat" id="whatsapp-widget-chat-chat">
        {isVisible && (
            <div className="whatsapp-widget-chat-chat message" id="messageBot">
                <div className="whatsapp-widget-chat-chat header" id="userBot">
                    {optionsBot.name}
                </div>
                <div className="whatsapp-widget-chat-chat msg" id="msgBot">
                    {message}
                </div>
                <div className="whatsapp-widget-chat-chat date" id="dateBot">
                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
            </div>
        )}

        <Footer
            onSendMessage={openWhatsAppModal}
            buttonText={'Send'}
        />
    </div>
);

Body.propTypes = {
    optionsBot: shape({
        name: string
    }),
    message: string.isRequired,
    isVisible: bool.isRequired,
    openWhatsAppModal: func.isRequired
};

export default Body;
