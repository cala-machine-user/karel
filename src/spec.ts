import Karel from "./internal/karel";
import { debugMode, moveKarel } from "./index";

test("Karel moves forward 4 spaces when starting with 4 beepers", () => {
  const k = new Karel([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ], debugMode);

  moveKarel(k);

  const result = k.end();
  expect(result.x).toBe(0);
  expect(result.y).toBe(-4);
});

test("Karel moves forward 1 space when starting with 1 beeper", () => {
  const k = new Karel([
    { x: 0, y: 0 },
  ], debugMode);

  moveKarel(k);

  const result = k.end();
  expect(result.x).toBe(0);
  expect(result.y).toBe(-1);
});

test("Karel does not move forward when starting with 0 beepers", () => {
  const k = new Karel([], debugMode);

  moveKarel(k);

  const result = k.end();
  expect(result.x).toBe(0);
  expect(result.y).toBe(0);
});
