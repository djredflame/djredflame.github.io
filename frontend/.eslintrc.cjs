/* eslint-disable no-undef */
module.exports = {
    root: true,
    ignorePatterns: ['**/*'],
    overrides: [
    // TypeScript files
    {
        files: ['*.ts'],
        parser: '@typescript-eslint/parser',
        parserOptions: { project: ['tsconfig.json'], sourceType: 'module' },
        plugins: [
            '@typescript-eslint',
            '@angular-eslint',
            'import',
            'deprecation',
            'rxjs'
        ],
        extends: [
            'eslint:recommended',
            'plugin:@typescript-eslint/recommended-type-checked',
            'plugin:@typescript-eslint/stylistic-type-checked',
            'plugin:@angular-eslint/recommended',
            'plugin:@angular-eslint/template/process-inline-templates',
            'plugin:import/recommended',
            'plugin:rxjs/recommended',
            'eslint-config-prettier'
        ],
        rules: {
            // Type safety
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
            '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: false }],
            '@typescript-eslint/array-type': ['error', { default: 'generic' }],

            // Clean Code
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'no-magic-numbers': ['warn', { ignore: [-1, 0, 1], enforceConst: true, detectObjects: false }],
            'import/order': ['warn', { 'newlines-between': 'always' }],
            'deprecation/deprecation': 'warn',

            // Angular specifics
            '@angular-eslint/prefer-on-push-component-change-detection': 'error',
            '@angular-eslint/use-lifecycle-interface': 'off',
            '@angular-eslint/no-host-metadata-property': 'off',

            // RxJS
            'rxjs/finnish': ['warn', { functions: false, methods: false, parameters: true, properties: true, variables: true }],
            'rxjs/no-ignored-subscription': 'error',
            'rxjs/no-exposed-subjects': 'warn'
        }
    },

    // HTML templates
    {
        files: ['*.html'],
        plugins: ['@angular-eslint/template'],
        extends: ['plugin:@angular-eslint/template/recommended'],
        rules: {
            // A11y
            '@angular-eslint/template/accessible-name': 'warn',
            '@angular-eslint/template/alt-text': 'error',
            '@angular-eslint/template/click-events-have-key-events': 'error',
            '@angular-eslint/template/mouse-events-have-key-events': 'warn',
            '@angular-eslint/template/no-positive-tabindex': 'warn'
            }
        }
    ]
};