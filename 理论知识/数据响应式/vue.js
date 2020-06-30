class vue extends EventTarget{
    constructor(option){
        super()
        this.option = option
        this._data = this.option.data
        this.el = document.querySelector(this.option.el)
        this.compileNode(this.el)
        this.observe(this._data)
    }

    observe(data) {
        let _this = this
        this._data = new Proxy(data,{
            set(target,prop,newVal){
                console.log(newVal)
                let event = new CustomEvent(prop, {
                    detail:newVal
                })
                _this.dispatchEvent(event)
                return Reflect.set(...arguments)
            }
        })
    }

    // 数据替换
    compileNode(el){
        let child = el.childNodes
        child.forEach(node =>{
            // nodeType 为3表示文本节点
            if(node.nodeType === 3){
                console.log('这是文本节点')
                let text = node.textContent
                let reg = /\{\{\s*([^\s{\}]+)\s*\}\}/g
                if(reg.test(text)){
                    let $1 = RegExp.$1
                    this._data[$1] && (node.textContent =text.replace(reg, this._data[$1]))

                    this.addEventListener($1,e=>{
                        node.textContent = text.replace(reg, e.detail)
                    })
                }
            }else if(node.nodeType === 1){
                let attr = node.attributes
                if(attr.hasOwnProperty('v-model')){
                    let keyName = attr['v-model'].nodeValue
                    node.value = this._data[keyName]
                    node.addEventListener('input',e=>{
                        this._data[keyName] = node.value
                    })
                }
                this.compileNode(node)
            }
        })
    }
}