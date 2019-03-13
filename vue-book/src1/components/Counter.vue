<template>
  <div>
    计数器:
    <button @click="minus()">-</button>
    当前:{{this.$store.state.count}} <br>
    <button @click="add">+</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {count: 0}
    },
    name: "Counter",
    methods: {
      add() {
        //它会找mutation中的指定方法   提交add的mutation
        //载荷payload
        this.$store.commit('add', 2);
      },
      minus() {
        this.$store.commit('minus');
      }
    }
  }
</script>

<style scoped>

</style>
