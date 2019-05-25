# TypeScript-create-jQuery
这是用Ts开发的jQuery，骨架已完成，因为是个人开发，水平有限，工程量大，精力不够，所以需要大家的帮助，热烈欢迎提pr，热烈欢迎提pr，热烈欢迎提pr，重要的事说三遍，你们编程的水平比我强多了，未测试，BUG很多，因为个人精力实在是太有限了。
另外，这框架我都感觉自己写的low，别喷我，有什么好的建议，欢迎加QQ1162091199，请大牛多指点。
实现了，63个常用的方法，基本和官方文档方法一样。
    ready(fn);
    html(arg);
    text(arg);
    css(arg);//参数为字符串
    addClass(arg);//参数为字符串
    removeClass(arg);
    toggleClass(arg);
    attr(name, arg);
    trim(str);
    trimAll(str);
    val(arg);
    after(arg);
    before(arg);
    prepend(arg);
    append(arg);
    remove(arg);
    height(arg);
    width(arg);
    innerHeight(arg);
    innerWidth(arg);
    outerHeight(arg);
    outerWidth(arg);
    click(fun);
    dblclick(fun);
    mouseup(fun);
    focus(fun);
    blur(fun);
    select(fun);
    change(fun);
    onload(fun);
    unload(fun);
    mouseover(fun);
    mouseout(fun);
    hover(fun1, fun2);
    mouseenter(fun);
    mouseleave(fun);
    keypress(fun);
    keydown(fun);
    keyup(fun);
    submit(fun);
    resize(fun);
    scroll(fun);
    show(time, callback);
    hide(time, callback);
    animate(json, interval, sp, fn);
    animateRun(obj, json, interval, sp, fn);
    stop();
    empty();
    each(object, callback);
    parents();
    parent();
    children(num);
    siblings(arg);
    next();
    nextAll();
    prev();
    prevAll();
    first();
    last();
    eq(index);
    filter(arg);
    not(arg);
    方法简单使用介绍,方法前要加new。这问题目前还没解决。
        //new $('#main').toggleClass('testMain', 'testMain');
				//new $('#main').css('color','#00FF00');
				//new $('#main').addClass('testMain','testMain');
				//new $('#main').html('1234');
				//new $('p').parents();
				//new $('p').hide();
				//new $('#main').children(0);
				//new $('#main').parent().css('color','#00FF00','text-align','center');
				//new $('#main').html('1234');
				//new $('#main').text('1');
				//new $('#main').append('');
				//new $('#main').children(1).css('color','#00FF00','text-align','center');
				//new $('#main').prepend('');
				//new $('#main').html();
				//new $('#main').hide();//切换为显示完成
				//new $('#main').height();//获取高度成功
				//new $('#main').width();//获取宽度成功
    目前所存在的问题：
    1、采用ES6面向对象，每一次运行，都要new一次。之前我在js上用原型链的时候，并不需要new，这个问题还没解决。
    2、项目中，BUG非常非常多，很多方法都没测试，希望大家共同开发。
    3、像fadeTo这些常用方法，因为精力有限，将在下个版本开发。
    4、ready，animate，很多方法都没测试，目测会有问题，这框架是练手，写来玩的，用于提高技术的，大家千万别用在自己项目中哈，Hhhh。
    5、因为webpack打包的原因，要在jquery.js里面，倒数第三行，加入window.jQuery = window.$ = jQuery;把变量倒出去才可以使用。
    6、jquery.ts用ES6模块化引入help.js里的方法，代码不报错，打包缺有错。
    之前版本的博客：
    https://www.jianshu.com/p/62c1a0c6bbaa
    
