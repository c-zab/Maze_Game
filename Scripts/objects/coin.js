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
    var Coin = /** @class */ (function (_super) {
        __extends(Coin, _super);
        // Private Instance Variables
        // Public Properties
        // Constructors
        function Coin(assetManager) {
            var _this = _super.call(this, assetManager, "coin") || this;
            _this.Start();
            return _this;
        }
        // Private Methods
        // Public Methods
        // Initialization
        Coin.prototype.Reset = function () {
            this.x = Math.random() * (640 - this.width) + this.halfWidth;
            this.y = -this.height;
            this._dx = Math.random() * 4 - 2;
            this._dy = Math.random() * 3 + 3;
        };
        Coin.prototype.CheckBounds = function () {
            // check the bottom border
            if (this.y >= 480 + this.height) {
                this.Reset();
            }
        };
        Coin.prototype.Move = function () {
            this.y += this._dy;
            this.x += this._dx;
        };
        Coin.prototype.Start = function () {
            this.Reset();
        };
        // Updates the Object every frame
        Coin.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        return Coin;
    }(objects.GameObject));
    objects.Coin = Coin;
})(objects || (objects = {}));
//# sourceMappingURL=coin.js.map