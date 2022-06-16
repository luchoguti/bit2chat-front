import React, {useContext, useEffect, useState} from 'react';

import ChatContext from "../context/Chat/ChatContext";
import {mutateDataChat} from "../utils/utilsFunctions";

const ChatUI = () => {
    const {
        chatQueryResponse
    } = useContext(ChatContext);
    const [conversation, setConversation] = useState([]);
    useEffect(() => {
        if (typeof chatQueryResponse.id !== "undefined") {
            let chat_conv = mutateDataChat(chatQueryResponse);
            console.log(chat_conv);
            setConversation(chat_conv);
        }
    }, [chatQueryResponse]);
    return (
        <>
            <div className="menu">
                <div className="back">
                    <i className="fa fa-chevron-left"></i>
                    <img src="https://www.pngitem.com/pimgs/m/488-4881316_female-chat-support-png-image-call-center-agent.png" draggable="false"/>
                </div>
                <div className="name">Agent Chat</div>
                <div className="last">12:00</div>
            </div>
            <ol className="chat">
                {
                    conversation.map((conv,key)=>{
                      return (
                          <li className={conv.type == "INCOMING_MESSAGE"?"other":"self"} key={key}>
                              <div className="msg">
                                  <p>
                                      {
                                          conv.text
                                      }
                                  </p>
                                  <time>{conv.date}</time>
                              </div>
                          </li>
                      )
                    })
                }
            </ol>
            <input className="textarea" type="text" placeholder="Message"/>
        </>
    )
}
export default ChatUI;