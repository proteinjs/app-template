import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { AuthenticatedPageContainer } from '@proteinjs/user';
import { Page } from '@proteinjs/ui';

const theme = {
    spacing: 8,
}

export function ThemedContainer(props: React.PropsWithChildren<{}>) {
    return (
        // <ThemeProvider theme={theme}>
        <div>
            {props.children}
        </div>
        // </ThemeProvider>
    );
}

export function PageContainer(props: { page: Page }) {
    return (
        <ThemedContainer>
            <AuthenticatedPageContainer appName='Neuragraffiti' page={props.page} />
        </ThemedContainer>
    );
}