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
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        // Public Properties
        // Constructor
        function PlayScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this._backgroundMusic = createjs.Sound.play("backMusic");
            _this._backgroundMusic.loop = -1;
            _this._backgroundMusic.volume = 0.3;
            _this.Start();
            return _this;
        }
        // Private Methods
        // Public Methods
        PlayScene.prototype.Start = function () {
            this._player = new objects.Player(this.assetManager);
            this._wall = new objects.Wall(this.assetManager, 100, 190);
            this._wall2 = new objects.Wall(this.assetManager, 550, 190);
            this._coinsnum = 3;
            this._coins = new Array();
            for (var count = 0; count < this._coinsnum; count++) {
                this._coins[count] = new objects.Coin(this.assetManager);
            }
            this._scoreboard = new managers.ScoreBoard();
            objects.Game.scoreBoardManager = this._scoreboard;
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            var _this = this;
            this._player.Update();
            this._wall.Update();
            this._wall2.Update();
            this._coins.forEach(function (coin) {
                coin.Update();
                managers.Collision.Check(_this._player, coin);
            });
            this._player.isDead = managers.Collision.Check(this._player, this._coins[1]);
            if (this._player.isDead) {
                this._backgroundMusic.stop();
                objects.Game.currentScene = config.Scene.OVER;
                if (objects.Game.highScore < objects.Game.scoreBoardManager.Score) {
                    objects.Game.scoreBoardManager.HighScore =
                        objects.Game.scoreBoardManager.Score;
                    objects.Game.highScore = objects.Game.scoreBoardManager.HighScore;
                }
            }
        };
        PlayScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this._player);
            this.addChild(this._wall);
            this.addChild(this._wall2);
            this._coins.forEach(function (coin) {
                _this.addChild(coin);
            });
            this.addChild(this._scoreboard.ScoreLabel);
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map