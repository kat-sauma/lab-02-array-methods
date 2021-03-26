const {
    mapResult,
    filter,
    findIndex,
    reduce,
    every
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
        it('returns `true` or a truthy value for all ages under 21.',   () => {
            const under21 = [16, 24, 36, 45];
            const cb2 = x => x <= 21;

            expect(filter(under21, cb2)).toBeTruthy();
            });
        });

        describe('find Index', () => {
            it('returns the index of the first item whose callback returns `true` or a truthy value or -1 if nothing found.',    () => {

                const areaCodes = [908, 732, 614, 714];
                const isOhio = (item) => item === (614);

                expect(findIndex(areaCodes, isOhio)).toEqual(2);
            });
        });

        describe('reduce', () => {
            it('returns the final value of an accumulator taking an array and a callback function.',    () => {

                const array = [1, 2, 3, 4];
                const cb = (accumulator, x) => accumulator + x;
                let initialValue = 0;

                expect(reduce(array, cb, initialValue)).toEqual(10);
            });
        });

        describe('every', () => {
            it('returns an overall `true` value if all callback return `true` or a truthy value.', () => {

                const array = [2, 4, 5, 6];
                const cb = x => x % 2;

                expect(every(array, cb)).toBeTruthy();
            });
        });

    });

