const { sum } = require('./intro')

describe('Sum should return ', () => {
	test('Sum of two values', () => {
		expect(sum(1, 3)).toBe(4)
		expect(sum(3, 4)).toEqual(7)
	})

	test('Correct comparing', () => {
		expect(sum(2, 3)).toBeGreaterThan(4)
		expect(sum(2, 3)).toBeGreaterThanOrEqual(5)
		expect(sum(2, 3)).toBeLessThan(10)
		expect(sum(2, 3)).toBeLessThanOrEqual(5)
	})

	test('Correct sum of two floats', () => {
		expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
	})
})

