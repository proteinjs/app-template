/** Load Dependency Source Graphs */

import '@brentbahry/reflection';
import '@proteinjs/ui';
import '@proteinjs/user';
import 'react';
import 'react-dom';


/** Generate Source Graph */

const sourceGraph = "{\"options\":{\"directed\":true,\"multigraph\":false,\"compound\":false},\"nodes\":[{\"v\":\"@brentbahry/neuragraffiti-ui/helloPage\",\"value\":{\"packageName\":\"@brentbahry/neuragraffiti-ui\",\"name\":\"helloPage\",\"filePath\":\"/Users/brentbahry/repos/neuragraffiti/ui/src/Hello.tsx\",\"qualifiedName\":\"@brentbahry/neuragraffiti-ui/helloPage\",\"type\":{\"packageName\":\"@proteinjs/ui\",\"name\":\"Page\",\"filePath\":null,\"qualifiedName\":\"@proteinjs/ui/Page\",\"typeParameters\":[],\"directParents\":[{\"packageName\":\"@proteinjs/ui\",\"name\":\"Page\",\"filePath\":null,\"qualifiedName\":\"@proteinjs/ui/Page\",\"typeParameters\":[],\"directParents\":null}]},\"isExported\":true,\"isConst\":true,\"sourceType\":0}},{\"v\":\"@proteinjs/ui/Page\"},{\"v\":\"@brentbahry/neuragraffiti-ui/splashPage\",\"value\":{\"packageName\":\"@brentbahry/neuragraffiti-ui\",\"name\":\"splashPage\",\"filePath\":\"/Users/brentbahry/repos/neuragraffiti/ui/src/SplashPage.tsx\",\"qualifiedName\":\"@brentbahry/neuragraffiti-ui/splashPage\",\"type\":{\"packageName\":\"@proteinjs/ui\",\"name\":\"Page\",\"filePath\":null,\"qualifiedName\":\"@proteinjs/ui/Page\",\"typeParameters\":[],\"directParents\":[{\"packageName\":\"@proteinjs/ui\",\"name\":\"Page\",\"filePath\":null,\"qualifiedName\":\"@proteinjs/ui/Page\",\"typeParameters\":[],\"directParents\":null}]},\"isExported\":true,\"isConst\":true,\"sourceType\":0}}],\"edges\":[{\"v\":\"@brentbahry/neuragraffiti-ui/helloPage\",\"w\":\"@proteinjs/ui/Page\",\"value\":\"has type\"},{\"v\":\"@brentbahry/neuragraffiti-ui/splashPage\",\"w\":\"@proteinjs/ui/Page\",\"value\":\"has type\"}]}";


/** Generate Source Links */

import { helloPage } from '../src/Hello';
import { splashPage } from '../src/SplashPage';

const sourceLinks = {
	'@brentbahry/neuragraffiti-ui/helloPage': helloPage,
	'@brentbahry/neuragraffiti-ui/splashPage': splashPage,
};


/** Load Source Graph and Links */

import { SourceRepository } from '@brentbahry/reflection';
SourceRepository.merge(sourceGraph, sourceLinks);


export * from '../index';