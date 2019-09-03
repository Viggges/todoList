<template>
  <div>
    <input type="text" :value="herosText" @change="handleChange" />
    <button @click="handleAdd">挑选英雄</button>
  </div>
</template>
<script>
export default {
  name: "create-form",
  data: function() {
    return {
      herosText: ""
    };
  },
  methods: {
    handleAdd: function() {
      this.$emit("addNewToDo", this.herosText);
    },
    handleChange: function(event) {
      this.herosText=event.target.value;
    }
  }
};
</script>