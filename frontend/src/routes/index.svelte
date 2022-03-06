<script>
// @ts-nocheck
import { dev } from '$app/env'

let api = (import.meta.env.FULLSTACK_BACKEND || '') + '/api/counter'
let mode = dev ? 'dev server' : 'static build'
let msg = "-"

async function doFetch() {
  try {
    let resp = await fetch(api, {credentials: 'include'})
    if (resp.ok) {
      let data = await resp.json()
      msg = `Hello ${data.hello} (${data.count})`
    }
    else {
      msg = await resp.text()
    }
  }
  catch(e) {
    msg = `${e}`
  }
}
</script>

<h1>Frontend ({mode})</h1>

<h2>{msg}</h2>

<button on:click={doFetch}>Call Backend</button>

<div class="notes">
API: {api}
</div>

<style>
  button { width: 10em; padding: 1em; font-size: 1em; }
  .notes { font-style: italic; margin-top: 1em; }
</style>
