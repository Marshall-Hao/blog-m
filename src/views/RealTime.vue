<template>
  <div class="p-5 mt-5 grid">
    <div v-if="posts.length">
    <p class="text-4xl font-bold tracking-wider mb-5">Real-time Posts</p>
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
import { ref } from '@vue/reactivity'
import { projectFirestore } from '../firebase/config'
import PostList from '../components/PostList.vue'
import Spinner from '../components/Spinner.vue'
import TagCloud from '../components/TagCloud.vue'

export default {
    components: { PostList, Spinner, TagCloud },
    setup() {
        const posts =ref([])

        projectFirestore.collection('posts')
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let docs = snap.docs.map(doc => {
                    return { ...doc.data(), id: doc.id }
                })
                posts.value = docs
            })
    return { posts }
    }
}
</script>

<style>

</style>