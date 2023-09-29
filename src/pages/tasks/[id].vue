<script setup lang="ts">
import { ref, onServerPrefetch } from "vue";
import axios from "axios";

import {useRoute} from "vue-router";

const route = useRoute()
const task = ref(null)

onServerPrefetch(async () =>{
  const servertask = ref({"title": "hello"})
  servertask.value =  (await axios.get(`https://jsonplaceholder.typicode.com/photos/${route.params.id}`)).data
  useHead({
  title: servertask.value.title,
  meta: [
    {
      property: 'og:title', content: servertask.value.title 
    },
    {
      property: 'og:image', content: servertask.value.url
    },
    { property: 'og:description', content: servertask.value.url }
  ]
    })
})

onMounted(async() => {
  task.value =  (await axios.get(`https://jsonplaceholder.typicode.com/photos/${route.params.id}`)).data
})

</script>

<template>
  <div>
    Hello task
    <div v-if="task != null">
      {{ task.title }}
    </div>
    <div v-else>
      non
    </div>
  </div>
</template>



