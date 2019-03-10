module scenes {
  export class PlayScene extends objects.Scene {
    // Private Instance Variables
    private _player: objects.Player;
    private _wall: objects.Wall;
    private _wall2: objects.Wall;
    private _coins: objects.Coin[];
    private _coinsnum: number;

    private _scoreboard: managers.ScoreBoard;

    private _backgroundMusic: createjs.AbstractSoundInstance;

    // Public Properties

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);
      this._backgroundMusic = createjs.Sound.play("backMusic");
      this._backgroundMusic.loop = -1;
      this._backgroundMusic.volume = 0.3;
      this.Start();
    }

    // Private Methods

    // Public Methods
    public Start(): void {
      this._player = new objects.Player(this.assetManager);
      this._wall = new objects.Wall(this.assetManager, 100, 190);
      this._wall2 = new objects.Wall(this.assetManager, 550, 190);
      this._coinsnum = 3;
      this._coins = new Array<objects.Coin>();

      for (let count = 0; count < this._coinsnum; count++) {
        this._coins[count] = new objects.Coin(this.assetManager);
      }
      this._scoreboard = new managers.ScoreBoard();
      objects.Game.scoreBoardManager = this._scoreboard;

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

      this._player.isDead = managers.Collision.Check(
        this._player,
        this._coins[1]
      );
      if (this._player.isDead) {
        this._backgroundMusic.stop();
        objects.Game.currentScene = config.Scene.OVER;
        if (objects.Game.highScore < objects.Game.scoreBoardManager.Score) {
          objects.Game.scoreBoardManager.HighScore =
            objects.Game.scoreBoardManager.Score;
          objects.Game.highScore = objects.Game.scoreBoardManager.HighScore;
        }
      }
    }

    public Main(): void {
      this.addChild(this._player);
      this.addChild(this._wall);
      this.addChild(this._wall2);
      this._coins.forEach(coin => {
        this.addChild(coin);
      });

      this.addChild(this._scoreboard.ScoreLabel);
    }
  }
}
