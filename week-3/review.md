## filters实例上可以用
{{'123' | my(1,2,3)}}

filters:{
    my(data,param1,param2,param3){
        return xx;
    }
}

## computed计算“属性” 不是方法
- 方法不会有缓存，computed会根据依赖（归vue管理的数据，可以响应式变化的）的属性进行缓存
- 两部分组成有get和set(不能只写set) 一般情况下通过js赋值影响其他人或者表单元素设置值的时候会调用set方法

## v-if/v-show
- v-if 操作的是dom        v-if和v-else-if,v-else连写
- v-show 操作的是样式

## v-bind 简写是:
- 动态绑定"属性"
```
<img :src="src" :width="w"/>
```

## 实现单页开发的方式
- 通过hash记录跳转的路径（可以产生历史管理）
- 浏览器自带的历史管理的方法history (history.pushState())可能会导致404错误

> 开发额时候使用hash的方式  上线的话我们会使用history的方式