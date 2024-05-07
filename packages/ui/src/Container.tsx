import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { AuthenticatedPageContainer } from '@proteinjs/user-ui';
import { Page } from '@proteinjs/ui';
import { helloNavMenuItem } from './Hello';

const theme = createTheme({
  spacing: 8,
});

export function PageContainer(props: { page: Page }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthenticatedPageContainer
        appName='appName'
        page={props.page}
        navMenuItems={[
          helloNavMenuItem,
        ]}
      />
    </ThemeProvider>
  );
}
