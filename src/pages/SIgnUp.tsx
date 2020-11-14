import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Container, Content, Background } from '../styles/pages/signup';
import logo from '../assets/logo.svg';
import Input from '../components/Input';
import Button from '../components/Button';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logo} alt="logo" />
      <form>
        <h4>Signup</h4>
        <Input
          autoFocus
          name="name"
          icon={FiUser}
          placeholder="Name"
          type="text"
        />
        <Input name="email" icon={FiMail} placeholder="Email" type="text" />
        <Input
          name="password"
          icon={FiLock}
          placeholder="Password"
          type="password"
        />
        <Button type="submit">Signup</Button>
      </form>
      <Link to="/signin">
        <FiArrowLeft />
        Back to signin
      </Link>
    </Content>
  </Container>
);
export default SignUp;
