import tsEsLint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    ...tsEsLint.configs.recommended,

    {
        files: ['**/*.ts'],
        ignores: ['dist/**'],
        languageOptions: {
            parser: tsEsLint.parser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module'
            },
            globals: {
                jest: 'readonly'
            }
        },
        rules: {
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-empty-object-type': 'off',

            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    args: 'none',
                    vars: 'all',
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    ignoreRestSiblings: true
                }
            ]
        }
    },

    {
        files: ['**/*.js'],
        rules: {
            '@typescript-eslint/no-var-requires': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/no-unsafe-call': 'off'
        }
    }
]);