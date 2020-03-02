import { call, put, select, takeLatest } from '@redux-saga/core/effects';
import { eventsUrl, recipientsUrl } from '@App/API';
import { 
  Event, 
  FETCH_EVENTS, 
  FETCH_EVENT_TYPES, 
  SET_DATE, 
  SetDateAction, 
  setEvents, 
  SetEventsAction,
  setEventTypes, 
} from '../actions';
import { EventsState } from '../reducers';

function* fetchEventTypes() {
  try {
    const response = yield call(fetch, eventsUrl);
    const data: {events: string[]} = yield response.json();
    yield put(setEventTypes(data.events));
  } catch (e) {
    // tslint:disable-next-line
    console.log(e);
  }
}

function* fetchRecipientEvents(action: SetDateAction|SetEventsAction) {
  try {
    const date = action.payload ? action.payload : '';
    const {recipient} = yield select((state: EventsState) => state);
    const response = yield call(fetch, recipientsUrl + `${recipient}/${date}`);
    const data: {events: Event[]} = yield response.json();
    yield put(setEvents(data.events));
  } catch (e) {
    // tslint:disable-next-line
    console.log(e);
  }
}

export function* eventsSagas() {
  yield takeLatest(FETCH_EVENT_TYPES, fetchEventTypes),
  yield takeLatest(FETCH_EVENTS, fetchRecipientEvents),
  yield takeLatest(SET_DATE, fetchRecipientEvents);
}