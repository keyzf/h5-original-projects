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
    let box = document.getElement.querySelector('.box')
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
+ 构造函数
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
