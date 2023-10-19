/** Load Dependency Source Graphs */

import '@brentbahry/reflection';
import '@proteinjs/db';


/** Generate Source Graph */

const sourceGraph = "{\"options\":{\"directed\":true,\"multigraph\":false,\"compound\":false},\"nodes\":[{\"v\":\"@brentbahry/app-template-tables/Example\",\"value\":{\"packageName\":\"@brentbahry/app-template-tables\",\"name\":\"Example\",\"filePath\":\"/Users/brentbahry/repos/app-template/tables/src/ExampleTable.ts\",\"qualifiedName\":\"@brentbahry/app-template-tables/Example\",\"properties\":[{\"name\":\"name\",\"type\":{\"packageName\":\"\",\"name\":\"string\",\"filePath\":null,\"qualifiedName\":\"/string\",\"typeParameters\":null,\"directParents\":null},\"isOptional\":false,\"isAbstract\":false,\"isStatic\":false,\"visibility\":\"public\"},{\"name\":\"children\",\"type\":{\"packageName\":\"\",\"name\":\"ReferenceArray<Example>\",\"filePath\":null,\"qualifiedName\":\"/ReferenceArray<Example>\",\"typeParameters\":null,\"directParents\":null},\"isOptional\":true,\"isAbstract\":false,\"isStatic\":false,\"visibility\":\"public\"},{\"name\":\"isRoot\",\"type\":{\"packageName\":\"\",\"name\":\"boolean\",\"filePath\":null,\"qualifiedName\":\"/boolean\",\"typeParameters\":null,\"directParents\":null},\"isOptional\":true,\"isAbstract\":false,\"isStatic\":false,\"visibility\":\"public\"}],\"methods\":[],\"typeParameters\":[],\"directParents\":[{\"packageName\":\"@proteinjs/db\",\"name\":\"Record\",\"filePath\":null,\"qualifiedName\":\"@proteinjs/db/Record\",\"properties\":[],\"methods\":[],\"typeParameters\":[],\"directParents\":[]}],\"sourceType\":3}},{\"v\":\"@proteinjs/db/Record\"},{\"v\":\"@brentbahry/app-template-tables/ExampleTable\",\"value\":{\"packageName\":\"@brentbahry/app-template-tables\",\"name\":\"ExampleTable\",\"filePath\":\"/Users/brentbahry/repos/app-template/tables/src/ExampleTable.ts\",\"qualifiedName\":\"@brentbahry/app-template-tables/ExampleTable\",\"isAbstract\":false,\"isStatic\":false,\"visibility\":\"public\",\"properties\":[{\"name\":\"name\",\"type\":null,\"isOptional\":false,\"isAbstract\":false,\"isStatic\":false,\"visibility\":\"public\"},{\"name\":\"columns\",\"type\":null,\"isOptional\":false,\"isAbstract\":false,\"isStatic\":false,\"visibility\":\"public\"}],\"methods\":[],\"typeParameters\":[],\"directParentInterfaces\":[],\"directParentClasses\":[{\"packageName\":\"@proteinjs/db\",\"name\":\"Table\",\"filePath\":null,\"qualifiedName\":\"@proteinjs/db/Table\",\"isAbstract\":false,\"isStatic\":false,\"visibility\":\"public\",\"properties\":[],\"methods\":[],\"typeParameters\":[\"@brentbahry/app-template-tables/Example\"],\"directParentInterfaces\":[],\"directParentClasses\":[]}],\"sourceType\":2}},{\"v\":\"@proteinjs/db/Table\"}],\"edges\":[{\"v\":\"@brentbahry/app-template-tables/Example\",\"w\":\"@proteinjs/db/Record\",\"value\":\"extends interface\"},{\"v\":\"@brentbahry/app-template-tables/ExampleTable\",\"w\":\"@proteinjs/db/Table\",\"value\":\"extends class\"}]}";


/** Generate Source Links */

import { ExampleTable } from '../src/ExampleTable';

const sourceLinks = {
	'@brentbahry/app-template-tables/ExampleTable': ExampleTable,
};


/** Load Source Graph and Links */

import { SourceRepository } from '@brentbahry/reflection';
SourceRepository.merge(sourceGraph, sourceLinks);


export * from '../index';