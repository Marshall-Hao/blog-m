<template>
    <div class="w-1/4"> 
        <p class="text-xl text-gray-800 font-bold py-3 px-1 border-b border-gray-200 mb-6">Tags</p>
        <div class="flex flex-wrap">
            <div v-for="tag in tags" :key="tag" class="inline-block pl-1 pr-4 pb-3 text-gray-300 text-sm font-medium hover:text-yellow-500">
                <router-link :to="{ name: 'Tag', params: { tag: tag }}">
                    #{{ tag }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import useTags from '../composables/useTags'

export default {
    props: ['posts'],
    setup(props) {
        const { tags }   = useTags(props.posts)

        return { tags }
    }
}
</script>

<style>

</style>