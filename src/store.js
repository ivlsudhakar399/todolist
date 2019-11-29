import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todo_list: [],
    single_item: null,
    addMessage: null,
    errorMessage: null
  },
  getters: {
    getTodoList: state => state.todo_list,
    getSingleItem: state => state.single_item,
    getAddMessage: state => state.addMessage,
    getErrorMessage: state => state.errorMessage
  },
  mutations: {
    addTodo(state, dataObj) { state.todo_list.push(dataObj) },
    setSingleItem(state, dataObj) { state.single_item = dataObj },
    editTodo(state, dataObj) {
      console.log(state.todo_list[dataObj.index]);
      state.todo_list[dataObj.index] = dataObj;
    },
    delelteTodo(state, todoList) {
      state.todo_list = todoList;
    },
    setErrorMessage(state, error_message) {
      state.errorMessage = error_message;
    },
    setAddMessage(state, addMessage) {
      state.addMessage = addMessage;
    }
  },
  actions: {
    addTodo({ commit }, params) {
      commit('setErrorMessage', null);
      commit('setAddMessage', null);
      if (params.name == "" || params.date == "" || params.description == "" || params.description == "" || params.description == "") {
        commit('setErrorMessage', "Some of the Fields are empty! Please Check");
      } else {
        commit('addTodo', params);
        commit('setAddMessage', "Your Todo is added to List...Thankyou");
      }
    },
    editTodo({ commit }, obj) {
      commit('setErrorMessage', null);
      commit('setAddMessage', null);
      if (obj.name == "" || obj.date == "" || obj.description == "" || obj.description == "" || obj.description == "") {
        commit('setErrorMessage', "Some of the Fields are empty! Please Check");
      } else {
        commit('editTodo', obj);
        commit('setAddMessage', "Your Todo is modified Succefully...Thankyou");
      }
    },
    deleteTodo({ commit }, todoList) {
      commit('delelteTodo', todoList);
      commit('setAddMessage', "Record Deleted Successfully");
    }
  }
});