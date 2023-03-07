<script>
  import Parse from "./../parse";
  let loadData = new Parse.Query("Test").find();
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

{#await loadData}
  <p>Loading...</p>
{:then data}
  {#each data as obj}
    <div>
      <b>id: {obj.id}</b>
      {#each Object.keys(obj.bind) as field}
        <div>
          {field}: {obj.bind[field]}
        </div>
      {/each}
      <button on:click={() => dispatch("edit", obj)}>Edit</button>
    </div>
  {/each}
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
