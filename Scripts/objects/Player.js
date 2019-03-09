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
var objects;
(function (objects) {
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        // Private Instance Variable
        // Public Properties
        // Constructor
        function Player(assetManager) {
            var _this = _super.call(this, assetManager, "orange") || this;
            _this.Start();
            return _this;
        }
        // Private Methods
        // Public Methods
        Player.prototype.Start = function () {
            this.y = 430;
        };
        Player.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        Player.prototype.Reset = function () { };
        Player.prototype.Move = function () {
            this.x = objects.Game.stage.mouseX;
        };
        Player.prototype.CheckBounds = function () {
            // Check right boundary
            if (this.x >= 640 - this.halfWidth) {
                this.x = 640 - this.halfWidth;
            }
            // Check left boundary
            if (this.x <= this.halfWidth) {
                this.x = this.halfWidth;
            }
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=Player.js.map