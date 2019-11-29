import Vue from 'vue';
import Router from 'vue-router';
import TodoList from '@/components/TodoList.vue';
import AddTodo from '@/components/AddTodo.vue';
import ViewTodo from '@/components/ViewTodo.vue';

Vue.use(Router);
export default new Router({
  routes: [{
    path: '/',
    name: 'TodoList',
    component: TodoList
  },
  {
    path: '/add-todo',
    name: 'add-todo',
    component: AddTodo
  },
  {
    path: '/edit-todo',
    name: 'view-todo',
    component: ViewTodo
  }
  ],
  mode: 'history'
});