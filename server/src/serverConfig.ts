import path from 'path';
import { ServerConfig } from '@proteinjs/server-api';
import { createAuthentication, DbSessionStore } from '@proteinjs/user';

export const serverConfig: ServerConfig = {
    staticContent: {
        staticContentDir: path.join(__dirname, '../ui/dist'),
        bundlePaths: [
            'index.js',
        ]
    },
    authenticate: createAuthentication({ username: 'admin', password: 'admin' }),
    session: {
        secret: 'totally secret',
        store: new DbSessionStore()
    }
}