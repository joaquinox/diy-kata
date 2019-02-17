const { reachDestination } = require('../src');

describe('reachDestination', () => {
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(44, 10)).toBe('I should be there in 4.5 hours')
    expect(reachDestination(120, 70)).toBe('I should be there in 2 hours')
    expect(reachDestination(310, 60)).toBe('I should be there in 5.5 hours')
  });
});
