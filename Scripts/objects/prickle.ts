module objects {
  export class Prikle extends objects.GameObject {
    // Private Instance Variable

    // Public Properties

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager, "prikles");
      this.x = 300;
      this.y = 200;
      this.Start();
    }

    // Private Methods

    // Public Methods
    public Start(): void {}
    public Update(): void {}
  }
}
