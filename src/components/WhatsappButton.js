import React from "react";
import '../assets/css/whatsapp-button.css';

const WhatsAppButton = () => {
    const phone = "+971557587705"; // Replace with your number in international format
    const text = "Hello! I would like to inquire about your services."; // optional message
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-fab"
            title="Chat with us on WhatsApp"
        >
            <span className="whatsapp-ring"></span>
            <svg
                className="whatsapp-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="M20.52 3.48A11.9 11.9 0 0 0 12 0C5.37 0 .01 5.37.01 12c0 2.11.55 4.17 1.6 5.98L0 24l6.22-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-1.97-.48-3.83-1.48-5.52zM12 22.1c-1.8 0-3.54-.5-5.06-1.44l-.36-.21-3.7.97.98-3.6-.23-.37A9.05 9.05 0 0 1 2.9 12c0-4.99 4.06-9.05 9.1-9.05 2.43 0 4.71.95 6.42 2.67 1.7 1.7 2.66 3.98 2.66 6.42 0 5.04-4.06 9.06-9.08 9.06z"
                />
                <path
                    fill="#fff"
                    d="M17.1 14.45c-.28-.14-1.66-.82-1.92-.91-.26-.09-.45-.14-.64.14-.19.28-.73.91-.9 1.1-.16.19-.32.21-.6.07-.28-.14-1.18-.43-2.25-1.4-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.19-.28.28-.46.09-.19 0-.36-.02-.5-.02-.14-.64-1.54-.88-2.12-.23-.56-.47-.48-.64-.49-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.36-.27.28-1.06 1.03-1.06 2.5 0 1.47 1.08 2.9 1.23 3.1.15.19 2.12 3.36 5.14 4.71 3.02 1.36 3.02.91 3.57.86.56-.05 1.82-.74 2.08-1.45.26-.71.26-1.32.18-1.45-.08-.12-.28-.19-.56-.33z"
                />
            </svg>
        </a>
    );
};

export default WhatsAppButton;