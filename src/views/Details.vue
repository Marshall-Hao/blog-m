<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" >
      <p>{{ post.title }}</p>
      <p>{{ post.body }}</p>
  </div>
  <div v-else> 
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