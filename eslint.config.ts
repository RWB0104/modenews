/**
 * ESLint 모듈
 *
 * @author RWB
 * @since 2025.07.23 Wed 14:21:31
 */

import baseConfig from '@itcode-dev/eslint-config/base';
import betterTailwindcssConfig from '@itcode-dev/eslint-config/better-tailwindcss';
import importConfig from '@itcode-dev/eslint-config/import';
import reactConfig from '@itcode-dev/eslint-config/react';
import sortKeysFixConfig from '@itcode-dev/eslint-config/sort-keys-fix';
import stylisticConfig from '@itcode-dev/eslint-config/stylistic';
import tseslintConfig from '@itcode-dev/eslint-config/tseslint';
import unusedImportsConfig from '@itcode-dev/eslint-config/unused-imports';
import tseslint from 'typescript-eslint';

import type { ConfigArray } from 'typescript-eslint';

export default [
	{ ignores: [ '**/vite-env.d.ts' ] },
	baseConfig,
	betterTailwindcssConfig,
	importConfig,
	reactConfig,
	sortKeysFixConfig,
	stylisticConfig,
	tseslintConfig,
	unusedImportsConfig,
	...tseslint.configs.recommendedTypeChecked,
	{
		languageOptions: {
			parserOptions: {
				project: [
					'tsconfig.app.json',
					'tsconfig.node.json'
				],
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				tsconfigRootDir: import.meta.dirname
			}
		}
	},

	{
		rules: {
			'@stylistic/object-curly-newline': [
				'error',
				{ multiline: true }
			],
			'@stylistic/space-before-function-paren': [
				'error',
				{
					anonymous: 'always',
					asyncArrow: 'always',
					named: 'never'
				}
			],
			'prefer-destructuring': [
				'error',
				{
					array: false,
					object: true
				}
			]
		}
	},
	{
		files: [
			'**/*.ts',
			'**/*.tsx'
		],
		rules: {
			'@better-tailwindcss/enforce-consistent-line-wrapping': 'off',
			'@import/named': 'off',
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/no-unsafe-type-assertion': 'off',
			'@typescript-eslint/promise-function-async': [
				'error',
				{ checkArrowFunctions: false }
			]
		}
	}
] as ConfigArray;