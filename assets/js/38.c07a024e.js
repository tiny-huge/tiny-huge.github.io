(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{430:function(a,t,s){"use strict";s.r(t);var r=s(6),n=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"引言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引言"}},[a._v("#")]),a._v(" 引言")]),a._v(" "),s("p",[a._v("ClassNotFoundException 和 NoClassDefFoundError 的区别？")]),a._v(" "),s("p",[a._v("ClassNotFoundException 是一个异常，我们可以从异常中恢复程序，而 NoClassDefFoundError 是一个错误，是由 JVM 抛出的，所以我们不应该恢复。")]),a._v(" "),s("h3",{attrs:{id:"classnotfoundexception-产生原因："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#classnotfoundexception-产生原因："}},[a._v("#")]),a._v(" ClassNotFoundException 产生原因：")]),a._v(" "),s("p",[a._v("Java 支持使用 "),s("code",[a._v("Class.forName")]),a._v(" 方法来动态地加载类，任意一个类的类名如果被作为参数传递给这个方法都将导致该类被加载到 JVM 内存中，如果这个类在类路径（应用类加载器的默认路径）中没有被找到，那么此时就会在运行时抛出 ClassNotFoundException 异常。")]),a._v(" "),s("p",[a._v("解决这个问题很容易，唯一需要做的就是要确保所需的类连同它依赖的包存在于类路径中。当 Class.forName 被调用的时候，类加载器会查找类路径中的类，如果找到了那么这个类就会被成功加载，如果没找到，那么就会抛出 ClassNotFountException，除了 "),s("code",[a._v("Class.forName")]),a._v(" 方法，"),s("code",[a._v("ClassLoader.loadClass")]),a._v("、"),s("code",[a._v("ClassLoader.findSystemClass")]),a._v(" 在动态加载类到内存中的时候也可能会抛出这个异常。")]),a._v(" "),s("p",[a._v("由于类的动态加载在某种程度上是被开发者所控制的，所以他可以选择 catch 这个异常然后采取相应的补救措施。有些程序可能希望忽略这个异常而采取其他方法。还有一些程序则会终止程序然后让用户再次尝试前做点事情。")]),a._v(" "),s("blockquote",[s("p",[a._v("网上说还有一个导致 ClassNotFoundException 的原因：当一个类已经某个类加载器加载到内存中了，此时另一个类加载器又尝试着动态地从同一个包中加载这个类。")]),a._v(" "),s("p",[a._v("但是我没测试，所以存疑吧！")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gm6tfgdpwdj31300l842w.jpg",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"noclassdeffounderror-产生原因："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#noclassdeffounderror-产生原因："}},[a._v("#")]),a._v(" NoClassDefFoundError 产生原因：")]),a._v(" "),s("p",[a._v("这个错误往往是你使用 new 操作符来创建一个新的对象但却找不到该对象对应的类（要查找的类在编译的时候是存在的，运行的时候却找不到了）。这个时候就会导致 NoClassDefFoundError。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gm6to9mycyj31380d4whl.jpg",alt:""}})]),a._v(" "),s("blockquote",[s("p",[a._v("LinkageError 的子类表明一个类对另一个类有某种依赖性；但是，后一类在前一类编译之后已经发生了不兼容的变化。（画外音：所以嘛，根据这个定义 ExceptionInInitializerError 就不应该是他的子类啊）")])]),a._v(" "),s("p",[a._v("项目中遇到 NoClassDefFoundError 常见原因：")]),a._v(" "),s("ol",[s("li",[a._v("类路径下缺少部分 jar 包或者类文件。")]),a._v(" "),s("li",[a._v("jar 包文件名发生变更，因为部分可执行 jar 包中的 MANIFEST.MF 中对 jar 包引用方式如下：")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gm6ugaxgizj30zs08gjt1.jpg",alt:""}})]),a._v(" "),s("p",[a._v("所以当 jar 包名称改变之后就会找不到。但是 Tomcat 会加载 lib 目录下的所有 jar 包，所以不会存在这个问题。")]),a._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[a._v("NoClassDefFoundError 也可能由于类的静态初始化模块错误导致，当你的类执行一些静态初始化模块操作，如果初始化模块抛出异常，哪些依赖这个类的其他类会抛出 NoClassDefFoundError 的错误。如果你查看程序日志，会发现一些 java.lang.ExceptionInInitializerError 的错误日志，ExceptionInInitializerError 的错误会导致 java.lang.NoClassDefFoundError: Could not initialize class。")])]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("NoClassDefFoundErrorDueToStaticInitFailure")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("try")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//java.lang.ExceptionInInitializerError")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//\tat cn.x5456.NoClassDefFoundErrorDueToStaticInitFailure.main(NoClassDefFoundErrorDueToStaticInitFailure.java:7)")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//Caused by: java.lang.RuntimeException: UserId Not found")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//\tat cn.x5456.User.getUserId(NoClassDefFoundErrorDueToStaticInitFailure.java:19)")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//\tat cn.x5456.User.<clinit>(NoClassDefFoundErrorDueToStaticInitFailure.java:16)")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//\t... 1 more")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("User")]),a._v(" user1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("User")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("catch")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Throwable")]),a._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("printStackTrace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('//Exception in thread "main" java.lang.NoClassDefFoundError: Could not initialize class cn.x5456.User')]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//\tat cn.x5456.NoClassDefFoundErrorDueToStaticInitFailure.main(NoClassDefFoundErrorDueToStaticInitFailure.java:11)")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("User")]),a._v(" user2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("User")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br")])]),s("p",[a._v("对此我有两个疑问：")]),a._v(" "),s("p",[a._v("1）ExceptionInInitializerError 表示的是初始化阶段出现了错误，但他为啥继承了 LinkageError")]),a._v(" "),s("blockquote",[s("p",[a._v("ExceptionInInitializerError 表示在静态初始化程序中发生了意外的异常。 抛出 ExceptionInInitializerError 表示在评估静态初始化程序或静态变量的初始化程序期间发生了异常")])]),a._v(" "),s("p",[a._v("2）为啥第二次会抛出 NoClassDefFoundError")]),a._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[s("p",[a._v("由于 NoClassDefFoundError 是 LinkageError 的子类，"),s("strong",[a._v("而 LinkageError 的错误在依赖其他的类时会发生")]),a._v("，所以如果你的程序依赖原生的类库和需要的 dll 不存在时，有可能出现 java.lang.NoClassDefFoundError。这种错误也可能抛出 "),s("code",[a._v("java.lang.UnsatisfiedLinkError: no dll in java.library.path Exception Java")]),a._v(" 这样的异常。解决的办法是把依赖的类库和 dll 跟你的 jar 包放在一起。")])]),a._v(" "),s("li",[s("p",[a._v("如果你使用 Ant 构建脚本来生成 jar 文件和 manifest 文件，要确保 Ant 脚本获取的是正确的 classpath 值写入到 manifest.mf 文件")])]),a._v(" "),s("li",[s("p",[a._v("Jar 文件的权限问题也可能导致 NoClassDefFoundError，如果你的程序运行在像 linux 这样多用户的操作系统种，你需要把你应用相关的资源文件，如 Jar 文件，类库文件，配置文件的权限单独分配给程序所属用户组，如果你使用了多个用户不同程序共享的 jar 包时，很容易出现权限问题。比如其他用户应用所属权限的 jar 包你的程序没有权限访问，会导致 java.lang.NoClassDefFoundError 的错误。")])]),a._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://segmentfault.com/a/1190000023827502",target:"_blank",rel:"noopener noreferrer"}},[a._v("Maven 项目为什么会产生 NoClassDefFoundError 的 jar 包冲突？"),s("OutboundLink")],1),a._v("、"),s("a",{attrs:{href:"https://www.jianshu.com/p/100439269148",target:"_blank",rel:"noopener noreferrer"}},[a._v("**重新看待 Jar 包冲突问题及解决方案"),s("OutboundLink")],1)])])]),a._v(" "),s("h3",{attrs:{id:"扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扩展"}},[a._v("#")]),a._v(" 扩展")]),a._v(" "),s("p",[a._v("众所周知，类从加载到虚拟机内存开始，到卸载出内存，它的"),s("a",{attrs:{href:"http://songkun.me/2019/11/24/2019-11-24-java-jvm-class-load-what-each-step-does/",target:"_blank",rel:"noopener noreferrer"}},[a._v("**整个生命周期"),s("OutboundLink")],1),a._v("如下：")]),a._v(" "),s("ul",[s("li",[a._v("加载（loading）：查找并加载类的二进制数据【byte[]】（最常见的情景下是将磁盘上的 class 文件加载到内存中）")]),a._v(" "),s("li",[a._v("连接（linking）：将二进制 class 数据合并到 JRE 中（即把单一的 Class 加入到有继承关系的类树中)，类的连接又分为三个阶段\n"),s("ul",[s("li",[a._v("验证（verification）：确保被加载的类的"),s("strong",[a._v("正确性")]),a._v("【验证模数，版本号等】")]),a._v(" "),s("li",[a._v("准备（preparation）：为类的"),s("strong",[a._v("静态变量")]),a._v("分配内存并赋"),s("strong",[a._v("默认值")]),a._v("。因为此时还没有对象，所以是不会为普通变量赋值。")]),a._v(" "),s("li",[a._v("解析（resolution）：将类中的"),s("strong",[a._v("符号引用（符号占位）转换为直接引用（通过指针直接指向内存中的位置）")]),a._v(" -> JVM 规定要求，遇到 anewarray（数组）、checkcast（泛型） 等操作符号引用的字节码指令之前，必须解析其符号引用。")])])]),a._v(" "),s("li",[a._v("初始化（initialization）：为类的静态变量赋予正确的初始值")]),a._v(" "),s("li",[a._v("使用（using）：类加载到内存之后，我们就可以使用它来创建对象。")]),a._v(" "),s("li",[a._v("卸载（unloading）")])]),a._v(" "),s("p",[a._v("其中加载时从外存储器找不到需要的 class 就出现 ClassNotFoundException，连接时从内存找不到需要的 class 就出现 NoClassDefFoundError。")]),a._v(" "),s("p",[a._v("JVM 规范规定有且仅有下面几种情况会触发类的"),s("em",[a._v("初始化")]),a._v("（加载、验证、准备在这之前完成）：")]),a._v(" "),s("ol",[s("li",[a._v("new")]),a._v(" "),s("li",[a._v("访问（助记符：getstatic）/赋值（putstatic）某个类或接口的静态变量")]),a._v(" "),s("li",[a._v("调用类的静态方法（invokestatic）")]),a._v(" "),s("li",[a._v('反射，Class.forName("xx")')]),a._v(" "),s("li",[s("em",[a._v("初始化")]),a._v("一个类的子类，也会对父类主动使用")]),a._v(" "),s("li",[a._v("启动类")])]),a._v(" "),s("blockquote",[s("p",[a._v("注：上面几种情况都属于主动使用，除上面几种情况下，都是被动使用，不会对类进行"),s("em",[a._v("初始化（initialization）")]),a._v("；例如：A.class")])]),a._v(" "),s("p",[a._v("接口的初始化与类初始化类似，只有 5 不同，父类接口只在用到时候才会初始化。")]),a._v(" "),s("h2",{attrs:{id:"classloader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#classloader"}},[a._v("#")]),a._v(" ClassLoader")]),a._v(" "),s("h3",{attrs:{id:"为什么需要类加载器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要类加载器"}},[a._v("#")]),a._v(" 为什么需要类加载器")]),a._v(" "),s("p",[a._v("类加载器是 Java 语言的一个创新，也是 Java 语言流行的重要原因之一。它使得 Java 类可以被动态加载到 Java 虚拟机中并执行。类加载器从 JDK 1.0 就出现了，最初是为了满足 Java Applet 的需要而开发出来的。Java Applet 需要从远程下载 Java 类文件到浏览器中并执行。现在类加载器在 Web 容器和 OSGi 中得到了广泛的使用。")]),a._v(" "),s("h3",{attrs:{id:"类加载器的主要的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类加载器的主要的作用"}},[a._v("#")]),a._v(" 类加载器的主要的作用")]),a._v(" "),s("ol",[s("li",[a._v("负责将 Class 加载到 JVM 中；")]),a._v(" "),s("li",[a._v("审查每个类应该由谁加载；")]),a._v(" "),s("li",[a._v("将 Class 字节码重新解析成 JVM 统一要求的对象格式；")])]),a._v(" "),s("h3",{attrs:{id:"classloader-的几个主要方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#classloader-的几个主要方法"}},[a._v("#")]),a._v(" ClassLoader 的几个主要方法")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("方法")]),a._v(" "),s("th",[a._v("含义")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("defineClass(byte[], int, int)")]),a._v(" "),s("td",[a._v("将 byte 字节流解析成 JVM 能够识别的 Class 对象")])]),a._v(" "),s("tr",[s("td",[a._v("resolveClass(Class<?>)")]),a._v(" "),s("td",[a._v("用来连接（linking）类，把单一的 Class 加入到有继承关系的类树中。")])]),a._v(" "),s("tr",[s("td",[a._v("findClass(String)")]),a._v(" "),s("td",[a._v("留给子类实现的方法，用于子类自定义类的查找规则，从而取得加载类的字节流，然后可以结合 defineClass 方法生成类的 Class 对象。")])]),a._v(" "),s("tr",[s("td",[a._v("loadClass(String)")]),a._v(" "),s("td",[a._v("它会调用 findClass(String) 方法，默认不调用 resolveClass(Class<?>) 方法，可以同过重载方法 loadClass(String,boolean) 决定在类加载到 JVM 是被链接，不然将在初始化（initialization）之前才进行链接")])])])]),a._v(" "),s("h3",{attrs:{id:"classloader-的源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#classloader-的源码"}},[a._v("#")]),a._v(" ClassLoader 的源码")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gmbhedfszdj310x0u0woh.jpg",alt:""}})]),a._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gmbhfezeboj31c60a6tac.jpg",alt:""}})]),a._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gmbhlaukv3j31920u07db.jpg",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"三个类加载器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三个类加载器"}},[a._v("#")]),a._v(" 三个类加载器")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("类加载器")]),a._v(" "),s("th",[a._v("介绍")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("启动类加载器（Bootstrap ClassLoader）")]),a._v(" "),s("td",[a._v("在 HotSpot 虚拟机中，Bootstrap ClassLoader 是用 C++ 语言编写并嵌入 JVM 内部，主要负载加载"),s("code",[a._v("JAVA_HOME/lib")]),a._v("目录中的所有类，或者加载由选项"),s("code",[a._v("-Xbootcalsspath")]),a._v("指定的路径下的类；")])]),a._v(" "),s("tr",[s("td",[a._v("拓展类加载器（ExtClasLoader）")]),a._v(" "),s("td",[a._v("ExtClassLoader 继承自 URLClassLoader 类，是 sun.misc.Launcher 的内部类，负载加载"),s("code",[a._v("JAVA_HOME/lib/ext")]),a._v("目录中的所有类，或者由参数"),s("code",[a._v("-Xbootclasspath")]),a._v("指定路径中的所有类；")])]),a._v(" "),s("tr",[s("td",[a._v("应用/系统类加载器（AppClassLoader）")]),a._v(" "),s("td",[a._v("AppClassLoader 继承自 URLClassLoader 类，是 sun.misc.Launcher 的内部类，负责加载用户类路径"),s("code",[a._v("ClassPath")]),a._v("下的所有类型，一般情况下为程序的默认类加载器；")])])])]),a._v(" "),s("p",[a._v("类图：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gmbhmuajbnj30fd07uaah.jpg",alt:""}})]),a._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gmbgqw8st8j30ff09nwf1.jpg",alt:""}})]),a._v(" "),s("h4",{attrs:{id:"为什么-java-中有三种基本的类加载器？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么-java-中有三种基本的类加载器？"}},[a._v("#")]),a._v(" 为什么 Java 中有三种基本的类加载器？")]),a._v(" "),s("p",[a._v("在 jdk1.2 版本的 JVM 中，只有一个类加载器，就是现在的 Bootstrap 类加载器。")]),a._v(" "),s("p",[a._v("Java 中有三种基础的类加载器主要为了"),s("strong",[a._v("安全")]),a._v("。只有同一个类加载器加载的类 JVM 才会保证其的包访问级别（如果不指明 private/public 或 protected，则方法和属性具有包访问级别），因此，如果全部都使用一个类加载器，假如用户调用他编写的 java.lang.MyClass 类。理论上该类可以访问和改变 java.lang 包下其他类的默认访问修饰符的属性和方法的能力。Java 语言本身并没有阻止这种行为。但是 JVM 则会阻止这种行为，因为 java 核心类库的 java.lang 包下的类是由 bootstrap 类加载器加载的。不是同一个类加载器加载的类等于不具有包级别的访问权限。类加载器中的其他安全特性也会阻止这种类型侵入。")]),a._v(" "),s("p",[a._v("所以为什么有三种基础的类加载器？是因为他们代表三种不同的信任级别。最可信的级别是 java 核心 API 类。然后是安装的拓展类，最后才是在类路径中的类（属于你本机的类）。")]),a._v(" "),s("h4",{attrs:{id:"类加载机制-使用自定义类加载器带来了什么好处？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类加载机制-使用自定义类加载器带来了什么好处？"}},[a._v("#")]),a._v(" 类加载机制/使用自定义类加载器带来了什么好处？")]),a._v(" "),s("ol",[s("li",[a._v("首先，是为了区分同名的类：假定存在一个应用服务器，上面部署着许多独立的应用，同时他们拥有许多同名却不同版本的类库。试想，这时候 jvm 该怎么加载这些类同时能尽可能的避免掉类加载时对同名类的差异检测呢?当然是不同的应用都拥有自己独立的类加载器了。")]),a._v(" "),s("li",[a._v("其次，是为了更方便的加强类的能力：类加载器可以在 load class 时对 class 进行重写和覆盖，在此期间就可以对类进行功能性的增强。比如添加面向切面编程时用到的动态代理，以及 debug 等原理。怎么样达到仅修改一个类库而不对其他类库产生影响的效果呢? 一个比较方便的模式就是每个类库都可以使用独立的类加载器")])]),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.iteye.com/blog/kiral-1198982",target:"_blank",rel:"noopener noreferrer"}},[a._v("AOP 的实现机制"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gmbnna8czyj30x80u0jyv.jpg",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"双亲委派机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#双亲委派机制"}},[a._v("#")]),a._v(" 双亲委派机制")]),a._v(" "),s("p",[a._v("如果一个类加载器收到了加载类的请求，首先检查这个类是否已经被当前加载器加载过，如果没加载过它首先不会自己去尝试加载这个类，而是把这个请求委托给上级类加载器去完成，每一个层次的类加载器都是如此，所有加载器的加载请求最终都应该传送至最顶层的类加载器中（扩展类加载器），只有当上级类加载器反馈自己无法完成这个加载请求（它的类加载范围中没有找到所需的类）时，下级类加载器才会去尝试自己加载这个类，这便是类加载器的双亲委托机制（Parents Delegation Model）")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gmbhtd9p4nj30hs0cgq4b.jpg",alt:""}})]),a._v(" "),s("h4",{attrs:{id:"为啥需要这个机制？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为啥需要这个机制？"}},[a._v("#")]),a._v(" 为啥需要这个机制？")]),a._v(" "),s("p",[a._v("因为这样可以避免重复加载，当父亲已经加载了该类的时候，就没有必要子 ClassLoader 再加载一次。从安全角度考虑，如果不使用这种委托模式，我们自己定义一个 Map 来动态替代 java 核心 api 中定义的类型，这样会存在非常大的安全隐患，而双亲委托的方式，就可以避免这种情况，因为 Map 在启动时就被引导类加载器（Bootstrcp ClassLoader）加载，所以用户自定义的 ClassLoader 永远也无法加载一个自己写的 Map，除非你改变 JDK 中 ClassLoader 搜索类的默认算法。")]),a._v(" "),s("h4",{attrs:{id:"jvm-在搜索类的时候，又是如何判定两个-class-是相同的呢？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jvm-在搜索类的时候，又是如何判定两个-class-是相同的呢？"}},[a._v("#")]),a._v(" JVM 在搜索类的时候，又是如何判定两个 class 是相同的呢？")]),a._v(" "),s("p",[a._v("JVM 在判定两个 class 是否相同时，不仅要判断两个类名是否相同，而且要判断是否由同一个类加载器实例加载的。只有两者同时满足的情况下，JVM 才认为这两个 class 是 相同的。就算两个 class 是同一份 class 字节码，如果被两个不同的 ClassLoader 实例所加载，JVM 也会认为它们是两个不同的 class。")]),a._v(" "),s("blockquote",[s("p",[a._v("一个类，由不同的类加载器实例加载的话，会在方法区产生两个不同的类，彼此不可见，并且在堆中生成不同 Class 实例。")]),a._v(" "),s("p",[a._v("当使用 equals 方法比较这两个实例生成的对象的时候，会出现 ClassCastException 的异常，因为两个不同类加载器加载的类无法进行比较。")])]),a._v(" "),s("h3",{attrs:{id:"双亲委派的缺陷"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#双亲委派的缺陷"}},[a._v("#")]),a._v(" 双亲委派的缺陷")]),a._v(" "),s("p",[a._v("我们知道 jdbc 为第三方数据库厂商定义了一系列接口让他们实现，当我们需要连接某个数据库的时候只需要引入对应厂商的 jar 包，执行下面代码：")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("forName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"com.mysql.jdbc.Driver"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("目的是向 DriverManager 中注册这个驱动：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gmbmd75tmjj314a0iidhu.jpg",alt:""}})]),a._v(" "),s("p",[a._v("之后执行：")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Connection")]),a._v(" conn "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DriverManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getConnection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("就可以获取到连接了，我们接下来看下这句话里面是如何执行的：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gmbmw4ry9lj31030u04bj.jpg",alt:""}})]),a._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gmbmns4v68j31dm0h4q6y.jpg",alt:""}})]),a._v(" "),s("p",[a._v("线程上下文类加载器是什么呢？")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gmbnvv3p2pj312d0u0qeb.jpg",alt:""}})]),a._v(" "),s("p",[a._v("为啥要传入线程上下文中的类加载器呢？")]),a._v(" "),s("p",[a._v("因为第三方厂商的 jar 包是在类路径下的，当前类的加载器是 Bootstrap ClassLoader，由于双亲委托机制不能向下委托，那么只能通过线程上下文获取到应用类加载器（AppClassLoader）进行加载")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/185612299",target:"_blank",rel:"noopener noreferrer"}},[a._v("**建议看下这篇文章，他是从 spi 角度讲的"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"思维扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思维扩展"}},[a._v("#")]),a._v(" 思维扩展")]),a._v(" "),s("p",[a._v("不知道你们看到这种父子类加载器的设计想到了什么，反正我感觉 Spring 父子容器的设计是模仿这个来设计的，那么 Spring 这样设计的目的是什么呢？")]),a._v(" "),s("p",[a._v("这个答案和上面"),s("code",[a._v("类加载机制/使用自定义类加载器带来了什么好处？")]),a._v("问题的答案很相似：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwgy1gmbpgdju2mj31c00ditex.jpg",alt:""}})]),a._v(" "),s("p",[s("a",{attrs:{href:"http://www.itsoku.com/article/284",target:"_blank",rel:"noopener noreferrer"}},[a._v("***Spring 系列第 24 篇：父子容器"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"本文参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本文参考"}},[a._v("#")]),a._v(" 本文参考")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://my.oschina.net/jasonultimate/blog/166932",target:"_blank",rel:"noopener noreferrer"}},[a._v("ClassNotFoundException 和 NoClassDefFoundError 的区别"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{href:"https://segmentfault.com/a/1190000023827502",target:"_blank",rel:"noopener noreferrer"}},[a._v("Maven 项目为什么会产生 NoClassDefFoundError 的 jar 包冲突？"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.jianshu.com/p/100439269148",target:"_blank",rel:"noopener noreferrer"}},[a._v("**重新看待 Jar 包冲突问题及解决方案"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{href:"http://songkun.me/2019/11/24/2019-11-24-java-jvm-class-load-what-each-step-does/",target:"_blank",rel:"noopener noreferrer"}},[a._v("**类加载（四）：五阶段详解"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{href:"https://segmentfault.com/a/1190000008995781",target:"_blank",rel:"noopener noreferrer"}},[a._v("JVM 类加载过程 & 双亲委派模型"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/w605283073/article/details/85067844",target:"_blank",rel:"noopener noreferrer"}},[a._v("为什么 Java 中有三种基本的类加载器？"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{href:"https://developer.ibm.com/zh/articles/j-lo-classloader/",target:"_blank",rel:"noopener noreferrer"}},[a._v("深入探讨 Java 类加载器"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{href:"https://my.oschina.net/u/1413049/blog/1505821",target:"_blank",rel:"noopener noreferrer"}},[a._v("ClassLoader"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/jek123456/article/details/90477515",target:"_blank",rel:"noopener noreferrer"}},[a._v("JAVA 类：我是如何被 ClassLoader 加载到内存的"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/jamesjxin/article/details/46606307",target:"_blank",rel:"noopener noreferrer"}},[a._v("**怎么解决 java.lang.NoClassDefFoundError 错误"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/185612299",target:"_blank",rel:"noopener noreferrer"}},[a._v("**浅谈双亲委派机制的缺陷及打破双亲委派机制"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{href:"https://segmentfault.com/q/1010000014745626",target:"_blank",rel:"noopener noreferrer"}},[a._v("JAVA 为什么要有多个类加载器，1 个不行吗"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{href:"http://www.itsoku.com/article/284",target:"_blank",rel:"noopener noreferrer"}},[a._v("***Spring 系列第 24 篇：父子容器"),s("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);