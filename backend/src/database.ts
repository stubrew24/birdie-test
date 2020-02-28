import { createConnection } from "mysql";

const connection = createConnection({
  database: "birdietest",
  host: "birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com",
  password: "xnxPp6QfZbCYkY8",
  port: 3306,
  user: "test-read"
});

export default connection;
