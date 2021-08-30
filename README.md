# Fastify + Svelte

Experimental app using [Fastify](https://www.fastify.io/) for server, and [SvelteKit](https://kit.svelte.dev/) for frontend.

The server responds to `/api/counter` with JSON of the form:  
`{ "hello": "world", "count": count++ }`

The frontend calls the api when a button is clicked, and renders the response.

### First build the frontend

Build static site into the `frontend/build` directory.  
NOTE: The frontend currently assumes that the api is hosted at the same origin.

```
cd frontend
npm install
npm run build
cd ..
```

### Run the server

The server hosts the frontend static site at `/`.

```
npm install
npm start
```