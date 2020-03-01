import {  Event, ActionTypes, SET_RECIPIENT, SET_EVENTS } from '../actions';

export interface EventsState {
  recipient: string;
  events: Event[];
}

const initialState: EventsState = {
  recipient: '',
  events: []
};

export default function eventsReducer(
  state: EventsState = initialState,
  action: ActionTypes
): EventsState {
  switch (action.type) {
    case SET_RECIPIENT:
      return { ...state, recipient: action.payload };
    case SET_EVENTS:
      return {...state, events: action.payload };
    default:
      return state;
  }
}