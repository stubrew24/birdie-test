export const FETCH_EVENT_TYPES = 'FETCH_EVENT_TYPES';
export const SET_EVENT_TYPES = 'SET_EVENT_TYPES';
export const FETCH_EVENTS = 'FETCH_EVENTS';
export const SET_EVENTS = 'SET_EVENTS';
export const SET_RECIPIENT = 'SET_RECIPIENT';
export const SET_DATE = 'SET_DATE';

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

export interface SetDateAction {
  type: typeof SET_DATE;
  payload: string;
}

export interface SetEventsAction {
  type: typeof SET_EVENTS;
  payload: Event[];
}

interface SetEventTypesAction {
  type: typeof SET_EVENT_TYPES;
  payload: string[];
}

export type ActionTypes = SetRecipientAction | SetEventsAction | SetEventTypesAction | SetDateAction;

export const fetchEvents = () => ({ type: FETCH_EVENTS });

export const setRecipient = (payload: string) => ({ type: SET_RECIPIENT, payload });

export const setDate = (payload: string): SetDateAction => ({ type: SET_DATE, payload });

export const fetchEventTypes = () => ({ type: FETCH_EVENT_TYPES });
  
export const setEvents = (payload: Event[]): SetEventsAction => ({ type: SET_EVENTS, payload });

export const setEventTypes = (payload: string[]): SetEventTypesAction => ({ type: SET_EVENT_TYPES, payload});