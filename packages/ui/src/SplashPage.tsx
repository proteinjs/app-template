import React from 'react';
import { Page, FormPage } from '@proteinjs/ui';
import { Typography, Grid } from '@mui/material';

export const splashPage: Page = {
  name: 'Splash Page',
  path: '/',
  auth: {
    public: true,
  },
  component: () => (
    <FormPage>
      <Grid container direction='column' spacing={2}>
        <Grid item>
          <Typography variant='h4'>Welcome to appName!</Typography>
        </Grid>
        <Grid item>
          <Typography>Check out the @proteinjs/ui package for reusable components</Typography>
        </Grid>
      </Grid>
    </FormPage>
  ),
};
