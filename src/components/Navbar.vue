<template>
  <header class="p-5 mt-10 flex justify-between items-center">
      <p class="text-gray-300 text-5xl font-bold tracking-widest">The M Blog</p>
      <nav class="space-x-4">
          <router-link :to="{ name: 'Home'}" class="inline-block text-lg font-semibold text-gray-300 hover:text-gray-500">Home</router-link>
          <router-link :to="{ name: 'Create'}" class="inline-block text-lg font-semibold text-gray-300 hover:text-gray-500">Create</router-link>
      </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>

</style>