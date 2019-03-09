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
            _this.Start();
            return _this;
        }
        // Private Methods
        PlayScene.prototype._dieButtonClick = function () {
            objects.Game.currentScene = config.Scene.OVER;
        };
        // Public Methods
        PlayScene.prototype.Start = function () {
            this._dieButton = new objects.Button(this.assetManager, "dieButton", 320, 340);
            this._grass = new objects.Grass(this.assetManager);
            this._player = new objects.Player(this.assetManager);
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            this._grass.Update();
            this._player.Update();
        };
        PlayScene.prototype.Main = function () {
            this.addChild(this._grass);
            this.addChild(this._player);
            this.addChild(this._dieButton);
            this._dieButton.on("click", this._dieButtonClick);
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map