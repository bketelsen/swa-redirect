const url = require('url');
const app = require('./app.js');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    const rendered = await app.render({
        host: null, // TODO
        method: context.req.method,
        headers: context.req.headers,
        path: context.req.originalUrl,
        query: context.req.query
    });

    if (rendered) {
        context.res.status = rendered.status;
        context.res.headers = rendered.headers;
        context.res.body = rendered.body;
    } else {
        context.res.status = 404;
        context.res.body = "nope";
    }

}