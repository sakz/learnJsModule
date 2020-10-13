
var moduleB = (function(moduleA) {
    var b = moduleA.a.concat([6,7,8,9,10])
    return {
        b: b
    }
})(moduleA)