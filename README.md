# react-concept
Frontend proof of concept of CodeBuddies v3 using React.

For Backend proof of concepts, see:
+ [Django](https://github.com/codebuddies/django-concept)
+ [Serverless](https://github.com/codebuddies/serverless-concept)
+ [Node](https://github.com/codebuddies/node-concept)
+ [Go](https://github.com/codebuddies/go-concept)

## Design
View proof of concept designs over at [Figma](https://www.figma.com/file/wXMeX9xgYTcVKNJ1XT9ZQ5/cbv3poc?node-id=0%3A1). Note that the design are only meant to serve as a guide and the output does not need to be pixel perfect based on the designs linked here. Instead, use [Material-UI](https://material-ui.com/) components as a starting point and extend as needed.

The PoC for the frontend will revolve around querying and posting the Resource model based on the defined [API spec](https://app.swaggerhub.com/apis-docs/billglover/CodeBuddies/0.0.1).

## Pages
**Index**

The main landing page will have a small copy as well as a Sign Up and Sign in form (see You can find these pages at [Figma](https://www.figma.com/file/wXMeX9xgYTcVKNJ1XT9ZQ5/cbv3poc?node-id=0%3A1) for reference).

After authenticating, the root page should be defined as the **Resources Index** page.

**Resources**

The Resources page displays a search form. From this page, a user can search for a resource and add a new resource. After searching for a resource, it should populate with the search results. Clicking on `Add a Resource` should open a modal with a form to add a Resource. On success, it should give a message that a resource was added successfully, or if there are errors, display error messages in an [flash message](https://material-ui.com/components/snackbars/).

<<<<<<< HEAD
## Things to Validate
+ Testing frameworks (Jest or Mocha)
+ UI Framework - is it easily extendable and manageable?
+ Any cons?
=======
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
>>>>>>> Update README
