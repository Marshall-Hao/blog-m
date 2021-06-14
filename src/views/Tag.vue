<template>
<div class="p-5 mt-5 grid">
    <div v-if="error">{{ error }}</div>
    <p class="text-4xl font-bold tracking-wider mb-5">#{{ tag }}</p>
    <div v-if="posts.length" class="flex justify-between">
        <PostList :posts="tagPosts" />
        <TagCloud :posts="posts"/>
    </div>
    <div v-else class="justify-self-center">
      <Spinner />
    </div>
</div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import PostList from '../components/PostList.vue'
import Spinner from '../components/Spinner.vue'
import getPosts from '../composables/getPosts'
import TagCloud from '../components/TagCloud.vue'

export default {
    props: ['tag'],
    components: {PostList, Spinner, TagCloud},
    setup(props) {
        const { posts, error, load } = getPosts()

        load()

        const tagPosts = computed(() => {
            return posts.value.filter((post) => 
                post.tags.includes(props.tag)
            )
        })
        console.log(tagPosts)
        return { error, posts, tagPosts}
    }
}
</script>

<style>

</style>