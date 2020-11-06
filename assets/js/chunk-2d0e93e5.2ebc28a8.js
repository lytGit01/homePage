(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e93e5"],{"8d69":function(E,t,s){"use strict";s.r(t);var a=function(){var E=this,t=E.$createElement;E._self._c;return E._m(0)},e=[function(){var E=this,t=E.$createElement,s=E._self._c||t;return s("div",{staticClass:"content"},[s("h3",{attrs:{id:"react-%2B-ts-%2B-redux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-%2B-ts-%2B-redux"}}),E._v(" react + ts + redux")]),s("h5",{attrs:{id:"redux%E7%9A%84%E4%B8%89%E5%A4%A7%E6%A0%B8%E5%BF%83%7Bstate%EF%BC%8C-action%EF%BC%8C-reducers%7D"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redux%E7%9A%84%E4%B8%89%E5%A4%A7%E6%A0%B8%E5%BF%83%7Bstate%EF%BC%8C-action%EF%BC%8C-reducers%7D"}}),E._v(" redux的三大核心{state， action， reducers}")]),s("h5",{attrs:{id:"state%3A-%E6%95%B4%E4%B8%AA%E5%BA%94%E7%94%A8%E7%9A%84-state-%E8%A2%AB%E5%82%A8%E5%AD%98%E5%9C%A8%E4%B8%80%E6%A3%B5-object-tree-%E4%B8%AD%EF%BC%8C%E5%B9%B6%E4%B8%94%E8%BF%99%E4%B8%AA-object-tree-%E5%8F%AA%E5%AD%98%E5%9C%A8%E4%BA%8E%E5%94%AF%E4%B8%80%E4%B8%80%E4%B8%AA-store-%E4%B8%AD%E3%80%82"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#state%3A-%E6%95%B4%E4%B8%AA%E5%BA%94%E7%94%A8%E7%9A%84-state-%E8%A2%AB%E5%82%A8%E5%AD%98%E5%9C%A8%E4%B8%80%E6%A3%B5-object-tree-%E4%B8%AD%EF%BC%8C%E5%B9%B6%E4%B8%94%E8%BF%99%E4%B8%AA-object-tree-%E5%8F%AA%E5%AD%98%E5%9C%A8%E4%BA%8E%E5%94%AF%E4%B8%80%E4%B8%80%E4%B8%AA-store-%E4%B8%AD%E3%80%82"}}),E._v(" state: 整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。")]),s("h5",{attrs:{id:"action%3A-%E5%94%AF%E4%B8%80%E6%94%B9%E5%8F%98state%E7%9A%84%E6%96%B9%E6%B3%95%E5%B0%B1%E6%98%AF%E5%87%BA%E5%8F%91-active"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#action%3A-%E5%94%AF%E4%B8%80%E6%94%B9%E5%8F%98state%E7%9A%84%E6%96%B9%E6%B3%95%E5%B0%B1%E6%98%AF%E5%87%BA%E5%8F%91-active"}}),E._v(" action: 唯一改变state的方法就是出发 active")]),s("pre",{staticClass:"hljs"},[s("code",[E._v("store.dispatch({\n  "),s("span",{staticClass:"hljs-attr"},[E._v("type")]),E._v(": "),s("span",{staticClass:"hljs-string"},[E._v("'COMPLETE_TODO'")]),E._v(", "),s("span",{staticClass:"hljs-comment"},[E._v("// 可以理解为名称")]),E._v("\n  index: "),s("span",{staticClass:"hljs-number"},[E._v("1")]),E._v(" "),s("span",{staticClass:"hljs-comment"},[E._v("// 参数")]),E._v("\n})\n")])]),s("h5",{attrs:{id:"reducers%3A-%E6%8F%8F%E8%BF%B0-action-%E6%89%A7%E8%A1%8C%E7%9A%84%E8%BF%87%E7%A8%8B"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reducers%3A-%E6%8F%8F%E8%BF%B0-action-%E6%89%A7%E8%A1%8C%E7%9A%84%E8%BF%87%E7%A8%8B"}}),E._v(" reducers: 描述 action 执行的过程")]),s("h5",{attrs:{id:"%E5%8F%AF%E4%BB%A5%E6%8E%A5%E5%8F%97-%7Bstate%2C-action%7D-%E5%B9%B6%E8%BF%94%E5%9B%9E%E6%96%B0%E7%9A%84-state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#%E5%8F%AF%E4%BB%A5%E6%8E%A5%E5%8F%97-%7Bstate%2C-action%7D-%E5%B9%B6%E8%BF%94%E5%9B%9E%E6%96%B0%E7%9A%84-state"}}),E._v(" 可以接受 {state, action} 并返回新的 state")]),s("h5",{attrs:{id:"%E9%9A%8F%E7%9D%80%E9%A1%B9%E7%9B%AE%E5%8F%98%E5%A4%A7-%E9%9C%80%E8%A6%81%E5%AF%B9-reducers-%E8%BF%9B%E8%A1%8C%E5%8D%95%E7%8B%AC%E5%8C%BA%E5%88%86%E5%8F%AF%E4%BB%A5%E7%94%A8-combinereducers(%7B%E5%8D%95%E4%B8%AAreducers%7D)"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#%E9%9A%8F%E7%9D%80%E9%A1%B9%E7%9B%AE%E5%8F%98%E5%A4%A7-%E9%9C%80%E8%A6%81%E5%AF%B9-reducers-%E8%BF%9B%E8%A1%8C%E5%8D%95%E7%8B%AC%E5%8C%BA%E5%88%86%E5%8F%AF%E4%BB%A5%E7%94%A8-combinereducers(%7B%E5%8D%95%E4%B8%AAreducers%7D)"}}),E._v(" 随着项目变大 需要对 reducers 进行单独区分可以用 combineReducers({单个reducers})")]),s("pre",{staticClass:"hljs"},[s("code",[s("span",{staticClass:"hljs-keyword"},[E._v("const")]),E._v(" visibilityFilter = "),s("span",{staticClass:"hljs-function"},[E._v("("),s("span",{staticClass:"hljs-params"},[E._v("state = 'SHOW_ALL', action")]),E._v(") =>")]),E._v(" {\n  "),s("span",{staticClass:"hljs-keyword"},[E._v("switch")]),E._v(" (action.type) {\n    "),s("span",{staticClass:"hljs-keyword"},[E._v("case")]),E._v(" "),s("span",{staticClass:"hljs-string"},[E._v("'SET_VISIBILITY_FILTER'")]),E._v(":\n      "),s("span",{staticClass:"hljs-keyword"},[E._v("return")]),E._v(" action.filter\n    "),s("span",{staticClass:"hljs-keyword"},[E._v("default")]),E._v(":\n      "),s("span",{staticClass:"hljs-keyword"},[E._v("return")]),E._v(" state\n  }\n}\n"),s("span",{staticClass:"hljs-keyword"},[E._v("export")]),E._v(" "),s("span",{staticClass:"hljs-keyword"},[E._v("default")]),E._v(" visibilityFilter;\n")])]),s("h4",{attrs:{id:"ts%3A-%E5%8F%AF%E4%BB%A5%E4%B8%BA-state%E3%80%81action%E3%80%81reducer-%E8%A7%84%E5%AE%9A%E7%B1%BB%E5%9E%8B%E3%80%81%E6%8E%A5%E5%8F%A3%E3%80%81%E7%B1%BB-%E5%8A%A0%E5%BC%BA%E7%BA%A6%E6%9D%9F%E6%80%A7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ts%3A-%E5%8F%AF%E4%BB%A5%E4%B8%BA-state%E3%80%81action%E3%80%81reducer-%E8%A7%84%E5%AE%9A%E7%B1%BB%E5%9E%8B%E3%80%81%E6%8E%A5%E5%8F%A3%E3%80%81%E7%B1%BB-%E5%8A%A0%E5%BC%BA%E7%BA%A6%E6%9D%9F%E6%80%A7"}}),E._v(" ts: 可以为 State、Action、reducer 规定类型、接口、类 加强约束性")]),s("h4",{attrs:{id:"ts%3A-%E6%9E%84%E5%BB%BAredux%E7%9A%84%E7%9B%AE%E5%BD%95"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ts%3A-%E6%9E%84%E5%BB%BAredux%E7%9A%84%E7%9B%AE%E5%BD%95"}}),E._v(" ts: 构建redux的目录")]),s("h5",{attrs:{id:"types-%E8%A7%84%E5%AE%9Astate%E7%B1%BB%E5%9E%8B"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#types-%E8%A7%84%E5%AE%9Astate%E7%B1%BB%E5%9E%8B"}}),E._v(" types      规定state类型")]),s("h5",{attrs:{id:"actions-%E5%AE%9A%E4%B9%89action%E7%9A%84%E6%A0%BC%E5%BC%8F"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actions-%E5%AE%9A%E4%B9%89action%E7%9A%84%E6%A0%BC%E5%BC%8F"}}),E._v(" actions    定义action的格式")]),s("h5",{attrs:{id:"reducer-reducer%E5%A4%84%E7%90%86%E7%9B%AE%E5%BD%95"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reducer-reducer%E5%A4%84%E7%90%86%E7%9B%AE%E5%BD%95"}}),E._v(" reducer    reducer处理目录")]),s("h5",{attrs:{id:"constans-%E7%BB%9F%E4%B8%80%E8%A7%84%E5%AE%9Aaction%E7%9A%84%E5%90%8D%E7%A7%B0%E7%B1%BB%E5%9E%8B"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#constans-%E7%BB%9F%E4%B8%80%E8%A7%84%E5%AE%9Aaction%E7%9A%84%E5%90%8D%E7%A7%B0%E7%B1%BB%E5%9E%8B"}}),E._v(" constans   统一规定action的名称类型")]),s("h5",{attrs:{id:"container-%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1%E7%9B%AE%E5%BD%95"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#container-%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1%E7%9B%AE%E5%BD%95"}}),E._v(" container  组件通信目录")])])}],B=s("2877"),A={},r=Object(B["a"])(A,a,e,!1,null,null,null);t["default"]=r.exports}}]);