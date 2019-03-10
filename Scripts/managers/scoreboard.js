var managers;
(function (managers) {
    var ScoreBoard = /** @class */ (function () {
        // constructors
        function ScoreBoard(scoreNum) {
            if (scoreNum === void 0) { scoreNum = 0; }
            this._initialize();
            this.Score = scoreNum;
        }
        Object.defineProperty(ScoreBoard.prototype, "Score", {
            // public properties
            get: function () {
                return this._score;
            },
            set: function (newScore) {
                this._score = newScore;
                this.ScoreLabel.text = "Score: " + this._score;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "HighScore", {
            get: function () {
                return this._highScore;
            },
            set: function (newHighScore) {
                this._highScore = newHighScore;
                this.HighScoreLabel.text = "High Score: " + this._highScore;
            },
            enumerable: true,
            configurable: true
        });
        // private methods
        ScoreBoard.prototype._initialize = function () {
            this.ScoreLabel = new objects.Label("Score: 99999", "20px", "Arial", "#FFFF00", 500, 10, false);
            this.HighScoreLabel = new objects.Label("High Score: 99999", "40px", "Arial", "#FFFF00", 350, 220, true);
        };
        return ScoreBoard;
    }());
    managers.ScoreBoard = ScoreBoard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboard.js.map