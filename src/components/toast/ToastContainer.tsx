import React, { useCallback } from 'react';
import { Container } from '../../styles/components/toast/ToastContainer';
import { IToastMessage } from '../../context/interfaces/ToastContextInterfaces';
import Toast from './Toast';

interface ToastContainerProperties {
  messages: IToastMessage[];
}
const ToastContainer: React.FC<ToastContainerProperties> = ({ messages }) => {
  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;
