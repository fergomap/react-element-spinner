import {SPINNER_CONSTANTS} from "../config/spinner.config";

export const getSpinnerFontSizeAspectRatio = (spinnerType?: 'default' | 'circle-dots' | 'circle-dots-collapse'): number => {
    switch (spinnerType) {
        case 'circle-dots':
            return SPINNER_CONSTANTS.ASPECT_RATIO.CIRCLE_DOTS;
        case 'circle-dots-collapse':
            return SPINNER_CONSTANTS.ASPECT_RATIO.CIRCLE_DOTS_COLLAPSE;
        default:
            return 0;
    }
};

export const getCenteredSpinnerFontSize = (referenceSize: number, spinnerType?: 'default' | 'circle-dots' | 'circle-dots-collapse'): number => {
    switch (spinnerType) {
        case 'circle-dots':
            return referenceSize > SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS ? SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS : referenceSize;
        case 'circle-dots-collapse':
            return referenceSize > SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS_COLLAPSE ? SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS_COLLAPSE : referenceSize;
        default:
            return 0;
    }
};

export const isDefaultSpinner = (spinnerType?: 'default' | 'circle-dots' | 'circle-dots-collapse'): boolean => {
    return !spinnerType || spinnerType === 'default';
};

export const parsePixelsToNumber = (pixels: string): number => {
    return parseInt(pixels.replace('px', ''));
};
