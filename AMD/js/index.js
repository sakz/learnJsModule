require.config({
    paths: {
        moduleA: './js/module_a',
        moduleB: './js/module_b',
        moduleC: './js/module_c'
    }
})

require(['moduleA', 'moduleB', 'moduleC'], function (moduleA, moduleB, moduleC) {
    console.log(moduleA.a);
    console.log(moduleB.b);
    console.log(moduleC.c);
})