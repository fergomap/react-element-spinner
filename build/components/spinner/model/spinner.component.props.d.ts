import { ReactElement } from 'react';
export default interface SpinnerComponentProps {
    loading: boolean;
    position: 'inline' | 'global' | 'centered';
    color?: string;
    secondaryColor?: string;
    backgroundColor?: string;
    customSpinner?: ReactElement;
    resize?: boolean;
    spinnerType?: 'default' | 'circle-dots' | 'circle-dots-collapse';
    message?: string;
}
//# sourceMappingURL=spinner.component.props.d.ts.map