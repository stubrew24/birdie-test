import * as express from "express";
import connection from '../database';

export const eventsController = express.Router();

eventsController.get("/events", async (_, res) => {
  await connection.query(
    `SELECT DISTINCT event_type FROM events`,
    (err, results) => {
      if (err) {
        return res.status(500).json({error: err});
      } else if (!results.length) {
        return res.status(200).json({events: []})
      }

      const events = results.map((x: {event_type: string}) => x.event_type)
      return res.status(200).json({events});
    }
  );
});

eventsController.get("/recipients", async (_, res) => {
  await connection.query(
    "SELECT DISTINCT care_recipient_id FROM events ",
    (err, results) => {
      if (err) {
        return res.status(500).json({error: err});
      } else if (!results.length) {
        return res.status(200).json({recipients: []})
      }

      const recipients = results.map((x: {care_recipient_id: string}) => x.care_recipient_id)
      return res.status(200).json({recipients});
    }
  );
});

eventsController.get("/recipients/:id", async (req, res) => {
  const id = req.params.id;

  await connection.query(
    `SELECT payload FROM events WHERE care_recipient_id = '${id}'`,
    (err, results) => {
      if (err) {
        return res.status(500).json({error: err});
      } else if (!results.length) {
        return res.status(200).json({events: []})
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
        return res.status(500).json({error: err});
      } else if (!results.length) {
        return res.status(200).json({events: []})
      }

      const events = results.map((x: {payload: string}) => JSON.parse(x.payload))
      return res.status(200).json({events});
    }
  );
});