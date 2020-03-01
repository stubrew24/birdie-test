import * as React from 'react';
import Login from '../Login';
import Profile from '../Profile';
import { Container } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { EventsState } from '@App/store/reducers/events';

const App: React.FC = () => {
  const {recipient} = useSelector((state: EventsState) => state);

  return (
      <Container>
        {
          recipient
          ?
            <Profile />
          :
            <Login />
        }
      </Container>
    );
};

export default App;