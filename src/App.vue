<template>
<div>
<h2>タスク一覧</h2>
<ol>
  <li v-for="task in tasks" v-bind:key="task.id">  
    <input type="checkbox" v-bind:checked="task.done">
    {{ task.name }}
  </li>
</ol>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
 computed:{
   tasks(){
     return this.$store.state.tasks;
   },
 },
});

</script>

<style>

</style>
