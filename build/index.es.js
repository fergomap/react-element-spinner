function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

import React from 'react';

___$insertStyle(".hidden {\n  display: none !important;\n}\n\nspan {\n  color: white;\n  margin-top: 10px;\n  z-index: 1;\n}\n\n.background {\n  width: 100%;\n  height: 100%;\n  opacity: 0.7;\n  position: absolute;\n  z-index: 1;\n}\n\n.inline {\n  display: inline;\n}\n\n.centered {\n  position: absolute;\n}\n\n.loader-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.loader-container.centered {\n  flex-direction: column;\n}\n\n.loader {\n  z-index: 2;\n}\n\n.global {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  z-index: 5;\n}\n.global .loader.default {\n  width: 100px;\n  height: 100px;\n}\n\n.default {\n  border: 3px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 3px solid #3578E5;\n  width: calc(100% - 6px);\n  height: calc(100% - 6px);\n  -webkit-animation: spin 1s linear infinite;\n  animation: spin 1s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.circle-dots {\n  color: #ffffff;\n  font-size: 10px;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  -webkit-animation: circle-dots 1.6s infinite linear;\n  animation: circle-dots 1.6s infinite linear;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n}\n\n@-webkit-keyframes circle-dots {\n  0%, 100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n  }\n  12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n  }\n  75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n  }\n  87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n  }\n}\n@keyframes circle-dots {\n  0%, 100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n  }\n  12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n  }\n  75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n  }\n  87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n  }\n}\n.circle-dots-collapse {\n  color: #ffffff;\n  font-size: 90px;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  margin: 72px auto;\n  position: relative;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: circle-dots-collapse 1.7s infinite ease, round 1.7s infinite ease;\n  animation: circle-dots-collapse 1.7s infinite ease, round 1.7s infinite ease;\n}\n\n@-webkit-keyframes circle-dots-collapse {\n  0% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n  5%, 95% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n  10%, 59% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n  }\n  20% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n  }\n  38% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n  }\n  100% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n}\n@keyframes circle-dots-collapse {\n  0% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n  5%, 95% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n  10%, 59% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n  }\n  20% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n  }\n  38% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n  }\n  100% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n  }\n}\n@-webkit-keyframes round {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes round {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}");

const SPINNER_CONSTANTS = {
    DEFAULT_COLORS: {
        BLUE: '#3578e5',
        WHITE: '#ffffff',
        BACKGROUND: 'black',
        SECONDARY: '#f3f3f3'
    },
    FONT_SIZE: {
        CIRCLE_DOTS: 10,
        CIRCLE_DOTS_COLLAPSE: 90
    },
    ASPECT_RATIO: {
        CENTERED_DEFAULT: 5,
        CENTERED_NOT_DEFAULT: 2,
        CIRCLE_DOTS: 0.15,
        CIRCLE_DOTS_COLLAPSE: 0.7
    }
};
//# sourceMappingURL=spinner.config.js.map

const getSpinnerFontSizeAspectRatio = (spinnerType) => {
    switch (spinnerType) {
        case 'circle-dots':
            return SPINNER_CONSTANTS.ASPECT_RATIO.CIRCLE_DOTS;
        case 'circle-dots-collapse':
            return SPINNER_CONSTANTS.ASPECT_RATIO.CIRCLE_DOTS_COLLAPSE;
        default:
            return 0;
    }
};
const getCenteredSpinnerFontSize = (referenceSize, spinnerType) => {
    switch (spinnerType) {
        case 'circle-dots':
            return referenceSize > SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS ? SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS : referenceSize;
        case 'circle-dots-collapse':
            return referenceSize > SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS_COLLAPSE ? SPINNER_CONSTANTS.FONT_SIZE.CIRCLE_DOTS_COLLAPSE : referenceSize;
        default:
            return 0;
    }
};
const isDefaultSpinner = (spinnerType) => {
    return !spinnerType || spinnerType === 'default';
};
const parsePixelsToNumber = (pixels) => {
    return parseInt(pixels.replace('px', ''));
};
//# sourceMappingURL=spinner.service.js.map

class SpinnerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.setUpSpinner = this.setUpSpinner.bind(this);
        this.getContent = this.getContent.bind(this);
    }
    componentDidMount() {
        this.setUpSpinner();
        if (this.props.resize && this.props.position === 'centered') {
            window.addEventListener('resize', this.setUpSpinner);
        }
    }
    componentDidUpdate() {
        this.setUpSpinner();
    }
    componentWillUnmount() {
        if (this.props.resize && this.props.position === 'centered') {
            window.removeEventListener('resize', this.setUpSpinner);
        }
    }
    setUpSpinner() {
        this.ref.current.parentNode.disabled = this.props.loading;
        const parentComputedStyle = window.getComputedStyle(this.ref.current.parentNode);
        if (this.props.position === 'centered') {
            const borderWidth = parsePixelsToNumber(parentComputedStyle.getPropertyValue('border-bottom-width'));
            const referenceSize = this.ref.current.parentNode.clientHeight > this.ref.current.parentNode.clientWidth ? this.ref.current.parentNode.clientWidth : this.ref.current.parentNode.clientHeight;
            if (isDefaultSpinner(this.props.spinnerType)) {
                const size = referenceSize / SPINNER_CONSTANTS.ASPECT_RATIO.CENTERED_DEFAULT + 'px';
                this.ref.current.firstChild.style.width = size;
                this.ref.current.firstChild.style.height = size;
            }
            else {
                this.ref.current.firstChild.style.fontSize = getCenteredSpinnerFontSize(referenceSize / SPINNER_CONSTANTS.ASPECT_RATIO.CENTERED_NOT_DEFAULT, this.props.spinnerType) + 'px';
            }
            this.ref.current.style.marginTop = '-' + parentComputedStyle.getPropertyValue('padding-top');
            this.ref.current.style.marginLeft = '-' + parentComputedStyle.getPropertyValue('padding-left');
            this.ref.current.style.width = (this.ref.current.parentNode.clientWidth + borderWidth) + 'px';
            this.ref.current.style.height = (this.ref.current.parentNode.clientHeight + borderWidth) + 'px';
        }
        else if (this.props.position === 'inline' && !this.props.customSpinner) {
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
    getContent() {
        if (this.props.customSpinner) {
            return this.props.customSpinner;
        }
        else {
            const contentStyle = isDefaultSpinner(this.props.spinnerType) ?
                { border: 'solid 3px ' + (this.props.secondaryColor || SPINNER_CONSTANTS.DEFAULT_COLORS.SECONDARY), borderTop: 'solid 3px ' + (this.props.color || SPINNER_CONSTANTS.DEFAULT_COLORS.BLUE) } :
                { color: this.props.color || SPINNER_CONSTANTS.DEFAULT_COLORS.WHITE };
            return React.createElement("div", { className: `loader ${this.props.spinnerType || 'default'}`, style: contentStyle });
        }
    }
    render() {
        const background = this.props.position !== 'inline' && React.createElement("div", { className: "background", style: { backgroundColor: this.props.backgroundColor || SPINNER_CONSTANTS.DEFAULT_COLORS.BACKGROUND } });
        return React.createElement("div", { ref: this.ref, className: `loader-container ${this.props.loading ? '' : 'hidden'} ${this.props.position}` },
            this.getContent(),
            background,
            this.props.message && React.createElement("span", null, this.props.message));
    }
}
//# sourceMappingURL=spinner.component.js.map

export { SpinnerComponent };
//# sourceMappingURL=index.es.js.map
