
<template>
  <div class="post mb-10">
    <router-link :to="{ name: 'Details', params:{ id:post.id }}">
        <p class="text-xl font-bold text-white mb-10 label relative w-3/6">{{ post.title }}</p>
    </router-link>
    <p class="text-sm font-medium mb-2">{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag" class="text-sm font-medium">
      #{{ tag }}
    </span>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  props: ['post'],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + '...'
    })
    return { snippet }
  }
}
</script>

<style>
.label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1deg);
  }
</style>