<template>
  <div id="app">
    <h2>
      Vue To Do List
      Simple Todo List with adding and filter by diff status.
    </h2>
    <div id="add">
      <input type="text" v-model="herosText" />
      <button @click="handleAdd">挑选英雄</button>
    </div>
    <!-- <div id="equip">
      <select name="herosList" id="herosList">
        <option v-for="item in todoList" v-bind:key="item" value="lalala">{{item.comtent}}</option>
      </select>
      <input type="text" v-model="equipmentText" />
      <button @click="handleAdd">获取装备</button>
    </div>-->
    <div id="list">
      <ul>
        <li v-for="(item,index) in backTodoList" v-bind:key="index">
          <input type="checkbox" @c="moveItem(index)"  />
          {{item.content}}（{{item.equipment}}）
        </li>
      </ul>
    </div>
    <div id="select">
      <button @click="selectStatus('active')">active</button>
      <button @click="selectStatus('completed')">completed</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "app",
  components: {
   
  },
  data: function() {
    return {
      /**
       * 定义了 todo item 中属性为 {content:'吃饭',status:'active'}
       * 定义了 todo 的两种状态 completed、active，默认为 active
       */
      
      currentFilter: "active",
      herosText: "",
      equipmentText: ""
      
    };
    
  },
  methods: {
    moveItem: function(index) {
      this.$store.commit('deleteTodo',index)
    },
    revokeItem: function(index) {
      this.$store.commit('revokeTodo',index)
    },
    handleAdd: function() {
      this.$store.state.todoList.push({
        content: this.herosText,
        equipment: this.equipmentText,
        status: "active"
      });
      this.herosText = "";
    },
    
    selectStatus: function(status) {

      this.currentFilter = status;

    }
  },
  computed: {
    backTodoList: function() {
      let backTodoList = [];
      for (let index = 0; index <this.$store.state.todoList.length; index++) {
        const element = this.$store.state.todoList[index];
        if (element.status === this.currentFilter || element.status === "all") {
          backTodoList.push(element);
        }
      }
      return backTodoList;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#list {
  color: #f60;
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 3px;
  cursor: pointer;
}

.items {
  list-style: none;
  text-align: left;
  line-height: 30px;
}

.items li.completed {
  text-decoration: line-through;
}

.filter a {
  margin: 0 10px;
  line-height: 30px;
}

.filter a.active {
  color: #f60;
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 3px;
  cursor: pointer;
}
</style>
