import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
        rules: {
            indent: ['warn', 4],
            'no-unused_vars': [
                'warn',
                {
                    args: 'none', // Don't check unused arguments
                    varsIgnorePattern: '^_', // Ignore variables starting with _
                    argsIgnorePattern: '^_', // Ignore arguments starting with _
                    caughtErrors: 'none', // Don't check unused caught errors
                    destructuredArrayIgnorePattern: '^_', // Ignore unused destructured array elements
                }
            ],
            quotes: ['warn', 'single'],
        },
    },
];

export default eslintConfig;
