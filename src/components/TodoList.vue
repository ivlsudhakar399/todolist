<template>
  <div class="todo">
    <h3 class="header">Todo List</h3>
    <router-link
      class="add-button"
      :to="{
        name: 'add-todo'
      }"
      >Add Todo</router-link
    >
    <el-table class="table-display" :data="getTodoList" style="width: 100%">
      <el-table-column prop="date" label="Date" width="120"></el-table-column>
      <el-table-column
        prop="start_time"
        label="Start Time"
        width="120"
      ></el-table-column>
      <el-table-column
        prop="end_time"
        label="End Time"
        width="120"
      ></el-table-column>
      <el-table-column prop="name" label="Name" width="150"></el-table-column>
      <el-table-column prop="description" label="Description"></el-table-column>
      <el-table-column label="Actions" width="120">
        <template slot-scope="scope">
          <el-button
            class="action-button edit-btn"
            type="text"
            @click="editRecord(scope.$index)"
            >Edit</el-button
          >
          <el-button
            class="action-button delete-btn"
            type="text"
            @click="deleteRecord(scope.$index)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getTodoList"])
  },
  methods: {
    deleteRecord(index) {
      let copyObj = this.getTodoList;
      copyObj.splice(index, 1);
      this.$store.dispatch("deleteTodo", copyObj);
      if (this.getAddMessage) {
        this.$notify({
          title: "Todo Deleted",
          message: this.getAddMessage,
          type: "success"
        });
      }
    },
    editRecord(index) {
      this.$store.commit("setSingleItem", this.getTodoList[index]);
      this.$router.push({ name: "view-todo", query: { index: index } });
    }
  }
};
</script>

<style scoped>
.todo {
  text-align: left;
  letter-spacing: 1px;
  word-break: keep-all;
  width: 60%;
  margin: 0 auto;
  border: 1px solid #f9f9f9;
}

.header {
  background-color: #faf4fb;
  padding: 15px 0;
  text-align: center;
  margin: 10px 0 20px;
}

.add-button {
  padding: 10px 20px;
  margin: 1em auto 2em 1em;
  background-color: #04530f;
  color: #fff;
  text-decoration: none;
}
.table-display {
  margin-top: 15px;
}
.action-button {
}
.delete-btn {
  color: #f84949;
}
.delete-btn:hover,
.delete-btn:active {
  color: #f84949;
}

.edit-btn,
.edit-btn:focus {
  margin-right: 10px;
  color: #8265ec;
}
.edit-btn:hover,
.edit-btn:active {
  color: #8265ec;
}
</style>
