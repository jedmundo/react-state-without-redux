## Why this project was created

The redux pattern is a really good and solid solution but sometimes it could be used only in particular scenarios where the same data needs to be updated in alot of different components in various levels of the component hierarchy, and not for the whole application as it might add unecessary complexity.

This project shows an example of how you can setup a local context/store/state for scenarios where components need to exchange data without having to use `react-redux`. I even added a global state if you really need to have a shared state between all components in your project.

This implementation was based on [this article](https://itnext.io/replace-redux-state-with-react-hooks-and-context-7906e0fd5521)  and was done only using `React's Context API + Hooks` for setting up the redux stores and `async/await` + `Axios` to deal with async requests.

Technologies used: `React, React router, Styled-Components, Axios,Typescript`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

