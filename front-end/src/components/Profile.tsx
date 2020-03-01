import * as React from 'react';

import { Container, Form, Header } from 'semantic-ui-react';
import { eventsUrl } from '../API';
import { formatEvent } from '@App/utils/helpers';
import Results from './Results';
import Logo from './Logo';
const LogoUrl = require('../assets/images/logo-birdie.svg');

interface ProfileProps {
  recipientId: string;
}

const Profile: React.FC<ProfileProps> = ({recipientId}) => {

  const [date, setDate] = React.useState('2019-04-24');
  const [event, setEvent] = React.useState('');
  const [eventTypes, setEventTypes] = React.useState([]);

  React.useEffect(() => {
    fetch(eventsUrl)
      .then(res => res.json())
      .then(res => setEventTypes(res.events));
  },              []);

  const eventOptions = () => {
    return eventTypes.map(e => {
      return {key: event, text: formatEvent(e), value: e};
    });
  };

  const handleEventChange = (e: React.SyntheticEvent<HTMLElement>, {value}: {value: string}) => {
    setEvent(value);
  };

  return (
      <Container>
        <Logo src={LogoUrl} />
        <Header as="h3" dividing={true}>
          Recipient ID: {recipientId}
        </Header>
        <Form style={{marginTop: '2rem'}}>
          <Form.Group>
            <Form.Dropdown 
              placeholder="Select event type."
              fluid={true}
              selection={true}
              options={eventOptions()} 
              width={8}
              label="Event Type (optional)"
              onChange={handleEventChange}
              value={event}
              clearable={true}
            />

            <Form.Input 
              type="date"
              fluid={true}
              value={date} 
              onChange={e => setDate(e.target.value)} 
              width={8}
              label="Date"
            />
          </Form.Group>
        </Form>
        <Results recipientId={recipientId} date={date} event={event} />
      </Container>
  );
};

export default Profile;