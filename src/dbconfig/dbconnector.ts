const Pool = require("pg").Pool;
export const pool = new Pool({
  user: "main",
  host: "localhost",
  database: "maindb",
  password: "password",
  port: 5432,
});
