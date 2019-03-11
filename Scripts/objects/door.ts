module objects {
  export class Door extends objects.GameObject {
    // Private Instance Variable

    // Public Properties

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager, "door");
      this.x = 320;
      this.y = 20;
      this.Start();
    }

    // Private Methods

    // Public Methods
    public Start(): void {}
    public Update(): void {}
  }
}
