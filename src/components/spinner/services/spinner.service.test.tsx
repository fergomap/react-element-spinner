import {
    getCenteredSpinnerFontSize,
    getSpinnerFontSizeAspectRatio,
    isDefaultSpinner,
    parsePixelsToNumber
} from "./spinner.service";
import {SPINNER_CONSTANTS} from "../config/spinner.config";

describe('SpinnerService', () => {
    describe('getSpinnerFontSizeAspectRatio', () => {
        it('should return SPINNER_CONSTANTS.ASPECT_RATIO.CIRCLE_DOTS when spinnerType is circle-dots', () => {
            expect(getSpinnerFontSizeAspectRatio('circle-dots')).toEqual(SPINNER_CONSTANTS.ASPECT_RATIO.CIRCLE_DOTS);
        });

        it('should return SPINNER_CONSTANTS.ASPECT_RATIO.CIRCLE_DOTS_COLLAPSE when spinnerType is circle-dots-collapse', () => {
            expect(getSpinnerFontSizeAspectRatio('circle-dots-collapse')).toEqual(SPINNER_CONSTANTS.ASPECT_RATIO.CIRCLE_DOTS_COLLAPSE);
        });

        it('should return 0 when spinnerType is default or undefined', () => {
            expect(getSpinnerFontSizeAspectRatio('default')).toEqual(0);
            expect(getSpinnerFontSizeAspectRatio()).toEqual(0);
        });
    });

    describe('getCenteredSpinnerFontSize', () => {
        it('should return SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS when spinnerType is circle-dots and referenceSize is greater than SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS', () => {
            expect(getCenteredSpinnerFontSize(SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS + 1, 'circle-dots')).toEqual(SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS);
        });

        it('should return the referenceSize when spinnerType is circle-dots and referenceSize is lower or equal than SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS', () => {
            const referenceSize = SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS - 10;
            expect(getCenteredSpinnerFontSize(referenceSize, 'circle-dots')).toEqual(referenceSize);
        });

        it('should return SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS_COLLAPSE when spinnerType is circle-dots-collapse and referenceSize is greater than SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS_COLLAPSE', () => {
            expect(getCenteredSpinnerFontSize(SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS_COLLAPSE + 1, 'circle-dots-collapse')).toEqual(SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS_COLLAPSE);
        });

        it('should return the referenceSize when spinnerType is circle-dots-collapse and referenceSize is lower or equal than SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS_COLLAPSE', () => {
            const referenceSize = SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS_COLLAPSE - 10;
            expect(getCenteredSpinnerFontSize(referenceSize, 'circle-dots-collapse')).toEqual(referenceSize);
        });

        it('should return 0 when spinnerType is default or undefined', () => {
            expect(getCenteredSpinnerFontSize(0, 'default')).toEqual(0);
            expect(getCenteredSpinnerFontSize(0)).toEqual(0);
        });
    });

    describe('isDefaultSpinner', () => {
        it('should return true when spinnerType is default or undefined', () => {
            expect(isDefaultSpinner()).toBe(true);
            expect(isDefaultSpinner('default')).toBe(true);
        });

        it('should return false when spinnerType is not default and is defined', () => {
            expect(isDefaultSpinner('circle-dots')).toBe(false);
        });
    });

    describe('parsePixelsToNumber', () => {
        it('should return a number without the px of the string', () => {
            expect(parsePixelsToNumber('20px')).toEqual(20);
        });
    });
});
