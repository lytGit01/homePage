(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0af499"],{"0e4b":function(s,a,t){"use strict";t.r(a);var n=function(){var s=this,a=s.$createElement;s._self._c;return s._m(0)},l=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"content"},[t("h3",{attrs:{id:"vuecli3-vue.config.js-%E9%85%8D%E7%BD%AE"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuecli3-vue.config.js-%E9%85%8D%E7%BD%AE"}}),s._v(" vueCli3 vue.config.js 配置")]),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" CompressionWebpackPlugin = "),t("span",{staticClass:"hljs-built_in"},[s._v("require")]),s._v("("),t("span",{staticClass:"hljs-string"},[s._v("'compression-webpack-plugin'")]),s._v(");\n\n"),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" compress = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" CompressionWebpackPlugin({\n    "),t("span",{staticClass:"hljs-attr"},[s._v("filename")]),s._v(": "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("info")]),s._v(" =>")]),s._v(" {\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("`"),t("span",{staticClass:"hljs-subst"},[s._v("${info.path}")]),s._v(".gz"),t("span",{staticClass:"hljs-subst"},[s._v("${info.query}")]),s._v("`")]),s._v(";\n    },\n    "),t("span",{staticClass:"hljs-attr"},[s._v("algorithm")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'gzip'")]),s._v(",\n    "),t("span",{staticClass:"hljs-attr"},[s._v("threshold")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("10240")]),s._v(",\n    "),t("span",{staticClass:"hljs-attr"},[s._v("test")]),s._v(": "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" "),t("span",{staticClass:"hljs-built_in"},[s._v("RegExp")]),s._v("("),t("span",{staticClass:"hljs-string"},[s._v("'\\\\.('")]),s._v(" + ["),t("span",{staticClass:"hljs-string"},[s._v("'js'")]),s._v("].join("),t("span",{staticClass:"hljs-string"},[s._v("'|'")]),s._v(") + "),t("span",{staticClass:"hljs-string"},[s._v("')$'")]),s._v("),\n    "),t("span",{staticClass:"hljs-attr"},[s._v("minRatio")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0.8")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 只有压缩率小于这个值的资源才会被处理")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("deleteOriginalAssets")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(" "),t("span",{staticClass:"hljs-comment"},[s._v("// 删除原文件")]),s._v("\n});\n\n"),t("span",{staticClass:"hljs-built_in"},[s._v("module")]),s._v(".exports = {\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制) 原本属性名为baseUrl【已废除】")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("publicPath")]),s._v(": process.env.NODE_ENV === "),t("span",{staticClass:"hljs-string"},[s._v("'development'")]),s._v(" ? "),t("span",{staticClass:"hljs-string"},[s._v("'dzfd-web/'")]),s._v(" : "),t("span",{staticClass:"hljs-string"},[s._v("'/'")]),s._v(",\n\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("outputDir")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'dist'")]),s._v(",\n\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 放置生成的静态资源(s、css、img、fonts)的(相对于 outputDir 的)目录(默认'')")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("assetsDir")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'assets'")]),s._v(",\n\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 指定生成的 index.html 的输出路径(相对于 outputDir)也可以是一个绝对路径。")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("indexPath")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'index.html'")]),s._v(",\n\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// eslint-loader 是否在保存的时候检查")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("lintOnSave")]),s._v(": process.env.NODE_ENV !== "),t("span",{staticClass:"hljs-string"},[s._v("'production'")]),s._v(",\n\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 关闭生产环境的 source map 以加速生产环境构建")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("productionSourceMap")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n\n    "),t("span",{staticClass:"hljs-attr"},[s._v("pages")]),s._v(": {\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// pages 里配置的路径和文件名在你的文档目录必须存在 否则启动服务会报错")]),s._v("\n        "),t("span",{staticClass:"hljs-attr"},[s._v("index")]),s._v(": {\n            "),t("span",{staticClass:"hljs-comment"},[s._v("// 除了 entry 之外都是可选的")]),s._v("\n            "),t("span",{staticClass:"hljs-attr"},[s._v("entry")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'src/main.js'")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// page 的入口,每个“page”应该有一个对应的 JavaScript 入口文件")]),s._v("\n            "),t("span",{staticClass:"hljs-attr"},[s._v("template")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'public/index.html'")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 模板来源")]),s._v("\n            "),t("span",{staticClass:"hljs-attr"},[s._v("filename")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'index.html'")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 在 dist/index.html 的输出")]),s._v("\n            "),t("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'Index Page'")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 当使用 title 选项时,在 template 中使用：<title><%= htmlWebpackPlugin.options.title %></title>")]),s._v("\n            "),t("span",{staticClass:"hljs-attr"},[s._v("chunks")]),s._v(": ["),t("span",{staticClass:"hljs-string"},[s._v("'chunk-vendors'")]),s._v(", "),t("span",{staticClass:"hljs-string"},[s._v("'chunk-common'")]),s._v(", "),t("span",{staticClass:"hljs-string"},[s._v("'index'")]),s._v("] "),t("span",{staticClass:"hljs-comment"},[s._v("// 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk")]),s._v("\n        }\n    },\n\n    "),t("span",{staticClass:"hljs-attr"},[s._v("css")]),s._v(": {\n        "),t("span",{staticClass:"hljs-attr"},[s._v("extract")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 是否使用css分离插件 ExtractTextPlugin")]),s._v("\n        "),t("span",{staticClass:"hljs-attr"},[s._v("sourceMap")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 开启 CSS source maps")]),s._v("\n        "),t("span",{staticClass:"hljs-attr"},[s._v("loaderOptions")]),s._v(": {\n            "),t("span",{staticClass:"hljs-attr"},[s._v("sass")]),s._v(": {\n                "),t("span",{staticClass:"hljs-comment"},[s._v("// 根据自己样式文件的位置调整")]),s._v("\n                "),t("span",{staticClass:"hljs-attr"},[s._v("prependData")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'@import \"@/assets/css/pages/global.scss\";'")]),s._v("\n            }\n        }\n    },\n\n    "),t("span",{staticClass:"hljs-attr"},[s._v("devServer")]),s._v(": {\n        "),t("span",{staticClass:"hljs-comment"},[s._v("// 环境配置")]),s._v("\n        "),t("span",{staticClass:"hljs-attr"},[s._v("port")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("8080")]),s._v(",\n        "),t("span",{staticClass:"hljs-attr"},[s._v("open")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 配置自动启动浏览器")]),s._v("\n        "),t("span",{staticClass:"hljs-comment"},[s._v("// 当出现编译器错误或警告时，在浏览器中显示")]),s._v("\n        "),t("span",{staticClass:"hljs-attr"},[s._v("overlay")]),s._v(": {\n            "),t("span",{staticClass:"hljs-attr"},[s._v("warnings")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n            "),t("span",{staticClass:"hljs-attr"},[s._v("errors")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("\n        },\n        "),t("span",{staticClass:"hljs-attr"},[s._v("proxy")]),s._v(": {\n            "),t("span",{staticClass:"hljs-string"},[s._v("'/api'")]),s._v(": {\n                "),t("span",{staticClass:"hljs-attr"},[s._v("target")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'http://10.10.12.211:11010'")]),s._v(",\n                "),t("span",{staticClass:"hljs-attr"},[s._v("changeOrigin")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n                "),t("span",{staticClass:"hljs-attr"},[s._v("ws")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n                "),t("span",{staticClass:"hljs-attr"},[s._v("pathRewrite")]),s._v(": { "),t("span",{staticClass:"hljs-string"},[s._v("'^/api'")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'/api'")]),s._v(" }\n            }\n        }\n    },\n    "),t("span",{staticClass:"hljs-attr"},[s._v("chainWebpack")]),s._v(": "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("config")]),s._v(" =>")]),s._v(" {\n        "),t("span",{staticClass:"hljs-comment"},[s._v("/* 添加分析工具 */")]),s._v("\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (process.env.NODE_ENV === "),t("span",{staticClass:"hljs-string"},[s._v("'production'")]),s._v(") {\n            "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (process.env.npm_config_report) {\n                config\n                    .plugin("),t("span",{staticClass:"hljs-string"},[s._v("'webpack-bundle-analyzer'")]),s._v(")\n                    .use("),t("span",{staticClass:"hljs-built_in"},[s._v("require")]),s._v("("),t("span",{staticClass:"hljs-string"},[s._v("'webpack-bundle-analyzer'")]),s._v(").BundleAnalyzerPlugin)\n                    .end();\n                config.plugins.delete("),t("span",{staticClass:"hljs-string"},[s._v("'prefetch'")]),s._v(");\n            }\n            "),t("span",{staticClass:"hljs-comment"},[s._v("// 最小化代码")]),s._v("\n            config.optimization.minimize("),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(");\n            "),t("span",{staticClass:"hljs-comment"},[s._v("// 分割代码")]),s._v("\n            config.optimization.splitChunks({\n                "),t("span",{staticClass:"hljs-attr"},[s._v("chunks")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'async'")]),s._v(",\n                "),t("span",{staticClass:"hljs-attr"},[s._v("minSize")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("30000")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 模块的最小体积")]),s._v("\n                "),t("span",{staticClass:"hljs-attr"},[s._v("minChunks")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 模块的最小被引用次数")]),s._v("\n                "),t("span",{staticClass:"hljs-attr"},[s._v("maxAsyncRequests")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("5")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 按需加载的最大并行请求数")]),s._v("\n                "),t("span",{staticClass:"hljs-attr"},[s._v("maxInitialRequests")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 一个入口最大并行请求数")]),s._v("\n                "),t("span",{staticClass:"hljs-attr"},[s._v("automaticNameDelimiter")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'~'")]),s._v(", "),t("span",{staticClass:"hljs-comment"},[s._v("// 文件名的连接符")]),s._v("\n                "),t("span",{staticClass:"hljs-attr"},[s._v("name")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n                "),t("span",{staticClass:"hljs-attr"},[s._v("cacheGroups")]),s._v(": { "),t("span",{staticClass:"hljs-comment"},[s._v("// 缓存数组")]),s._v("\n                    "),t("span",{staticClass:"hljs-attr"},[s._v("default")]),s._v(": {\n                        "),t("span",{staticClass:"hljs-attr"},[s._v("minChunks")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(",\n                        "),t("span",{staticClass:"hljs-attr"},[s._v("priority")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("-20")]),s._v(",\n                        "),t("span",{staticClass:"hljs-attr"},[s._v("reuseExistingChunk")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("\n                    },\n                    "),t("span",{staticClass:"hljs-attr"},[s._v("vendors")]),s._v(": {\n                        "),t("span",{staticClass:"hljs-attr"},[s._v("test")]),s._v(": "),t("span",{staticClass:"hljs-regexp"},[s._v("/[\\\\/]node_modules[\\\\/]/")]),s._v(",\n                        "),t("span",{staticClass:"hljs-attr"},[s._v("priority")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("-10")]),s._v("\n                    }\n                }\n            });\n            "),t("span",{staticClass:"hljs-comment"},[s._v("// 压缩图片")]),s._v("\n            config.module\n                .rule("),t("span",{staticClass:"hljs-string"},[s._v("'images'")]),s._v(")\n                .use("),t("span",{staticClass:"hljs-string"},[s._v("'image-webpack-loader'")]),s._v(")\n                .loader("),t("span",{staticClass:"hljs-string"},[s._v("'image-webpack-loader'")]),s._v(")\n                .options({ "),t("span",{staticClass:"hljs-attr"},[s._v("bypassOnDebug")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(" })\n                .end();\n        }\n    },\n    "),t("span",{staticClass:"hljs-attr"},[s._v("configureWebpack")]),s._v(": {\n        "),t("span",{staticClass:"hljs-comment"},[s._v("// 通过 compression-webpack-plugin 插件对js文件进行gzip压缩")]),s._v("\n        "),t("span",{staticClass:"hljs-attr"},[s._v("plugins")]),s._v(": [compress]\n    },\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 第三方插件配置")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("pluginOptions")]),s._v(": {}\n};\n\n\n")])])])}],i=t("2877"),v={},_=Object(i["a"])(v,n,l,!1,null,null,null);a["default"]=_.exports}}]);