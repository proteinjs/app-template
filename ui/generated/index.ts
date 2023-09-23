/** Load Dependency Source Graphs */

import '@brentbahry/reflection';
import '@emotion/react';
import '@emotion/styled';
import '@mui/material';
import '@proteinjs/ui';
import '@proteinjs/user';
import 'react';
import 'react-dom';


/** Generate Source Graph */

const sourceGraph = "{\"options\":{\"directed\":true,\"multigraph\":false,\"compound\":false},\"nodes\":[],\"edges\":[]}";


/** Generate Source Links */


const sourceLinks = {
};


/** Load Source Graph and Links */

import { SourceRepository } from '@brentbahry/reflection';
SourceRepository.merge(sourceGraph, sourceLinks);


export * from '../index';