module objects {
  export class Wall extends objects.GameObject {
    // Private Instance Variable
    _x: number;
    _y: number;
    // Public Properties

    // Constructor
    constructor(
      assetManager: createjs.LoadQueue,
      xWall: number,
      yWall: number
    ) {
      super(assetManager, "wall");
      this._x = xWall;
      this._y = yWall;
      this.Start();
    }

    // Private Methods

    // Public Methods

    // Initialization
    public Reset() {
      this.x = this._x;
      this.y = this._y;
    }

    public CheckBounds() {}

    public Move() {}

    public Start(): void {
      this.Reset();
    }
    public Update(): void {}
  }
}
