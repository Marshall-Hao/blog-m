import { ref } from 'vue'

const useTags = (posts) => {

    const tags = ref([])
    const tagSet = new Set()

    posts.forEach(item => {
        item.tags.forEach(tag => tagSet.add(tag))
    })

    tags.value = [...tagSet] // spread out the set into an array

    return { tags }
}

export default useTags