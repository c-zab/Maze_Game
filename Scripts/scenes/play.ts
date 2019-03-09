module scenes {
  export class PlayScene extends objects.Scene {
    // Private Instance Variables
    private _dieButton: objects.Button;
    // private _grass: objects.Grass;
    private _player: objects.Player;
    private _wall: objects.Wall;
    private _wall2: objects.Wall;

    // Public Properties

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);
      this.Start();
    }

    // Private Methods
    private _dieButtonClick(): void {
      objects.Game.currentScene = config.Scene.OVER;
    }

    // Public Methods
    public Start(): void {
      this._dieButton = new objects.Button(
        this.assetManager,
        "dieButton",
        320,
        340
      );

      // this._grass = new objects.Grass(this.assetManager);
      this._player = new objects.Player(this.assetManager);
      this._wall = new objects.Wall(this.assetManager, 100, 190);
      this._wall2 = new objects.Wall(this.assetManager, 550, 190);

      this.Main();
    }

    public Update(): void {
      // this._grass.Update();
      this._player.Update();
      this._wall.Update();
      this._wall2.Update();
    }

    public Main(): void {
      // this.addChild(this._grass);
      this.addChild(this._player);
      this.addChild(this._wall);
      this.addChild(this._wall2);
      this.addChild(this._dieButton);

      this._dieButton.on("click", this._dieButtonClick);
    }
  }
}
