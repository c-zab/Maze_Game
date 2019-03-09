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
    var Grass = /** @class */ (function (_super) {
        __extends(Grass, _super);
        // Public Properties
        // Constructor
        function Grass(assetManager) {
            var _this = _super.call(this, assetManager.getResult("grass")) || this;
            _this.Start();
            return _this;
        }
        // Private Methods
        Grass.prototype._reset = function () {
            this.y = -511;
        };
        Grass.prototype._move = function () {
            this.y += this._dy;
        };
        Grass.prototype._checkBounds = function () {
            if (this.y >= 0) {
                this._reset();
            }
        };
        // Public Methods
        Grass.prototype.Start = function () {
            this._dy = 2;
            this._reset();
        };
        Grass.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        return Grass;
    }(createjs.Bitmap));
    objects.Grass = Grass;
})(objects || (objects = {}));
//# sourceMappingURL=grass.js.map