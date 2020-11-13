import styled from 'styled-components';
import SignInBackgroundImage from '../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  width: 100%;
  max-width: 700;
`;
export const Background = styled.div`
  flex: 1;
  background: url(${SignInBackgroundImage}) no-repeat center;
  background-size: cover;
`;
