## Contribution instructions

1. Fork this repo.
2. `git remote add upstream https://github.com/codebuddies/frontend.git` and
3. Run `npm install` and `npm start`. You should see the application starting up on `localhost:3000`!
4. Fork and clone the [backend](https://codebuddies.org/codebuddies/backend), a Django application using Django REST Framework, to launch a development version of the API (`localhost:8000`)

We also have a "fake" API set up in the db.json file, which our React components in localhost:3000/resources pull from.

5. Find an issue and leave a comment if you'd like to work on it!
6. Join the `#codebuddies-meta` and `#cb-v3-frontend` channels on [Slack](https://codebuddies.org/slack) (optional, but many project updates will be there). Some of the folks working on this project _may_ be willing to pair program on issues, and this channel is a good space to ask.

## Storybook (optional)

We are utilizing Storybook for showing components in an isolated way.
You can create your own storybook from components that you create. The files need to have the `.stories.js` ending to be picked up by storybook.

To run the storybook application, use the following command

```
npm run storybook
```

## Design

1/ Crowdsourced brainstorm document of problems we want to solve: https://pad.riseup.net/p/BecKdThFsevRmmG_tqFa-keep

2/ The final designs and product specs are still being figured out, but we've put everything into [figma](https://www.figma.com/file/wXMeX9xgYTcVKNJ1XT9ZQ5/cbv3poc?node-id=0%3A1).

### Using Material UI

We're using Material-UI's [Hooks API](https://material-ui.com/styles/basics/#hook-api), which means you can (and should) use [Material UI's components](https://material-ui.com/getting-started/supported-components/) as a starting point, and extend them as needed using `makeStyles` and `useStyles`.

See the [Nav component](https://github.com/codebuddies/react-concept/blob/master/src/components/Nav/index.js) for an example that uses several Material-UI components, and the `makeStyles` hook to customize the rest.
