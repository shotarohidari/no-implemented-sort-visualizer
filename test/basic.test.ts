import { iterBubbleSort, randInt, shuffle } from "../app/util"

test("1 + 1 = 2", () => {
  expect(1 + 1).toBe(2)
})

describe("randInt", () => {
  test("1以上10以下の値出す", () => {
    // とりあえず10回ぐらい動かす
    for (let i = 0; i < 10; i++) {
      const val = randInt(1, 10)
      expect(val).greaterThanOrEqual(1)
      expect(val).lessThanOrEqual(10)
    }
  })
})

describe("shuffle", () => {
  test("掻き回せる", () => {
    const ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    const shuffled = shuffle(ary)
    expect(shuffled).containSubset(ary)
  })
})

describe("iterBubbleSort", () => {
  test("ソート", () => {
    const ary = [4, 3, 6, 1]
    const expected = [1, 3, 4, 6]
    const gen = iterBubbleSort(ary)
    let result: number[] = []
    while (true) {
      const { done, value } = gen.next()
      if (done) {
        result = value
        break
      }
    }

    expect(result).toEqual(expected)
  })
  test("途中結果もチェック", () => {
    const ary = [4, 3, 6, 1]
    const expected = [[3,4,6,1],[3,4,1,6],[3,1,4,6],[1,3,4,6]];
    const gen = iterBubbleSort(ary)
    let result:number[] = [];
    result  = gen.next().value
    expect(result).toEqual(expected[0])
    result  = gen.next().value
    expect(result).toEqual(expected[1])
    result  = gen.next().value
    expect(result).toEqual(expected[2])
    result  = gen.next().value
    expect(result).toEqual(expected[3])
  })
})
