module objects {
  export class Grass extends createjs.Bitmap {
    // Private Instance Variable

    private _dy: number;
    // Public Properties

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager.getResult("grass"));
      this.Start();
    }

    // Private Methods
    private _reset() {
      this.y = -511;
    }
    private _move() {
      this.y += this._dy;
    }

    private _checkBounds() {
      if (this.y >= 0) {
        this._reset();
      }
    }

    // Public Methods
    public Start(): void {
      this._dy = 2;
      this._reset();
    }
    public Update(): void {
      this._move();
      this._checkBounds();
    }
  }
}
