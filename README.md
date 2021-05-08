## Setup

Install dependencies:

```bash
npm i
```

Running the client server locally:

```bash
npm run start
```

Running tests:

```bash
npm run test
```

Note: Even if you aren't developing the backend, you should set up the the [backend](https://github.com/codebuddies/backend) and run it locally so that the frontend has a local API to talk to.

## **Overview of Codebuddies**

### **What is CodeBuddies?**

[CodeBuddies](https://codebuddies.org/) is a remote-first community of independent code learners who enjoy sharing knowledge and helping each other learn faster via discussions and pairing. It is free and open-sourced, and supported by open source contributors and financial backers on our [Open Collective](https://opencollective.com/codebuddies).

### CodeBuddies website Version 3 (CBV3)

We are building out a new platform (CBV3) to replace an [older MeteorJS project](http://github.com/codebuddies/codebuddies) which currently runs the [codebuddies.org site](<(https://codebuddies.org/)>).

## Sponsors

Big thanks to the sponsors of this project!

<a href="https://duckly.com/codebuddies/join?t=60ktFkh1Rqnd_AS1kR8ZGyH" target="_blank"><img src="https://opencollective-production.s3.us-west-1.amazonaws.com/ed4191f0-afde-11eb-9816-11782bb2fe83.png" width="200" alt="Duckly"/>

<a href="https://netlify.com" target="_blank"><img src="https://user-images.githubusercontent.com/4512699/66627175-ba5d6d80-ebaf-11e9-8a78-554e3e8a4987.png" width="200" alt="Netlify"/>

## Role of the front-end

The front-end is a React app that aims to let users at a bare minimum:

- submit resources
- meet remotely on Zoom to pair, show off a project, hack on an open source project, or study together.

## **Helpful links**

1/ CBV3's [backend](https://github.com/codebuddies/backend) API is built using Django and Django REST Framework.

2/ Some [Google doc technical notes](https://docs.google.com/document/u/1/d/1YuVO-v0n73ogoFIwpwJgI1Bkso8sP2mg5zqbX9FB3lU/edit#heading=h.rw88rxuk12cp) from hangouts/pairing sessions

3/ We have a technical decision log [here](https://github.com/codebuddies/frontend/wiki/Technical-decision-log) and a group blog experiment [here](https://github.com/codebuddies/frontend/issues/98)

4/ Crowdsourced [brainstorm of problems we want to solve](https://pad.riseup.net/p/BecKdThFsevRmmG_tqFa-keep) for our community with this platform

## **Technologies we're using**

- [React (hooks)](https://reactjs.org/docs/hooks-intro.html)
- [Storybook](https://storybook.js.org/)
- [React testing library](https://github.com/testing-library/react-testing-library)
- [Django REST Framework](https://github.com/encode/django-rest-framework) (for the [backend](https://github.com/codebuddies/backend) API)

**Application Deployment**

Special thanks to Netlify for sponsoring our front-end hosting!

## **How do I contribute to this codebase?**

Follow the [CONTRIBUTING.md](CONTRIBUTING.md) instructions!

## **Have Questions about CBV3?**

Check out [SUPPORT.md](SUPPORT.md) if you're stuck or have questions.

## **Ways to Get Involved**

Anyone is welcome to contribute and make this project better! You can:

- Join our slack community [here](https://codebuddies.org/slack)
- Share your feedback on [Github CBV3 frontend issues](https://github.com/codebuddies/frontend/issues)
- Help review [CBV3 frontend pull requests](https://github.com/codebuddies/frontend/pulls) with comments!

## **CODE OF CONDUCT.md**

_Please_ read CodeBuddies' [Code of Conduct](CODE_OF_CONDUCT.md) to understand the responsibility and scope as a contributor at CodeBuddies.
