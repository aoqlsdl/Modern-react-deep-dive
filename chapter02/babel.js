import * as Babel from '@babel/standalone';
import { runtime } from 'webpack';

Babel.registerPlugin(
	'@bable/plugin-transform-react-jsx',
	require('@babel/plugin-transform-react-jsx')
);

const BABEL_CONFIG = {
	presets: [],
	plugins: [
		[
			'@bable/plugin-transform-react-jsx',
			{
				throwIfNamespace: false,
				runtime: 'automatic',
				importSource: 'custom-jsx-library',
			},
		],
	],
};

const SOURCE_CODE = `const ComponentA = <A>안녕하세요.</A>`;

// code 변수에 트랜스파일된 결과가 담김
const { code } = Babel.transform(SOURCE_CODE, BABEL_CONFIG);
