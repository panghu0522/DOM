const div= dom.create('<div>newA1</div>');
const x=dom.create('<div>hi</div>')
console.log(div);
console.log(x);
console.log('----');


const div2= dom.create('<div>newA2</div>');
dom.after(a2,div2);
console.log(div2);
console.log('----');


const div3= dom.create('<div>newA3</div>');
dom.before(a2,div3);
console.log(div3);
console.log('----');


const div4= dom.create('<div></div>');
dom.wrap(a4,div4);
console.log(div4);
console.log('----');


const div5= dom.create("<div>A5</div>");
dom.append(a5, div5)
console.log(a5);
console.log('----');

const div6= dom.create("<div>AA</div>");
const div7= dom.create("<div>BB</div>");
dom.before2(a6,div6);
//dom.before2(a6,div7);


dom.remove(r1)
console.log(remove1);
console.log('----');


dom.empty(r2);
console.log(remove1);
console.log('----');

dom.attr(c1,'title','hi');
const title = dom.attr(c1,'title');
console.log(title);
console.log(`title:${title}`);
console.log('----');

dom.text(c2,'你好，新世界')
console.log(c2);
dom.text(c1)
console.log(c1);
console.log('----');

dom.html(c1);
dom.html(c3,'又是一个新的');
console.log(c1);
console.log(c3);
console.log('----');

dom.style(c4,'color','red');
const c05=dom.style(c5,'color');
dom.style(c6,{'color':'yellow','border': '1px solid black'});
console.log(c4);
console.log(c05);
console.log(c6);
console.log('----');

dom.class.add(test1,'red');
dom.class.add(test2,'yellow');
dom.class.add(test2,'blue');
dom.class.add(test3,'blue');
dom.class.remove(test3,'t03')
const t3= dom.class.has(test3,'t03')
console.log(t3)
console.log(dom.class.has(test3,'blue'))
console.log('----');

const fn=()=>{
    console.log('点击了一下')
}
dom.on(add1,'click',fn);
dom.off(add1,'click',fn);
console.log('----');

const f =dom.find('.f11')[0]
console.log(f)
const f01 =dom.find('#f2',)[0]
console.log(dom.find('.f11',f01)[0])
console.log('----');

console.log(dom.parent(f33));
console.log(f33);
console.log('----');


console.log(dom.children(f3));
console.log('----');

console.log(dom.siblings(c3));
console.log(dom.next(c3));
console.log(dom.previous(c3));

const t=dom.find('#traval')[0]
console.log(t);
dom.each(dom.children(t),(n)=>dom.style(n,'color','red'));

console.log(dom.index(t2));