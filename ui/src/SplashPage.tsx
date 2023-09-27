import React from 'react';
import { Page } from '@proteinjs/ui';

export const splashPage: Page = {
    name: 'Splash Page',
    path: '/',
    component: () => (
        <div>
          Welcome to appName!
        </div>
    )
}