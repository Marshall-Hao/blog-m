<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="p-5 mt-5" >
      <p class="text-xl font-bold text-white mb-10 label relative w-3/6">{{ post.title }}</p>
      <p class="text-sm font-medium mb-2">{{ post.body }}</p>
  </div>
  <div v-else class="justify-self-center"> 
      <Spinner />
  </div>
</template>

<script>
import getPost from '../composables/getPost'
import Spinner from '../components/Spinner.vue'

export default {
    props: ['id'],
    components: { Spinner },
    setup(props) {
        const { post, error, load } = getPost(props.id)

        load()

        return { post, error }
    }
}
</script>

<style>

</style>