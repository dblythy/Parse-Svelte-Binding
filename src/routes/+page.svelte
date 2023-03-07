<script>
  import Parse from "../parse.js";
  import Object from "./Parse-Object.svelte";
  import Query from "./Parse-Query.svelte";

  let object = new Parse.Object("Test");
  let objects = true;
</script>

<button on:click={() => (objects = !objects)}
  >Switch to {objects ? "Queries" : "Objects"}</button
>
{#if objects}
  <Object {object} />
{:else}
  <Query
    on:edit={(event) => {
      object = event.detail;
      objects = true;
    }}
  />
{/if}
