import React from 'react';
import { useTransition } from 'react-spring';
import { Container } from '../../styles/components/toast/ToastContainer';
import { IToastMessage } from '../../context/interfaces/ToastContextInterfaces';
import Toast from './Toast';

interface ToastContainerProperties {
  messages: IToastMessage[];
}
const ToastContainer: React.FC<ToastContainerProperties> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%' },
      enter: { right: '0%' },
      leave: { right: '-120%' },
    },
  );
  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;
