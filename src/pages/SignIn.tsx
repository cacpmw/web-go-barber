import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { ValidationError } from 'yup';
import {
  Container,
  Content,
  Background,
  AnimationContainer,
} from '../styles/pages/signin';
import { useAuthenticationContext } from '../context/AuthenticationContext';
import { useToast } from '../context/ToastContext';
import logo from '../assets/logo.svg';
import Input from '../components/Input';
import Button from '../components/Button';
import { getValidationErrors, signInValidator } from '../validator/Validator';

interface SignInFormData {
  email: string;
  password: string;
}
const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuthenticationContext();
  const { showToast } = useToast();
  const handleForm = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        await signInValidator.validate(data, { abortEarly: false });
        const { email, password } = data;
        await signIn({
          email,
          password,
        });
      } catch (error) {
        if (error instanceof ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
        }
        showToast({
          type: 'error',
          title: 'Algo deu errado!',
          description:
            'Não foi possivel realizar o login. Cheque as credenciais.',
        });
      }
    },
    [signIn, showToast],
  );
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="logo" />
          <Form ref={formRef} onSubmit={handleForm}>
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
          </Form>
          <Link to="/signup">
            <FiLogIn />
            Signup
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};
export default SignIn;
