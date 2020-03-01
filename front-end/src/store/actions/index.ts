export const FETCH_EVENTS = 'FETCH_EVENTS';
export const SET_RECIPIENT = 'SET_RECIPIENT';
export const SET_EVENTS = 'SET_EVENTS';

export interface Event {
  id: string;
  event_type: string;
  visit_id: string;
  timestamp: string;
  caregiver_id: string;
  mood?: string;
}

interface SetRecipientAction {
  type: typeof SET_RECIPIENT;
  payload: string;
}

interface SetEventsAction {
  type: typeof SET_EVENTS;
  payload: Event[];
}

export type ActionTypes = SetRecipientAction | SetEventsAction;

export const fetchEvents = () => {
  return { type: FETCH_EVENTS };
};

export const setRecipient = (id: string) => {
  return { type: SET_RECIPIENT, payload: id};
};

export const setEvents = (events: Event[]) => {
  return { type: SET_EVENTS, payload: events};
};