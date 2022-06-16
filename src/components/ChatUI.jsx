import React, {useContext, useEffect} from 'react';

import ChatContext from "../context/Chat/ChatContext";

const ChatUI = () => {
    const {
        chatQueryResponse
    } = useContext(ChatContext);
    useEffect(() => {
        console.log(chatQueryResponse);
    },[chatQueryResponse]);
    return (
        <>
            luis torres
        </>
    )
}
export default ChatUI;