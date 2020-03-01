import * as React from 'react';
import { Progress, Segment, Header } from 'semantic-ui-react';
import { recipientsUrl } from '../API';
import { calculateMood, selectMoodColor } from '../utils/helpers';
import ResultsTable from './ResultsTable';
import { useSelector, useDispatch } from 'react-redux';
import { EventsState } from '@App/store/reducers/events';
import { Event } from '@App/store/actions';

interface ResultsProps {
  date: string;
  event: string;
}

const Results: React.FC<ResultsProps> = ({ date, event }) => {

  const { recipient, events } = useSelector((state: EventsState) => state);
  const dispatch = useDispatch();
  const setEvents = React.useCallback(
    (payload: Event[]) => dispatch({type: 'SET_EVENTS', payload}),
    [dispatch] 
  );

  React.useEffect(
    () => {
      fetch(recipientsUrl + `${recipient}/${date}`)
        .then(res => res.json())
        .then(res => setEvents(res.events));
    },
    [date]
  );

  const filteredEvents = () => {
    if (!event) {
      return events;
    }
    return events.filter(x => x.event_type === event);
  };

  const moodScore = calculateMood(events);

  if (!events.length) {
    return (
      <Segment>
        No data available for this date.
      </Segment>
    );
  }

  return (
    <>
      <Segment >
        <Header>Current Mood</Header>
        <Progress percent={moodScore} color={selectMoodColor(moodScore)} />
      </Segment>
      <ResultsTable data={filteredEvents()} />
    </>
  );
};

export default Results;