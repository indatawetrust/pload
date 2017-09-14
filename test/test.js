import request from 'superagent';
import test from 'ava';
import md5File from 'md5-file';
import download from 'image-downloader';

test('upload', async t => {
  const _in = process.cwd()+'/test/in.png',
        out = process.cwd()+'/test/out.png'
  
  const {body} = await request
                       .post('http://localhost:6009')
                       .set('token', '9c1185a5c5e9fc54612808977ee8f548b2258d31')
                       .attach('image', _in)
  
  const {files} = body

  await download.image({ url: 'http://localhost:6010'+files[0].path, dest: process.cwd()+'/test/out.png' })

  t.is(md5File.sync(_in), md5File.sync(out))
})
