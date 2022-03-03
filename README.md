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
# Configure backend URL to target from frontend dev server
# If this is unset, the same origin as the frontend dev server will be used.
export GPFS_ENDPOINT=http://localhost:3001

cd frontend
npm run dev
```

### Build frontend
Builds static site into the `frontend/build` directory.

```sh
# Configure backend URL to target from statically compiled frontend
# If this is unset, the same origin as the static-build server will be used.
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

### Developing with Gitpod
Cloning this repo and creating a Gitpod project will trigger automatic prebuilds 
when changes are committed to the repo.

The Gitpod workspace is configured to `npm install` both frontend and backend during prebuilds,
and run both a frontend dev server (on port 3000) and a backend Fastify server (on port 3001).

In order for the website from the dev server to connect to the backend server from a browser
session, the backend server needs to be exposed publicly, or configured for CORS credentials
on the origin matching the frontend.

Exposing Gitpod ports publicly can be accomplished via the VS Code UI inside a workspace,
or by specifying the visiblity in .gitpod.yml.
([docs](https://www.gitpod.io/docs/config-ports#configure-the-opening-behavior))

Configuring the server and frontend for CORS is documented at https://www.gitpod.io/docs/config-ports#cors

