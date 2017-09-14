[![Travis Build
Status](https://img.shields.io/travis/indatawetrust/pload.svg)](https://travis-ci.org/indatawetrust/pload)

# pload
A simple file upload service with fast setup

```sh
git clone https://github.com/indatawetrust/pload
docker-compose up -d
```

#### usage
```sh
curl -X POST -i -F file=@test.jpg http://localhost:6009/
```
```js
{ ok: true,
  files:
   [ { path: '/upload/dde3a72cec3c46a200344581bb1c573d.gif',
       size: '3.76 MB' },
     { path: '/upload/c2add170d23ed351de6ddc289c4b2d40.zip',
       size: '181 kB' } ] }
```

```sh
# http://localhost:6010/upload/c2add170d23ed351de6ddc289c4b2d40.zip
```

- [x] authorization support
- [ ] loading limit
- [ ] statistics page
- [x] multiple file upload feature
- [ ] ajax library
- [ ] nodejs library
- [x] test codes
