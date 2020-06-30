##### 防抖和节流的性能优化
防抖：触发事件后在n秒内函数仅执行一次，如果n秒内重复触发，则会重新计算函数执行时间
节流：连续触发时间但在一段时间中只执行一次
```javascript
// 究极简化版-防抖
    function debounce(fn, wait) {
            let timer = null
            return function () {
                var args = arguments 
                timer && clearTimeout(timer)
                timer = setTimeout(() => {
                    fn.apply(this, args)
                }, wait)
            }
        }

// 节流
    function throttle(fn,wait){
        let timer = null 
        return function(){
            if(!timer){
                timer = setTimeout(() => {
                    timer = null
                    fn.apply(this, args)
                }, wait)
            }
        }
    }
```
