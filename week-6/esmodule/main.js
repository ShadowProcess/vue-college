console.log(1);
//如果是第三方模块不需要加 ./
//如果是文件模块需要加 ./

//在另一个文件中将内容解构出来即可使用
//import有声明功能 具有提升效果 会放到头部进行解析
//import {str,str2,a} from './a.js';
//console.log(str,str2);
//a()

import * as b from './a.js';
console.log(b.str2);
b.a();



// xxx代表就是default之后的结果
import xxx from './b.js';
console.log(xxx);
