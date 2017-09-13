require('dotenv').config();

const router = require('koa-router')(),
  fileMimeType = require('file-mt'),
  fs = require('fs'),
  koaBody = require('koa-body')({
    multipart: true,
    formidable: {
      uploadDir: `${__dirname}/../upload`,
    },
    keepExtensions: true,
  }),
  prettyBytes = require('pretty-bytes');

router.post(
  '/',
  async (ctx, next) => {
    const {token} = ctx.headers;

    if (token === process.env.TOKEN) {
      await next();
    } else {
      ctx.throw(400, {
        ok: false,
      });
    }
  },
  koaBody,
  async function(ctx, next) {
    const {files} = ctx.request.body, _files = [];

    for (let i in files) {
      let {path, size} = files[i];

      if (fileMimeType(path)) {
        const {ext} = fileMimeType(path);

        fs.renameSync(path, path.replace(/upload_/, '') + '.' + ext);

        _files.push({
          path: (path.replace(/upload_/, '') + '.' + ext).slice(4),
          size: prettyBytes(size),
        });
      } else {
        _files.push({
          path: path.slice(4),
          size: prettyBytes(size),
        });
      }
    }

    ctx.body = {
      ok: true,
      files: _files,
    };
  },
);

module.exports = router;
