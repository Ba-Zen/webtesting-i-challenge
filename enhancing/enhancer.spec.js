const enhancer = require('./enhancer.js');
const { repair, succeed, fail } = require('./enhancer.js');

// test away!

describe('enhancer.js', () => {
  describe('repair() method', () => {
    it('restores durability to 100', () => {
      expect(repair({ durability: 89 }).durability).toBe(100);
      expect(repair({ durability: -89 }).durability).toBe(100);
      expect(repair({ durability: 100 }).durability).toBe(100);
      expect(repair({ durability: 0 })).toEqual({ durability: 100 });
    });
  });
});

describe('enhancer.js', () => {
  describe('succeed() method', () => {
    it('should increase item enhancement by 1 if less than 20', () => {
      expect(succeed({ enhancement: 10 }).enhancement).toBe(11);
      expect(succeed({ enhancement: 19 }).enhancement).toBe(20);
      expect(succeed({ enhancement: 20 }).enhancement).toBe(20);
    });
  });
});

describe('enhancer.js', () => {
  describe('fail() method', () => {
    it('the durabilty or enhancement is changed to respected value based on enhancement values', () => {
      expect(fail({ enhancement: 14, durability: 10 }).durability).toBe(5);
      expect(fail({ enhancement: 15, durability: 20 }).durability).toBe(10);
      expect(fail({ enhancement: 17, durability: 20 }).durability).toBe(10);
      expect(fail({ enhancement: 17, durability: 20 }).enhancement).toBe(16);
      expect(fail({ enhancement: 17, durability: 15 })).toEqual({
        enhancement: 16,
        durability: 5
      });
    });
  });
});
