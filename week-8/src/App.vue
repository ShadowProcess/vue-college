<template>
    <div>
        {{msg}}
        <!--<router-view></router-view>-->
        <button @click="show">notify</button>
    </div>
</template>

<script>
    //ES6语法，必须默认导出一个对象
    export default {
        name: "App",
        data(){
            return {msg:'123'};
        },methods:{
            show(){
               this.$notify('我很丑',1000);
            }
        }
    }
</script>

<style scoped>

</style>