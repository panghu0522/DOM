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
})({"epB2":[function(require,module,exports) {
var div = dom.create('<div>newA1</div>');
var x = dom.create('<div>hi</div>');
console.log(div);
console.log(x);
console.log('----');

var div2 = dom.create('<div>newA2</div>');
dom.after(a2, div2);
console.log(div2);
console.log('----');

var div3 = dom.create('<div>newA3</div>');
dom.before(a2, div3);
console.log(div3);
console.log('----');

var div4 = dom.create('<div></div>');
dom.wrap(a4, div4);
console.log(div4);
console.log('----');

var div5 = dom.create("<div>A5</div>");
dom.append(a5, div5);
console.log(a5);
console.log('----');

var div6 = dom.create("<div>AA</div>");
var div7 = dom.create("<div>BB</div>");
dom.before2(a6, div6);
//dom.before2(a6,div7);


dom.remove(r1);
console.log(remove1);
console.log('----');

dom.empty(r2);
console.log(remove1);
console.log('----');

dom.attr(c1, 'title', 'hi');
var title = dom.attr(c1, 'title');
console.log(title);
console.log('title:' + title);
console.log('----');

dom.text(c2, '你好，新世界');
console.log(c2);
dom.text(c1);
console.log(c1);
console.log('----');

dom.html(c1);
dom.html(c3, '又是一个新的');
console.log(c1);
console.log(c3);
console.log('----');

dom.style(c4, 'color', 'red');
var c05 = dom.style(c5, 'color');
dom.style(c6, { 'color': 'yellow', 'border': '1px solid black' });
console.log(c4);
console.log(c05);
console.log(c6);
console.log('----');

dom.class.add(test1, 'red');
dom.class.add(test2, 'yellow');
dom.class.add(test2, 'blue');
dom.class.add(test3, 'blue');
dom.class.remove(test3, 't03');
var t3 = dom.class.has(test3, 't03');
console.log(t3);
console.log(dom.class.has(test3, 'blue'));
console.log('----');

var fn = function fn() {
    console.log('点击了一下');
};
dom.on(add1, 'click', fn);
dom.off(add1, 'click', fn);
console.log('----');

var f = dom.find('.f11')[0];
console.log(f);
var f01 = dom.find('#f2')[0];
console.log(dom.find('.f11', f01)[0]);
console.log('----');

console.log(dom.parent(f33));
console.log(f33);
console.log('----');

console.log(dom.children(f3));
console.log('----');

console.log(dom.siblings(c3));
console.log(dom.next(c3));
console.log(dom.previous(c3));

var t = dom.find('#traval')[0];
console.log(t);
dom.each(dom.children(t), function (n) {
    return dom.style(n, 'color', 'red');
});

console.log(dom.index(t2));
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.2a1bc5d9.map