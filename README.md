# FlashChat

## Running development server

```bash
cd flashchat
yarn install
npm run build
cd packages/server
npm run start:dev
cd packages/web
npm run start
```

## Running production build

```bash
cd flashchat
yarn install
npm run build
cd packages/server
npm run start
cd packages/web
npm run build
npm run start:prod
```
