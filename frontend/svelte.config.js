import adapter from '@sveltejs/adapter-static'

const GPURL = process.env.GITPOD_WORKSPACE_URL

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    prerender: {
      default: true,
      onError: 'continue'
    },
    vite: {
      envPrefix: "FULLSTACK_",
      server: {
        hmr: {
          clientPort: GPURL ? 443 : 3000,
          host: GPURL ? GPURL.replace("https://", "3000-") : "localhost"
        }
      }
    }
  }
}

export default config
