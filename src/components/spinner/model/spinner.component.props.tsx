import React, {ReactElement} from 'react';

export default interface SpinnerComponentProps {
    loading: boolean;
    position: 'inline' | 'global' | 'centered';
    color?: string;
    secondaryColor?: string;
    backgroundColor?: string;
    customSpinner?: ReactElement;
    resize?: boolean;
    spinnerType?: 'default' | 'circle-dots' | 'circle-dots-collapse';
}
