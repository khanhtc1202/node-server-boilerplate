# Node Api Server ( Seed )

[![CodeFactor](https://www.codefactor.io/repository/github/khanhtc1202/node-api-seed/badge)](https://www.codefactor.io/repository/github/khanhtc1202/node-api-seed)

An simple nodejs api server.

## Project struct

```bash
.
├── app.js
├── config
│   ├── express.js
│   ├── index.js
│   └── routes.js
├── controllers
│   └── greeting.js
├── libs
│   ├── bootstrap.js
│   └── utils.js
└── package.json
```

## Usage

### For running

Install dependence packages by command 

```bash
$ npm install
```

Install nodemon (optional) on golbal scope in your host machine (flag `-g`) using `npm`

Start api server

```bash
$ npm start
```

(if you don't have `nodemon` start server by `node app.js`)

### Create new api endpoint

Define your new api on `./controllers/your-controller-name.js`

Sample:

```javascript
module.exports = function(config, utils) {
    var obj = {};
    
    obj.reply = function(req, res, next) {
        res.status(200).send({ data: "OK" });
    };
    
    return obj;
};
```

Declare your new endpoint api on `./config/routes.js`

Sample:

```javascript
module.exports = function(app, bootstrap, utils) {
    ...

    // Say hello to the world
    app.get('/', ctrls["greeting"].reply);
    
    ...
};

```

Done! :)))

Extra configs define on `./config/index.js`
