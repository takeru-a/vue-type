
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
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
