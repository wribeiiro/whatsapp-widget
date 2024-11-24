import React from 'react';
import { string, bool, shape, func } from 'prop-types';
import Footer from '../Footer';

const Body = ({ botOptions, message, isVisible, openWhatsAppModal }) => (
    <div className="whatsapp-widget-chat-chat" id="whatsapp-widget-chat-chat">
        {isVisible && (
            <div className="whatsapp-widget-chat-chat message" id="messageBot">
                <div className="whatsapp-widget-chat-chat header" id="userBot">
                    {botOptions.name}
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
    botOptions: shape({
        name: string.isRequired
    }).isRequired,
    message: string.isRequired,
    isVisible: bool.isRequired,
    openWhatsAppModal: func.isRequired
};

export default Body;
