const { humanCatDogYears } = require('../src');

describe('humanCatDogYears', () => {
    it('returns array of human, cat and dog years when passed human years', () => {
        expect(humanCatDogYears(4)).toEqual([4, 32, 34])
        expect(humanCatDogYears(10)).toEqual([10, 56, 64])
        expect(humanCatDogYears(17)).toEqual([17, 84, 99])
    });
});
