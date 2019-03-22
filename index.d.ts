declare module '@pkgz/ui' {
    import * as React from 'react';

    export interface PanelProps {
        test?: boolean;
    }

    export class Panel extends React.Component<PanelProps, any> {
        render(): JSX.Element;

    }

}


