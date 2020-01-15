/* istanbul ignore file */

export const mockSpinnerService = (service: any): void => {
    service.getSpinnerFontSizeAspectRatio = jest.fn().mockReturnValue(0);
    service.getCenteredSpinnerFontSize = jest.fn().mockReturnValue(0);
    service.isDefaultSpinner = jest.fn().mockReturnValue(true);
    service.parsePixelsToNumber = jest.fn().mockReturnValue(0);
};
