interface GridBeeper {
  x: number;
  y: number;
}

type Direction = "north" | "east" | "south" | "west";

export default class Karel {
  private x: number = 0;
  private y: number = 0;
  private direction: Direction = "north";

  // A bit inefficient, but just storing the list of "dropped" beepers as an
  // array of locations
  private gridBeepers: GridBeeper[] = [];

  private debugMode: boolean = false;

  constructor(initialBeepers?: GridBeeper[], debugMode?: boolean) {
    if (initialBeepers !== undefined) {
      this.gridBeepers = initialBeepers;
    }

    if (debugMode !== undefined) {
      this.debugMode = debugMode;
    }
  }

  private findBeeper(): GridBeeper | undefined {
    return this.gridBeepers.find((value: GridBeeper) => {
      return (
        value.x === this.x &&
        value.y === this.y
      );
    });
  }

  // Move Karel 1 space in the direction it's facing
  public move() {
    switch (this.direction) {
      case "north":
        this.y = this.y - 1;
        break;
      case "east":
        this.x = this.x + 1;
        break;
      case "south":
        this.y = this.y + 1;
        break;
      case "west":
        this.x = this.x - 1;
        break;
    }

    if (this.debugMode) {
      console.log(`Karel moved ${this.direction} to (${this.x}, ${this.y})`);
    }
  }

  // Rotate Karel clockwise
  public turn() {
    switch (this.direction) {
      case "north":
        this.direction = "east";
        break;
      case "east":
        this.direction = "south";
        break;
      case "south":
        this.direction = "west";
        break;
      case "west":
        this.direction = "north";
        break;
    }

    if (this.debugMode) {
      console.log(`Karel turned to face ${this.direction}`);
    }
  }

  // Take a beeper off the current space, if there is one.
  // If there isn't one, crash.
  public pick() {
    const topBeeper = this.findBeeper();

    if (!topBeeper) {
      throw new Error(`Karel is not on a beeper (${this.x}, ${this.y})`);
    }

    const index = this.gridBeepers.indexOf(topBeeper);

    this.gridBeepers = [
      ...this.gridBeepers.slice(0, index),
      ...this.gridBeepers.slice(index + 1),
    ];

    if (this.debugMode) {
      console.log(`Karel picked up a beeper at (${this.x}, ${this.y})`);
    }
  }

  // Drop a beeper on the current space. Karel has an infinite "supply" of
  // beepers to drop.
  public drop() {
    this.gridBeepers = this.gridBeepers.concat({ x: this.x, y: this.y });

    if (this.debugMode) {
      console.log(`Karel dropped a beeper at (${this.x}, ${this.y})`);
    }
  }

  // Whether or not there is at least one beeper on the current space
  public isOnBeeper(): boolean {
    return Boolean(this.findBeeper());
  }

  // End the program, providing a report of Karel's last known position
  public end(): {
    x: number;
    y: number;
    direction: Direction;
    gridBeepers: GridBeeper[];
  } {
    const results = {
      x: this.x,
      y: this.y,
      direction: this.direction,
      gridBeepers: this.gridBeepers,
    };

    this.x = 0;
    this.y = 0;
    this.direction = "north";
    this.gridBeepers = [];

    return results;
  }
}
