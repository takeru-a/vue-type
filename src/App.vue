<template>
<div>
<h2>タスク一覧</h2>
<ol>
  <li v-for="task in tasks" v-bind:key="task.id">  
    <input type="checkbox" v-bind:checked="task.done" 
    v-on:change="changeTaskStatus(task)">
    {{ task.name }}
  </li>
</ol>

<form v-on:submit.prevent="addTask">
<input type="text" v-model="newTaskName" placeholder="NewTask">
</form>

</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data(){
    return{
      newTaskName:"",
    }
  },
 computed:{
   tasks(){
     return this.$store.state.tasks;
   },
 },
 methods:{
   addTask(){
     this.$store.commit('addTask',{
       name: this.newTaskName,
     })
      this.newTaskName = ""
   },
   changeTaskStatus(task:any){
     this.$store.commit('changeTaskStatus',{
       id: task.id
     })
   },
 },
});

</script>

<style>

</style>
