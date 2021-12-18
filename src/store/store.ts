
import { createStore} from 'vuex'
export default createStore({
  state: {
    tasks:[
      {
        id:1,
        name:'牛乳を買う',
        labelids:[1,2],
        done:false,
    },
    {
      id:2,
      name:'本を買う',
      labelids:[1,3],
      done:true,
    },
    {
      id:3,
      name:'レポートをやる',
      labelids:[4],
      done:false,
    },
  ],
  labels:[
    {
      id:1,
      text:"買い物",
  },
  {
    id:2,
    text:"食料",
},
{
  id:3,
  text:"本",
},
{
  id:4,
  text:"課題",
},
  ],

  nextTask_id:4,
  nextLabel:5,
  filter: 0,
  },
  getters:{
    filteredTasks(state){
      if(state.filter <= 0){
          return state.tasks;
      }
      return state.tasks.filter(task=>{
        return task.labelids.indexOf(state.filter) >= 0;
      })
    },
  },
  mutations: {
    addTask(state, {name, labelids}){
      state.tasks.push({
        id: state.nextTask_id,
        name: name,
        labelids: labelids,
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
    addLabel(state, {text}){
      state.labels.push({
        id: state.nextLabel,
        text: text,
      })
      state.nextLabel++;
    },
    changeLabel(state, filter:number){
      state.filter = filter;
    }
  },
  actions: {
  },
  modules: {
  }
})
