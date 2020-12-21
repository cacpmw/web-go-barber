import React from 'react';
import { FiPower } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
} from '../styles/pages/dashboard';
import logo from '../assets/logo.svg';
import { useAuthenticationContext } from '../context/AuthenticationContext';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuthenticationContext();
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logo} alt="logo" />
          <Profile>
            <img src={user.avatarUrl} alt={user.name} />
            <div>
              <span>Welcome,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Dashboard;
