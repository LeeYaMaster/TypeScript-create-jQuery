/******/ import {jQuery} from "./src/jquery";

(function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

class jQuery {
    constructor(param) {
        if (param == document) {
            this[0] = [param];
        }
        else if (isDOM(param)) { //如果判断传进来的是不是this，是判断不了的，因为传进来的时候，已经是DOM对象了。不能判断param == this。
            this[0] = [param];
            this[0] = Array.from(this[0]);
        }
        else {
            //var param = param.trim();
            this[0] = document.querySelectorAll(param);
            this[0] = Array.from(this[0]);
        }
        return this;
    }
    static ajax() {
        //获取ajax的相应值（请求类型，请求地址，同步或异步，传递数据，接收数据类型，成功失败函数等）
        let ajaxData = {
            type: arguments[0].type || "GET",
            url: arguments[0].url || "",
            async: arguments[0].async || "true",
            data: arguments[0].data || null,
            dataType: arguments[0].dataType || "text",
            contentType: arguments[0].contentType || "application/x-www-form-urlencoded",
            beforeSend: arguments[0].beforeSend || function () { },
            success: arguments[0].success || function () { },
            error: arguments[0].error || function () { }
        };
        ajaxData.beforeSend();
        let xhr = new XMLHttpRequest(); //创建 XMLHttpRequest 对象
        xhr.responseType = ajaxData.dataType; //预期服务器返回的数据类型
        xhr.open(ajaxData.type, ajaxData.url, ajaxData.async); //规定请求的类型、URL 以及是否异步处理请求
        xhr.setRequestHeader("Content-Type", ajaxData.contentType); //发送信息至服务器时内容编码类型(向请求添加 HTTP 头)
        xhr.send(convertData(ajaxData.data)); //将请求发送到服务器
        //当请求被发送到服务器时，我们需要执行一些基于响应的任务。
        //每当 readyState 改变时，就会触发 onreadystatechange 事件。
        //readyState 属性存有 XMLHttpRequest 的状态信息。
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    ajaxData.success(xhr.response);
                }
                else {
                    ajaxData.error();
                }
            }
        };
    }
    //DOM渲染
    ready(fn) {
        document.addEventListener('DOMContentLoaded', function () {
            //注销时间，避免重复触发
            document.removeEventListener('DOMContentLoaded', fn(), false);
            fn(); //运行函数
        }, false);
    }
    /*---------------HTML篇-----------------*/
    html(arg) {
        eachNode(this[0], "innerHTML", arg);
        return this;
    }
    text(arg) {
        eachNode(this[0], "innerText", arg);
        return this;
    }
    //添加css成功
    css(arg) {
        this[0].forEach((item) => {
            for (let i in arg) {
                item.style[i] = arg[i];
            }
        });
        return this;
    }
    //添加class成功
    addClass(arg) {
        console.log(this);
        this[0].forEach((item) => {
            for (let i = 0; i < arg.length; i++) {
                item.classList.add(arg[i]);
            }
        });
        return this;
    }
    //删除class单个样式成功
    removeClass(sclass) {
        this[0].forEach((item) => {
            for (let i = 0; i < arguments.length; i++) {
                item.classList.remove(arguments[i]);
            }
        });
        return this;
    }
    toggleClass(arg) {
        for (var i = 0; i < arg.length; i++) {
            this[0].forEach((item) => {
                if (item.classList.contains(arg[i])) {
                    item.classList.remove(arg[i]);
                }
                else {
                    item.classList.add(arg[i]);
                }
            });
        }
    }
    //添加attr单个属性成功
    attr(name, arg) {
        eachNode(this[0], `setAttribute[${name}]`, arg);
        return this;
    }
    //清除空格，无法清除中间
    trim(str) {
        return str.trim();
    }
    //清除空格，包括中间
    trimAll(str) {
        str = str.replace(/\s*/g, ""); //所有空格
        str = str.replace(/^\s*|\s*$/g, ""); //两头空格
        str = str.replace(/^\s*/, ""); //左空格
        str = str.replace(/(\s*$)/g, ""); //右空格
        return str;
    }
    //设置表单的值成功(成功)
    val(arg) {
        if (arg != null) {
            eachNode(this[0], "value", arg);
            return this;
        }
        else {
            return this[0][0].value;
        }
    }
    //append/prepend 是在选择元素内部嵌入。
    //after/before 是在元素外面追加。
    after(arg) {
        this[0].forEach((item) => {
            item = item.after(arguments);
        });
        return this;
    }
    before(arg) {
        this[0].forEach((item) => {
            item = item.before(arguments);
        });
        return this;
    }
    //前面追加节点成功
    prepend(arg) {
        this[0].forEach((item) => {
            item.innerHTML = arg + item.innerHTML;
        });
        return this;
    }
    //后面追加节点成功
    append(arg) {
        this[0].forEach((item) => {
            item.innerHTML += arg;
        });
        return this;
    }
    remove(arg) {
        this[0].forEach((item) => {
            delete item.arg;
        });
        return this;
    }
    //设置高度成功(不包括内边距、边框或外边距)
    height(arg) {
        eachNode(this[0], "clientHeight", arg);
        return this;
    }
    //设置宽度成功(不包括内边距、边框或外边距)
    width(arg) {
        eachNode(this[0], "clientWidth", arg);
        return this;
    }
    //设置高度成功(包括内边距)。
    innerHeight(arg) {
        eachNode(this[0], "innerHeight", arg);
        return this;
    }
    //设置宽度成功(包括内边距)。
    innerWidth(arg) {
        eachNode(this[0], "innerWidth", arg);
        return this;
    }
    //设置高度成功(包括内边距和边框)。
    outerHeight(arg) {
        eachNode(this[0], "outerHeight", arg);
        return this;
    }
    //设置宽度成功(包括内边距和边框)。
    outerWidth(arg) {
        eachNode(this[0], "outerWidth", arg);
        return this;
    }
    /*--------事件篇---------*/
    click(fun) {
        eachEvent(this[0], "onclick", fun);
        return this;
    }
    dblclick(fun) {
        eachEvent(this[0], "ondbclick", fun);
        return this;
    }
    mouseup(fun) {
        eachEvent(this[0], "onmouseup", fun);
        return this;
    }
    focus(fun) {
        eachEvent(this[0], "onfocus", fun);
        return this;
    }
    blur(fun) {
        eachEvent(this[0], "onblur", fun);
        return this;
    }
    select(fun) {
        eachEvent(this[0], "onselect", fun);
        return this;
    }
    change(fun) {
        eachEvent(this[0], "onchange", fun);
        return this;
    }
    onload(fun) {
        eachEvent(this[0], "onload", fun);
        return this;
    }
    unload(fun) {
        eachEvent(this[0], "onunload", fun);
        return this;
    }
    mouseover(fun) {
        eachEvent(this[0], "onmouseover", fun);
        return this;
    }
    mouseout(fun) {
        eachEvent(this[0], "onmouseout", fun);
        return this;
    }
    //移入移出事件成功
    hover(fun1, fun2) {
        eachEvent(this[0], "onmouseover", fun1);
        eachEvent(this[0], "onmouseout", fun2);
        return this;
    }
    mouseenter(fun) {
        eachEvent(this[0], "mouseenter", fun);
        return this;
    }
    mouseleave(fun) {
        eachEvent(this[0], "mouseleave", fun);
        return this;
    }
    keypress(fun) {
        eachEvent(this[0], "onkeypress", fun);
        return this;
    }
    keydown(fun) {
        eachEvent(this[0], "onkeydown", fun);
        return this;
    }
    keyup(fun) {
        eachEvent(this[0], "onkeyup", fun);
        return this;
    }
    submit(fun) {
        eachEvent(this[0], "onsubmit", fun);
        return this;
    }
    resize(fun) {
        eachEvent(this[0], "onresize", fun);
        return this;
    }
    scroll(fun) {
        eachEvent(this[0], "onscroll", fun);
        return this;
    }
    /*--------效果篇---------*/
    //淡入成功
    show(time = 200, callback = null) {
        let num = 0;
        this[0].forEach((item) => {
            item.style.display = "block";
            item.style.opacity = num;
        });
        let st = setInterval(() => {
            num++;
            this[0].forEach((item) => {
                item.style.opacity = num / 10;
            });
            if (num >= 10) {
                clearInterval(st);
                if (callback != null) {
                    callback();
                }
            }
        }, time);
        return this;
    }
    //淡出成功
    hide(time = 200, callback) {
        let num = 10;
        let st = setInterval(() => {
            num--;
            this[0].forEach((item) => {
                item.style.opacity = num / 10;
            });
            if (num <= 0) {
                clearInterval(st);
                if (callback != null) {
                    callback();
                }
            }
        }, time);
        return this;
    }
    //动画
    animate(json, interval, sp, fn) {
        this[0].forEach((item) => {
            this.animateRun(item, json, interval, sp, fn);
        });
    }
    animateRun(obj, json, interval, sp, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(() => {
            //j ++;
            var flag = true;
            for (var arr in json) {
                var icur = 0;
                if (arr == "opacity") {
                    icur = Math.round(parseFloat(document.defaultView.getComputedStyle(obj, null)[arr]) * 100);
                }
                else {
                    icur = parseInt(document.defaultView.getComputedStyle(obj, null)[arr]);
                }
                var speed = (json[arr] - icur) * sp;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                if (icur != json[arr]) {
                    flag = false;
                }
                if (arr == "opacity") {
                    obj.style.filter = "alpha(opacity : '+(icur + speed)+' )";
                    obj.style.opacity = (icur + speed) / 100;
                }
                else {
                    obj.style[arr] = icur + speed + "px";
                }
            }
            if (flag) {
                clearInterval(obj.timer);
                if (fn) {
                    fn();
                }
            }
        }, interval);
    }
    stop() {
        this.animate(null, null, null, null);
    }
    /*----------遍历篇-----------*/
    empty() {
        this[0].forEach((item) => {
            if (item.children) {
                delete item.children;
            }
        });
        return this;
    }
    each(object, callback) {
        var type = (function () {
            switch (object.constructor) {
                case Object:
                    return 'Object';
                    break;
                case Array:
                    return 'Array';
                    break;
                case NodeList:
                    return 'NodeList';
                    break;
                default:
                    return 'null';
                    break;
            }
        })();
        // 为数组或类数组时, 返回: index, value
        if (type === 'Array' || type === 'NodeList') {
            // 由于存在类数组NodeList, 所以不能直接调用every方法
            [].every.call(object, function (v, i) {
                return callback.call(v, i, v) === false ? false : true;
            });
        }
        // 为对象格式时,返回:key, value
        else if (type === 'Object') {
            for (var i in object) {
                if (callback.call(object[i], i, object[i]) === false) {
                    break;
                }
            }
        }
        return this;
    }
    //获取所有父元素未成功
    parents() {
        this[0].forEach((item) => {
            item = item.offsetParent;
        });
    }
    //获取单个父元素成功
    parent() {
        this[0].forEach((item) => {
            item = item.parentNode;
        });
        return this;
    }
    //获取所有下一级的子元素成功
    children(num) {
        let temp = [];
        if (this[0].length > 1) {
            for (let i = 0; i < this[0].length; i++) {
                if (num == undefined) {
                    if (this[0][i].children.length > 1) {
                        for (let j = 0; j < this[0][i].children.length; j++) {
                            temp.push(this[0][i].children[j]);
                        }
                    }
                    else {
                        temp.push(this[0][i].children);
                    }
                }
                else {
                    temp.push(this[0][i].children[num]);
                }
            }
            this[0] = temp;
        }
        else {
            this[0] = this[0].children[num];
        }
        console.log(this[0]);
        console.log(this);
        return this;
    }
    //获取所有兄弟节点,不包括本身
    siblings(arg) {
        let a = []; //保存所有兄弟节点
        this[0].forEach((item) => {
            var p = item.parentNode.children; //获取父级的所有子节点
            for (let i = 0; i < p.length; i++) { //循环
                if (p[i].nodeType == 1 && p[i] != item) { //如果该节点是元素节点与不是这个节点本身
                    a.push(p[i]); // 添加到兄弟节点里
                }
            }
        });
        this[0] = a;
        return this;
    }
    next() {
        this[0].forEach((item) => {
            item = item.nextElementSibling;
        });
        return this;
    }
    nextAll() {
        this[0].forEach((item) => {
            item = item.nextElementSibling;
        });
        return this;
    }
    prev() {
        this[0].forEach((item) => {
            item = item.previousElementSibling;
        });
        return this;
    }
    prevAll() {
        let a = []; //保存所有兄弟节点
        this[0].forEach((item) => {
            var p = item.parentNode.children; //获取父级的所有子节点
            for (let i = 0; i < p.length; i++) { //循环
                a.push(p[i]); // 添加到兄弟节点里
                if (p[i] == item) { //如果该节点是元素节点与不是这个节点本身
                    break;
                }
            }
        });
        this[0] = a;
        return this;
    }
    first() {
        this[0].forEach((item) => {
            item = item.firstElementChild;
        });
        return this;
    }
    last() {
        this[0].forEach((item) => {
            item = item.lastElementChild;
        });
        return this;
    }
    eq(index) {
        this[0].forEach((item) => {
            item = item[index];
        });
        return this;
    }
    filter(arg) {
        for (let i = 0; i < this[0].length; i++) {
            if (this[0][i].className != arg) {
                this[0].splice(i, 1);
                i--;
            }
        }
        return this;
    }
    not(arg) {
        for (let i = 0; i < this[0].length; i++) {
            if (this[0][i].className == arg) {
                this[0].splice(i, 1);
                i--;
            }
        }
        return this;
    }
}
exports.jQuery = jQuery;
const $ = jQuery;
new $(".main").html("123456");
//$.ajax();
function eachNode(obj, attribute, arg) {
    obj.forEach((item) => {
        item[attribute] = arg;
    });
}
exports.eachNode = eachNode;
function eachEvent(obj, attribute, arg) {
    obj.forEach((item) => {
        item[attribute] = arg;
    });
}
exports.eachEvent = eachEvent;
function isDOM(obj) {
    if (typeof HTMLElement === 'object') {
        return obj instanceof HTMLElement;
    }
    else {
        return obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
    }
}
exports.isDOM = isDOM;
function convertData(data) {
    if (typeof data === 'object') {
        var convertResult = "";
        for (var c in data) {
            convertResult += c + "=" + data[c] + "&";
        }
        convertResult = convertResult.substring(0, convertResult.length - 1);
        return convertResult;
    }
    else {
        return data;
    }
}
exports.convertData = convertData;
window.jQuery = window.$ = jQuery;

/***/ })
/******/ ]);