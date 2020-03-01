import * as React from 'react';
import { Table, Pagination, PaginationProps } from 'semantic-ui-react';
import { formatEvent, formatDate } from '../utils/helpers';

interface Event {
  id: string;
  event_type: string;
  visit_id: string;
  timestamp: string;
  caregiver_id: string;
  mood?: string;
}

interface ResultsTableProps {
  data: Event[];
}

const ResultsTable: React.FC<ResultsTableProps> = ({data}) => {

  const [page, setPage] = React.useState<string|number|undefined>(1);
  const pages = Math.ceil(data.length / 8);
  const limit = 10;

  const handlePaginationChange = (_: React.MouseEvent<HTMLAnchorElement, MouseEvent>, props: PaginationProps) => {
    setPage(props.activePage);
  };

  return (
    <Table striped={true}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Event Type</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Caregive ID</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.slice(Number(page), Number(page) + limit).map(row => {
            return (
              <Table.Row key={row.id}>
                <Table.Cell>{formatEvent(row.event_type)}</Table.Cell>
                <Table.Cell>{formatDate(row.timestamp)}</Table.Cell>
                <Table.Cell>{row.caregiver_id}</Table.Cell>
              </Table.Row>
              );
            })}
        </Table.Body>
        <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="3">
            <Pagination
              activePage={page}
              totalPages={pages}
              onPageChange={handlePaginationChange}
              siblingRange={0}
              firstItem={false}
              lastItem={false}
            />
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
      </Table>
  );
};

export default ResultsTable;