import React from 'react';
import SpinnerComponent from './spinner.component';
import SpinnerComponentProps from './model/spinner.component.props';
import {mount} from 'enzyme';
import * as spinnerService from './services/spinner.service';
import {mockSpinnerService} from './services/spinner.service.mock';
import {SpinnerPositionEnum} from './model/position.enum';
import {SpinnerTypeEnum} from './model/type.enum';
import {SPINNER_CONSTANTS} from "./config/spinner.config";

describe('SpinnerComponent', () => {
    
    beforeEach(() => {
        mockSpinnerService(spinnerService);
    });
    
    describe('render', () => {
        it('should render correctly', () => {
            expect(mount(<SpinnerComponent {...getProps()}/>)).toBeTruthy();
        });

        it('should render a background with the default backgroundColor but not a hidden div when position is not INLINE and loading is true', () => {
            const wrapper = mount(<SpinnerComponent {...getProps()}/>);

            expect(wrapper.find('.hidden').length).toEqual(0);
            expect(wrapper.find('.background').length).toEqual(1);
            expect((wrapper.find('.background').prop('style') as any).backgroundColor).toEqual(SPINNER_CONSTANTS.DEFAULT_COLORS.BACKGROUND);
        });

        it('should render a background with the passed backgroundColor but not a hidden div when position is not INLINE and loading is true', () => {
            const props = getProps();
            props.backgroundColor = 'red';
            const wrapper = mount(<SpinnerComponent {...props}/>);

            expect(wrapper.find('.hidden').length).toEqual(0);
            expect(wrapper.find('.background').length).toEqual(1);
            expect((wrapper.find('.background').prop('style') as any).backgroundColor).toEqual('red');
        });

        it('should render a hidden but not a background div when position is INLINE and loading is false', () => {
            const props = getProps();
            props.loading = false;
            props.position = SpinnerPositionEnum.INLINE;
            const wrapper = mount(<SpinnerComponent {...props}/>);

            expect(wrapper.find('.hidden').length).toEqual(1);
            expect(wrapper.find('.background').length).toEqual(0);
        });
    });

    describe('componentDidMount', () => {
        it('should call to setUpSpinner but not to window.addEventListener when resize is false', () => {
            const instance = mount(<SpinnerComponent {...getProps()}/>).instance() as any;
            const setUpSpinnerSpy = spyOn(instance, 'setUpSpinner');
            const addEventListenerSpy = spyOn(window, 'addEventListener');

            instance.componentDidMount();

            expect(setUpSpinnerSpy).toHaveBeenCalled();
            expect(addEventListenerSpy).not.toHaveBeenCalled();
        });

        it('should not call to window.addEventListener when resize is true but position is not CENTERED', () => {
            const props = getProps();
            props.resize = true;
            const instance = mount(<SpinnerComponent {...props}/>).instance() as any;
            const addEventListenerSpy = spyOn(window, 'addEventListener');

            instance.componentDidMount();

            expect(addEventListenerSpy).not.toHaveBeenCalled();
        });

        it('should call to window.addEventListener when resize is true and position is CENTERED', () => {
            const props = getProps();
            props.resize = true;
            props.position = SpinnerPositionEnum.CENTERED;
            const instance = mount(<SpinnerComponent {...props}/>).instance() as any;
            const addEventListenerSpy = spyOn(window, 'addEventListener');

            instance.componentDidMount();

            expect(addEventListenerSpy).toHaveBeenCalled();
        });
    });

    describe('componentDidUpdate', () => {
        it('should call to setUpSpinner', () => {
            const instance = mount(<SpinnerComponent {...getProps()}/>).instance() as any;
            const setUpSpinnerSpy = spyOn(instance, 'setUpSpinner');

            instance.componentDidUpdate();

            expect(setUpSpinnerSpy).toHaveBeenCalled();
        });
    });

    describe('componentWillUnmount', () => {
        it('should not call to window.removeEventListener when resize is false', () => {
            const instance = mount(<SpinnerComponent {...getProps()}/>).instance() as any;
            const removeEventListenerSpy = spyOn(window, 'removeEventListener');

            instance.componentWillUnmount();

            expect(removeEventListenerSpy).not.toHaveBeenCalled();
        });

        it('should not call to window.removeEventListener when resize is true but position is not CENTERED', () => {
            const props = getProps();
            props.resize = true;
            const instance = mount(<SpinnerComponent {...props}/>).instance() as any;
            const removeEventListenerSpy = spyOn(window, 'removeEventListener');

            instance.componentWillUnmount();

            expect(removeEventListenerSpy).not.toHaveBeenCalled();
        });

        it('should call to window.removeEventListener when resize is true and position is CENTERED', () => {
            const props = getProps();
            props.resize = true;
            props.position = SpinnerPositionEnum.CENTERED;
            const instance = mount(<SpinnerComponent {...props}/>).instance() as any;
            const removeEventListenerSpy = spyOn(window, 'removeEventListener');

            instance.componentWillUnmount();

            expect(removeEventListenerSpy).toHaveBeenCalled();
        });
    });

    describe('setUpSpinner', () => {

        beforeEach(() => {
            window.getComputedStyle = jest.fn().mockReturnValue({ getComputedStyle: jest.fn(), getPropertyValue: jest.fn() });
        });

        it('should set the disabled prop of the parentNode to true not call to parsePixelsToNumber when the spinner type is global and loading is true', () => {
            const instance = mount(<SpinnerComponent {...getProps()}/>).instance() as any;
            const ref = getRef();
            instance.ref = ref;

            instance.setUpSpinner();

            expect(ref.current.parentNode.disabled).toBe(true);
            expect(spinnerService.parsePixelsToNumber).not.toHaveBeenCalled();
        });

        it('should not call to parsePixelsToNumber when the spinner position is inline and custom', () => {
            const props = getProps();
            props.position = SpinnerPositionEnum.INLINE;
            props.customSpinner = <div/>;
            const instance = mount(<SpinnerComponent {...props}/>).instance() as any;
            instance.ref = getRef();

            instance.setUpSpinner();

            expect(spinnerService.parsePixelsToNumber).not.toHaveBeenCalled();
        });

        it('should call to parsePixelsToNumber and set the current style and firstChild height and width according to the width when position is CENTERED, isDefault and the parent width is smaller or equal than the height', () => {
            const props = getProps();
            props.position = SpinnerPositionEnum.CENTERED;
            const instance = mount(<SpinnerComponent {...props}/>).instance() as any;
            const ref = getRef();
            instance.ref = ref;

            instance.setUpSpinner();

            expect(spinnerService.parsePixelsToNumber).toHaveBeenCalled();
            expect(spinnerService.isDefaultSpinner).toHaveBeenCalled();
            expect(ref.current.firstChild.style.width).toEqual('2px');
            expect(ref.current.firstChild.style.height).toEqual('2px');
        });

        it('should call to parsePixelsToNumber and set the current style and firstChild height and width according to the height when position is CENTERED, isDefault and the parent height is smaller or equal than the width', () => {
            const props = getProps();
            props.position = SpinnerPositionEnum.CENTERED;
            const instance = mount(<SpinnerComponent {...props}/>).instance() as any;
            const ref = getRef();
            ref.current.parentNode.clientHeight = 20;
            ref.current.parentNode.clientWidth = 100;
            instance.ref = ref;

            instance.setUpSpinner();

            expect(spinnerService.parsePixelsToNumber).toHaveBeenCalled();
            expect(spinnerService.isDefaultSpinner).toHaveBeenCalled();
            expect(ref.current.firstChild.style.width).toEqual('4px');
            expect(ref.current.firstChild.style.height).toEqual('4px');
        });

        it('should call to parsePixelsToNumber and to getCenteredSpinnerFontSize when position is CENTERED and isDefault is false', () => {
            const props = getProps();
            props.position = SpinnerPositionEnum.CENTERED;
            const instance = mount(<SpinnerComponent {...props}/>).instance() as any;
            instance.ref = getRef();
            (spinnerService.isDefaultSpinner as jest.Mock).mockReturnValue(false);

            instance.setUpSpinner();

            expect(spinnerService.parsePixelsToNumber).toHaveBeenCalled();
            expect(spinnerService.isDefaultSpinner).toHaveBeenCalled();
            expect(spinnerService.getCenteredSpinnerFontSize).toHaveBeenCalled();
        });

        it('should call to parsePixelsToNumber and to getSpinnerFontSizeAspectRatio when position is INLINE and custom is undefined', () => {
            const props = getProps();
            props.position = SpinnerPositionEnum.INLINE;
            const instance = mount(<SpinnerComponent {...props}/>).instance() as any;
            instance.ref = getRef();

            instance.setUpSpinner();

            expect(spinnerService.parsePixelsToNumber).toHaveBeenCalled();
            expect(spinnerService.getSpinnerFontSizeAspectRatio).toHaveBeenCalled();
        });
    });

    describe('getContent', () => {
        it('should return customSpinner if it is defined', () => {
            const props = getProps();
            props.customSpinner = <div/>;
            const instance = mount(<SpinnerComponent {...props}/>).instance() as any;

            expect(instance.getContent()).toEqual(props.customSpinner);
        });

        it('should return a div with the spinner type as class and the color style with the default white when isDefaultSpinner returns false and customSpinner and color are not defined', () => {
            const props = getProps();
            props.spinnerType = SpinnerTypeEnum.CIRCLE_DOTS;
            const instance = mount(<SpinnerComponent {...props}/>).instance() as any;

            (spinnerService.isDefaultSpinner as jest.Mock).mockReturnValue(false);

            const wrapper = mount(instance.getContent());

            expect(wrapper.find('.' + SpinnerTypeEnum.CIRCLE_DOTS).length).toEqual(1);
            expect((wrapper.prop('style') as any).color).toContain(SPINNER_CONSTANTS.DEFAULT_COLORS.WHITE);
        });

        it('should return a div with the spinner type as class and the color style with the passed color when isDefaultSpinner returns false and customSpinner and color is', () => {
            const props = getProps();
            props.spinnerType = SpinnerTypeEnum.CIRCLE_DOTS;
            props.color = 'red';
            const instance = mount(<SpinnerComponent {...props}/>).instance() as any;

            (spinnerService.isDefaultSpinner as jest.Mock).mockReturnValue(false);

            const wrapper = mount(instance.getContent());

            expect(wrapper.find('.' + SpinnerTypeEnum.CIRCLE_DOTS).length).toEqual(1);
            expect((wrapper.prop('style') as any).color).toContain('red');
        });

        it('should return a div with the default class and the border-top style with the default blue and grey when isDefaultSpinner and customSpinner, color and secondaryColor are not defined', () => {
            const props = getProps();
            props.spinnerType = undefined;
            const instance = mount(<SpinnerComponent {...props}/>).instance() as any;
            const wrapper = mount(instance.getContent());

            expect(wrapper.find('.' + SpinnerTypeEnum.DEFAULT).length).toEqual(1);
            expect((wrapper.prop('style') as any).borderTop).toContain(SPINNER_CONSTANTS.DEFAULT_COLORS.BLUE);
            expect((wrapper.prop('style') as any).border).toContain(SPINNER_CONSTANTS.DEFAULT_COLORS.SECONDARY);
        });

        it('should return a div with the default class and the border-top style with the passed color and border with secondaryColor when isDefaultSpinner, customSpinner is not defined and color and secondaryColor are', () => {
            const props = getProps();
            props.spinnerType = undefined;
            props.color = 'red';
            props.secondaryColor = 'red';

            const instance = mount(<SpinnerComponent {...props}/>).instance() as any;
            const wrapper = mount(instance.getContent());

            expect(wrapper.find('.' + SpinnerTypeEnum.DEFAULT).length).toEqual(1);
            expect((wrapper.prop('style') as any).borderTop).toContain('red');
            expect((wrapper.prop('style') as any).border).toContain('red');
        });
    });
});

const getProps = (): SpinnerComponentProps => ({
    loading: true,
    position: SpinnerPositionEnum.GLOBAL,
    resize: false,
    spinnerType: SpinnerTypeEnum.DEFAULT
});

const getRef = (): any => ({
    current: {
        parentNode: {
            disabled: false,
            clientHeight: 30,
            clientWidth: 10
        },
        firstChild: {
            style: {}
        },
        style: {}
    }
});
