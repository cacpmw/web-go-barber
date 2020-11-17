import React, { createContext, useCallback, useContext, useState } from 'react';
import { uuid } from 'uuidv4';
import {
  IToastContextData,
  IToastMessage,
} from './interfaces/ToastContextInterfaces';
import ToastContainer from '../components/toast/ToastContainer';

// context api
const ToastContext = createContext<IToastContextData>({} as IToastContextData);

// hook
function useToast(): IToastContextData {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within an ToastProvider');
  }
  return context;
}

// component
const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<IToastMessage[]>([]);
  const showToast = useCallback(
    ({ type, title, description }: Omit<IToastMessage, 'id'>) => {
      const id = uuid();
      const toast = {
        id,
        type,
        title,
        description,
      };
      setMessages([...messages, toast]);
    },
    [messages],
  );
  const hideToast = useCallback(
    (id: string) => {
      setMessages(messages.filter(message => message.id !== id));
    },
    [messages],
  );
  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};
export { ToastProvider, useToast };
