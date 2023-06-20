var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function insertItemAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [4, 5, 6];
var updatedArray = insertItemAtBeginning(demoArray, 3);
function methodA(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
function methodB(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
