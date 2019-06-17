const enhancer = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {
  describe('repair() method', () => {
    it('restores durability to 100', () => {
      const item = {
        name: 'item one',
        durability: 90,
        enhancement: 18
      };

      expect(enhancer.repair(item).durability).toBe(100);
    });
  });
});

describe('enhancer.js', () => {
  describe('succeed() method', () => {
    it('should increase item enhancement by 1 if less than 20', () => {
      const item = {
        name: 'sword',
        durability: 100,
        enhancement: 18
      };

      expect(enhancer.succeed(item).enhancement).toBe(19);
      expect(enhancer.succeed({ enhancement: 10 }).enhancement).toBe(11);
      expect(enhancer.succeed({ enhancement: 19 }).enhancement).toBe(20);
      expect(enhancer.succeed({ enhancement: 20 }).enhancement).toBe(20);

      //expect(enhancer.fail({ enhancement: 20 }).enhancement).toEqual(19);

      //   const expected = {
      //     name: 'sword',
      //     durability: 100,
      //     enhancement: 19
      //   };

      //   const maxEnhanced = {
      //     name: 'sword',
      //     durability: 100,
      //     enhancement: 20
      //   };

      //   const item = enhancer.succeed(original);
      //   expect(item).toEqual(expected);
      //console.log(item);
      //console.log(maxEnhanced);
    });
  });
});

describe('enhancer.js', () => {
  describe('fail() method', () => {
    it('should subtract durability by 5 if less than 15', () => {
      const original = {
        name: 'sword',
        durability: 100,
        enhancement: 14
      };
      const expected = {
        name: 'sword',
        durability: 95,
        enhancement: 14
      };

      const item = enhancer.fail(original);
      expect(item).toEqual(expected);
      //console.log(item);
    });
    it('subtract durability by 10 if enhancement more than 15,', () => {
      const original2 = {
        name: 'sword',
        durability: 100,
        enhancement: 17
      };
      const expected2 = {
        name: 'sword',
        durability: 90,
        enhancement: 16
      };

      const item2 = enhancer.fail(original2);
      expect(item2).toEqual(expected2);
      //console.log(item2);
    });

    it('subtract enhancement by 1 if enhancement is more than 16', () => {
      const original3 = {
        name: 'sword',
        durability: 100,
        enhancement: 17
      };
      const expected3 = {
        name: 'sword',
        durability: 90,
        enhancement: 16
      };

      const wand = {
        name: 'wand',
        durability: 100,
        enhancement: 20
      };

      expect(enhancer.fail({ enhancement: 17 }).enhancement).toEqual(16);
      expect(enhancer.fail({ enhancement: 20 }).enhancement).toEqual(19);

      const item3 = enhancer.fail(original3);
      expect(item3).toEqual(expected3);
      //console.log(item3);
    });
  });
});
