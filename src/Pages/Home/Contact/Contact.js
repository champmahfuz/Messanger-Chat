import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
const Contact = () => {
    return (
        <div>
            <h2>This is Contact</h2>
            <div>
                <MessengerCustomerChat
                    pageId="101722142602573"
                    appId=" 71020473359128"

                // pageId="process.env.REACT_APP_PAGE_ID"
                // appId="process.env.REACT_APP_APP_ID"
                />
            </div>
        </div>

    );
};

export default Contact;