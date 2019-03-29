import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {  //this.$store.state.XXX
    user: [
      {
        name: 'juju',  
      },
      {
        name: 'juju1', 
      },
      {
        name: 'juju2', 
      }
    ]
  },
  getters: {  //this.$store.getters.XXX  类Vue computed
    newName: (state) => {
      var newName = state.user.map(
        name => {
          return {
            name: '--' + name + '--'
          }
        }
      )
      return newName;
    }
  }, 
  mutations: {  // this.$store.commit('setUser',{name:'kaka'})
    setUser(state, payload) {
      if (payload.hasOwnProperty('name')) {
        state.user.name = payload.name
      }
    }
  },
  actions: { // 支持异步  {commit}  => context.commit
    commitUserList: (context, payload) => {
      setTimeout(function () {
        context.commit('setUser', payload)
      },1000)
    }
  },  //在此处执行commit，store.dispatch('setUserList',item);
  module: {} //模块
});
