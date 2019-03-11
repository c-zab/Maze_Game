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
    var Prikle = /** @class */ (function (_super) {
        __extends(Prikle, _super);
        // Private Instance Variable
        // Public Properties
        // Constructor
        function Prikle(assetManager) {
            var _this = _super.call(this, assetManager, "prikles") || this;
            _this.x = 300;
            _this.y = 200;
            _this.Start();
            return _this;
        }
        // Private Methods
        // Public Methods
        Prikle.prototype.Start = function () { };
        Prikle.prototype.Update = function () { };
        return Prikle;
    }(objects.GameObject));
    objects.Prikle = Prikle;
})(objects || (objects = {}));
//# sourceMappingURL=prickle.js.map