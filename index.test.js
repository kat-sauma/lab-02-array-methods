const {
    mapResult,
    // ofAge,
} = require('./index');


    describe('map takes an array and callback', () => {
    it('creates a new `Array` with the return value of each called callback.', () => {
        const numbers = [1, 4, 6];
        const callback = x => x * 2;

    expect(mapResult(numbers, callback)).toEqual([2, 8, 12]);
    });

    describe.skip('filters ages under 21', () => {
        it('returns `true` or a truthy value for all ages over 21.',    () => {

        expect(ofAge([24, 36, 45])).toBeTruthy();
        
        it('returns `false` or a falsy value for all ages under 21.',   () => {
            expect(ofAge([16, 24, 36, 45])).toBeFalsy();
            });
        });
    });
});
