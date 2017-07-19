module.exports = {
    routes: [
        {
            path: '/',
            component: resolve => require.ensure([],() => resolve(require('./views/test.vue')),'/')
        }
    ]
}