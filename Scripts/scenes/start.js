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
    var StartScene = /** @class */ (function (_super) {
        __extends(StartScene, _super);
        // Public Properties
        // Constructor
        function StartScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Private Methods
        StartScene.prototype._startButtonClick = function () {
            objects.Game.currentScene = config.Scene.PLAY;
        };
        // Public Methods
        StartScene.prototype.Start = function () {
            this._welcomeLabel = new objects.Label("Start Game", "Bold 60px", "Arial", "#fff", 320, 140, true);
            this._startButton = new objects.Button(this.assetManager, "startButton", 320, 340);
            this._grass = new objects.Grass(this.assetManager);
            createjs.Tween.get(this._startButton, { loop: -1 })
                .to({ x: 320, y: 330 }, 500)
                .to({ x: 320, y: 340 }, 500);
            this.Main();
        };
        StartScene.prototype.Update = function () {
            this._grass.Update();
        };
        StartScene.prototype.Main = function () {
            this.addChild(this._grass);
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this._startButton.on("click", this._startButtonClick);
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map