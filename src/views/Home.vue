<template>
  <div class="p-5 mt-5 grid">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
    <p class="text-4xl font-bold tracking-wider mb-5">Home</p>
    <div class="flex justify-between">
      <PostList :posts="posts" />
      <TagCloud :posts="posts"/>
    </div>
    </div>
    <div v-else class="justify-self-center">
      <Spinner />
    </div>
  </div>
</template>

<script>
// component imports
import PostList from '../components/PostList.vue'
import Spinner from '../components/Spinner.vue'
import getPosts from '../composables/getPosts'
import TagCloud from '../components/TagCloud.vue'

export default {
  name: 'Home',
  components: { PostList, Spinner, TagCloud },
  setup() { 
    const { posts, error, load } = getPosts()
    
    load()

    return { posts, error }
  },
}
</script>