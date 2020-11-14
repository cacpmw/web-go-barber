import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from '../styles/pages/signin';
import logo from '../assets/logo.svg';
import Input from '../components/Input';
import Button from '../components/Button';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="logo" />
      <form>
        <h1>Credentials</h1>
        <Input
          autoFocus
          name="email"
          icon={FiMail}
          placeholder="Email"
          type="text"
        />
        <Input
          name="password"
          icon={FiLock}
          placeholder="Password"
          type="password"
        />
        <Button type="submit">Signin</Button>
        <Link to="asdasda">I forgot my password</Link>
      </form>
      <Link to="/signup">
        <FiLogIn />
        Signup
      </Link>
    </Content>
    <Background />
  </Container>
);
export default SignIn;
