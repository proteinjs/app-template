import React from 'react';
import { Page, FormPage } from '@proteinjs/ui';
import { Typography, Grid } from '@mui/joy';

export const splashPage: Page = {
    name: 'Splash Page',
    path: '/',
    component: () => (
        <FormPage>
          <Grid 
            container 
            direction='column' 
            spacing={3} 
            sx={(theme) => ({
                margin: theme.spacing(1),
            })}
          >
            <Grid>
              <Typography level='h2'>
                Welcome to appName!
              </Typography>
            </Grid>
            <Grid>
              <Typography>
                Check out the @proteinjs/ui package for reusable components
              </Typography>
            </Grid>
          </Grid>
        </FormPage>
    )
}