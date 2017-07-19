const Vue = require('vue');
const VueRouter = require('vue-router');
const App = require('./app.vue');
const router = new VueRouter(require('./router'));

Vue.use(VueRouter);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});