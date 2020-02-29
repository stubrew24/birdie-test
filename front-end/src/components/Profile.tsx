import * as React from 'react';

import { Input, Dropdown, Container } from 'semantic-ui-react';
import { eventsUrl } from '../API';
import { formatEvent } from '@App/utils/helpers';

interface ProfileProps {
  recipientId: string;
}

const Profile: React.FC<ProfileProps> = () => {

  const [date, setDate] = React.useState('2019-04-24');
  const [eventTypes, setEventTypes] = React.useState([]);

  React.useEffect(() => {
    fetch(eventsUrl)
      .then(res => res.json())
      .then(setEventTypes);
  },              []);

  const eventOptions = () => {
    return eventTypes.map(event => {
      return {key: event, text: formatEvent(event), value: event};
    });
  };

  return (
      <Container>
        <Dropdown 
          placeholder="Select event type."
          fluid={true}
          selection={true}
          options={eventOptions()} 
        />
        <Input 
          type="date"
          value={date} 
          onChange={e => setDate(e.target.value)} 
        />
      </Container>
  );
};

export default Profile;