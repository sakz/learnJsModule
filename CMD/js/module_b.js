define(function(require, exports, module) {
    var moduleA = require('module_a')
    var b = [6,7,8,9,10]
    return {
        b: moduleA.a.concat(b)
    }
})