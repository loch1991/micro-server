const Router = require('koa-router');
const coordtransform = require('coordtransform');

const router = new Router();

router.get('/jingwei', (ctx, next) => {
    let query = ctx.query;
    if (query.jing && query.wei) {
        ctx.body = coordtransform.bd09togcj02(...coordtransform.wgs84togcj02(query.jing, query.wei)).join(',');
    } else {
        ctx.body = 'Query Error';
    }
})

router.get('/xxx', (ctx, next) => {
    // todo
})

module.exports = router;