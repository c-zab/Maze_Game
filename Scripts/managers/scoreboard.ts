module managers {
  export class ScoreBoard {
    // private instance variables
    private _score: number;
    private _highScore: number;

    // public instance variables
    public ScoreLabel: objects.Label;
    public HighScoreLabel: objects.Label;

    // public properties
    get Score(): number {
      return this._score;
    }

    set Score(newScore: number) {
      this._score = newScore;
      this.ScoreLabel.text = "Score: " + this._score;
    }

    get HighScore(): number {
      return this._highScore;
    }

    set HighScore(newHighScore: number) {
      this._highScore = newHighScore;
      this.HighScoreLabel.text = "High Score: " + this._highScore;
    }

    // constructors
    constructor() {
      this._initialize();
    }

    // private methods
    private _initialize(): void {
      this.ScoreLabel = new objects.Label(
        "Score: 99999",
        "20px",
        "Consolas",
        "#FFFF00",
        500,
        10,
        false
      );
      this.HighScoreLabel = new objects.Label(
        "High Score: 99999",
        "40px",
        "Consolas",
        "#FFFF00",
        320,
        140,
        true
      );

      this.Score = 0;
      this.HighScore = 0;
    }

    // public methods
  }
}
