module scenes {
  export class PlayScene extends objects.Scene {
    // Private Instance Variables
    private _dieButton: objects.Button;
    private _player: objects.Player;
    private _wall: objects.Wall;
    private _wall2: objects.Wall;
    private _coins: objects.Coin[];
    private _coinsnum: number;

    private backgroundMusic: createjs.AbstractSoundInstance;

    // Public Properties

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);
      let engineSound: createjs.AbstractSoundInstance = createjs.Sound.play(
        "backMusic"
      );
      engineSound.loop = -1;
      engineSound.volume = 0.3;
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

      this._player = new objects.Player(this.assetManager);
      this._wall = new objects.Wall(this.assetManager, 100, 190);
      this._wall2 = new objects.Wall(this.assetManager, 550, 190);
      this._coinsnum = 3;
      this._coins = new Array<objects.Coin>();

      for (let count = 0; count < this._coinsnum; count++) {
        this._coins[count] = new objects.Coin(this.assetManager);
      }

      this.Main();
    }

    public Update(): void {
      this._player.Update();
      this._wall.Update();
      this._wall2.Update();
      this._coins.forEach(coin => {
        coin.Update();
        managers.Collision.Check(this._player, coin);
      });
    }

    public Main(): void {
      this.addChild(this._player);
      this.addChild(this._wall);
      this.addChild(this._wall2);
      this.addChild(this._dieButton);
      this._coins.forEach(coin => {
        this.addChild(coin);
      });
      this._dieButton.on("click", this._dieButtonClick);
    }
  }
}
