import {  Event, ActionTypes, SET_RECIPIENT, SET_EVENTS, SET_EVENT_TYPES, SET_DATE } from '../actions';

export interface EventsState {
  recipient: string;
  events: Event[];
  eventTypes: string[];
  date: string;
}

const initialState: EventsState = {
  recipient: '',
  events: [],
  eventTypes: [],
  date: ''
};

export default function reducer(
  state: EventsState = initialState,
  action: ActionTypes
): EventsState {
  switch (action.type) {
    case SET_RECIPIENT:
      return { ...state, recipient: action.payload };
    case SET_EVENTS:
      return {...state, events: action.payload };
    case SET_EVENT_TYPES:
      return {...state, eventTypes: action.payload};
    case SET_DATE:
      return {...state, date: action.payload};
    default:
      return state;
  }
}