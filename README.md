# Nuxt3 Practice
## 1. Nuxt3 install

```bash
$ npx nuxi init <project-name>
```

## 2. Nuxt3 run

```bash
$ npm run dev
```

## 3. Nuxt3 build

```bash
$ npm run build
```

## 4. Nuxt3 start

```bash
$ npm run start
```

## 5. Nuxt3 generate

```bash
$ npm run generate
```

Nuxt3 generate static files in `dist` folder. and you can deploy it to any static hosting service.

# Nuxt3 Libraries

## 1. Frontend Libraries (TailwindCSS, Bootstrap, etc)
- [TailwindCSS](https://tailwindcss.com/)
- [Doc](docs/tailwindcss.md)

## 2. Mock API
- [expressJS](https://expressjs.com/)

We will use expressJS to create mock API server. and the folder structure is as follows.

```bash
.
├── @api
│   ├── index.js
│   └── users.js
└── package.json
```

for more information, please refer to [mockApi](docs/mockapi.md)