(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{419:function(s,a,t){"use strict";t.r(a);var e=t(6),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"数据库安全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库安全"}},[s._v("#")]),s._v(" 数据库安全")]),s._v(" "),t("blockquote",[t("p",[s._v("测试都是进行的匿名操作，非安全模式")])]),s._v(" "),t("h2",{attrs:{id:"创建用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建用户"}},[s._v("#")]),s._v(" 创建用户")]),s._v(" "),t("p",[s._v("在数据库中创建的第一个用户应该是具有管理其他用户的权限的用户管理员")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("创建一个管理员用户")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("use admin\ndb.createUser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n \tuser: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myUserAdmin"')]),s._v(",\n \tpwd: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"passwd"')]),s._v(",\n \troles: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"userAdminAnyDatabase"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])])]),s._v(" "),t("h2",{attrs:{id:"启动身份认证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动身份认证"}},[s._v("#")]),s._v(" 启动身份认证")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("重启 mongod 进程")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker stop mymongo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("启动 mongod 带身份认证")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker run --name mymongo -v /mymongo/data:/data/db -d mongo:4 mongod --auth\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("linux 启动身份认证")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" bin/mongod --auth --dbpath /data/db\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])])]),s._v(" "),t("li",[t("p",[s._v("进行身份验证")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("进入 mongo 容器")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it mymongo "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("使用参数进行身份验证启动 mongo shell")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("mongo -u "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myUserAdmin"')]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"passwd"')]),s._v(" --authenticationDatabase "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("使用 db.auth()进行身份验证")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("mongo 默认启动mongo shell\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("use admin\ndb.auth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myUserAdmin"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"passwd"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])])])]),s._v(" "),t("h2",{attrs:{id:"授权"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#授权"}},[s._v("#")]),s._v(" 授权")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("权限（在那里 + 做什么）")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("resource: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("db: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v(", collection: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(", actions: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"find"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"update"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("角色（一组权限的集合）")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("默认内置角色：")]),s._v(" "),t("ul",[t("li",[s._v("read ——读取当前数据库中所有非系统集合")]),s._v(" "),t("li",[s._v("readWrite ——读写当前数据库中所有非系统集合")]),s._v(" "),t("li",[s._v("dbAdmin ——管理当前数据库")]),s._v(" "),t("li",[s._v("userAdmin ——管理当前数据库中的用户和角色")]),s._v(" "),t("li",[s._v('这四种后可以加后缀"userAdminAnyDatabase" ——对所有数据库执行操作（只有在 admin 数据库中提供）')])])]),s._v(" "),t("li",[t("p",[s._v("创建自己定义的角色")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("###创建一个只能读取demo集合的用户")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("use "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ndb.createRole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\trole: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"readDemo"')]),s._v(",\n\t\tprivileges: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n\t\t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("resource: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("db: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v(", collection: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"demo"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(", actions: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"find"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n\t\troles: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("ul",[t("li",[s._v("role ——角色名称")]),s._v(" "),t("li",[s._v("privileges ——所具有的权限")]),s._v(" "),t("li",[s._v("roles ——所继承其他角色的权限")])])])])])]),s._v(" "),t("h2",{attrs:{id:"举例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[s._v("#")]),s._v(" 举例")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("创建一个只能读取 test 数据库的用户")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("要以管理员身份登录")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("mongo -u "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myUserAdmin"')]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"passwd"')]),s._v(" --authenticationDatabase "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("创建用户")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("use "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\ndb.createUser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n \tuser: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"testReader"')]),s._v(",\n \tpwd: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"passwd"')]),s._v(",\n \troles: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" role: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"read"')]),s._v(",db: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("验证")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#退出管理员用户")]),s._v("\nmongo -u "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"testReader"')]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"passwd"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#以新创建用户登录，后面不加参数默认操作test数据库")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("可 find() 不可以进行更改写入")])])])]),s._v(" "),t("li",[t("p",[s._v("创建一个只能读取 demo 集合的用户")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("use "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\ndb.createUser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n \tuser: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"demoReader"')]),s._v(",\n \tpwd: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"passwd"')]),s._v(",\n \troles: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"readDemo"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])])]),s._v(" "),t("h1",{attrs:{id:"数据导入导出工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据导入导出工具"}},[s._v("#")]),s._v(" 数据导入导出工具")]),s._v(" "),t("h2",{attrs:{id:"mongoexport"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongoexport"}},[s._v("#")]),s._v(" mongoexport")]),s._v(" "),t("blockquote",[t("p",[s._v("将数据导出为 json 或 csv 格式文件")])]),s._v(" "),t("h3",{attrs:{id:"所需准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#所需准备"}},[s._v("#")]),s._v(" 所需准备")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("需要对数据库有 read 权限")])]),s._v(" "),t("li",[t("p",[s._v("创建执行 mongoexport 的用户")])]),s._v(" "),t("li",[t("p",[s._v("使用 mongo shell 创建用户")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("使用有用户管理员权限的用户启动 mongo shell")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("mongo -u "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myUserAdmin"')]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"passwd"')]),s._v(" --authenticationDatabase admin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("创建一个可读用户")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("use admin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ndb.createUser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tuser: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"readUser"')]),s._v(",\n\t\tpwd: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"passwd"')]),s._v(",\n\t\troles: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"readAnyDatabase"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("退出 mongo shell")])])])])]),s._v(" "),t("h3",{attrs:{id:"导出-csv-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导出-csv-文件"}},[s._v("#")]),s._v(" 导出 csv 文件")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("mongoexport --db "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" --collection demo --type"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("csv --fields name,age --out /opt/backups/demos.csv -u readUser -p "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" --authenticationDatabase admin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("fields——导出字段名称（可以导出内嵌文档字段）必须有这个字段")])]),s._v(" "),t("li",[t("p",[s._v("out——导出文件路径")])]),s._v(" "),t("li",[t("p",[s._v("查看导出文件")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /opt/backups/demos.csv\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"导出-json-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导出-json-文件"}},[s._v("#")]),s._v(" 导出 json 文件")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("mongoexport --db "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" --collection demo --type"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("json --fields name,balance --out /opt/backups/demo.json -u readUser -p "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" --authenticationDatabase admin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("id 文档主键会被默认导出")])]),s._v(" "),t("li",[t("p",[s._v("--fields 选项可选的")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("mongoexport --db "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" --collection demo --type"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("json --out /opt/backups/demo.json -u readUser -p "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" --authenticationDatabase admin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"常用参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用参数"}},[s._v("#")]),s._v(" 常用参数")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("使用查询语句进行筛选")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("mongoexport --db "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" --collection demo --type"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("json --fields name,balance --out /opt/backups/demo.json -u readUser -p "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" --authenticationDatabase admin --query "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{ age: { "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$gte")]),s._v(":20} }'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("指定 ip 和 port")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("mongoexport --db "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" --collection demo --type"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("json --fields name,balance --out /opt/backups/demo.json -u readUser -p "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" --authenticationDatabase admin --host localhost --port "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("默认为本地数据库，27017")])])]),s._v(" "),t("li",[t("p",[s._v("--limit , --skip , --sort 选项")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("mongoexport --db "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" --collection demo --type"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("json --fields name,balance --out /opt/backups/demo.json -u readUser -p "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" --authenticationDatabase admin --sort "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{age: 1}'")]),s._v(" --limit "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" --skip "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("h2",{attrs:{id:"mongoimport"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongoimport"}},[s._v("#")]),s._v(" mongoimport")]),s._v(" "),t("blockquote",[t("p",[s._v("将数据由 json 或 csv 格式文件导入")])]),s._v(" "),t("h3",{attrs:{id:"所需准备-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#所需准备-2"}},[s._v("#")]),s._v(" 所需准备")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("需要对数据库有 readWrite 权限")])]),s._v(" "),t("li",[t("p",[s._v("创建执行 mongoexport 的用户")])]),s._v(" "),t("li",[t("p",[s._v("使用 mongo shell 创建用户")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("使用有用户管理员权限的用户启动 mongo shell")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("mongo -u "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myUserAdmin"')]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"passwd"')]),s._v(" --authenticationDatabase admin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("创建一个可读写用户")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("use admin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ndb.createUser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tuser: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"writeUser"')]),s._v(",\n\t\tpwd: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"passwd"')]),s._v(",\n\t\troles: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"readWriteAnyDatabase"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("退出 mongo shell")])])])])]),s._v(" "),t("h3",{attrs:{id:"导入-csv-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入-csv-文件"}},[s._v("#")]),s._v(" 导入 csv 文件")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("查看上次导出的文件")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /opt/backups/demos.csv\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("###")]),s._v("\nname,age\nzs,22\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(",\nww,\nqq,12\nqq,12\nww,24\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("导入文件")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("mongoimport --db "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" --collection importDemo --type csv --headerline --file /opt/backups/demos.csv -u writeUser -p "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" --authenticationDatabase admin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("查看导入文档")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("mongo -u readUser -p "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" --authenticationDatabase admin --quiet --eval "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'db.importDemo.find()'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"导入-json-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入-json-文件"}},[s._v("#")]),s._v(" 导入 json 文件")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("mongoimport --db "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" --collection importDemo --type json --file /opt/backups/demos.json -u writeUser -p "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" --authenticationDatabase admin --upsertFiles name,age\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"常用参数-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用参数-2"}},[s._v("#")]),s._v(" 常用参数")]),s._v(" "),t("ul",[t("li",[s._v("--headerline ——代表原文件中有 name 和 age 字段（和--fileds 选项二选一）\n"),t("ul",[t("li",[s._v("如果不使用这两个参数，会把第一行也当做为数据进行导入")])])]),s._v(" "),t("li",[s._v("--fileds ——可以自己定义字段名称，可以将内嵌字段拿出来")]),s._v(" "),t("li",[s._v("--drop ——可以添加该选项，如果存在该集合导入前清空集合")]),s._v(" "),t("li",[s._v("--upsertFiles name,age ——更新旧文档，如果已存在相同数据，不再新增文档\n"),t("ul",[t("li",[s._v("如果不使用该参数，一直重复导入相同的文件也会增加文档，他默认比较的时文档主键。可以选择对比字段内容。")])])]),s._v(" "),t("li",[s._v("--stopOnError ——一旦发生错误即停止")]),s._v(" "),t("li",[s._v("--maintainInsertionOrder ——按照文件顺序进行导入")])]),s._v(" "),t("h1",{attrs:{id:"数据库备份恢复工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库备份恢复工具"}},[s._v("#")]),s._v(" 数据库备份恢复工具")]),s._v(" "),t("h3",{attrs:{id:"mongodump-备份"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongodump-备份"}},[s._v("#")]),s._v(" mongodump 备份")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("mongodump -h localhost:27017 -u root -p root --authenticationDatabase admin  -d "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" -c demo -o /home/xiaohao/ --gzip\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("-d 备份指定数据库")])]),s._v(" "),t("li",[t("p",[s._v("-c 备份指定集合")])]),s._v(" "),t("li",[t("p",[s._v("-o 指明导出的文件名")])]),s._v(" "),t("li",[t("p",[s._v("-- excludeCollection = demo 除了 demo 集合都进行备份")])]),s._v(" "),t("li",[t("p",[s._v("-q 指定过滤条件")])]),s._v(" "),t("li",[t("p",[s._v("--authenticationDatabase 身份验证")])]),s._v(" "),t("li",[t("p",[s._v("--gzip 对备份进行压缩")])])]),s._v(" "),t("h3",{attrs:{id:"mongorestore-恢复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongorestore-恢复"}},[s._v("#")]),s._v(" mongorestore 恢复")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("mongorestore -h localhost:27017 -u root -p root --authenticationDatabase admin -d "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" -c demo --drop /home/xaiohao/test/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("--drop 恢复的时候把之前的集合 drop 掉")])]),s._v(" "),t("h3",{attrs:{id:"与-mongoexport-import-的对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#与-mongoexport-import-的对比"}},[s._v("#")]),s._v(" 与 mongoexport/import 的对比")]),s._v(" "),t("ul",[t("li",[s._v("mongodump/store 是针对整个库的操作，mongoexport/import 是针对表中数据的操作。")]),s._v(" "),t("li",[s._v("mongodump/store 导出带有 BSON 格式数据，mongoexport/import 导出 json 或者 csv 格式数据")]),s._v(" "),t("li",[s._v("在一些 mongodb 版本之间，BSON 格式可能会随版本不同而有所不同，所以不同版本之间用 mongodump/mongorestore 可能不会成功，具体要看版本之间的兼容性。")]),s._v(" "),t("li",[s._v("JSON 虽然具有较好的跨版本通用性，但其只保留了数据部分，不保留索引，账户等其他基础信息。使用时应该注意。")])]),s._v(" "),t("blockquote",[t("p",[s._v("该部分参考：https://www.cnblogs.com/clsn/p/8244206.html#auto_id_9")])])])}),[],!1,null,null,null);a.default=n.exports}}]);