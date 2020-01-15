import { ReactElement } from 'react';
import { SpinnerPositionEnum } from "./position.enum";
import { SpinnerTypeEnum } from "./type.enum";
export default interface SpinnerComponentProps {
    loading: boolean;
    position: SpinnerPositionEnum;
    color?: string;
    secondaryColor?: string;
    backgroundColor?: string;
    customSpinner?: ReactElement;
    resize?: boolean;
    spinnerType?: SpinnerTypeEnum;
}
//# sourceMappingURL=spinner.component.props.d.ts.map