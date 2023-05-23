import { expect, test } from "vitest";
import { cumulativeSum } from "./cumulativeSum";

test("cumulative sum of an array", () => {
  expect(cumulativeSum([1, 2, 3, 4])).toBe(10);
  expect(cumulativeSum([-1, -2, -3])).toBe(-6);
});
