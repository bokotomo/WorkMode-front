# WorkMode-front

```
npm start
```

・before git push

```
npm run lint-fix
```

# API

https://github.com/bokotomo/WorkMode-api

## メモ

reduxHooks はモーダル処理だけに限定して使用してみてる。
あまり広く使いすぎると関心がごちゃごちゃになるので、reduxhooks は用途を制限して使う方がいい気がしてる。

## Check Production

check production by nginx and docker

```
cd ./infrastructure/docker
docker-compose up -d

// open http://localhost:9998
```
