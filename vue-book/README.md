## 该项目是自动生成
```
vue init webpack [你要创建的vue项目名]
例如：vue init webpack vue-book
```

## 项目用到less
```
npm install less less-loader axios vuex bootstrap@3.3.7
```

- mock 模拟后台数据
- api 代表所有的接口
- base 基础组件
- components 页面组件


# style中增加less报错
```
**解决方法：**卸载安装的高版本的less-loader，
【npm uninstall less-loader】，
安装指定低版本的less-loader【npm install less-loader@4.1.0 --save】
```

#安装轮播图
```
npm install vue-awesome-swiper@2.6.7 --save-dev
```

#热门图书功能
- 先写服务端，确保数据能正常返回
- 增加api方法，实现调取数据的功能
- 在哪个组件中应用这个api，如果是一个基础组件，需要用这些数据，
在使用这个组件的父级中调用这个方法，将数据传递给基础组件
- 写一个基础组件
 - 1.创建一个.vue文件
 - 2.在需要使用这个组件中的父级中引用这个组件
 - 3.在组件中注册
 - 4.以标签形式引入

## 路由元信息


##下拉加载
- 默认加载5条，前端告诉后台现在要从第几条开始给我
- /page?offset=5

#安装图片懒加载插件
```
npm install vue-lazyload
```

## coding split 代码分隔

