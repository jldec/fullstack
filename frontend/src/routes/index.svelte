<script>
let msg = ""
let api = (import.meta.env.FULLSTACK_BACKEND || '') + '/api/counter'

function doFetch(event) {
  fetch(api, {credentials: 'include'})
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json()
  })
  .then(data => {
    msg = data.hello + " (" + data.count + ")"
  })
  .catch((error) => {
    msg = error
  });
}
</script>

<style>
button { width: 10em; padding: 1em; }
.notes { font-style: italic; margin-top: 1em;}
</style>

<h1>Frontend</h1>

<h2>Hello {msg}</h2>

<button on:click={doFetch}>Call Backend</button>

<div class="notes">
{api}
</div>