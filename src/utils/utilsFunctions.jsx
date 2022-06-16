export const mutateDataChat = (data) => {
    return data.events.map((data_conversation)=>{
        let mutate = {};
        mutate['id'] = data_conversation.payload.messageId;
        if(data_conversation.type === "INCOMING_MESSAGE"){
            mutate['fullName'] = data.contact.fullName;
        }else{
            mutate['fullName'] = data.assignedTo.fullName;
        }
        mutate['text'] = data_conversation.payload.text;
        mutate['type'] = data_conversation.type;
        mutate['date'] = new Date(data_conversation.payload.sendingTime).toLocaleTimeString('en-US',
            {timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'}
        );
        return mutate;
    });
}