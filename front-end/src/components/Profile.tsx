import * as React from 'react';
import { Container, Form, Header } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';

import { formatEvent } from '@App/utils/helpers';
import { EventsState } from '@App/store/reducers';

import Logo from './Logo';
import Results from './Results';
import { setDate } from '@App/store/actions';

const LogoUrl = require('../assets/images/logo-birdie.svg');

const Profile: React.FC = () => {
  const [event, setEvent] = React.useState(''); 
  
  const { recipient, eventTypes } = useSelector((state: EventsState) => state);
  const dispatch = useDispatch();

  const eventOptions = (events: string[]) => {
    return events.map(ev => {
      return {key: ev, text: formatEvent(ev), value: ev};
    });
  };

  const handleEventChange = (e: React.SyntheticEvent<HTMLElement>, {value}: {value: string}) => {
    setEvent(value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    dispatch(setDate(value));
  };

  return (
      <Container>
        <Logo src={LogoUrl} />
        <Header as="h3" dividing={true}>
          Recipient ID: {recipient}
        </Header>
        <Form style={{marginTop: '2rem'}}>
          <Form.Group>

            <Form.Input 
              type="date"
              fluid={true}
              // value={date} 
              onChange={handleDateChange} 
              width={8}
              label="Date"
            />
            <Form.Dropdown 
              placeholder="Select event type."
              fluid={true}
              selection={true}
              options={eventOptions(eventTypes)} 
              width={8}
              label="Event Type"
              onChange={handleEventChange}
              value={event}
              clearable={true}
            />
          </Form.Group>
        </Form>
        <Results event={event} />
      </Container>
  );
};

export default Profile;