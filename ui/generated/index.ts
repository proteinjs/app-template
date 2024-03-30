/** Load Dependency Source Graphs */

import '@brentbahry/app-template-common';
import '@brentbahry/reflection';
import '@emotion/react';
import '@emotion/styled';
import '@mui/icons-material';
import '@mui/material';
import '@proteinjs/db-ui';
import '@proteinjs/ui';
import '@proteinjs/user-ui';
import 'react';
import 'react-dom';


/** Generate Source Graph */

const sourceGraph = "{\"options\":{\"directed\":true,\"multigraph\":false,\"compound\":false},\"nodes\":[{\"v\":\"@brentbahry/app-template-ui/helloPage\",\"value\":{\"packageName\":\"@brentbahry/app-template-ui\",\"name\":\"helloPage\",\"filePath\":\"/Users/brentbahry/repos/app-template/ui/src/Hello.tsx\",\"qualifiedName\":\"@brentbahry/app-template-ui/helloPage\",\"type\":{\"packageName\":\"@proteinjs/ui\",\"name\":\"Page\",\"filePath\":null,\"qualifiedName\":\"@proteinjs/ui/Page\",\"typeParameters\":[],\"directParents\":[{\"packageName\":\"@proteinjs/ui\",\"name\":\"Page\",\"filePath\":null,\"qualifiedName\":\"@proteinjs/ui/Page\",\"typeParameters\":[],\"directParents\":null}]},\"isExported\":true,\"isConst\":true,\"sourceType\":0}},{\"v\":\"@proteinjs/ui/Page\"},{\"v\":\"@brentbahry/app-template-ui/helloNavMenuItem\",\"value\":{\"packageName\":\"@brentbahry/app-template-ui\",\"name\":\"helloNavMenuItem\",\"filePath\":\"/Users/brentbahry/repos/app-template/ui/src/Hello.tsx\",\"qualifiedName\":\"@brentbahry/app-template-ui/helloNavMenuItem\",\"type\":{\"packageName\":\"@proteinjs/ui\",\"name\":\"NavMenuItem\",\"filePath\":null,\"qualifiedName\":\"@proteinjs/ui/NavMenuItem\",\"typeParameters\":[],\"directParents\":[{\"packageName\":\"@proteinjs/ui\",\"name\":\"NavMenuItem\",\"filePath\":null,\"qualifiedName\":\"@proteinjs/ui/NavMenuItem\",\"typeParameters\":[],\"directParents\":null}]},\"isExported\":true,\"isConst\":true,\"sourceType\":0}},{\"v\":\"@proteinjs/ui/NavMenuItem\"},{\"v\":\"@brentbahry/app-template-ui/splashPage\",\"value\":{\"packageName\":\"@brentbahry/app-template-ui\",\"name\":\"splashPage\",\"filePath\":\"/Users/brentbahry/repos/app-template/ui/src/SplashPage.tsx\",\"qualifiedName\":\"@brentbahry/app-template-ui/splashPage\",\"type\":{\"packageName\":\"@proteinjs/ui\",\"name\":\"Page\",\"filePath\":null,\"qualifiedName\":\"@proteinjs/ui/Page\",\"typeParameters\":[],\"directParents\":[{\"packageName\":\"@proteinjs/ui\",\"name\":\"Page\",\"filePath\":null,\"qualifiedName\":\"@proteinjs/ui/Page\",\"typeParameters\":[],\"directParents\":null}]},\"isExported\":true,\"isConst\":true,\"sourceType\":0}}],\"edges\":[{\"v\":\"@brentbahry/app-template-ui/helloPage\",\"w\":\"@proteinjs/ui/Page\",\"value\":\"has type\"},{\"v\":\"@brentbahry/app-template-ui/helloNavMenuItem\",\"w\":\"@proteinjs/ui/NavMenuItem\",\"value\":\"has type\"},{\"v\":\"@brentbahry/app-template-ui/splashPage\",\"w\":\"@proteinjs/ui/Page\",\"value\":\"has type\"}]}";


/** Generate Source Links */

import { helloPage } from '../src/Hello';
import { helloNavMenuItem } from '../src/Hello';
import { splashPage } from '../src/SplashPage';

const sourceLinks = {
	'@brentbahry/app-template-ui/helloPage': helloPage,
	'@brentbahry/app-template-ui/helloNavMenuItem': helloNavMenuItem,
	'@brentbahry/app-template-ui/splashPage': splashPage,
};


/** Load Source Graph and Links */

import { SourceRepository } from '@brentbahry/reflection';
SourceRepository.merge(sourceGraph, sourceLinks);


export * from '../index';