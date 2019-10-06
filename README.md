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

## Things to Validate
+ Testing frameworks (Jest or Mocha)
+ UI Framework - is it easily extendable and manageable?
+ Any cons?
