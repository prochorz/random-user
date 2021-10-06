module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    env: { 'jest/globals': true },
    plugins: [
        'jest',
        '@typescript-eslint'
    ],
    extends: [
        'plugin:jest/recommended',
        'airbnb-base/legacy',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        'linebreak-style': 'off', // for windows
        'no-new': 'warn',
        semi: ['error', 'always'],
        indent: ['error', 4, { SwitchCase: 1 }],
        'max-len': [
            'error',
            {
                code: 120,
                ignoreComments: true,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
                ignorePattern: '(^import\\s.+\\sfrom\\s.+;$)|(\\}\\sfrom\\s.+;$)'
            }
        ],
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'vue/html-self-closing': 'off',
        'no-use-before-define': 'off',
        // 'no-use-before-define': [
        // 'error',
        // {
        // functions: false,
        // classes: true,
        // },
        // ],
        '@typescript-eslint/no-use-before-define': 'off',
        // '@typescript-eslint/no-use-before-define': [
        // 'error',
        // {
        // functions: false,
        // classes: true,
        // },
        // ],
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^h$',
                varsIgnorePattern: '^h$'
            }
        ],
        '@typescript-eslint/indent': [
            'error',
            4,
            {
                ignoredNodes: [
                    'TSTypeReference', 'TSTypeReference *',
                    'TSTypeParameterInstantiation', 'TSTypeParameterInstantiation *'
                ]
            }
        ],
        'no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^h$',
                varsIgnorePattern: '^h$'
            }
        ],
        'space-before-function-paren': 'off',
        quotes: ['error', 'single'],
        'comma-dangle': ['error', 'never'],
        // vue rules
        'vue/custom-event-name-casing': 'off',
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                closeBracket: 0,
                ignores: []
            }
        ],
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 3,
                multiline: {
                    max: 1,
                    allowFirstLine: false
                }
            }
        ],
        'vue/html-closing-bracket-newline': [
            'error',
            {
                singleline: 'never',
                multiline: 'always'
            }
        ],
        'vue/component-name-in-template-casing': [
            'error',
            'PascalCase',
            {
                registeredComponentsOnly: true,
                ignores: []
            }
        ],
        'vue/prop-name-casing': ['error', 'camelCase'],
        'vue/no-v-html': 'off',
        'vue/script-indent': [
            'error',
            4,
            {
                baseIndent: 0,
                switchCase: 0,
                ignores: []
            }
        ],
        'vue/match-component-file-name': [
            'error',
            {
                extensions: ['jsx'],
                shouldMatchCase: false
            }
        ],
        'vue/no-unused-components': ['error', {
            ignoreWhenBindingPresent: true
        }]
    }
};
