# Mock Api Server.
why we need mock api server?
- we can use mock api server to simulate the real api server.
- we can use mock api server to test our api.

## 1. expressJS
- [expressJS](https://expressjs.com/)

## 2. Mock API
I creat a mock api server in `@api` folder. and the folder structure is as follows.

```bash
.
├── @api
│   ├── index.js
│   └── users.js
└── package.json
```

and install all packages in `package.json` under devDependencies.

```bash
$ yarn add -D express jsonwebtoken
```

and then, we can run mock api server.

```bash
$ node @api/index.js
```

but i add to package.json, so we can run mock api server by `npm run mock`.

```json
{
  "scripts": {
    "mock": "node @api/index.js"
  }
}
```

if you want add new api, you can add new file in `@api` folder.

```bash
.
├── @api
│   ├── index.js
│   ├── users.js
└── package.json
```

and then, you can add new api in `index.js`.

```js
// @api/index.js
const express = require('express');
const app = express();
const port = 3000;

const users = require('./users');

app.use('/users', users);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

## 3. Mock Data
I creat a mock data in `@api` folder. and the folder structure is as follows.

```bash
.
├── @api
│   ├── index.js
│   ├── users.js
│   └── users.json
└── package.json
```

and then, you can add new mock data in `users.json`.

```json
// @api/users.json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "test1@test.com"
  },
  {
    "id": 2,
    "name": "Jane Doe",
    "email": "test2@test.com"
  }
]
```

and then, you can add new api in `users.js`.

```js
// @api/users.js
const express = require('express');
const router = express.Router();
const users = require('./users.json');

router.get('/', (req, res) => {
  res.json(users);
});

router.get('/:id', (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  res.json(user);
});

module.exports = router;
```

## 4. nodemon
- [nodemon](https://www.npmjs.com/package/nodemon)

nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

```bash
$ yarn add -D nodemon
```

and then, you can run mock api server by `npm run mock`.

```json
{
  "scripts": {
    "mock": "nodemon @api/index.js"
  }
}
```



