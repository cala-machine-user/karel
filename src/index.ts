import Karel from "./internal/karel";

/**
 * Karel exists on an infinite 2D grid. Each space on this grid has zero or more
 * "beepers" on it. Karel can drop and pick up these beepers, when on that
 * space.
 *
 * Karel begins at (0,0), facing north.
 */

/**
 * Basic Instructions
 *
 * Karel _only_ has the following commands. Notably, Karel cannot store
 * variables, pass values around, or use any type of memory besides the current
 * call stack.
 *
 * `k.move()` - Move forward one space in the direction Karel is facing.
 * `k.turn()` — Rotate 90 degrees clockwise
 * `k.pick()` — Pick up one beeper on the current space
 *              (if there is a beeper; otherwise it will crash)
 * `k.drop()` — Drop one beeper on the current space
 *              (Karel has infinite beepers to drop)
 */

/**
 * Control Flow
 *
 * Karel has several simple control flow constructs. Each one can _only_ contain
 * other valid KAREL instructions.
 *
 * Karel has a simple if/else conditional — is there at least one beeper on my
 * current location?:
 * ```
 * if (k.isOnBeeper()) {
 *   // code here
 * } else {
 *   // code here
 * }
 * ```
 *
 * Karel can define functions, but they take no arguments and have no return
 * values.
 * ```
 * function foo() {
 *   // code here
 * }
 *
 * foo();
 * ```
 *
 * And one type of loop:
 * ```
 * while (k.isOnBeeper()) {
 *   // Code here
 * }
 * ```
 */

/**
 * Your challenge: Create a function which handles a Karel instance as follows:
 *
 *   - You start at some point on the infinite grid, facing north.
 *   - On the same point you start at, there may be zero or more "beepers" at
 *     your current location
 *   - Your goal is to move Karel north, the same number of spaces as there were
 *     beepers at your starting position. So, for example, if you started with
 *     3 beepers:
 *
 *                               ---------------
 *                              | . . . . . . . |
 *                              | . . . . . . . |
 *                              | . . . . . . . |
 *                              | . . . ▲ . . . |
 *                              | . . . . . . . |
 *                               ---------------
 *     Karel should move to:
 *
 *                               ---------------
 *                              | . . . ▲ . . . |
 *                              | . . . . . . . |
 *                              | . . . . . . . |
 *                              | . . . . . . . |
 *                              | . . . . . . . |
 *                               ---------------
 */

export const debugMode = false;

export function moveKarel(k: Karel) {
  // Your implementation goes here!
  k;
}
