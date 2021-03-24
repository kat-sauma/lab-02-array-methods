const {
    mapResult,
    filter,
} = require('./index');


    describe('map takes an array and callback', () => {
    it('creates a new `Array` with the return value of each called callback.', () => {
        const numbers = [1, 4, 6];
        const callback = x => x * 2;

    expect(mapResult(numbers, callback)).toEqual([2, 8, 12]);
    });

    describe('filters ages under 21', () => {
        it('returns `true` or a truthy value for all ages over 21.',    () => {
            const over21 = [24, 36, 45];
            const under21 = [16, 24, 36, 45];
            const cb = x => x >= 21;

        expect(filter(over21, cb)).toBeTruthy();
        });
        it('returns `false` or a falsy value for all ages under 21.',   () => {
            const under21 = [16, 24, 36, 45];
            const cb = x => x >= 21;

            expect(filter(under21, cb)).toBeFalsy();
            });
        });
    });

