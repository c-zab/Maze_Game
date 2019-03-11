var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var OverScene = /** @class */ (function (_super) {
        __extends(OverScene, _super);
        // Constructor
        function OverScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Private Methods
        OverScene.prototype._restartButtonClick = function () {
            objects.Game.highScore = 0;
            objects.Game.currentScene = config.Scene.START;
        };
        OverScene.prototype._tryButtonClick = function () {
            objects.Game.currentScene = config.Scene.PLAY;
        };
        // Public Methods
        OverScene.prototype.Start = function () {
            this._gameOverLabel = new objects.Label("Game Over", "Bold 60px", "Arial", "#000000", 320, 140, true);
            this._tryButton = new objects.Button(this.assetManager, "tryButton", 320, 270);
            this._restartButton = new objects.Button(this.assetManager, "restartButton", 320, 340);
            this._scoreboard = new managers.ScoreBoard();
            createjs.Tween.get(this._tryButton, { loop: -1 })
                .to({ x: 320, y: 260 }, 500)
                .to({ x: 320, y: 270 }, 500);
            this.Main();
        };
        OverScene.prototype.Update = function () { };
        OverScene.prototype.Main = function () {
            this.addChild(this._gameOverLabel);
            this.addChild(this._restartButton);
            this.addChild(this._tryButton);
            this.addChild(this._scoreboard.HighScoreLabel);
            this._scoreboard.HighScore = objects.Game.highScore;
            this._restartButton.on("click", this._restartButtonClick);
            this._tryButton.on("click", this._tryButtonClick);
            this._scoreboard.HighScore = objects.Game.highScore;
        };
        return OverScene;
    }(objects.Scene));
    scenes.OverScene = OverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=over.js.map