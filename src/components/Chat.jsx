import React from 'react';
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Hemant</span>
        <div className="chatIcons">
          <img src={Cam} alt="" className='img3'/>
          <img src={Add} alt="" className='img3'/>
          <img src={More} alt="" className='img3'/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat;