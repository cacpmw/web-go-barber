import React, { useState } from 'react';
import { FiClock, FiPower } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  Calendar,
  NextAppointment,
  Section,
  Appointment,
} from '../styles/pages/dashboard';
import logo from '../assets/logo.svg';
import { useAuthenticationContext } from '../context/AuthenticationContext';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
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
      <Content>
        <Schedule>
          <h1>Schedule</h1>
          <p>
            <span>Today</span>
            <span>Day 06</span>
            <span>Monday</span>
          </p>
          <NextAppointment>
            <strong>Next appointment</strong>
            <div>
              <img
                src="https://avatars3.githubusercontent.com/u/7819913?s=460&u=8d94abfa3bde390237a9dc08a884c3f83a050a76&v=4"
                alt="user"
              />
              <strong>Carlos Carneiro</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>
          <Section>
            <strong>Morning</strong>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/7819913?s=460&u=8d94abfa3bde390237a9dc08a884c3f83a050a76&v=4"
                  alt="user"
                />
                <strong>Carlos Carneiro</strong>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/7819913?s=460&u=8d94abfa3bde390237a9dc08a884c3f83a050a76&v=4"
                  alt="user"
                />
                <strong>Carlos Carneiro</strong>
              </div>
            </Appointment>
          </Section>
          <Section>
            <strong>Afternoon</strong>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/7819913?s=460&u=8d94abfa3bde390237a9dc08a884c3f83a050a76&v=4"
                  alt="user"
                />
                <strong>Carlos Carneiro</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
