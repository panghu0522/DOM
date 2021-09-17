// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"qNh7":[function(require,module,exports) {
window.dom = {
    create: function create(string) {
        // 创建节点
        var container = document.createElement("template");
        // 使用 "template"作为容器，可以容纳任意元素
        container.innerHTML = string.trim(); // trim 去掉字符串的两端空格
        return container.content.firstChild;
    },
    after: function after(node, newNode) {
        // 新增弟弟节点
        node.parentNode.insertBefore(newNode, node.nextSibling);
    },
    before: function before(node, newNode) {
        // 新增哥哥节点
        node.parentNode.insertBefore(newNode, node);
    },
    append: function append(parent, newNode) {
        // 新增子节点
        parent.appendChild(newNode);
    },
    wrap: function wrap(node, newParent) {
        // 新增父节点
        dom.before(node, newParent);
        dom.append(newParent, node);
    },
    after2: function after2(node, newNode) {
        // 新增弟弟节点
        node.after(node, newNode);
    },
    before2: function before2(node, newNode) {
        // 新增哥哥节点
        node.after(newNode, node);
    },
    remove: function remove(node) {
        //用于删除节点 
        node.parentNode.removeChild(node);
        return node;
    },
    empty: function empty(node) {
        //用于删除后代
        // const {childNodes} = node 等价于const childNodes = node.childNodes
        var array = [];
        var x = node.firstChild;
        while (x) {
            array.push(dom.remove(node.firstChild));
            x = node.firstChild;
        }
        return array;
    },
    attr: function attr(node, name, value) {
        //重载：传不同个数的参数，执行不同的代码
        // 用于读写属性 
        if (arguments.length === 3) {
            //
            node.setAttribute(name, value);
        } else if (arguments.length === 2) {
            //
            return node.getAttribute(name);
        }
    },
    text: function text(node, string) {
        //适配
        if (arguments.length === 2) {
            //修改节点文本内容
            if ("innerText" in node) {
                node.innerHTML = string; //ie
            } else {
                node.textContent = string; // firefox ，chrome
            }
        } else if (arguments.length === 1) {
            if ("innerText" in node) {
                return node.innerText;
            } else {
                return node.textContent;
            }
        }
    },
    html: function html(node, string) {
        // 用于读写HTML内容 
        if (arguments.length === 2) {
            node.innerHTML = string;
        } else if (arguments.length === 1) {
            return node.innerHTML;
        }
    },
    style: function style(node, name, value) {
        // 3种调用形式
        // 用于读写style    
        if (arguments.length === 3) {
            //dom.style(div,'color',red )设置一个属性
            node.style[name] = value;
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                //dom.style(div,'color') 读一个属性      
                return node.style[name];
            } else if (name instanceof Object) {
                //dom.style(div,{color:red})
                var object = name;
                for (var key in object) {
                    node.style[key] = object[key];
                }
            }
        }
    },

    class: {
        add: function add(node, className) {
            // 用于添加 
            node.classList.add(className);
        },
        remove: function remove(node, className) {
            // 用于删除
            node.classList.remove(className);
        },
        has: function has(node, className) {
            return node.classList.contains(className);
        }
    },
    on: function on(node, eventName, fn) {
        // 用于添加事件监听 
        node.addEventListener(eventName, fn);
    },
    off: function off(node, eventName, fn) {
        // 用于删除事件监听
        node.removeEventListener(eventName, fn);
    },
    find: function find(selector, scope) {
        // 用于获取标签或标签们
        return (scope || document).querySelectorAll(selector);
    },
    parent: function parent(node) {
        // 用于获取父元素
        return node.parentNode;
    },
    children: function children(node) {
        // 用于获取子元素
        return node.children;
    },
    siblings: function siblings(node) {
        // 用于获取兄弟姐妹元素（除了自的其他元素）
        return Array.from(node.parentNode.children).filter(function (n) {
            return n !== node;
        });
    },
    next: function next(node) {
        // 用于获取弟弟
        var x = node.nextSibling;
        while (x && x.nodeType === 3) {
            x = x.nextSibling;
        }
        return x;
    },
    previous: function previous(node) {
        // 用于获取哥哥
        var x = node.previousSibling;
        while (x && x.nodeType === 3) {
            x = x.previousSibling;
        }
        return x;
    },
    each: function each(nodeList, fn) {
        // 查看所有节点
        for (var i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i]);
        }
    },
    index: function index(node) {
        // 用于获取排行老几
        var list = dom.children(node.parentNode);
        var i = void 0;
        for (i = 0; i < list.length; i++) {
            if (list[i] === node) {
                break;
            }
        }
        return i;
    }
};
},{}]},{},["qNh7"], null)
//# sourceMappingURL=DOM.e0cef7ef.map