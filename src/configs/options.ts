import { Options } from 'sequelize'
import * as dotenv from 'dotenv'
dotenv.config()

const getOption = (prefix: string, additionalOptions?: any): Options => {
  return {
    database: process.env[`${prefix}_DB_DATABASE`] || 'postgres',
    dialect: 'postgres',
    host: process.env[`${prefix}_DB_HOST`] || 'localhost',
    port: +process.env[`${prefix}_DB_PORT`] || 5432,
    username: process.env[`${prefix}_DB_USERNAME`],
    password: process.env[`${prefix}_DB_PASSWORD`],
    logging:
      process.env[`${prefix}_DB_LOGGING`] === 'true' ? console.log : false,
    ...additionalOptions,
  }
}


console.log(getOption("DEV"));

export { getOption }
