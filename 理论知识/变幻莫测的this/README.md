### 变幻莫测的this

##### 事件调用环境
谁触发事件，函数里面的this就会指向谁
```javascript
    .box{
        width:100px;
        height:100px;
        position:relative;
        left: 0;
    }

    <div class="box"></div>
    let box = document.querySelector('.box')
    box.onclick = move
    
    function move(){
        this.style.left = '100px'
    }
```

##### 全局环境
假如是浏览器中指向`window`
如果是node环境下指向`module.exports`
```javascript
    // 引用this.js 
    console.log(this  === module.exports)
    // true

    // index.html页面中
    console.log(this)
    // window
```

##### 函数内部
+ this 谁**调用**指向的就是谁,与声明的无关
```javascript
    function move(){ console.log(this) }
    move()
    // window

    var obj = {
        move1: function(){
            console.log(this)
        }
    }
    obj.move1()
    // obj对象

    var abc = obj.move1
    abc()
    // window
``` 
+ 函数被多层对象所包含时，如果函数被最外层对象调用，this指向也只是他的**上一级对象**
```javascript
     var obj = {
        move1: function(){
            console.log(this)
        }
    }
    window.obj.move1()
    // obj对象
```
+ 构造函数，如果说构造函数有return，假如return的是对象，this指向返回的对象。如果不是对象则this指向保持原本的规则，null较特殊，是对象但是return它this指向保持原本的规则
```javascript
    /**
     * @构造函数干的几件事情
     * 1 调用函数
     * 2 自动创建了一个对象
     * 3 把创建出来的对象自动和this绑定
     * 4 如果构造函数没有返回值，隐式返回this对象
     */
     function fn(){
         // var obj = {}
         this.num = 10
         console.log(this)
     }
     var obj = new fn()
     // fn{num :10}
```

```javascript
    /*
    * @ 原型链中的this
    */
   function fn(){
       this.num = 10
   }

   fn.num = 20
   fn.prototype.num = 30
   fn.prototype.method = function(){
       console.log(this.num)
   }

   var prototype = fn.prototype
   var method = prototype.method
   new fn().method() //10
   prototype.method() // 30
   method() //undefined

```
+  箭头函数本身没有this和arguments，在箭头函数中引用this实际上调用的是定义的上一层作用域的this。这里强调一下是上一层作用域，因此对对象不能形成独立的作用域

```javascript
    let box = document.querySelector('.box')
    var obj = {
        fn: ()=>{
            console.log(this)
        }
    }
    obj.fn()
    // window

    obj.fn.call(box)
    // window

    var obj = {
        fn: function(){
            console.log(this)
        }
    }
    obj.fn.call(box)
    // <div class="box"></div>
    // call(this,a,b,c)
    // apply(this,[a,b,c])
    // bind(this,a,b,c)()
    // apply的用法类似，唯一区别就是其他参数要传数组
    obj.fn.binx(box)()
```

##### 如何改变this指向
