import styled from 'styled-components';
import { shade } from 'polished';
import SignUpBackgroundImage from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    h4 {
      padding-bottom: 5px;
      margin-bottom: 24px;
    }
    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      transition: all 0.2s;
      text-decoration: none;
      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
  > a {
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    transition: all 0.2s;
    text-decoration: none;
    display: flex;
    align-items: center;
    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
    svg {
      margin-right: 16px;
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${SignUpBackgroundImage}) no-repeat center;
  background-size: cover;
  height: 100%;
  width: 100%;
`;
