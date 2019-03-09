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
    var Wall = /** @class */ (function (_super) {
        __extends(Wall, _super);
        // Public Properties
        // Constructor
        function Wall(assetManager, xWall, yWall) {
            var _this = _super.call(this, assetManager, "wall") || this;
            _this._x = xWall;
            _this._y = yWall;
            _this.Start();
            return _this;
        }
        // Private Methods
        // Public Methods
        // Initialization
        Wall.prototype.Reset = function () {
            this.x = this._x;
            this.y = this._y;
        };
        Wall.prototype.CheckBounds = function () {
            // check the bottom border
            // if (this.y >= 480 + this.height) {
            //   this.Reset();
            // }
        };
        Wall.prototype.Move = function () { };
        Wall.prototype.Start = function () {
            this.Reset();
        };
        Wall.prototype.Update = function () {
            // this.Move();
            // this.CheckBounds();
        };
        return Wall;
    }(objects.GameObject));
    objects.Wall = Wall;
})(objects || (objects = {}));
//# sourceMappingURL=wall.js.map