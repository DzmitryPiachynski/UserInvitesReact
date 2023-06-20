import React from 'react';

export const Success = ({count}) => {
    return (
        <div className="success-block">
            <img src="/assets/success.svg" alt="Success"/>
            <h3>Congratulations!</h3>
            <p>You successfully invited {count} users.</p>
            <a href='/'>
                <button className="send-invite-btn">Go back</button>
            </a>
            </div>
    );
};