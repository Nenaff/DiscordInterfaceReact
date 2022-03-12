import React from 'react';
import ToolBtn from '../components/toolBtn';
import { FaHashtag } from 'react-icons/fa';
import { BsQuestionCircleFill, BsFillPinAngleFill } from 'react-icons/bs';
import { MdAlternateEmail, MdMarkunreadMailbox, MdPeopleAlt } from 'react-icons/md';
import { IoSearchOutline } from 'react-icons/io5';
import { IoMdNotifications } from 'react-icons/io';

function ChatHead(props: any) {
    return (
        <div className="chatHead">
            {props.type === "user" ?
                <>
                    <FaHashtag/>
                    <h2>{props.title}</h2>
                </>
            :
                <>
                    <MdAlternateEmail/>
                    <h2>{props.title}</h2>
                </>            
            }
            <div className="tools">
                <ToolBtn direction="down" text="Notifications settings" icon={IoMdNotifications}/>
                <ToolBtn direction="down" text="Pinned messages" icon={BsFillPinAngleFill}/>
                <ToolBtn direction="down" text="Toggle members view" icon={MdPeopleAlt}/>
                <div className="search">
                    <input placeholder="Search"></input>
                    <IoSearchOutline/>
                </div>
                <ToolBtn direction="down" text="Mailbox" icon={MdMarkunreadMailbox}/>
                <ToolBtn direction="down" text="Help" icon={BsQuestionCircleFill}/>
            </div>
        </div>
    );
}

export default ChatHead;