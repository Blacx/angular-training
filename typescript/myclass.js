var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyClass = /** @class */ (function () {
    function MyClass(instanceProperty, privateProperty) {
        this.instanceProperty = instanceProperty;
        this.privateProperty = privateProperty;
        this.protectedProperty = true;
    }
    MyClass.prototype.firstMethod = function () {
        throw new Error("Method not implemented.");
    };
    MyClass.prototype.instanceMethod = function () {
        console.log('Instance Method');
        console.log('Instance Property:', this.instanceProperty);
        console.log('Private Property:', this.privateProperty);
        console.log('Protected Property:', this.protectedProperty);
    };
    MyClass.prototype.privateMethod = function () {
        console.log('Private Method');
    };
    MyClass.prototype.protectedMethod = function () {
        console.log('Protected Method');
    };
    Object.defineProperty(MyClass.prototype, "computedProperty", {
        get: function () {
            return 'Computed ' + this.instanceProperty;
        },
        set: function (value) {
            console.log('Setting computed property:', value);
        },
        enumerable: false,
        configurable: true
    });
    MyClass.staticMethod = function () {
        console.log('Static Method');
        console.log('Static Property:', MyClass.staticProperty);
    };
    MyClass.staticProperty = 'Static Property';
    return MyClass;
}());
var DerivedClass = /** @class */ (function (_super) {
    __extends(DerivedClass, _super);
    function DerivedClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DerivedClass.prototype.derivedMethod = function () {
        console.log('Derived Method');
        console.log('Derived Property:', this.protectedProperty);
    };
    return DerivedClass;
}(MyClass));
var myObject = new MyClass('Instance Property', 42);
myObject.instanceMethod();
console.log('Computed Property:', myObject.computedProperty);
myObject.computedProperty = 'New Value';
MyClass.staticMethod();
var derivedObject = new DerivedClass('Derived Instance Property', 123);
derivedObject.derivedMethod();
