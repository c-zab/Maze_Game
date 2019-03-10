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
      this.x = 320;
      this.isDead = false;
    }
    public Update(): void {
      this.Move();
      this.CheckBounds();
    }

    public Reset() {}
    public Move() {
      // this.x = objects.Game.stage.mouseX;
      if (objects.Game.keyboardManager.moveLeft) {
        this.x -= 3;
      }
      if (objects.Game.keyboardManager.moveRight) {
        this.x += 3;
      }
      if (objects.Game.keyboardManager.moveUp) {
        this.y -= 3;
      }
      if (objects.Game.keyboardManager.moveDown) {
        this.y += 3;
      }
    }

    public CheckBounds() {
      // width = "640" height = "480"
      // Check right boundary
      if (this.x >= 640 - this.halfWidth) {
        this.x = 640 - this.halfWidth;
      }

      // Check left boundary
      if (this.x <= this.halfWidth) {
        this.x = this.halfWidth;
      }

      // Check up boundary
      if (this.y <= this.halfHeight) {
        this.y = this.halfHeight;
      }

      // Check down boundary
      if (this.y >= 454 - this.halfHeight) {
        this.y = 454 - this.halfHeight;
      }
    }
  }
}
