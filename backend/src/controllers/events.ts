import * as express from "express";
import connection from '../database';

export const eventsController = express.Router();

eventsController.get("/events", async (_, res) => {
  await connection.query(
    `SELECT DISTINCT event_type FROM events`,
    (err, results) => {
      if (err) {
        res.status(500).json({error: err});
      }
      res.status(200).json(results.map((x: {event_type: string}) => x.event_type));
    }
  );
});

eventsController.get("/recipients", async (_, res) => {
  await connection.query(
    "SELECT DISTINCT care_recipient_id FROM events ",
    (err, results) => {
      if (err) {
        res.status(500).json({error: err});
      }
      const recipients = results.map((x: {care_recipient_id: string}) => x.care_recipient_id)
      res.status(200).json({recipients});
    }
  );
});

eventsController.get("/recipients/:id", async (req, res) => {
  const id = req.params.id;

  await connection.query(
    `SELECT payload FROM events WHERE care_recipient_id = '${id}'`,
    (err, results) => {
      if (err) {
        res.status(500).json({error: err});
      }
      if (!results.length){
        return res.status(404).json({error: 'User not found.'})
      } 

      const events = results.map((x: {payload: string}) => JSON.parse(x.payload))
      return res.status(200).json({events});
    }
  );
});

eventsController.get("/recipients/:id/:date", async (req, res) => {
  const { id, date } = req.params;
  const shortDate = date.split("T")[0];

  await connection.query(
    `SELECT payload FROM events WHERE care_recipient_id = '${id}' AND timestamp LIKE '${shortDate}%'`,
    (err, results) => {
      if (err) {
        res.status(500).json({error: err});
      }
      const events = results.map((x: {payload: string}) => JSON.parse(x.payload))
      return res.status(200).json({events});
    }
  );
});