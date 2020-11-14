import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { Container } from '../styles/components/Button';

interface ButtonProperties extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<IconBaseProps>;
}

const Button: React.FC<ButtonProperties> = ({
  icon: Icon,
  children,
  ...properties
}) => (
  <Container type="button" {...properties}>
    {Icon && <Icon />}
    {children}
  </Container>
);
export default Button;
