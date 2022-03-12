import React from 'react';
import { ImCross } from 'react-icons/im';

function Notification(props: any) {
    function eraseNotification(e: any) {
        e.currentTarget.closest(".notification").remove()
    }

    return (
        <div className={`notification ${props.color ? props.color : ""}`}>
            <span>{props.text}</span>
            <ImCross onClick={eraseNotification}/>
        </div>
    );
}

export default Notification;