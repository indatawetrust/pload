var router = require('koa-router')(),
  koaBody = require('koa-body')({
    multipart: true,
    formidable: {
      uploadDir: `${__dirname}/../upload`,
    },
    keepExtensions: true,
  });

router.post('/', koaBody, async function(ctx, next) {
  ctx.body = {
    ok: ctx.request.body.files,
  };
});

module.exports = router;
