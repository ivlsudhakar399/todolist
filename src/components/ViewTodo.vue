<template>
  <div class="add-todo">
    <h3 class="header">Edit Todo</h3>
    <el-form :model="todo" label-width="120px">
      <el-form-item label="Name:">
        <el-input v-model="todo.name" placeholder="Name" label="Name" autofocus="true"></el-input>
      </el-form-item>
      <el-form-item label="Date:">
        <div class="block">
          <el-date-picker
            v-model="todo.date"
            format="dd-MM-yyyy"
            type="date"
            placeholder="Pick a date"
          ></el-date-picker>
        </div>
      </el-form-item>
      <el-form-item label="Start Time:">
        <el-time-select placeholder="Start time" v-model="todo.start_time"></el-time-select>
      </el-form-item>
      <el-form-item label="End Time:">
        <el-time-select placeholder="End time" v-model="todo.end_time"></el-time-select>
      </el-form-item>
      <el-form-item label="Description:">
        <el-input v-model="todo.description" placeholder="Description"></el-input>
      </el-form-item>
      <el-form-item class="text-right">
        <el-button type="primary" @click="saveTodo">Save Todo</el-button>
        <el-button type="primary" @click="backToList">Back</el-button>
      </el-form-item>
      <p class="error" v-if="getErrorMessage">{{ getErrorMessage }}</p>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      todo: {
        name: "",
        date: "",
        description: "",
        start_time: "",
        end_time: ""
      }
    };
  },
  computed: {
    ...mapGetters([
      "getTodoList",
      "getSingleItem",
      "getErrorMessage",
      "getAddMessage"
    ]),
    listLength() {
      if (this.getTodoList && this.getTodoList.length) {
        return this.getTodoList.length;
      }
      return 0;
    },
    index() {
      return this.$route.query.index;
    }
  },
  mounted() {
    this.todo = { ...this.todo, ...this.getSingleItem };
  },
  methods: {
    saveTodo() {
      this.todo.date = new Date();
      let params = {
        name: this.todo.name,
        date: (
          this.todo.date.getDate() +
          "-" +
          this.todo.date.getMonth() +
          "-" +
          this.todo.date.getFullYear()
        ).toString(),
        description: this.todo.description,
        start_time: this.todo.start_time,
        end_time: this.todo.end_time,
        index: this.index
      };
      this.$store.dispatch("editTodo", params);
      if (this.getAddMessage) {
        this.$notify({
          title: "Todo Modified",
          message: this.getAddMessage,
          type: "success"
        });
        this.$router.go(-1);
      }
    },
    backToList() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.error {
  color: #f84949;
  font-size: 15px;
  font-weight: 400;
  text-align: center;
  letter-spacing: 1.5px;
}
.add-todo {
  text-align: left;
  width: 40%;
  margin: 0 auto;
  padding: 1em 1em 1em 1em;
  border: 1px solid #f9f9f9;
  background-color: #faf4fb;
}
.add-todo .header {
  text-align: center;
  margin: 10px 0 20px;
}
.add-todo input {
  width: 200px;
}
</style>
