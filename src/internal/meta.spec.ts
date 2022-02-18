import Karel from "./karel";

test("karel starts at 0, 0, north", () => {
  const k = new Karel();
  const result = k.end();

  expect(result.x).toBe(0);
  expect(result.y).toBe(0);
  expect(result.direction).toBe("north");
});

test("karel moves and turns", () => {
  const k = new Karel();

  k.move();
  k.move();
  k.turn();
  k.move();
  k.move();

  const result = k.end();

  expect(result).toEqual({
    x: 2,
    y: -2,
    direction: "east",
    gridBeepers: [],
  });
});

test("karel picks up and drops beepers", () => {
  const k = new Karel();

  k.move();
  k.move();
  k.drop();
  k.drop();
  k.turn();
  k.move();
  k.move();
  k.turn();
  k.turn();
  k.move();
  k.move();
  k.pick();

  const result = k.end();

  expect(result).toEqual({
    x: 0,
    y: -2,
    direction: "west",
    gridBeepers: [{
      x: 0,
      y: -2,
    }],
  });
});
