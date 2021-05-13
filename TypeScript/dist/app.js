var somar = function () {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    return numeros.reduce(function (total, elem) { return total + elem; });
};
console.log(somar(1, 2, 3));
