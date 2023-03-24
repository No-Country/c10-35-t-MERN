import { config } from "dotenv";

config();

export const DB_NAME = process.env.DB_NAME || "db_db";
export const DB_USERNAME = process.env.DB_USERNAME || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "root";
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_PORT = process.env.DB_PORT || "3306";
export const DB_DIALECT = process.env.DB_DIALECT || "mysql";
export const PORT = process.env.PORT || 3000;
