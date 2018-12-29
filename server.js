const Koa = require('koa');
const app = new Koa();
const router = require('./router');

const log4js = require('log4js');

log4js.configure({
    appenders: {console: {type: 'file', filename: 'console.log'}},
    categories: {default: {appenders: ['console'], level: 'debug'}}
});

console.log("Server Start & Log");
const LogDate = log4js.getLogger('console');

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    LogDate.info({context: JSON.stringify(ctx), useTime: ms});
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(8888);