/** Load Dependency Source Graphs */

import '@proteinjs/reflection';
import '@proteinjs/db';
import 'moment';


/** Generate Source Graph */

const sourceGraph = "{\"options\":{\"directed\":true,\"multigraph\":false,\"compound\":false},\"nodes\":[{\"v\":\"@proteinjs/app-template-common/Example\",\"value\":{\"packageName\":\"@proteinjs/app-template-common\",\"name\":\"Example\",\"filePath\":\"/Users/brentbahry/repos/app-template/common/src/ExampleTable.ts\",\"qualifiedName\":\"@proteinjs/app-template-common/Example\",\"properties\":[{\"name\":\"name\",\"type\":{\"packageName\":\"\",\"name\":\"string\",\"filePath\":null,\"qualifiedName\":\"/string\",\"typeParameters\":null,\"directParents\":null},\"isOptional\":false,\"isAbstract\":false,\"isStatic\":false,\"visibility\":\"public\"},{\"name\":\"children\",\"type\":{\"packageName\":\"\",\"name\":\"ReferenceArray<Example>\",\"filePath\":null,\"qualifiedName\":\"/ReferenceArray<Example>\",\"typeParameters\":null,\"directParents\":null},\"isOptional\":true,\"isAbstract\":false,\"isStatic\":false,\"visibility\":\"public\"},{\"name\":\"isRoot\",\"type\":{\"packageName\":\"\",\"name\":\"boolean\",\"filePath\":null,\"qualifiedName\":\"/boolean\",\"typeParameters\":null,\"directParents\":null},\"isOptional\":true,\"isAbstract\":false,\"isStatic\":false,\"visibility\":\"public\"}],\"methods\":[],\"typeParameters\":[],\"directParents\":[{\"packageName\":\"@proteinjs/db\",\"name\":\"Record\",\"filePath\":null,\"qualifiedName\":\"@proteinjs/db/Record\",\"properties\":[],\"methods\":[],\"typeParameters\":[],\"directParents\":[]}],\"sourceType\":3}},{\"v\":\"@proteinjs/db/Record\"},{\"v\":\"@proteinjs/app-template-common/ExampleTable\",\"value\":{\"packageName\":\"@proteinjs/app-template-common\",\"name\":\"ExampleTable\",\"filePath\":\"/Users/brentbahry/repos/app-template/common/src/ExampleTable.ts\",\"qualifiedName\":\"@proteinjs/app-template-common/ExampleTable\",\"isAbstract\":false,\"isStatic\":false,\"visibility\":\"public\",\"properties\":[{\"name\":\"name\",\"type\":null,\"isOptional\":false,\"isAbstract\":false,\"isStatic\":false,\"visibility\":\"public\"},{\"name\":\"columns\",\"type\":null,\"isOptional\":false,\"isAbstract\":false,\"isStatic\":false,\"visibility\":\"public\"}],\"methods\":[],\"typeParameters\":[],\"directParentInterfaces\":[],\"directParentClasses\":[{\"packageName\":\"@proteinjs/db\",\"name\":\"Table\",\"filePath\":null,\"qualifiedName\":\"@proteinjs/db/Table\",\"isAbstract\":false,\"isStatic\":false,\"visibility\":\"public\",\"properties\":[],\"methods\":[],\"typeParameters\":[\"@proteinjs/app-template-common/Example\"],\"directParentInterfaces\":[],\"directParentClasses\":[]}],\"sourceType\":2}},{\"v\":\"@proteinjs/db/Table\"}],\"edges\":[{\"v\":\"@proteinjs/app-template-common/Example\",\"w\":\"@proteinjs/db/Record\",\"value\":\"extends interface\"},{\"v\":\"@proteinjs/app-template-common/ExampleTable\",\"w\":\"@proteinjs/db/Table\",\"value\":\"extends class\"}]}";


/** Generate Source Links */

import { ExampleTable } from '../src/ExampleTable';

const sourceLinks = {
	'@proteinjs/app-template-common/ExampleTable': ExampleTable,
};


/** Load Source Graph and Links */

import { SourceRepository } from '@proteinjs/reflection';
SourceRepository.merge(sourceGraph, sourceLinks);


export * from '../index';