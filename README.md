# FlashChat

![Frontend build](<https://github.com/tusharmoraye/flashchat/workflows/Deploy%20to%20GitHub%20Pages%20(Frontend)/badge.svg>)
![Backend build](<https://github.com/tusharmoraye/flashchat/workflows/Deploy%20to%20Heroku%20(Backend)/badge.svg>)

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

## Deploying Frontend to github pages

If deploying with github pages the workflow will run every time something is pushed to master branch.
You need to enable the github pages for your repo from settings and github workflows will do the rest.

## Deploying Backend to Heroku

If deploying with github workflows, we need to add few secrets in github project settings.

HEROKU_API_TOKEN - Generate this token by heroku cli

```bash
heroku authorizations:create
```

HEROKU_SERVER_APP_NAME - Heroku app name

Check you app after the job is completed. If it is not working try the following solutions.

- Check the dynos in heroku dashboard. If npm start is enabled, then disable it and enable the yarn start dyno. And rerun the jobs from github workflows.

- If the app is still not working, then run the following cmd.

  ```bash
  heroku ps:scale web=1 -a <HEROKU_APP_NAME>
  ```
