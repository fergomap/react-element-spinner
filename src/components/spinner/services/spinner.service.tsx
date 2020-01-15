import {SpinnerTypeEnum} from "../model/type.enum";
import {SPINNER_CONSTANTS} from "../config/spinner.config";

export const getSpinnerFontSizeAspectRatio = (spinnerType?: SpinnerTypeEnum): number => {
    switch (spinnerType) {
        case SpinnerTypeEnum.CIRCLE_DOTS:
            return SPINNER_CONSTANTS.ASPECT_RATIO.CIRCLE_DOTS;
        case SpinnerTypeEnum.CIRCLE_DOTS_COLLAPSE:
            return SPINNER_CONSTANTS.ASPECT_RATIO.CIRCLE_DOTS_COLLAPSE;
        default:
            return 0;
    }
};

export const getCenteredSpinnerFontSize = (referenceSize: number, spinnerType?: SpinnerTypeEnum): number => {
    switch (spinnerType) {
        case SpinnerTypeEnum.CIRCLE_DOTS:
            return referenceSize > SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS ? SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS : referenceSize;
        case SpinnerTypeEnum.CIRCLE_DOTS_COLLAPSE:
            return referenceSize > SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS_COLLAPSE ? SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS_COLLAPSE : referenceSize;
        default:
            return 0;
    }
};

export const isDefaultSpinner = (spinnerType?: SpinnerTypeEnum): boolean => {
    return !spinnerType || spinnerType === SpinnerTypeEnum.DEFAULT;
};

export const parsePixelsToNumber = (pixels: string): number => {
    return parseInt(pixels.replace('px', ''));
};
