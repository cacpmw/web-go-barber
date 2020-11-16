import React, { useCallback, useContext, useRef } from 'react';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Container, Content, Background } from '../styles/pages/signin';
import { AuthenticationContext } from '../context/AuthenticationContext';
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
  const { user, signIn } = useContext(AuthenticationContext);
  console.log(user);
  const handleForm = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        await signInValidator.validate(data, { abortEarly: false });
        const { email, password } = data;
        signIn({
          email,
          password,
        });
      } catch (error) {
        const errors = getValidationErrors(error);
        formRef.current?.setErrors(errors);
      }
    },
    [signIn],
  );
  return (
    <Container>
      <Content>
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
      </Content>
      <Background />
    </Container>
  );
};
export default SignIn;
