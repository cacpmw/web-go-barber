import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FiLogIn, FiLock } from 'react-icons/fi';
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
  resetPasswordValidator,
} from '../validator/Validator';
import api from '../services/api';

interface formData {
  password: string;
  passwordConfirmation: string;
}
const ResetPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { showToast } = useToast();
  const location = useLocation();
  const history = useHistory();
  const handleForm = useCallback(
    async (data: formData) => {
      try {
        formRef.current?.setErrors({});
        await resetPasswordValidator.validate(data, { abortEarly: false });
        const { password, passwordConfirmation } = data;
        const token = location.search.replace('?token=', '');
        if (!token) {
          throw new Error();
        }
        await api.post('/password/reset', {
          password,
          passwordConfirmation,
          token,
        });
        showToast({
          type: 'success',
          title: 'Password successfully reseted!',
          description: 'Please signin again',
        });
        history.push('/');
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
      }
    },
    [showToast, history, location.search],
  );
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="logo" />
          <Form ref={formRef} onSubmit={handleForm}>
            <h1>Credentials</h1>
            <Input
              name="password"
              icon={FiLock}
              placeholder="New password"
              type="password"
            />
            <Input
              name="passwordConfirmation"
              icon={FiLock}
              placeholder="Confirm password"
              type="password"
            />
            <Button type="submit">Reset</Button>
          </Form>
          <Link to="/">
            <FiLogIn />
            Signup
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};
export default ResetPassword;
