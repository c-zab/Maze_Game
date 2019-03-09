module objects {
  export class Player extends objects.GameObject {
    // Private Instance Variable

    // Public Properties

    // Variables
    public isDead: boolean;

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager, "orange");
      this.Start();
    }

    // Private Methods

    // Public Methods
    public Start(): void {
      this.y = 430;
      this.isDead = false;
    }
    public Update(): void {
      this.Move();
      this.CheckBounds();
    }

    public Reset() {}
    public Move() {
      this.x = objects.Game.stage.mouseX;
    }

    public CheckBounds() {
      // Check right boundary
      if (this.x >= 640 - this.halfWidth) {
        this.x = 640 - this.halfWidth;
      }

      // Check left boundary
      if (this.x <= this.halfWidth) {
        this.x = this.halfWidth;
      }
    }
  }
}
