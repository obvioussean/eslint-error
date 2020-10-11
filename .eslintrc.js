module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    extends: [
        "react-app",
        "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
         ],
    plugins: [
        "@typescript-eslint",
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true // Allows for the parsing of JSX
        },
        project: "./tsconfig.json",
            
    },

};
