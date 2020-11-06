(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d207eab"],{a325:function(t,s,a){"use strict";a.r(s);var v=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css"}}),t._v(" css")]),a("pre",{staticClass:"hljs"},[a("code",[t._v("CSS（Cascading Style Sheets，层叠样式表）是一种将表示样式应用到标记的系统。\nCSS以设计、改变其HTML页面的样式而知名，并使用于Web和其他媒介，如XML文档中。\n1996年12月W3C推出了CSS规范的第一个版本，1998年W3C发布了CSS的第二个版本即CSS2.0,\n2001年5月W3C开始进行CSS3标准的制定，到目前为止该标准还没有最终定稿\n")])]),a("h2",{attrs:{id:"css-4%E7%A7%8D%E5%BC%95%E5%85%A5%E6%96%B9%E5%BC%8F"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-4%E7%A7%8D%E5%BC%95%E5%85%A5%E6%96%B9%E5%BC%8F"}}),t._v(" css 4种引入方式")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-number"},[t._v("1.")]),t._v(" 引入外部样式文件\n    <link type="),a("span",{staticClass:"hljs-string"},[t._v('"text/css"')]),t._v(" rel="),a("span",{staticClass:"hljs-string"},[t._v('"stylesheet"')]),t._v(" href="),a("span",{staticClass:"hljs-string"},[t._v('"CSS样式文件的绝对地址"')]),t._v("> \n    (推荐使用) 当HTML页面被渲染时，link引用的CSS文件会被同时加载，我们也可以通过JavaScript控制DOM去改变link元素的CSS内容\n\n"),a("span",{staticClass:"hljs-number"},[t._v("2.")]),t._v(" 导入外部样式单\n    （"),a("span",{staticClass:"hljs-number"},[t._v("1")]),t._v("）<style type="),a("span",{staticClass:"hljs-string"},[t._v('"text/css"')]),t._v(">    \n            @"),a("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" "),a("span",{staticClass:"hljs-string"},[t._v('"CSS样式文件的绝对地址"')]),t._v(";\n            @"),a("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" url("),a("span",{staticClass:"hljs-string"},[t._v('"样式文件的绝对地址"')]),t._v(");\n        "),a("span",{staticClass:"xml"},[a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("style")]),t._v(">")])]),t._v("    \n    （"),a("span",{staticClass:"hljs-number"},[t._v("2")]),t._v("）    "),a("span",{staticClass:"hljs-comment"},[t._v("/*某个CSS文件*/")]),t._v("\n            @"),a("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" "),a("span",{staticClass:"hljs-string"},[t._v('"另一个CSS文件的地址"')]),t._v(";\n\n    @"),a("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v("是由CSS提供的一种导入样式的方式，当页面被加载时，@"),a("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v("会等到页面全部被加载完成时再加载CSS样式，所以在页面还未加载完成期间，页面还没有CSS样式效果，会导致“屏闪”，通过@"),a("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v("导入的CSS样式是无法用DOM去控制的。\n\n"),a("span",{staticClass:"hljs-number"},[t._v("3.")]),t._v(" 使用内联样式\n   <div style="),a("span",{staticClass:"hljs-string"},[t._v('"color: #ccc; width: 200px; height: 100px;"')]),t._v(">"),a("span",{staticClass:"xml"},[a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")])]),t._v("\n   应用于调试元素\n\n"),a("span",{staticClass:"hljs-number"},[t._v("4.")]),t._v(" 使用内部CSS样式\n    <style type="),a("span",{staticClass:"hljs-string"},[t._v('"css/text"')]),t._v(">\n        .text{\n            font-size: "),a("span",{staticClass:"hljs-number"},[t._v("20")]),t._v("px;\n            padding-left: o;\n            margin: "),a("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(" auto;\n        } \n    <"),a("span",{staticClass:"hljs-regexp"},[t._v("/style>     \n")])])]),a("h2",{attrs:{id:"%E6%9D%83%E9%87%8D%E4%B8%8E%E9%80%89%E6%8B%A9%E5%99%A8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E6%9D%83%E9%87%8D%E4%B8%8E%E9%80%89%E6%8B%A9%E5%99%A8"}}),t._v(" 权重与选择器")]),a("h3",{attrs:{id:"%E6%9D%83%E9%87%8D"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E6%9D%83%E9%87%8D"}}),t._v(" 权重")]),a("table",[a("thead",[a("tr",[a("th",[t._v("基本选择器")]),a("th",[t._v("权  重")])])]),a("tbody",[a("tr",[a("td",[t._v("* (全局)")]),a("td",[t._v("0")])]),a("tr",[a("td",[t._v("e (标签)")]),a("td",[t._v("1")])]),a("tr",[a("td",[t._v(". (class)")]),a("td",[t._v("10")])]),a("tr",[a("td",[t._v("#  (id)")]),a("td",[t._v("100")])]),a("tr",[a("td",[t._v("styel (行内)")]),a("td",[t._v("1000")])]),a("tr",[a("td",[t._v("!important")]),a("td",[t._v(">1000")])])])]),a("h3",{attrs:{id:"%E5%B1%82%E6%AC%A1%E9%80%89%E6%8B%A9%E5%99%A8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E5%B1%82%E6%AC%A1%E9%80%89%E6%8B%A9%E5%99%A8"}}),t._v(" 层次选择器")]),a("table",[a("thead",[a("tr",[a("th",[t._v("选择器")]),a("th",[t._v("例子")]),a("th",[t._v("描述")])])]),a("tbody",[a("tr",[a("td",[t._v("element,element")]),a("td",[t._v("div,p")]),a("td",[t._v("选择所有 div 元素和所")])]),a("tr",[a("td",[t._v("element element")]),a("td",[t._v("div p")]),a("td",[t._v("选择 div 元素内部的所有 p 元素")])]),a("tr",[a("td",[t._v("element element")]),a("td",[t._v("div p")]),a("td",[t._v("选择 div 元素内部的所有 p 元素")])]),a("tr",[a("td",[t._v("element>element")]),a("td",[t._v("div > p")]),a("td",[t._v("选择父元素为 div 元素的所有 p 元素")])]),a("tr",[a("td",[t._v("element+element")]),a("td",[t._v("div + p")]),a("td",[t._v("选择紧接在 div 元素之后的所")])])])]),a("h3",{attrs:{id:"%E5%B1%9E%E6%80%A7%E9%80%89%E6%8B%A9%E5%99%A8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E5%B1%9E%E6%80%A7%E9%80%89%E6%8B%A9%E5%99%A8"}}),t._v(" 属性选择器")]),a("table",[a("thead",[a("tr",[a("th",[t._v("选择器")]),a("th",[t._v("例子")]),a("th",[t._v("描述")])])]),a("tbody",[a("tr",[a("td",[t._v("[attribute]")]),a("td",[t._v("[target]")]),a("td",[t._v("选择带有 target 属性所有元素")])]),a("tr",[a("td",[t._v("[attribute=value]")]),a("td",[t._v("[target=_blank]")]),a("td",[t._v('选择 target="_blank" 的所有元素')])]),a("tr",[a("td",[t._v("[attribute~=value]")]),a("td",[t._v("[title~=flower]")]),a("td",[t._v("选择 title 属性值具有多个空格分隔的值 其中包含单词 “flower” 的所有元素")])]),a("tr",[a("td",[t._v("[attr*=val]")]),a("td",[t._v("[attr*=val]")]),a("td",[t._v("选择attr属性值的任意位置包含val的所有元素")])]),a("tr",[a("td",[t._v("[attr^=val]")]),a("td",[t._v("[attr^=val]")]),a("td",[t._v("选择attr属性值以val开头的所有元素")])]),a("tr",[a("td",[t._v("[attr$=val]")]),a("td",[t._v("[attr$=val]")]),a("td",[t._v("选择attr属性值以val结尾的所有元素")])]),a("tr",[a("td",[t._v("[attr")]),a("td",[t._v("=val]")]),a("td",[t._v("[attr")])])])]),a("h3",{attrs:{id:"%E4%BC%AA%E7%B1%BB%E9%80%89%E6%8B%A9%E5%99%A8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E4%BC%AA%E7%B1%BB%E9%80%89%E6%8B%A9%E5%99%A8"}}),t._v(" 伪类选择器")]),a("table",[a("thead",[a("tr",[a("th",[t._v("选择器")]),a("th",[t._v("例子")]),a("th",[t._v("描述")])])]),a("tbody",[a("tr",[a("td",[t._v(":visited")]),a("td",[t._v("a:visited")]),a("td",[t._v("访问的链接过后")])]),a("tr",[a("td",[t._v(":active")]),a("td",[t._v("a:active")]),a("td",[t._v("选择活动链接时")])]),a("tr",[a("td",[t._v(":hover")]),a("td",[t._v("a:hover")]),a("td",[t._v("鼠标划过时")])]),a("tr",[a("td",[t._v(":focus")]),a("td",[t._v("a:focus")]),a("td",[t._v("获取焦点时")])])])]),a("h3",{attrs:{id:"%E7%BB%93%E6%9E%84%E4%BC%AA%E7%B1%BB%E9%80%89%E6%8B%A9%E5%99%A8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E7%BB%93%E6%9E%84%E4%BC%AA%E7%B1%BB%E9%80%89%E6%8B%A9%E5%99%A8"}}),t._v(" 结构伪类选择器")]),a("table",[a("thead",[a("tr",[a("th",[t._v("选择器")]),a("th",[t._v("描述")])])]),a("tbody",[a("tr",[a("td",[t._v("selector:first-child")]),a("td",[t._v("选择selector所匹配的元素，且该元素是其父元素的第一个子元素等价于 selector:nth-child(1)")])]),a("tr",[a("td",[t._v("selector:last-child")]),a("td",[t._v("选择selector所匹配的元素，且该元素是其父元素的最后一个子元素等价于 selector:nth-last-child(1)")])]),a("tr",[a("td",[t._v("selector:nth-child(n)")]),a("td",[t._v("选择selector所匹配的元素，且该元素是其父元素的第n个子元素其中 n 的值可以使正数(1、2、3…)也可以是关键字(even、odd)")])]),a("tr",[a("td",[t._v("selector:nth-last-child(n)")]),a("td",[t._v("选择selector所匹配的元素，且该元素是其父元素的倒数第n个子元素")])]),a("tr",[a("td",[t._v("selector:first-of-type")]),a("td",[t._v("选择selector所匹配的元素，且该元素是其父元素的第一个特定类型的子元素")])]),a("tr",[a("td",[t._v("selector:last-of-type")]),a("td",[t._v("选择selector所匹配的元素，且该元素是其父元素的最后一个特定类型的子元素")])])])])])}],r=a("2877"),l={},_=Object(r["a"])(l,v,e,!1,null,null,null);s["default"]=_.exports}}]);