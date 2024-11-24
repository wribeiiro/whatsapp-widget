import React from 'react';
import { string, func, shape } from 'prop-types';

const Header = ({ botOptions, onClose, status }) => (
    <div
        className="whatsapp-widget-chat-header"
        id="whatsapp-widget-chat-header"
        style={{
            background: botOptions.background,
            color: botOptions.color
        }}
    >
        <div className="whatsapp-widget-chat-header close" id="close" onClick={onClose}>✖</div>
        <div className="whatsapp-widget-chat-header bot">
            <div className="bot-img" id="bot-img">
                <img className="whatsapp-widget-chat-header"  src={botOptions.image} alt="Bot" />
            </div>
            <div style={{ marginLeft: 16, marginRight: 16 }}>
                <div className="whatsapp-widget-chat-header name" id="nameBot">{botOptions.name}</div>
                <div className="whatsapp-widget-chat-header status" id="statusBot">{status}</div>
            </div>
        </div>
    </div>
);

Header.propTypes = {
    botOptions: shape({
        background: string.isRequired,
        color: string.isRequired,
        name: string.isRequired,
        image: string.isRequired
    }).isRequired,
    onClose: func.isRequired,
    status: string.isRequired
};

export default Header;
