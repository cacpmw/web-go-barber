import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { Container } from '../styles/components/Button';

interface ButtonProperties extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<IconBaseProps>;
  loading?: boolean;
}

const Button: React.FC<ButtonProperties> = ({
  icon: Icon,
  loading,
  children,
  ...properties
}) => (
  <Container type="button" {...properties}>
    {Icon && <Icon />}
    {loading ? 'Loading...' : children}
  </Container>
);
export default Button;
