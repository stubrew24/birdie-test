// tslint:disable:no-implicit-dependencies
import 'jest';
import * as request from 'supertest';
import app from '../src/application';

const recipient = 'df50cac5-293c-490d-a06c-ee26796f850d';

describe('Sample test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true)
  })
})

describe('GET /events', () => {
  it('tests the events endpoint', async () => {
    const response = await request(app).get('/events');
    expect(response.status).toBe(200)
    expect(response.body.length).toBeGreaterThan(0)
  })
})

describe('GET /recipients', () => {
  it('tests the recipients endpoint', async () => {
    const response = await request(app).get('/recipients')
    expect(response.status).toBe(200)
    expect(response.body.recipients.length).toBeGreaterThan(0)
  })
})

describe('GET /recipients/:recipient', () => {
  it('tests the recipient endpoint with id', async () => {
    const response = await request(app).get(`/recipients/${recipient}`)
    expect(response.status).toBe(200)
    expect(response.body.events.length).toBeGreaterThan(0)
    expect(response.body.events[0]).toMatchObject({
      care_recipient_id: expect.any(String),
      caregiver_id: expect.any(String),
      event_type: expect.any(String),
      timestamp: expect.any(String)
    })
  })
})

describe('GET /recipients/:recipient/:date', () => {
  it('tests the recipient endpoint with date', async () => {
    const response = await request(app).get(`/recipients/${recipient}/2019-04-29`)
    expect(response.status).toBe(200)
    expect(response.body.events.length).toBeGreaterThan(0)
    expect(response.body.events[0]).toMatchObject({
      care_recipient_id: expect.any(String),
      caregiver_id: expect.any(String),
      event_type: expect.any(String),
      timestamp: expect.any(String)
    })
  })
})