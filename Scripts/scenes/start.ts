module scenes {
  export class StartScene extends objects.Scene {
    // Private Instance Variables
    private _welcomeLabel: objects.Label;
    private _startButton: objects.Button;

    private _grass: objects.Grass;

    // Public Properties

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);
      this.Start();
    }

    // Private Methods
    private _startButtonClick(): void {
      objects.Game.currentScene = config.Scene.PLAY;
    }

    // Public Methods
    public Start(): void {
      this._welcomeLabel = new objects.Label(
        "Start Game",
        "Bold 60px",
        "Arial",
        "#fff",
        320,
        140,
        true
      );

      this._startButton = new objects.Button(
        this.assetManager,
        "startButton",
        320,
        340
      );

      this._grass = new objects.Grass(this.assetManager);

      createjs.Tween.get(this._startButton, { loop: -1 })
        .to({ x: 320, y: 330 }, 500)
        .to({ x: 320, y: 340 }, 500);

      this.Main();
    }

    public Update(): void {
      this._grass.Update();
    }

    public Main(): void {
      this.addChild(this._grass);
      this.addChild(this._welcomeLabel);

      this.addChild(this._startButton);

      this._startButton.on("click", this._startButtonClick);
    }
  }
}
