import React from 'react';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import { AuthenticatedPageContainer } from '@proteinjs/user';
import { Page } from '@proteinjs/ui';

const theme = extendTheme({
  spacing: 8,
});

export function ThemedContainer(props: React.PropsWithChildren<{}>) {
    return (
            <CssVarsProvider theme={theme}>
                {props.children}
            </CssVarsProvider>
    );
}

export function PageContainer(props: { page: Page }) {
    return (
        <ThemedContainer>
            <AuthenticatedPageContainer appName='appName' page={props.page} />
        </ThemedContainer>
    );
}