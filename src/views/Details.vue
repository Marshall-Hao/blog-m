<template>
  <div v-if="error" class="text-center text-xl font-bold text-red-400 mt-5">{{ error }}</div>
  <div v-if="post" class="p-5 mt-5" >
      <p class="text-xl font-bold text-white mb-10 label relative w-3/6">{{ post.title }}</p>
      <p class="text-sm font-medium mb-2">{{ post.body }}</p>
      <button @click="handleClick" class="text-xs px-3 py-1 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white mt-10 focus:outline-none">Delete Post</button>
  </div>
  <div v-else class="justify-self-center"> 
      <Spinner />
  </div>
</template>

<script>
import getPost from '../composables/getPost'
import Spinner from '../components/Spinner.vue'
import { useRoute, useRouter } from 'vue-router'
import { projectFirestore } from '../firebase/config'

export default {
    props: ['id'],
    components: { Spinner },
    setup(props) {
        const route = useRoute()
        const router = useRouter()
        // const { post, error, load } = getPost(props.id)
        const { post, error, load } = getPost(route.params.id) // another way to get params id
        
        load()

        const handleClick = async() => {
            await projectFirestore.collection('posts')
                .doc(props.id)
                .delete()

            router.push('/')
        }

        return { post, error, handleClick}
    }
}
</script>

<style>

</style>