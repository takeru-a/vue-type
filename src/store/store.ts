
import { createStore} from 'vuex'
export default createStore({
  state: {
    tasks:[
      {
        id:1,
        name:'牛乳を買う',
        done:false,
    },
    {
      id:2,
      name:'本を買う',
      done:true,
    },
    {
      id:3,
      name:'レポートをやる',
      done:false,
    },
  ],
  nextTask_id:4,
  },
  mutations: {
    addTask(state, {name}){
      state.tasks.push({
        id: state.nextTask_id,
        name,
        done:false,
      });
      state.nextTask_id++;
    },

    changeTaskStatus(state, {id}){
      const filtered = state.tasks.filter(task=>{
        return task.id===id;
      })
      filtered.forEach(task=>{
        task.done = !task.done;
      })
    },
  },
  actions: {
  },
  modules: {
  }
})
