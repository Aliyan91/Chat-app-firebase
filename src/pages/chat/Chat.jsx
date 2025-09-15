import React from 'react';
import './Chat.css';
import LeftSideBar from '../../components/leftsidebar/LeftSidebar';
import ChatBox from '../../components/chatbox/ChatBox';
import RightSideBar from '../../components/rightsidebar/RightSideBar';

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chat-container'>
        <LeftSideBar />
        <ChatBox />
        <RightSideBar />
      </div>
    </div>
  )
}

export default Chat