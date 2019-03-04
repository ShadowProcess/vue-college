let http = require('http');
let fs = require('fs');
let url = require('url');

//获取轮播图数据 /sliderssetHlet
let sliders = require('./sliders');

function read(cb) {
  fs.readFile('./book.json', 'utf8', function (err, data) {
    if (err || data.length == 0) {
      cb([]); //如果有错误，或者文件没长度，就是空数组
    } else {
      cb(JSON.parse(data)); //将读出来的内容转化成对象
    }
  })
}

/*read(function (books) { //books代表所有图书
  console.log(books);
});*/

function write(data, cb) {
  console.log("=====" + JSON.stringify(data))
  fs.writeFile('./book.json', JSON.stringify(data), cb)
}

/*write({},function () {
  console.log("写入成功")
})*/

let pageSize = 5; //每页显示几个

http.createServer((req, res) => {
  //解决跨域问题
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", " Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By", ' 3.2.1')
  //application/json;charset=utf-8;
  console.log("请求类型:" + req.method)
  if (req.method === "OPTIONS") { //让options请求快速返回
    console.log("预检请求options返回了!")
    return res.end('200');
  }
  ;

  let {pathname, query} = url.parse(req.url, true); //true把query转化成对象
  if (pathname === '/page') {
    let offset = parseInt(query.offset) || 0; //拿到当前前端传递的值
    read(function (books) {
      //每次偏移量 在偏移基础上增加5条
      let result = books.reverse().slice(offset, offset + pageSize); //数据倒叙
      let hasMore = true; //默认有更多
      if (books.length <= offset + pageSize) { //已经显示的数目 大于了总条数
        hasMore = false;
      }
      res.setHeader('Content-Type', 'application/json;charset=utf8')
      setTimeout(() => {

      }, 3000)
      res.end(JSON.stringify({hasMore: hasMore, books: result}))
    })
    return;
  }
  if (pathname === '/sliders') {
    res.setHeader('Content-Type', 'application/json;charset=utf8')
    return res.end(JSON.stringify(sliders));
  }
  if (pathname === '/hot') {
    read(function (books) {
      let hot = books.reverse().slice(0, 6)
      res.setHeader('Content-Type', 'application/json;charset=utf8')
      setTimeout(() => {

      }, 3000);
      res.end(JSON.stringify(hot));
    });
    return
  }
  if (pathname === '/book') { //对书的增删改查
    res.setHeader("Content-Type", "application/json;charset=utf-8;");
    let id = parseInt(query.id); //取出的是字符串
    switch (req.method) { // ?id=1
      case 'GET':
        if (typeof id !== 'undefined' && !isNaN(id)) { //查询一个
          read(function (books) {
            let book = books.find(item => item.bookId === id);
            if (!book) { //如果没找到，则是undefined
              book = {};
            }
            return res.end(JSON.stringify(book));
          });
          console.log(id)
        } else { //获取所有图书
          read(function (books) {
            res.end(JSON.stringify(books.reverse()));
          })
        }
        break;
      case 'POST':
        let str = ''
        req.on('data', function (chunk) {
          str += chunk;
        });
        req.on('end', function () {
          let book = JSON.parse(str);
          read(function (books) { //添加id
            book.bookId = books.length ? books[books.length - 1].bookId + 1 : 1;
            books.push(book); //将数据放到books中，books在内存中
            write(books, function () {
              res.end(JSON.stringify(book));
            });
          });
        });
        break;
      case 'PUT':
        if (id) { //获取了当前要修改的id
          let str = "";
          req.on('data', (chunk) => {
            console.log("" + chunk)
            str = str + chunk;
          });
          req.on('end', () => {
            let book = JSON.parse(str); //book要改成什么样子
            read(function (books) {
              books = books.map(item => {
                if (item.bookId === id) { //找到id相同的那一本书
                  return book;
                }
                return item; //其它书正常返回
              });
              write(books, function () { //将数据写回json
                res.end(JSON.stringify(books));
              })
            })
          })
        } else {
          console.log("put方法：" + id)
        }
        break;
      case 'DELETE':
        read(function (books) {
          books = books.filter(item => item.bookId !== id);
          console.log(books)
          write(books, function () {
            res.end(JSON.stringify({})); //删除返回空对象
          });
        })
        break;
    }
    return
  }

  //读取一个路径
  fs.stat('.' + pathname, function (err, stats) {
    if (err) {
      res.statusCode = 404;
      res.end("NOT FOUND");
    } else { //如果是目录会报错
      if (stats.isDirectory()) {
        let p = require('path').join('.' + pathname,'./index.html');
        fs.createReadStream(p).pipe(res);
      } else {
        fs.createReadStream('.' + pathname).pipe(res);
      }
    }
  });

}).listen(3000);
