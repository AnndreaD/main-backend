import { pool } from "../dbconfig/dbconnector";

//TODO add service and entity for target selectors and functions

class Controller {
  public async get(req, res) {
    try {
      const client = await pool.connect();

      const sql = "SELECT * FROM feature_flags;";
      const { rows } = await client.query(sql);
      const feature_flag = rows;

      client.release();

      res.send(feature_flag);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

export default Controller;
