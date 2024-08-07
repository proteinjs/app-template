import path from 'path';
import { ServerConfig } from '@proteinjs/server-api';
import { createAuthentication, DbSessionStore } from '@proteinjs/user-server';

export const serverConfig: ServerConfig = {
  staticContent: {
    staticContentDir: path.join(__dirname, '../../../ui/dist'),
    bundlesDir: 'bundles',
    appEntryPath: path.join(__dirname, '../../../ui/generated/index.ts'),
  },
  hotClientBuilds: {
    nodeModulesPath: path.join(__dirname, '../../../ui/node_modules'),
  },
  authenticate: createAuthentication({ username: 'admin', password: 'admin' }),
  session: {
    secret: 'totally secret',
    store: new DbSessionStore(),
  },
  port: 3000,
};
