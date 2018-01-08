<template>
  <div>
    <Items></Items>
  </div>
</template>

<script>
import Items from "~/components/Items.vue"
export default {
  components: {
    Items
  },
  fetch: async ({store}) => {
    await store.dispatch('LOAD_ITEMS', 'jobstories.json')
  }
}
</script>

<style>
</style>
