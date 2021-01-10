import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { ValidationError } from 'yup';
import {
  Container,
  Content,
  Background,
  AnimationContainer,
} from '../styles/pages/signin';
import { useToast } from '../context/ToastContext';
import logo from '../assets/logo.svg';
import Input from '../components/Input';
import Button from '../components/Button';
import {
  getValidationErrors,
  forgotPasswordValidator,
} from '../validator/Validator';
import api from '../services/api';

interface FormData {
  email: string;
}
const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const { showToast } = useToast();
  const handleForm = useCallback(
    async (data: FormData) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});
        await forgotPasswordValidator.validate(data, { abortEarly: false });
        const { email } = data;
        await api.post('password/forgot', { email });
        showToast({
          type: 'success',
          title: 'Email successfully sent!',
          description: 'Please check your inbox for instructions',
        });
        // history.push('/dashboard');
      } catch (error) {
        if (error instanceof ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
        }
        showToast({
          type: 'error',
          title: 'Something went wrong!',
          description: 'We could not process your request.',
        });
      } finally {
        setLoading(false);
      }
    },
    [showToast],
  );
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="logo" />
          <Form ref={formRef} onSubmit={handleForm}>
            <h1>Password Recovery</h1>
            <Input
              autoFocus
              name="email"
              icon={FiMail}
              placeholder="Email"
              type="text"
            />
            <Button loading={loading} type="submit">
              Send
            </Button>
          </Form>
          <Link to="/">
            <FiLogIn />
            Signin
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};
export default ForgotPassword;
