import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  > header {
    display: flex;
    align-items: center;
    height: 144px;
    background: #28262e;
    width: 100%;
    div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;

      svg {
        width: 30px;
        height: 30px;
        color: #999591;
      }
    }
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -175px auto 0;
  width: 100%;
  form {
    display: flex;
    flex-direction: column;
    margin: 80px 0;
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
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
    input[name='oldPassword'] {
      margin-top: 24px;
    }
  }
`;
export const Header = styled.header`
  padding: 32px 0;
  background: #28262e;
  a {
    text-decoration: none;
    transition: all 0.2s;
    &:hover {
      opacity: 0.5;
    }
  }
`;
export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  > img {
    height: 120px;
    width: 120px;
  }
  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #999591;
      width: 20px;
      height: 20px;
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  align-self: center;
  img {
    border-radius: 50%;
    height: 186px;
    width: 186px;
  }
  label {
    cursor: pointer;
    position: absolute;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #ff9000;
    right: 0;
    bottom: 0;
    border: 0;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(-4px -2px 5px #000);
    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;
