import sum from "../sum";

test("should Calaculate sum of two number", () => {
  const result = sum(2, 5);

  expect(result).toBe(7);
});
