<script setup lang="ts">
import { ref } from "vue";
import axios from "axios"

const allTasks = ref([])



onServerPrefetch( () =>{
  console.log("fetching")
  useHead({
  title: "All Photos"
})
})

onMounted(async() => {
  try{
  allTasks.value =  (await axios.get('https://jsonplaceholder.typicode.com/photos')).data.slice(0, 20)
  }
  catch(err){
    console.log(err, "error ti waooo")
  }
  console.log("ashjsnm")
})
  </script>

<template>
  <div>
    all Tasks
    <ul v-for="task in allTasks">
      <RouterLink :to="`tasks/${task.id}`">
        <li>
          {{ task.title }}
        </li>
      </RouterLink>
    </ul>
  </div>
</template>