import { DbDriver, DefaultDbDriverFactory } from '@proteinjs/db'
import { KnexDriver } from '@proteinjs/db-driver-knex'

export class DbDriverFactory implements DefaultDbDriverFactory {
  getDbDriver(): DbDriver {
    return new KnexDriver({
      host: 'localhost',
      user: 'root',
      password: '',
      dbName: 'dev',
    });
  }
}