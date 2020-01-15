module.exports = {
    "moduleFileExtensions": ["tsx", "js", "json", "jsx", "ts", "node"],
    "moduleDirectories": ['node_modules', 'src'],
    "moduleNameMapper": {
        "^.+\\.(css|scss)$": "identity-obj-proxy"
    },
    "setupFiles": [
        "<rootDir>/src/tests/tests-setup.tsx"
    ]
};
