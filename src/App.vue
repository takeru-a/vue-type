<template>
<div>
<h2>タスク一覧</h2>
<ol>
  <li v-for="task in tasks" v-bind:key="task.id">  
    <input type="checkbox" v-bind:checked="task.done" 
    v-on:change="changeTaskStatus(task)">
    {{ task.name }} - 
    <span v-for="id in task.labelids" v-bind:key="id">
      {{ getLabelText(id) }} <tr/>
    </span>
  </li>
</ol>

<form v-on:submit.prevent="addTask">
<input type="text" v-model="newTaskName" placeholder="NewTask">
</form>

<h2>Labels</h2>
<ul>
  <li v-for="label in labels" v-bind:key="label.id">
    <input type="checkbox" v-bind:value="label.id" v-model="newTaskLabelids">
    {{ label.text }}
  </li>
</ul>

<form v-on:submit.prevent="addLabel">
  <input type="text" v-model="newLabelText" placeholder="NewLabel">
</form>

<h2>filtering</h2>
<ul>
  <li v-for="label in labels" v-bind:key="label.id">
    <input type="checkbox" v-bind:checked="label.id===filter" 
    v-on:change="changeLabel(label.id)">
    {{ label.text }}
  </li>
  <li>
    <input type="radio" v-bind:checked="filter===0"
    v-on:change="changeLabel(0)">
    フィルタリングしない
  </li>
</ul>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data(){
    return{
      newTaskName:"",
      newTaskLabelids:[],
      newLabelText:"",
    }
  },
 computed:{
   tasks(){
     return this.$store.getters.filteredTasks;
   },
   labels():any{
     return this.$store.state.labels;
   },
   filter():number{
     return this.$store.state.filter;
   }
 },
 methods:{
   addTask(){
     this.$store.commit('addTask',{
       name: this.newTaskName,
       labelids: this.newTaskLabelids,
     })
      this.newTaskName = "";
      this.newTaskLabelids = [];
   },
   changeTaskStatus(task:any){
     this.$store.commit('changeTaskStatus',{
       id: task.id,
     })
   },
  addLabel(){
    this.$store.commit('addLabel',{
      text:this.newLabelText,
    })
    this.newLabelText = "";
  },
  getLabelText(id:number){
    const label = this.labels.filter((label:any) => label.id === id)[0]
    return label ? label.text:"";
  },
  changeLabel(labalid:number){
    this.$store.commit('changeLabel',labalid)
  },
 },
});

</script>

<style>

</style>
