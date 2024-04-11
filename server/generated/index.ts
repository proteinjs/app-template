/** Load Dependency Source Graphs */

import '@proteinjs/app-template-common';
import '@proteinjs/reflection';
import '@proteinjs/db-driver-knex';
import '@proteinjs/server';
import '@proteinjs/server-api';
import '@proteinjs/user-server';


/** Generate Source Graph */

const sourceGraph = "{\"options\":{\"directed\":true,\"multigraph\":false,\"compound\":false},\"nodes\":[{\"v\":\"@proteinjs/app-template-server/serverConfig\",\"value\":{\"packageName\":\"@proteinjs/app-template-server\",\"name\":\"serverConfig\",\"filePath\":\"/Users/brentbahry/repos/app-template/server/src/serverConfig.ts\",\"qualifiedName\":\"@proteinjs/app-template-server/serverConfig\",\"type\":{\"packageName\":\"@proteinjs/server-api\",\"name\":\"ServerConfig\",\"filePath\":null,\"qualifiedName\":\"@proteinjs/server-api/ServerConfig\",\"typeParameters\":[],\"directParents\":[{\"packageName\":\"@proteinjs/server-api\",\"name\":\"ServerConfig\",\"filePath\":null,\"qualifiedName\":\"@proteinjs/server-api/ServerConfig\",\"typeParameters\":[],\"directParents\":null}]},\"isExported\":true,\"isConst\":true,\"sourceType\":0}},{\"v\":\"@proteinjs/server-api/ServerConfig\"}],\"edges\":[{\"v\":\"@proteinjs/app-template-server/serverConfig\",\"w\":\"@proteinjs/server-api/ServerConfig\",\"value\":\"has type\"}]}";


/** Generate Source Links */

import { serverConfig } from '../src/serverConfig';

const sourceLinks = {
	'@proteinjs/app-template-server/serverConfig': serverConfig,
};


/** Load Source Graph and Links */

import { SourceRepository } from '@proteinjs/reflection';
SourceRepository.merge(sourceGraph, sourceLinks);


export * from '../index';