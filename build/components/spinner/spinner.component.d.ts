import React, { ReactElement } from 'react';
import './spinner.component.scss';
import SpinnerComponentProps from './model/spinner.component.props';
declare class SpinnerComponent extends React.Component<SpinnerComponentProps, {}> {
    private ref;
    constructor(props: Readonly<SpinnerComponentProps>);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    setUpSpinner(): void;
    getContent(): ReactElement;
    render(): ReactElement;
}
export default SpinnerComponent;
//# sourceMappingURL=spinner.component.d.ts.map