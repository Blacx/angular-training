var Vehicle = /** @class */ (function () {
    function Vehicle() {
        this._myroperty = 'secret';
    }
    Vehicle.prototype.move = function () {
        throw new Error("Method not implemented.");
    };
    Vehicle.prototype.stop = function () {
        throw new Error("Method not implemented.");
    };
    Vehicle.prototype.setSpeed = function (speed) {
        throw new Error("Method not implemented.");
    };
    Vehicle.prototype.getSpeed = function () {
        throw new Error("Method not implemented.");
    };
    Vehicle.prototype.getColor = function () {
        return this._color;
    };
    Vehicle.prototype.setColor = function (color) {
        this._color = color;
    };
    Object.defineProperty(Vehicle.prototype, "myProperty", {
        get: function () {
            return this._myroperty;
        },
        set: function (value) {
            this._myroperty = value;
        },
        enumerable: false,
        configurable: true
    });
    return Vehicle;
}());
var kendaraan1 = new Vehicle();
kendaraan1.wheel = 4;
//console.log(kendaraan1.color);
kendaraan1.setColor('Blue');
console.log(kendaraan1.getColor());
kendaraan1.myProperty = 'Test';
console.log(kendaraan1.myProperty);
