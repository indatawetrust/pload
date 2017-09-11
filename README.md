# pload
A simple file upload service with fast setup

```sh
git clone https://github.com/indatawetrust/pload
docker-compose up -d
```

#### usage
```sh
curl -X POST -i -F image=@atest.jpg http://localhost:6009/
```
```js
{
  "ok": {
    "image": {
      "size": 131560,
      "path": "/api/upload/upload_ad98d7feb4d4097ccedfac866d24ac1e",
      "name": "test.jpg",
      "type": "image/jpeg",
      "mtime": "2017-09-11T18:33:16.440Z"
    }
  }
}
```

```sh
# http://localhost:6010/upload/upload_ad98d7feb4d4097ccedfac866d24ac1e
```
