<template>
  <form class="justify-self-center space-y-4 mt-10 p-5 w-3/5">
    <label class="block relative text-lg text-white font-normal w-2/12">Title:</label>
    <input class="block w-full text-lg font-normal border-solid border border-gray-200 focus:outline-none" type="text" required v-model="title">
    <label class="block relative text-lg text-white font-normal w-3/12">Content:</label>
    <textarea required v-model="body" class="block w-full text-lg font-normal border-solid border border-gray-200 h-40 focus:outline-none"></textarea>
    <label class="block relative text-lg text-white font-normal w-6/12">Tags (hit enter to add a tag)</label>
    <input type="text" 
    v-model="tag" 
    @keydown.enter.prevent="handleKeydown"
    class="block w-full text-lg font-normal border-solid border border-gray-200 focus:outline-none">
    <div class="block space-x-3">
        <div v-for="tag in tags" :key="tag" class="inline-block px-3 py-1 rounded-full bg-gray-200 text-center">
            #{{ tag }}
        </div>
    </div>
        <button class="bg-yellow-500 bg px-3 py-1 text-white font-normal text-lg bg-opacity-90 focus:outline-none hover:bg-opacity-100">Add Post</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const title = ref('')
        const body = ref('')
        const tag = ref('')
        const tags = ref([])

        const handleKeydown = () => {
            if (!tags.value.includes(tag.value)) {
                tag.value = tag.value.replace(/\s/,'') // remove white space
                tags.value.push(tag.value)
            }
            tag.value = ''
        }

        return { title, body, tag, handleKeydown, tags }
    }
}
</script>

<style>
label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-2.5deg);
  }
</style>