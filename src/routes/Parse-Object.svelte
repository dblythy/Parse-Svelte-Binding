<script>
  import Parse from "./../parse";
  export let object = new Parse.Object("Test");
</script>

<div style="padding: 20px;">
  foo:
  <input bind:value={object.bind.foo} />
  <br />
  bar:
  <input bind:value={object.bind.bar} />
  <br />
  <button
    on:click={() => (object.saving = object.save().then((res) => (object = res)))}
    >Save</button
  >
  {#if object.dirtyKeys().length}
    <button on:click={() => (object = object.revert())}>Revert</button>
  {/if}
  {#await object.saving}
    <p>Saving...</p>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
  <div>
    Result:
    <br />
    {JSON.stringify(object._toFullJSON(), 2)}
  </div>
  <div>
    Dirty Keys:
    <br />
    {object.dirtyKeys()}
  </div>
  {#if object.id}
    <div>
      Object saved with id {object.id}
      <button on:click={() => (object = new Parse.Object("Test"))}
        >Create New</button
      >
    </div>
  {/if}
</div>
