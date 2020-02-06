# react-concept

Frontend proof of concept of CodeBuddies v3 using React.

## Contribution instructions

1. Fork this repo.
2. Find an issue and leave a comment if you're interested in it.
3. Run `npm install` and `npm start`

We have a "fake" API set up in the db.json file, which our React components pull from.

## Storybook

We are utilizing Storybook for showing components in an isolated way.
You can create your own storybook from components that you create. The files need to have the `.stories.js` ending to be picked up by storybook.

To run the storybook application, use the following command

```
npm run storybook
```

## Design

View proof of concept designs over on the [official V3 repo](https://github.com/codebuddies/v3/issues?q=is%3Aissue+is%3Aopen+label%3Adesign) labeled "design". Note that the designs are only meant to serve as a guide and the output does not need to be pixel perfect. Instead, use [Material-UI](https://material-ui.com/) components as a starting point and extend as needed.

The PoC for the frontend will revolve around querying and posting the Resource model based on the defined [API spec](https://app.swaggerhub.com/apis-docs/billglover/CodeBuddies/0.0.1).

### Using Material UI

We're using Material-UI's [Hooks API](https://material-ui.com/styles/basics/#hook-api), which means you can (and should) use [Material UI's components](https://material-ui.com/getting-started/supported-components/) as a starting point, and extend them as needed using `makeStyles` and `useStyles`.

See the [Nav component](https://github.com/codebuddies/react-concept/blob/master/src/components/Nav/index.js) for an example that uses several Material-UI components, and the `makeStyles` hook to customize the rest.

## Pages

**Index**

The main landing page will have a small copy as well as a Sign Up and Sign in form (see You can find these pages at [Figma](https://www.figma.com/file/wXMeX9xgYTcVKNJ1XT9ZQ5/cbv3poc?node-id=0%3A1) for reference).

After authenticating, the root page should be defined as the **Resources Index** page.

**Resources**

The Resources page displays a search form. From this page, a user can search for a resource and add a new resource. After searching for a resource, it should populate with the search results. Clicking on `Add a Resource` should open a modal with a form to add a Resource. On success, it should give a message that a resource was added successfully, or if there are errors, display error messages in an [flash message](https://material-ui.com/components/snackbars/).
