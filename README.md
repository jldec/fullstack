# Fastify + Svelte

Experimental backend server using [Fastify](https://www.fastify.io/), and frontend using [SvelteKit](https://kit.svelte.dev/).

### Install dependencies

```sh
cd frontend
npm install
cd ..

cd backend
npm install
cd ..
```

### Run frontend dev server
The frontend calls the server api when a button is clicked, and renders the response.

```sh
cd frontend
npm run dev
```

### Build frontend
Builds static site into the `frontend/build` directory.

```sh
# Configure backend URL to target from statically compiled frontend
export GPFS_ENDPOINT=http://localhost:3001

cd frontend
npm run build
```

### Run server
The server responds to `/api/counter` with JSON of the form:  
`{ "hello": "world", "count": count++ }`

The server also hosts the frontend static build at the server root `/`.

```sh
cd backend
npm start
```