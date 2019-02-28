<template>
    <div>
        <div class="notify">{{value}}</div>
    </div>
</template>

<script>
    export default {
        name: "notify",
        data(){
            return {value:'我太刷'}
        }
    }
</script>

<style scoped>
    .notify{
        width: 100px;
        height: 40px;
        background-color: rgba(0,0,0,.45);
        border-radius: 40px;
        line-height: 40px;
        text-align: center;
        color: white;
    }
</style>