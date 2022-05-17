import { resolve } from 'path';

export const projRoot = resolve(__dirname, '..');

/** dist */
export const buildOutput = resolve(projRoot, 'dist');
export const buildEsOutput = resolve(projRoot, 'es');
export const buildLibOutput = resolve(projRoot, 'lib');

export const projPackage = resolve(projRoot, 'package.json');
