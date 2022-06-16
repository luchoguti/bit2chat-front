import {useReducer} from "react";
import axios from "axios";
import ChatReducer from "./ChatReducer";
import ChatContext from "./ChatContext";

const ChatState = (props) => {
    const initialState = {
        chatQueryResponse: {},
        loadingQuery: false,
        errorQuery:false,
        errorMsg:''
    }
    const [stateChat, dispatch] = useReducer(ChatReducer, initialState);
    const url = 'https://mocki.io/v1/6ec29e81-d2ec-41cd-80d6-ddef624884bc';

    const queryEndPont = async () => {
        await dispatch({
            type: "GET_LOADING_QUERY"
        });
        try {
            const response = await axios({
                method: "get",
                url: `${url}`,
                mode: 'no-cors',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
            });
            await dispatch({
                type: "GET_SUCCESS_QUERY",
                payload: response.data.closedChats[0]
            });
            //return response.data;
        }catch (e) {
            await dispatch({
                type: "GET_ERROR_QUERY",
                payload: e.message
            });
        }
    }
    return(
        <ChatContext.Provider value={{
            chatQueryResponse: stateChat.chatQueryResponse,
            loadingQuery: stateChat.loadingQuery,
            errorQuery: stateChat.errorQuery,
            errorMsg: stateChat.errorMsg,
            queryEndPont,
        }}>
            {
                props.children
            }
        </ChatContext.Provider>
    )


}
export default ChatState;