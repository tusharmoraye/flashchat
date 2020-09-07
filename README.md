# FlashChat

![Frontend build](https://github.com/tusharmoraye/flashchat/workflows/Deploy%20to%20GitHub%20Pages%20(Frontend)/badge.svg)
![Backend build](https://github.com/tusharmoraye/flashchat/workflows/Deploy%20to%20Heroku%20(Backend)/badge.svg)

## Running development server

```bash
cd flashchat
yarn install
npm run build
cd packages/server
yarn dev
cd packages/web
yarn start
```

## Running production build

```bash
cd flashchat
yarn install
cd packages/server
yarn build
yarn start
cd packages/web
yarn build
yarn start:prod
```
