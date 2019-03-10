module scenes {
  export class OverScene extends objects.Scene {
    // Private Instance Variables
    private _gameOverLabel: objects.Label;
    private _restartButton: objects.Button;
    private _tryButton: objects.Button;
    private _scoreboard: managers.ScoreBoard;

    // Public Properties
    public HighScoreLabel: objects.Label;

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);
      this.Start();
    }

    // Private Methods
    private _restartButtonClick(): void {
      objects.Game.highScore = 0;
      objects.Game.currentScene = config.Scene.START;
    }
    private _tryButtonClick(): void {
      objects.Game.currentScene = config.Scene.PLAY;
    }

    // Public Methods
    public Start(): void {
      this._gameOverLabel = new objects.Label(
        "Game Over",
        "Bold 60px",
        "Arial",
        "#000000",
        320,
        140,
        true
      );

      this._tryButton = new objects.Button(
        this.assetManager,
        "tryButton",
        320,
        270
      );

      this._restartButton = new objects.Button(
        this.assetManager,
        "restartButton",
        320,
        340
      );

      this._scoreboard = new managers.ScoreBoard();
      this.Main();
    }

    public Update(): void {}

    public Main(): void {
      this.addChild(this._gameOverLabel);

      this.addChild(this._restartButton);
      this.addChild(this._tryButton);
      this.addChild(this._scoreboard.HighScoreLabel);

      this._scoreboard.HighScore = objects.Game.highScore;

      this._restartButton.on("click", this._restartButtonClick);
      this._tryButton.on("click", this._tryButtonClick);

      this._scoreboard.HighScore = objects.Game.highScore;
    }
  }
}
