<template>
  <div>
    this is a my component
    <el-input v-model="input" placeholder="请输入内容"></el-input>
  </div>
</template>

<script>
export default {
  name: "my-component",
  data() {
    return {
      input: ""
    };
  }
};
</script>

<style scoped>
</style>
