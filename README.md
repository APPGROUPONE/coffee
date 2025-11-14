# Coffee2 (Cafe 4080) — React harmonization

This repository was originally a static site. I converted the in-`src/components/*.html` fragments into React components and wired them into `src/App.js` so the project runs under Create React App.

What changed
- `src/App.js` — replaced default CRA template with a simple layout that imports the navbar and footer components.
- `src/components/Navbar.js` — React version of `components/navbar.html`.
- `src/components/Footer.js` — React version of `components/footer.html`.

Notes & assumptions
- Image references use the `/images/...` path (served from `public/images/` or the app root). Ensure the image files exist in `public/images/` or update the paths to import them from `src`.
- I left the original CSS files under `src/css/` in place and the new components import `../css/navbar.css` and `../css/footer.css`.
- `src/js/load-components.js` is no longer needed for client-side HTML fetch injection (components are now React). You can remove it if you don't need it.

How to run

Install dependencies and start the dev server:

```bash
cd /path/to/coffee2
npm install
npm start
```

Build for production:

```bash
npm run build
```

Next steps (optional)
- Replace anchor placeholders ("#") with real routes or update to use React Router for single-page navigation.
- Import images as modules if you want webpack to fingerprint them (instead of referencing `/images/...`).
- Move common styles into `src/index.css` or CSS modules.
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

changes to be applied.