import path from 'path';
import { ServerConfig } from '@proteinjs/server-api';
import { createAuthentication, DbSessionStore } from '@proteinjs/user';

export const serverConfig: ServerConfig = {
    staticContent: {
        staticContentDir: path.join(__dirname, '../../../ui/dist'),
        bundlePaths: [
            'vendor.js',
            'app.js',
            'vendor-components_db_db_node_modules_moment_locale_af_js-components_db_db_node_modules_moment-ae2cbd.js',
            'vendor-components_ui_node_modules_material-ui_styles_esm_index_js-node_modules_material-ui_co-4f7a12.js',
            'vendor-components_ui_node_modules_material-ui_styles_esm_ServerStyleSheets_ServerStyleSheets_-70a9cb.js',
        ]
    },
    authenticate: createAuthentication({ username: 'admin', password: 'admin' }),
    session: {
        secret: 'totally secret',
        store: new DbSessionStore()
    },
    port: 3000,
}