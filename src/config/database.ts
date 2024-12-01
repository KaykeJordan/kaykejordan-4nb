import { Pool } from 'pg';

const connectionString = 'postgresql://bookstore_ghzo_user:tt17sKVy8k2NepA80WQ78TUkqVl0Mzqf@dpg-ct67kvrqf0us738cp8h0-a.oregon-postgres.render.com/bookstore_ghzo';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, 
  }
});

export default pool;