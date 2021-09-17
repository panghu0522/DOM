window.dom = {
  create(string){ // 创建节点
    const container = document.createElement("template") 
  // 使用 "template"作为容器，可以容纳任意元素
    container.innerHTML = string.trim() // trim 去掉字符串的两端空格
    return container.content.firstChild
  },
  after(node, newNode){ // 新增弟弟节点
    node.parentNode.insertBefore(newNode, node.nextSibling)
  }, 
  before(node, newNode){ // 新增哥哥节点
    node.parentNode.insertBefore(newNode, node)
  },
  append(parent, newNode){ // 新增子节点
    parent.appendChild(newNode)
  },
  wrap(node, newParent){ // 新增父节点
    dom.before(node, newParent) 
    dom.append(newParent, node) 
  },
   after2(node, newNode){ // 新增弟弟节点
    node.after(node, newNode)
  }, 
   before2(node, newNode){ // 新增哥哥节点
    node.after(newNode, node)
  },
  remove(node){//用于删除节点 
    node.parentNode.removeChild(node)
    return node
  },
  empty(node) {//用于删除后代
    // const {childNodes} = node 等价于const childNodes = node.childNodes
    const array = []
    let x = node.firstChild
    while (x) {
        array.push(dom.remove(node.firstChild))
        x = node.firstChild
    }
    return array
  },
  attr(node,name,value){//重载：传不同个数的参数，执行不同的代码
// 用于读写属性 
      if (arguments.length === 3) {
//
         node.setAttribute(name,value) 
      }else if (arguments.length ===2) {
//
          return node.getAttribute(name)
      }
  },
  text(node,string){//适配
      if (arguments.length ===2) {//修改节点文本内容
          if (`innerText` in node) {
                node.innerHTML = string //ie
            }else{
                node.textContent = string// firefox ，chrome
            }
      }else if (arguments.length ===1) {
         if (`innerText` in node) {
                return node.innerText 
            }else{
                return node.textContent 
            } 
      } 
  },
  html(node,string){// 用于读写HTML内容 
      if (arguments.length === 2) {
          node.innerHTML = string
      }else if(arguments.length === 1){
          return node.innerHTML
      }
  },
  style(node,name,value){ // 3种调用形式
    // 用于读写style    
      if (arguments.length===3) {
    //dom.style(div,'color',red )设置一个属性
        node.style[name]=value  
      }else if (arguments.length===2) {
          if (typeof name==='string') {
    //dom.style(div,'color') 读一个属性      
              return node.style[name]
          }else if (name instanceof Object) {
    //dom.style(div,{color:red})
              const object =name
              for(let key in object){
                  node.style[key]=object[key]
                }    
            } 
        }
  },
  class:{
      add(node,className){// 用于添加 
          node.classList.add(className)
      },
      remove(node,className){// 用于删除
          node.classList.remove(className)
      },
      has(node,className){
          return node.classList.contains(className)
      }
  },
  on(node,eventName,fn){// 用于添加事件监听 
      node.addEventListener(eventName,fn)
  },
  off(node,eventName,fn){// 用于删除事件监听
      node.removeEventListener(eventName,fn)
  },
  find(selector,scope){// 用于获取标签或标签们
      return(scope||document).querySelectorAll(selector)
  },
  parent(node){ // 用于获取父元素
      return node.parentNode
  },
  children(node){ // 用于获取子元素
      return node.children
  },
  siblings(node){ // 用于获取兄弟姐妹元素（除了自的其他元素）
      return Array.from(node.parentNode.children).filter(n=>n!==node)
  },
  next(node){// 用于获取弟弟
      let x =node.nextSibling
      while(x && x.nodeType===3){
          x=x.nextSibling
      }
      return x
  },
  previous(node){// 用于获取哥哥
      let x = node.previousSibling
      while(x && x.nodeType===3){
          x=x.previousSibling
      }
      return x
  },
  each(nodeList,fn){// 查看所有节点
      for(let i=0;i<nodeList.length;i++){
          fn.call(null,nodeList[i])
      }
  },
  index(node){ // 用于获取排行老几
      const list=dom.children(node.parentNode)
      let i
      for ( i = 0;i<list.length;i++){
          if (list[i]===node) {
              break
          }
      }
      return i
  }
}


 