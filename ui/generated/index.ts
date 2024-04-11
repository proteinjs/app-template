/** Load Dependency Source Graphs */

import '@proteinjs/app-template-common';
import '@proteinjs/reflection';
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

const sourceGraph = "{\"options\":{\"directed\":true,\"multigraph\":false,\"compound\":false},\"nodes\":[{\"v\":\"@proteinjs/app-template-ui/helloPage\",\"value\":{\"packageName\":\"@proteinjs/app-template-ui\",\"name\":\"helloPage\",\"filePath\":\"/Users/brentbahry/repos/app-template/ui/src/Hello.tsx\",\"qualifiedName\":\"@proteinjs/app-template-ui/helloPage\",\"type\":{\"packageName\":\"@proteinjs/ui\",\"name\":\"Page\",\"filePath\":null,\"qualifiedName\":\"@proteinjs/ui/Page\",\"typeParameters\":[],\"directParents\":[{\"packageName\":\"@proteinjs/ui\",\"name\":\"Page\",\"filePath\":null,\"qualifiedName\":\"@proteinjs/ui/Page\",\"typeParameters\":[],\"directParents\":null}]},\"isExported\":true,\"isConst\":true,\"sourceType\":0}},{\"v\":\"@proteinjs/ui/Page\"},{\"v\":\"@proteinjs/app-template-ui/helloNavMenuItem\",\"value\":{\"packageName\":\"@proteinjs/app-template-ui\",\"name\":\"helloNavMenuItem\",\"filePath\":\"/Users/brentbahry/repos/app-template/ui/src/Hello.tsx\",\"qualifiedName\":\"@proteinjs/app-template-ui/helloNavMenuItem\",\"type\":{\"packageName\":\"@proteinjs/ui\",\"name\":\"NavMenuItem\",\"filePath\":null,\"qualifiedName\":\"@proteinjs/ui/NavMenuItem\",\"typeParameters\":[],\"directParents\":[{\"packageName\":\"@proteinjs/ui\",\"name\":\"NavMenuItem\",\"filePath\":null,\"qualifiedName\":\"@proteinjs/ui/NavMenuItem\",\"typeParameters\":[],\"directParents\":null}]},\"isExported\":true,\"isConst\":true,\"sourceType\":0}},{\"v\":\"@proteinjs/ui/NavMenuItem\"},{\"v\":\"@proteinjs/app-template-ui/splashPage\",\"value\":{\"packageName\":\"@proteinjs/app-template-ui\",\"name\":\"splashPage\",\"filePath\":\"/Users/brentbahry/repos/app-template/ui/src/SplashPage.tsx\",\"qualifiedName\":\"@proteinjs/app-template-ui/splashPage\",\"type\":{\"packageName\":\"@proteinjs/ui\",\"name\":\"Page\",\"filePath\":null,\"qualifiedName\":\"@proteinjs/ui/Page\",\"typeParameters\":[],\"directParents\":[{\"packageName\":\"@proteinjs/ui\",\"name\":\"Page\",\"filePath\":null,\"qualifiedName\":\"@proteinjs/ui/Page\",\"typeParameters\":[],\"directParents\":null}]},\"isExported\":true,\"isConst\":true,\"sourceType\":0}}],\"edges\":[{\"v\":\"@proteinjs/app-template-ui/helloPage\",\"w\":\"@proteinjs/ui/Page\",\"value\":\"has type\"},{\"v\":\"@proteinjs/app-template-ui/helloNavMenuItem\",\"w\":\"@proteinjs/ui/NavMenuItem\",\"value\":\"has type\"},{\"v\":\"@proteinjs/app-template-ui/splashPage\",\"w\":\"@proteinjs/ui/Page\",\"value\":\"has type\"}]}";


/** Generate Source Links */

import { helloPage } from '../src/Hello';
import { helloNavMenuItem } from '../src/Hello';
import { splashPage } from '../src/SplashPage';

const sourceLinks = {
	'@proteinjs/app-template-ui/helloPage': helloPage,
	'@proteinjs/app-template-ui/helloNavMenuItem': helloNavMenuItem,
	'@proteinjs/app-template-ui/splashPage': splashPage,
};


/** Load Source Graph and Links */

import { SourceRepository } from '@proteinjs/reflection';
SourceRepository.merge(sourceGraph, sourceLinks);


export * from '../index';