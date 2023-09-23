/** Load Dependency Source Graphs */

import '@brentbahry/reflection';
import '@proteinjs/server';
import '@proteinjs/server-api';
import '@proteinjs/user';


/** Generate Source Graph */

const sourceGraph = "{\"options\":{\"directed\":true,\"multigraph\":false,\"compound\":false},\"nodes\":[{\"v\":\"@brentbahry/neuragraffiti-server/serverConfig\",\"value\":{\"packageName\":\"@brentbahry/neuragraffiti-server\",\"name\":\"serverConfig\",\"filePath\":\"/Users/brentbahry/repos/neuragraffiti/server/src/serverConfig.ts\",\"qualifiedName\":\"@brentbahry/neuragraffiti-server/serverConfig\",\"type\":{\"packageName\":\"@proteinjs/server-api\",\"name\":\"ServerConfig\",\"filePath\":null,\"qualifiedName\":\"@proteinjs/server-api/ServerConfig\",\"typeParameters\":[],\"directParents\":[{\"packageName\":\"@proteinjs/server-api\",\"name\":\"ServerConfig\",\"filePath\":null,\"qualifiedName\":\"@proteinjs/server-api/ServerConfig\",\"typeParameters\":[],\"directParents\":null}]},\"isExported\":true,\"isConst\":true,\"sourceType\":0}},{\"v\":\"@proteinjs/server-api/ServerConfig\"}],\"edges\":[{\"v\":\"@brentbahry/neuragraffiti-server/serverConfig\",\"w\":\"@proteinjs/server-api/ServerConfig\",\"value\":\"has type\"}]}";


/** Generate Source Links */

import { serverConfig } from '../src/serverConfig';

const sourceLinks = {
	'@brentbahry/neuragraffiti-server/serverConfig': serverConfig,
};


/** Load Source Graph and Links */

import { SourceRepository } from '@brentbahry/reflection';
SourceRepository.merge(sourceGraph, sourceLinks);


export * from '../index';