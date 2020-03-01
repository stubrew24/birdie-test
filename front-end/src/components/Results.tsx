import * as React from 'react';
import { Progress, Segment, Header } from 'semantic-ui-react';
import { recipientsUrl } from '../API';
import { calculateMood, selectMoodColor } from '../utils/helpers';
import ResultsTable from './ResultsTable';

interface ResultsProps {
  recipientId: string;
  date: string;
  event: string;
}

interface Event {
    id: string;
    event_type: string;
    visit_id: string;
    timestamp: string;
    caregiver_id: string;
    mood?: string;
}

const Results: React.FC<ResultsProps> = ({recipientId, date, event}) => {
  const [data, setData] = React.useState<Event[]>([]);

  React.useEffect(
    () => {
      fetch(recipientsUrl + `${recipientId}/${date}`)
        .then(res => res.json())
        .then(res => setData(res.events))
        // tslint:disable-next-line
        .catch(error => console.log(error));
    },
    [date]
  );

  const filteredData = () => {
    if (!event) {
      return data;
    }
    return data.filter(x => x.event_type === event);
  };

  const moodScore = calculateMood(data);

  if (!data.length) {
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
      <ResultsTable data={filteredData()} />
    </>
  );
};

export default Results;