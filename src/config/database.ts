import pg, { PoolConfig } from 'pg';
import './dotenv';

const { Pool } = pg;

const inProduction = !(process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development');

const dbConfig: PoolConfig =  inProduction ? {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
} : {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE
};

const connection = new Pool(dbConfig);

export { connection };
