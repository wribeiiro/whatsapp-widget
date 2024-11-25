import React from 'react';
import { string, func, shape } from 'prop-types';

const Header = ({ optionsBot, onClose, status }) => (
    <div
        className="whatsapp-widget-chat-header"
        id="whatsapp-widget-chat-header"
        style={{
            background: optionsBot.background,
            color: optionsBot.color
        }}
        data-testid={"whatsapp-widget-chat-header"}
    >
        <div className="whatsapp-widget-chat-header close" id="close" onClick={onClose}>✖</div>
        <div className="whatsapp-widget-chat-header bot">
            <div className="bot-img" id="bot-img">
                <img className="whatsapp-widget-chat-header" src={optionsBot.image} alt="Bot" />
            </div>
            <div style={{ marginLeft: 16, marginRight: 16 }}>
                <div className="whatsapp-widget-chat-header name" id="nameBot">{optionsBot.name}</div>
                <div className="whatsapp-widget-chat-header status" id="statusBot" data-testid={"statusBot"}>{status}</div>
            </div>
        </div>
    </div>
);

Header.propTypes = {
    optionsBot: shape({
        background: string,
        color: string,
        name: string,
        image: string
    }),
    onClose: func.isRequired,
    status: string.isRequired
};

export default Header;
