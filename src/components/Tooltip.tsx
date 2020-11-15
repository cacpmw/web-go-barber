import React from 'react';
import { Container } from '../styles/components/Tooltip';

interface TooltipProperties {
  text: string;
  className?: string;
}

const Tooltip: React.FC<TooltipProperties> = ({
  className,
  text,
  children,
}) => {
  return (
    <Container className={className}>
      {children}
      <span>{text}</span>
    </Container>
  );
};

export default Tooltip;
