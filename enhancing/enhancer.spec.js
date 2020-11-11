const enhancer = require('./enhancer.js');
// test away!
const { success, fail, repair, get } = require('./enhancer')

let item = { name: 'TJ', enhancement: 0, durability: 20 }

describe('repair', () => {
    describe('repair function', () => {
       it('repair exists', () => {
           expect(repair).toBeDefined()
       })
       it('returns an object', () => {
           expect(repair(item)).toBeInstanceOf(Object)
       })
       it('returns an item with durability of 100', () => {
           let repairedItem = { name: 'TJ', enhancement: 0, durability: 100 }
           expect(repair(item)).toEqual(repairedItem)
       })
    })
})

describe('success', () => {

    describe('success function', () => {
       it('success exists', () => {
           expect(success).toBeDefined()
       })
       it('should return an item with its enhancement increased by 1, up to 20', () => {
        let enhItem = { name: 'TJ', enhancement: 1, durability: 100 }
        expect(success(item)).toEqual(enhItem)
       })
    })
})

describe("fail", () => {
    let item1 = { name: "TJ", enhancement: 16, durability: 20 };
    let item2 = { name: "TJ", enhancement: 17, durability: 20 };

    let failEn1 = { name: "TJ", enhancement: 1, durability: 95 };
    let failEn2 = { name: "TJ", enhancement: 16, durability: 10 };
    let failEn3 = { name: "TJ", enhancement: 16, durability: 10 };
    it("should return an item with its durability decreased by 5 if enhancement is less than 15", () => {
      expect(fail(item)).toEqual(failEn1);
    });
    it("should return an item with its durability decreased by 10 if enhancement is 15 or more", () => {
      expect(fail(item1)).toEqual(failEn2);
    });
    it("should return an item with its durability decreased by 1 if greater than 16", () => {
      expect(fail(item2)).toEqual(failEn3);
    });
  });




