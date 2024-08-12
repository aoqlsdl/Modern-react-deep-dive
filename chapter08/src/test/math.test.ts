import test from 'node:test';
import { expect } from '@jest/globals';

const { sum } = require('../unit02/math');

test('두 인수가 덧셈이 되어야 한다.', () => {
	expect(sum(1, 2)).toBe(3);
});

test('두 인수가 덧셈이 되어야 한다.', () => {
	expect(sum(2, 3)).toBe(6); // 에러
});
