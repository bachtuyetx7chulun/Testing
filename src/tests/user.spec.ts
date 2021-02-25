import sum from '../controllers/sum.controller'

test('Check sum', () => {
  expect(sum(1, 1)).toBe(2)
})
