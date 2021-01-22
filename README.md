# pwa-react-test

This is a test PWA made with ReactJs. It has a login page that lets you enter user/password and a Welcome page that displays the time passed since your last login.

It comes with a ServiceWorker that caches all the static files.

The server is mocked with a json-server. It will always return OK to all the calls to /login. To start the server see the "how to run locally section".

## How to run it locally

First install dependencies:

```sh
npm install
```

To run in dev mode mode you will need 2 different shells. The first command will launch the frontend, the sencond launches the fake server:

```sh
npm start
```

```sh
npm run server
```

Then go to [http://localhost:3000](http://localhost:3000)

Server will run in the port 8080.

To create a production build:

```sh
npm run build
```

## Testing

To run unit tests:

```sh
npm test
```

## Roadmap

If this proyect should grow in the future, this is the roadmap of the features I would add:

- deployment
- a11y
- i18n
- e2e test
- improve seccurity and add a real backend

### Other considerations

It is all in the "main" branch because I was working alone. I would have used feature branches otherwise.

The login and router parts are very simple because I considered that this project didn't need further complexity. In a bigger project, I would have chosen a real router and better security. It only stores the login date in the sessionStorage as there are no further backend calls.

Also, the data model was too simple to use the context api or redux. I decided to store the info in the parent components and the sessionStorage.

The project was originally created from scratch with snowpack, but I finally changed to create-react-app to add the service worker because of the support it provides and the little time to do it.
