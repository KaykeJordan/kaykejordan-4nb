import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://bookstore_rhwy_user:zeF5m80eUbzPWAqeWf7td7q0lgXrbW10@dpg-csfbcvrtq21c738m4gig-a.oregon-postgres.render.com/bookstore_rhwy';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;