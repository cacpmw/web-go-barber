import React, { ChangeEvent, useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { ValidationError } from 'yup';
import { getValidationErrors, profileValidator } from '../validator/Validator';
import api from '../services/api';
import { useToast } from '../context/ToastContext';
import { Container, Content, AvatarInput } from '../styles/pages/profile';
import Input from '../components/Input';
import Button from '../components/Button';
import { useAuthenticationContext } from '../context/AuthenticationContext';

interface FormData {
  name: string;
  email: string;
  oldPassword: string;
  newPassword: string;
  passwordConfirmation: string;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { showToast } = useToast();
  const history = useHistory();
  const { user, updateUserData } = useAuthenticationContext();
  const handleForm = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});
        await profileValidator.validate(data, { abortEarly: false });
        const {
          name,
          email,
          oldPassword,
          newPassword,
          passwordConfirmation,
        } = data;
        const payload = {
          name,
          email,
          ...(oldPassword
            ? {
                oldPassword,
                newPassword,
                passwordConfirmation,
              }
            : {}),
        };
        const response = await api.put('user-data', payload);
        updateUserData(response.data);
        showToast({
          title: 'Profile updated',
          type: 'success',
          description: 'Your profile data was succesfully updated',
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
    [showToast, history, updateUserData],
  );
  const handleAvatarUpdate = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const formData = new FormData();
      if (event.target.files) {
        formData.append('avatar', event.target.files[0]);
        api.patch('/users/avatar', formData).then(response => {
          updateUserData(response.data);
          showToast({
            type: 'success',
            title: 'Avatar successfully updated',
          });
        });
      }
    },
    [showToast, updateUserData],
  );
  return (
    <Container>
      <header>
        <div>
          <Link to="/dashboard">
            <FiArrowLeft />
          </Link>
        </div>
      </header>
      <Content>
        <Form
          ref={formRef}
          initialData={{
            name: user.name,
            email: user.email,
          }}
          onSubmit={handleForm}
        >
          <AvatarInput>
            <img src={user.avatarUrl} alt={user.name} />
            <label htmlFor="avatar">
              <input type="file" id="avatar" onChange={handleAvatarUpdate} />
              <FiCamera />
            </label>
          </AvatarInput>
          <h1>Profile</h1>
          <Input
            autoFocus
            name="name"
            icon={FiUser}
            placeholder="Name"
            type="text"
          />
          <Input name="email" icon={FiMail} placeholder="Email" type="text" />
          <Input
            containerStyle={{ marginTop: 24 }}
            name="oldPassword"
            icon={FiLock}
            placeholder="Old password"
            type="password"
          />
          <Input
            name="newPassword"
            icon={FiLock}
            placeholder="New password"
            type="password"
          />
          <Input
            name="passwordConfirmation"
            icon={FiLock}
            placeholder="New password confirmation"
            type="password"
          />
          <Button type="submit">Save</Button>
        </Form>
      </Content>
    </Container>
  );
};
export default Profile;
