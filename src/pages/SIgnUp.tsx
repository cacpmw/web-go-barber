import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { signUpValidator, getValidationErrors } from '../validator/Validator';
import {
  Container,
  Content,
  Background,
  AnimationContainer,
} from '../styles/pages/signup';
import logo from '../assets/logo.svg';
import Input from '../components/Input';
import Button from '../components/Button';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleForm = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      await signUpValidator.validate(data, { abortEarly: false });
    } catch (error) {
      const errors = getValidationErrors(error);
      formRef.current?.setErrors(errors);
    }
  }, []);
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
          <Link to="/signin">
            <FiArrowLeft />
            Signin
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
export default SignUp;
