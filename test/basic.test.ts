import { randInt } from "../app/uti";

test("1 + 1 = 2", () => {
  expect(1 + 1).toBe(2)
})



describe("randInt",() => {
  test("1以上10以下の値出す",() => {
    // とりあえず10回ぐらい動かす
    for(let i = 0; i < 10; i++) {
      const val = randInt(1,10);
      expect(val).greaterThanOrEqual(1);
      expect(val).lessThanOrEqual(10);
    }
  })
})