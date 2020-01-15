import {
    getCenteredSpinnerFontSize,
    getSpinnerFontSizeAspectRatio,
    isDefaultSpinner,
    parsePixelsToNumber
} from "./spinner.service";
import {SpinnerTypeEnum} from "../model/type.enum";
import {SPINNER_CONSTANTS} from "../config/spinner.config";

describe('SpinnerService', () => {
    describe('getSpinnerFontSizeAspectRatio', () => {
        it('should return SPINNER_CONSTANTS.ASPECT_RATIO.CIRCLE_DOTS when spinnerType is CIRCLE_DOTS', () => {
            expect(getSpinnerFontSizeAspectRatio(SpinnerTypeEnum.CIRCLE_DOTS)).toEqual(SPINNER_CONSTANTS.ASPECT_RATIO.CIRCLE_DOTS);
        });

        it('should return SPINNER_CONSTANTS.ASPECT_RATIO.CIRCLE_DOTS_COLLAPSE when spinnerType is CIRCLE_DOTS_COLLAPSE', () => {
            expect(getSpinnerFontSizeAspectRatio(SpinnerTypeEnum.CIRCLE_DOTS_COLLAPSE)).toEqual(SPINNER_CONSTANTS.ASPECT_RATIO.CIRCLE_DOTS_COLLAPSE);
        });

        it('should return 0 when spinnerType is DEFAULT or undefined', () => {
            expect(getSpinnerFontSizeAspectRatio(SpinnerTypeEnum.DEFAULT)).toEqual(0);
            expect(getSpinnerFontSizeAspectRatio()).toEqual(0);
        });
    });

    describe('getCenteredSpinnerFontSize', () => {
        it('should return SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS when spinnerType is CIRCLE_DOTS and referenceSize is greater than SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS', () => {
            expect(getCenteredSpinnerFontSize(SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS + 1, SpinnerTypeEnum.CIRCLE_DOTS)).toEqual(SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS);
        });

        it('should return the referenceSize when spinnerType is CIRCLE_DOTS and referenceSize is lower or equal than SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS', () => {
            const referenceSize = SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS - 10;
            expect(getCenteredSpinnerFontSize(referenceSize, SpinnerTypeEnum.CIRCLE_DOTS)).toEqual(referenceSize);
        });

        it('should return SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS_COLLAPSE when spinnerType is CIRCLE_DOTS_COLLAPSE and referenceSize is greater than SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS_COLLAPSE', () => {
            expect(getCenteredSpinnerFontSize(SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS_COLLAPSE + 1, SpinnerTypeEnum.CIRCLE_DOTS_COLLAPSE)).toEqual(SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS_COLLAPSE);
        });

        it('should return the referenceSize when spinnerType is CIRCLE_DOTS_COLLAPSE and referenceSize is lower or equal than SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS_COLLAPSE', () => {
            const referenceSize = SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS_COLLAPSE - 10;
            expect(getCenteredSpinnerFontSize(referenceSize, SpinnerTypeEnum.CIRCLE_DOTS_COLLAPSE)).toEqual(referenceSize);
        });

        it('should return 0 when spinnerType is DEFAULT or undefined', () => {
            expect(getCenteredSpinnerFontSize(0, SpinnerTypeEnum.DEFAULT)).toEqual(0);
            expect(getCenteredSpinnerFontSize(0)).toEqual(0);
        });
    });

    describe('isDefaultSpinner', () => {
        it('should return true when spinnerType is DEFAULT or undefined', () => {
            expect(isDefaultSpinner()).toBe(true);
            expect(isDefaultSpinner(SpinnerTypeEnum.DEFAULT)).toBe(true);
        });

        it('should return false when spinnerType is not DEFAULT and is defined', () => {
            expect(isDefaultSpinner(SpinnerTypeEnum.CIRCLE_DOTS)).toBe(false);
        });
    });

    describe('parsePixelsToNumber', () => {
        it('should return a number without the px of the string', () => {
            expect(parsePixelsToNumber('20px')).toEqual(20);
        });
    });
});
