import {GET_ERROR_QUERY, GET_LOADING_QUERY, GET_SUCCESS_QUERY} from "../Type";

const ChatReducer = (state,action) => {
    const {payload, type} = action;
    switch (type) {
        case GET_SUCCESS_QUERY:
            return{
                ...state,
                chatQueryResponse: payload,
                loadingQuery: false,
                errorQuery:false,
                errorMsg:''
            }
        case GET_LOADING_QUERY:
            return {
                ...state,
                loadingQuery: true
            }
        case GET_ERROR_QUERY:
            return {
                ...state,
                errorQuery: true,
                errorMsg: payload
            }
        default:
            return {
                ...state
            }
    }
}
export default ChatReducer;