> Full credit to: https://github.com/mpolinowski/random-pass-gen

# A Simple Javascript example with a client and a server.

## To Run

```javascript
npm install
```

(if you get any weird errors, try sudo npm install - to fix)

```
cd client
npm install
npm run build
```

The above builds the client react app.
The from root folder

```
npm start
```

The above starts the express server that exposes the API endpoints as well as an index route that serves the react app.

Now, visit `http://localhost:[port]` to access the react app.

The default port is `5000`. If a `PORT` environment variable is found, it takes precedence.

Some of the other endpoints available are:
`http://localhost:[port]/api/passwords`
`http://localhost:5000/users/sanju/vices/wine`
`http://localhost:5000/vices/`
`http://localhost:5000/misc/hello`
