
module.exports = {
    preset: 'ts-jest',
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.test.json'
        }
    },
    roots: [
        "<rootDir>/src/__tests__"
    ],
    testEnvironment: "node",
    moduleNameMapper: {
        "^.+\\.css$": "identity-obj-proxy",
        "^.+\\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/fileMock.js"
    }
};