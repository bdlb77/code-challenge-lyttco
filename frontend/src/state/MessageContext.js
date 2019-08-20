import React, { createContext } from 'react';

const MessageContext = createContext({});

export const MessageProvider = MessageContext.Provider;
export const MessageConsumer = MessageContext.Consumer;
export default MessageContext;
