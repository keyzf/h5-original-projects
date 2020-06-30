#### npm 将ES6换成原生JS
+ 提供兼容性垫片，以便旧版JavaScript引擎与 ECMAScript 6 ( Harmony ) 尽可能接近
+ shim是一个库，这个库中的方法接收的参数与调用方法与标准的方法一样，但是shim中的方法是自己实现逻辑处理的，因此在方法中加入了兼容性处理。所以方法的返回结果与标准方法相同。
+ polyfill指的是符合shim标准的API。polyfill API使用老方法来实现新功能，从而保证在低级浏览器中也能使用比较新的方法。
+ `npm init`项目
+ 全局安装`babel-cli npm install -g babel-cli`
+ 本地安装`babel-preset-es2015和babel-cli npm install --save-dev babel-preset-es2015 babel-cli`
+ 新建`.babelrc`
 ```
            {
            "presets":[
            "es2015"
            ],
            "plugins":[]
            }
```
+ 5 对js进行转码 `babel ./index.js -o ./index.js`
+ 成功转码适应低版本浏览器