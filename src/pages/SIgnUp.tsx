import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { ValidationError } from 'yup';
import { signUpValidator, getValidationErrors } from '../validator/Validator';
import api from '../services/api';
import { useToast } from '../context/ToastContext';
import {
  Container,
  Content,
  Background,
  AnimationContainer,
} from '../styles/pages/signup';
import logo from '../assets/logo.svg';
import Input from '../components/Input';
import Button from '../components/Button';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { showToast } = useToast();
  const history = useHistory();

  const handleForm = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});
        await signUpValidator.validate(data, { abortEarly: false });
        await api.post('users', data);
        showToast({
          title: 'Welcome',
          type: 'success',
          description: 'Successfully signed up',
        });
        history.push('/');
      } catch (error) {
        if (error instanceof ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
        }
        showToast({
          type: 'error',
          title: 'Algo deu errado!',
          description: 'Não foi possivel realizar o cadastro.',
        });
      }
    },
    [showToast, history],
  );
  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logo} alt="logo" />
          <Form ref={formRef} onSubmit={handleForm}>
            <h1>Signup</h1>
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
          </Form>
          <Link to="/">
            <FiArrowLeft />
            Signin
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
export default SignUp;
