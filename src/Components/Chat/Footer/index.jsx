import React, { useState } from 'react';
import { string, func } from 'prop-types';

const Footer = ({ onSendMessage, buttonText }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        onSendMessage(inputValue);
        setInputValue('');
    };

    return (
        <div className="whatsapp-widget-chat-footer" id="whatsapp-widget-chat-footer">
            <div id="whatsapp-widget-chat-input-container">
                <input
                    id="whatsapp-widget-chat-input"
                    type="text"
                    placeholder="Write your best message here..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>
            <button disabled={!inputValue} id="whatsapp-widget-open-modal" className="whatsapp-widget-open-modal" onClick={handleSend}>
                {buttonText}
            </button>
        </div>
    );
};

Footer.propTypes = {
    onSendMessage: func.isRequired,
    buttonText: string.isRequired
};

export default Footer;
