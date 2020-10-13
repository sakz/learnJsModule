
var moduleC = (function(moduleB) {
    var c = moduleB.b.join('-')
    return {
        c: c
    }
})(moduleB)