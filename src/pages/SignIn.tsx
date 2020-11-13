import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { Container, Content, Background } from '../styles/signin';
import logo from '../assets/logo.svg';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="logo" />
      <form>
        <h1>Credenciais</h1>
        <input placeholder="Email" type="text" />
        <input placeholder="Senha" type="password" />
        <button type="submit">Entrar</button>
        <Link to="asdasda">Esqueci minha senha</Link>
      </form>
      <Link to="asdasda">
        <FiLogIn />
        Criar conta
      </Link>
    </Content>
    <Background />
  </Container>
);
export default SignIn;