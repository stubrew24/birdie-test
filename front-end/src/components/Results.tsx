import * as React from 'react';
import { Progress, Segment, Header } from 'semantic-ui-react';
import { calculateMood, selectMoodColor } from '../utils/helpers';
import ResultsTable from './ResultsTable';
import { useSelector, useDispatch } from 'react-redux';
import { EventsState } from '@App/store/reducers';
import { fetchEvents } from '@App/store/actions';

interface ResultsProps {
  event: string;
}

const Results: React.FC<ResultsProps> = ({ event }) => {

  const { events } = useSelector((state: EventsState) => state);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchEvents());
  },              []);

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