<template>
  <div class="flex justify-center pt4 code">
    <section>
      <div class="flex justify-center">
        Username: {{user.id}}
      </div>
      <div class="flex justify-center">
        Created: {{user.created | timeSince}} ago
      </div>
      <div class="flex justify-center">
        karma: {{user.karma}}
      </div>
      <div class="flex justify-center">
        Posts: {{ user.submitted.length }}
      </div>  
    </section>
  </div>
</template>

<script>
  import axios from "~/plugins/axios"

  export default {
    async asyncData({route}) {
      const response = await axios.get(`/user/${route.params.id}.json`)
      return {user: response.data}
    }
  }
</script>

<style>
</style>
