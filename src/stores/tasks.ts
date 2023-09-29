import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const TaskStore = defineStore('store', () => {
  const Tasks = ref([])
  const getTasks = async () => {
    console.log('getting ')
    Tasks.value = (
      await axios.get('https://jsonplaceholder.typicode.com/posts')
    ).data.slice(0, 4)
  }
  console.log(Tasks.value)
  return { Tasks, getTasks }
})
