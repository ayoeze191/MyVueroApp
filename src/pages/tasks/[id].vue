<script setup lang="ts">
import { ref, onServerPrefetch } from "vue";
import axios from "axios";

import {useRoute} from "vue-router";

const route = useRoute()
const task = ref({"title": "hello"})

onServerPrefetch(async () =>{
  task.value =  (await axios.get(`https://jsonplaceholder.typicode.com/photos/${route.params.id}`)).data
  useHead({
  title: task.value.title,
  meta: [
    {
      property: 'og:title', content: task.value.title 
    },
    {
      property: 'og:image', content: task.value.url
    },
    { property: 'og:description', content: task.value.url }
  ]
    })
})

</script>

<template>
  <div>
    Hello task
    {{ task.title }}
  </div>
</template>



