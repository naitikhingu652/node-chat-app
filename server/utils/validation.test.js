const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        let res = isRealString('44');
        expect(res).toBeFalsy();
    });

    it('should rejct empty string values', () => {
        let res = isRealString('         ');
        expect(res).toBeFalsy();
    });

    it('should allow strings with non space characters', () => {
        let res = isRealString('   test  ');
        expect(res).toBeTruthy();
    });
});