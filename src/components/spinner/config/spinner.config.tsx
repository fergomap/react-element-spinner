interface SpinnerConfig {
    DEFAULT_COLORS: {
        BLUE: string;
        WHITE: string;
        BACKGROUND: string;
        SECONDARY: string;
    };
    FONT_SIZE: {
        CIRCLE_DOTS: number;
        CIRCLE_DOTS_COLLAPSE: number;
    };
    ASPECT_RATIO: {
        CENTERED_DEFAULT: number;
        CENTERED_NOT_DEFAULT: number;
        CIRCLE_DOTS: number;
        CIRCLE_DOTS_COLLAPSE: number;
    };
}

export const SPINNER_CONSTANTS: SpinnerConfig = {
    DEFAULT_COLORS: {
        BLUE: '#3578e5',
        WHITE: '#ffffff',
        BACKGROUND: '#d3d3d3',
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
