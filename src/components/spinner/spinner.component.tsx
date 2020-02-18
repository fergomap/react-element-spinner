import React, {ReactElement} from 'react';
import './spinner.component.scss';
import SpinnerComponentProps from './model/spinner.component.props';
import {SPINNER_CONSTANTS} from './config/spinner.config';
import {getCenteredSpinnerFontSize, getSpinnerFontSizeAspectRatio, isDefaultSpinner, parsePixelsToNumber} from './services/spinner.service';

class SpinnerComponent extends React.Component<SpinnerComponentProps, {}> {

    private ref: any = React.createRef();

    constructor(props: Readonly<SpinnerComponentProps>) {
        super(props);

        this.setUpSpinner = this.setUpSpinner.bind(this);
        this.getContent = this.getContent.bind(this);
    }

    componentDidMount(): void {
        this.setUpSpinner();
        if (this.props.resize && this.props.position === 'centered') {
            window.addEventListener('resize', this.setUpSpinner);
        }
    }

    componentDidUpdate(): void {
        this.setUpSpinner();
    }

    componentWillUnmount(): void {
        if (this.props.resize && this.props.position === 'centered') {
            window.removeEventListener('resize', this.setUpSpinner);
        }
    }

    setUpSpinner(): void {
        this.ref.current.parentNode.disabled = this.props.loading;
        const parentComputedStyle = window.getComputedStyle(this.ref.current.parentNode);

        if (this.props.position === 'centered') {
            const borderWidth = parsePixelsToNumber(parentComputedStyle.getPropertyValue('border-bottom-width'));
            const referenceSize = this.ref.current.parentNode.clientHeight > this.ref.current.parentNode.clientWidth ? this.ref.current.parentNode.clientWidth : this.ref.current.parentNode.clientHeight;

            if (isDefaultSpinner(this.props.spinnerType)) {
                const size = referenceSize / SPINNER_CONSTANTS.ASPECT_RATIO.CENTERED_DEFAULT + 'px';
                this.ref.current.firstChild.style.width = size;
                this.ref.current.firstChild.style.height = size;
            } else {
                this.ref.current.firstChild.style.fontSize = getCenteredSpinnerFontSize(referenceSize / SPINNER_CONSTANTS.ASPECT_RATIO.CENTERED_NOT_DEFAULT, this.props.spinnerType) + 'px';
            }

            this.ref.current.style.marginTop = '-' + parentComputedStyle.getPropertyValue('padding-top');
            this.ref.current.style.marginLeft = '-' + parentComputedStyle.getPropertyValue('padding-left');
            this.ref.current.style.width = (this.ref.current.parentNode.clientWidth + borderWidth) + 'px';
            this.ref.current.style.height = (this.ref.current.parentNode.clientHeight + borderWidth) + 'px';
        } else if (this.props.position === 'inline' && !this.props.customSpinner) {
            const fontSize = parentComputedStyle.getPropertyValue('font-size');
            const fontSizeNumber = parsePixelsToNumber(fontSize);
            this.ref.current.style.marginLeft = '5px';
            this.ref.current.style.width = fontSize;
            this.ref.current.style.minWidth = fontSize;
            this.ref.current.style.height = fontSize;
            this.ref.current.style.minHeight = fontSize;
            this.ref.current.firstChild.style.fontSize = fontSizeNumber * getSpinnerFontSizeAspectRatio(this.props.spinnerType) + 'px';
        }
    }

    getContent(): ReactElement {
        if (this.props.customSpinner) {
            return this.props.customSpinner;
        } else {
            const contentStyle = isDefaultSpinner(this.props.spinnerType) ?
                { border: 'solid 3px ' + (this.props.secondaryColor || SPINNER_CONSTANTS.DEFAULT_COLORS.SECONDARY), borderTop: 'solid 3px ' + (this.props.color || SPINNER_CONSTANTS.DEFAULT_COLORS.BLUE) } :
                { color: this.props.color || SPINNER_CONSTANTS.DEFAULT_COLORS.WHITE };
            return <div className={`loader ${this.props.spinnerType || 'default'}`} style={contentStyle}/>;
        }
    }

    render(): ReactElement {
        const background = this.props.position !== 'inline' && <div className="background" style={{backgroundColor: this.props.backgroundColor || SPINNER_CONSTANTS.DEFAULT_COLORS.BACKGROUND}}/>;

        return <div ref={this.ref} className={`loader-container ${this.props.loading ? '' : 'hidden'} ${this.props.position}`}>
                { this.getContent() }
                { background }
            </div>;
    }
}

export default SpinnerComponent;
