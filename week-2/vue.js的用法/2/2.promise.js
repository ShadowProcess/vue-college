//resolve代表转向成功态
//reject代表转向失败态  resolve和reject均是函数
//promise的实例就一个then方法,then方法有两个参数
let p = new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(function () {
        let a = '蘑菇';
        resolve(a) //这里决定去调用哪个函数
    }, 2000)
});

p.then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
})

