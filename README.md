# Node Api Server ( Seed )

[![CodeFactor](https://www.codefactor.io/repository/github/khanhtc1202/node-api-seed/badge)](https://www.codefactor.io/repository/github/khanhtc1202/node-api-seed)

An simple nodejs api server.

## Project structure

```bash
.
├── app.js
├── router.js
├── controllers
│   └── index.js
│   └── system.js
├── infras
│   └── index.js
│   └── mysql-client.js
├── libs
│   └── index.js
│   └── middleware.js
├── models
│   └── index.js
│   └── sql_model.js
├── utils
│   └── index.js
│   └── errors.js
└── package.json
```

## Usage

### For running

Install dependence packages by command 

```bash
$ npm install
```

Install `nodemon` (optional) on golbal scope in your host machine (flag `-g`) using `npm`

Start api server

```bash
$ npm start
```

or

```bash
$ npm run dev
``` 

(if you don't have `nodemon` start server by `node app.js`)

### Note

Starter kit has `ping` endpoint which test the availability of connection between this node js server and the sql database defined under `$DATABASE_SQL_URL` env var in your shell.
Please run up a mysql server to make this check pass.

You can startup a mysql server with docker by using docker-compose manifest included in this boilerplate.

```bash
$ docker-compose up -d --build
``` 

Done! :)))
