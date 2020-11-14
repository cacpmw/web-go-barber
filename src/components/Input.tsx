import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from '../styles/components/Input';

interface InputProperties extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProperties> = ({ icon: Icon, ...properties }) => (
  <Container>
    {Icon && <Icon />}
    <input {...properties} />
  </Container>
);
export default Input;
