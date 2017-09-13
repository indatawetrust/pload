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
{
  "ok": true,
  "file": "/upload/20b96e616a8f4e3114f03d14a510a2b6.jpg"
}
```

```sh
# http://localhost:6010/upload/20b96e616a8f4e3114f03d14a510a2b6.jpg
```

- [ ] authorization support
- [ ] loading limit
- [ ] statistics page
- [ ] multiple file upload feature
