import React, { useEffect } from 'react';
import { FiAlertCircle, FiInfo, FiUserCheck, FiXCircle } from 'react-icons/fi';
import { IToastMessage } from '../../context/interfaces/ToastContextInterfaces';
import { useToast } from '../../context/ToastContext';
import { Container } from '../../styles/components/toast/Toast';

interface ToastProperties {
  message: IToastMessage;
  style: object;
}

const icons = {
  info: <FiInfo size={24} />,
  success: <FiUserCheck size={24} />,
  error: <FiAlertCircle size={24} />,
};

const Toast: React.FC<ToastProperties> = ({ message, style }) => {
  const { hideToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      hideToast(message.id);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [hideToast, message.id]);
  return (
    <Container
      style={style}
      type={message.type}
      hasdescription={Number(!!message.description)}
    >
      {icons[message.type || 'info']}
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>
      <button onClick={() => hideToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
