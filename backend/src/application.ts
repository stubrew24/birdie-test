import * as cors from 'cors';
import * as express from "express";
import { eventsController } from "./controllers/events";
import { pingController } from "./controllers/ping";

const app = express();

app.use(cors())

app.use(eventsController)
app.use(pingController);

export default app;
