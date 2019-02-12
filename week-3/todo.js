const vm = new Vue({
    el: '#app',
    data: {
        todos: [
            {isSelected: false, title: '睡觉'},
            {isSelected: false, title: '吃饭'}
        ],
        title: '',
        cur:'',
        hash:''
    },
    created(){ //ajax获取 初始化数据
        //如果localStorage中有数据 就用有的 没有就用默认的
       this.todos = JSON.parse(localStorage.getItem('data')) || this.todos;

       //监控hash值的变化  a/b/c#finish     #finish这个代表hash值这是浏览器的机制
        //如果页面有hash了 重新刷新页面也要获取hash
        this.hash = window.location.hash.slice(2) || 'all';
        window.addEventListener('hashchange',()=>{
            //当hash值变化 重新操作记录的数据
            console.log(window.location.hash);
            this.hash = window.location.hash.slice(2) || 'all';
        },false)

    } ,
    watch:{
      todos:{  //watch默认只监控一层的数据变化，深度监控
        handler(){  //默认写成函数 就相当于默认写了Handler
          //localStorage默认存的是字符串
          localStorage.setItem('data',JSON.stringify(this.todos));
        },deep:true
      }
    },
    methods: {
        add() {
            this.todos.push({
                isSelected: false,
                title: this.title
            });
            this.title = '';
        },
        remove(todo) {
            this.todos = this.todos.filter(item => item !== todo);
        }      ,
        remember(todo){
             this.cur = todo;
        },
        cancel(){
               this.cur = '';
        }
    },
    computed:{
        filterTodos(){
            if (this.hash==='all'){
                return this.todos;
            }
            if (this.hash === 'finish'){
                return this.todos.filter(item=>item.isSelected);
            }
            if (this.hash === 'unfinish') {
                return this.todos.filter(item=>!item.isSelected);
            }
            return this.todos;
        },
         count(){ //这个就相当于get方法
             return this.todos.filter(item=>!item.isSelected).length;
         }
    }     ,
    directives:{  //自定义指令
         focus(el,bindings){
             // 当点击当前li时，让内部的输入框获取焦点
              if (bindings.value) {
                  el.focus(); //获取焦点
              }
         }
    }
});

//将数据循环到页面上
//敲回车将添加新数据（需要加入isSelected）