var router = require('koa-router')(),
  fileMimeType = require('file-mt'),
  fs = require('fs'),
  koaBody = require('koa-body')({
    multipart: true,
    formidable: {
      uploadDir: `${__dirname}/../upload`,
    },
    keepExtensions: true,
  });

router.post('/', koaBody, async function(ctx, next) {
  if (fileMimeType(ctx.request.body.files.file.path)) {
    const { ext } = fileMimeType(ctx.request.body.files.file.path)

    fs.renameSync(ctx.request.body.files.file.path, ctx.request.body.files.file.path.replace(/upload_/, '') + '.' + ext)

    ctx.body = {
      ok: true,
      file: (ctx.request.body.files.file.path.replace(/upload_/, '') + '.' + ext).slice(4)
    };
  } else {
    ctx.body = {
      ok: true,
      file: ctx.request.body.files.file.path.slice(4)
    }; 
  }
});

module.exports = router;
