import React, {useContext, useEffect} from 'react';
import ChatContext from "../context/Chat/ChatContext";
import ChatUI from './ChatUI';
const ChatDetail = () => {
    const {
        queryEndPont,
        errorQuery,
        errorMsg
    } = useContext(ChatContext);
    const searchData = async () => {
        await queryEndPont();
        if (errorQuery) {
            alert(errorMsg);
        }
    }
    useEffect(() => {
        searchData();
    }, [errorMsg]);
    return (
        <>
            <ChatUI/>
        </>
    )
}
export default ChatDetail;