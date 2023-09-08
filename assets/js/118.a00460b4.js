(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{504:function(e,t,a){"use strict";a.r(t);var r=a(6),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"如何开发soe服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何开发soe服务"}},[e._v("#")]),e._v(" 如何开发SOE服务")]),e._v(" "),a("blockquote",[a("p",[e._v("作者:李小龙  时间： 2021-01-05")])]),e._v(" "),a("h1",{attrs:{id:"一、soe相关介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、soe相关介绍"}},[e._v("#")]),e._v(" 一、SOE相关介绍")]),e._v(" "),a("p",[e._v("服务器对象扩展，一个SOE（Server Object Extension）就是一个包含一组方法的类，这个类可以在SOC(全称是ArcSOC.exe)中运行，并且可以被web应用程序调用。")]),e._v(" "),a("p",[e._v("Server Objects是粗粒度的AO组件，是一个可以执行特定操作的高级对象，它隐藏了细粒度的ArcObject。Server Objects的粗粒度接口支持对于像绘制地图或地理编码等整体性任务。Server objects也有SOAP接口，可以把server objects暴露成Web Service，从而可以被客户端使用。")]),e._v(" "),a("p",[e._v("SOE是开发者的一个高级选项，使您能够将ArcGIS Server服务基本功能进行扩展。SOE具有两大优势：")]),e._v(" "),a("p",[e._v("1.SOE可以作为SOAP或REST Web服务，使得用ArcGIS Web APIs建立的客户（用于JavaScript、Flex、Silverlight、iOS等）以便调用这些应用程序。事实上，您的SOE将出现在ArcGIS Services Directory之内，并将提供特性设置、基本类型等ArcGIS APIs能够理解的典型对象类型。")]),e._v(" "),a("p",[e._v("​       2.SOE能够对ArcObjects进行有效封装，提供理想环境以快速执行您的指令。")]),e._v(" "),a("p",[e._v("环境：ArcObject、ArcServer、VS2019")]),e._v(" "),a("h1",{attrs:{id:"二、创建soe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、创建soe"}},[e._v("#")]),e._v(" 二、创建SOE")]),e._v(" "),a("p",[e._v("1、创建一个完整的SOE在VS中新建一个项目，选择Server Object Extention，并在右边选择REST 模板，如下图：")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/dad72d0c8016281c74eedae6f12c6d4f/wps1.jpg",alt:"img"}})]),e._v(" "),a("p",[e._v("2、当点了确定之后，可以看到VS已经为生成了一个SOE模板。")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/547060a38f35380c33ed21ba56b12190/wps2.jpg",alt:"img"}})]),e._v(" "),a("p",[e._v("① SOE其实就是一个COM组件，每个COM组件都有一个GUID作为标识；")]),e._v(" "),a("p",[e._v("② 指定SOE扩展的服务类型，该为10.2版本SOE的新特性，在10.2以前的版本中，SOE只能扩展MapServer，而10.2的版增加了对imageServer的扩展；")]),e._v(" "),a("p",[e._v("③ all Capabilities 指soe支持的操作，里面填写的名字应该与后面的operation对应；")]),e._v(" "),a("p",[e._v("④ defaultCapilites 是指默认的操作")]),e._v(" "),a("p",[e._v("⑤ description SOE的描述，部署SOE后在manager中可以看到其描述")]),e._v(" "),a("p",[e._v("⑥ SOE的显示名称")]),e._v(" "),a("p",[e._v("⑦ Properties是SOE的属性")]),e._v(" "),a("p",[e._v("⑧ 表明是一个该SOE模板是rest还是soap")]),e._v(" "),a("p",[e._v("3、实现接口")]),e._v(" "),a("p",[e._v("生成了一SOETest的类，该类已经实现了几个接口：IServerObjectExtension、IObjectConstruct、IRESTRequestHandler、IObjectActivate。")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/be9810b472a79790d38f1a981c5a9d89/wps3.jpg",alt:"img"}})]),e._v(" "),a("p",[e._v("3.1 IServerObjectExtension（必选）接口")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/1c22f3df2dc566a1e5840b51e6b7a6e4/wps4.jpg",alt:"img"}})]),e._v(" "),a("p",[e._v("​\t该接口主要有个方法：Init(IServerObjectHelper pSOH)和void Shutdown();")]),e._v(" "),a("p",[e._v("​\t当Server启动的时候会调用该方法，并将IServerObjectHelper对象传入，该接口是对Server对象的弱引用，可以通过IServerObjectHelper.ServerObject得到服务器对象。Shutdown方法用在服务器关闭时调用，经常我们在该方法中释放SOE中使用的资源。")]),e._v(" "),a("p",[e._v("3.2 IRESTRequestHandler（必选）接口")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/68c9aee25d463d9886df5be0fd8ad190/wps5.jpg",alt:"img"}})]),e._v(" "),a("p",[e._v("​\t该接口主要有下面两个方法：获取schema，处理和返回前端的请求。这两个方法中的代码保存不动。")]),e._v(" "),a("p",[e._v("​    string GetSchema();")]),e._v(" "),a("p",[e._v("​    byte[] HandleRESTRequest()")]),e._v(" "),a("p",[e._v("​\tIRESTRequestHandler.handleRESTREquest() 方法主要有下面两个作用：回调资源和操作的方法、获取资源在实例级别的描述；")]),e._v(" "),a("p",[e._v("​\t该方法在识别这两个作用的时候是通过operationName参数，如果该参数是空字符产那就是第二个作用，否则是第一个作用。")]),e._v(" "),a("p",[e._v("该方法的参数如下：")]),e._v(" "),a("p",[e._v("capabilities:一组被资源授权的操作，可以为空字符串")]),e._v(" "),a("p",[e._v("resourceName: 资源名称. 空字符串表示根级别，子资源会通过‘/’ 表示")]),e._v(" "),a("p",[e._v("operationName: 操作名称")]),e._v(" "),a("p",[e._v("operationInput: 操作的参数，JSON格式")]),e._v(" "),a("p",[e._v("outputFormat:客户端请求的输出格式，如JSON,AMF")]),e._v(" "),a("p",[e._v("responseProperties: 通过操作返回的一组键值对，逗号分开")]),e._v(" "),a("p",[e._v("3.3 IObjectConstruct（可选）接口")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/4cb2a857bc82e061da9340a9cc6b5a5c/wps6.jpg",alt:"img"}})]),e._v(" "),a("p",[e._v("​\t该接口只有一个方法Construct，该方法在Init方法执行后，立即被执行，如果我们的SOE有配置属性，就可通过该方法的参数得到，该方法只调用1次，我们可以将SOE中用的的比较耗费资源的逻辑写在该方法中，比如：获取地图代码，或者你始终操作某一个图层，就可以把获取该图层的代码写在这里。")]),e._v(" "),a("p",[e._v("3.4 IObjectActivate（可选）接口")]),e._v(" "),a("p",[e._v("​\t当init和Construct调用后，SOE的对象已经被创建，并且相应的配置信息也得到了，如果SOE的整个逻辑中需要不停的获取和释放服务器上下文，那么就必须实现改接口，改接口有两个方法： activate()和deactivate()，当客户端调用CreateServerContext()的时候activate()方法被调用，当客户端释放服务器上下文对象时deactivate()方法被调用。")]),e._v(" "),a("p",[e._v("4、相关函数")]),e._v(" "),a("p",[e._v("4.1 构造函数")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/8aed783f6676c18e39c16af811445538/wps7.jpg",alt:"img"}})]),e._v(" "),a("p",[e._v("4.2 其它函数")]),e._v(" "),a("p",[e._v("在构造函数中多了一个ServerLogger的对象，该对象是一个日志记录对象，用该对象可以对我们的SOE进行信息记录，记录后的信息，最后可以通过Manager的日志查看。")]),e._v(" "),a("p",[e._v("​\t在构造函数中还调用了CreateRestSchema函数，如下：")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/bf4f5db33e24cfb7ef63f9ed6fa58579/wps8.jpg",alt:"img"}})]),e._v(" "),a("p",[e._v("​\t在该函数中创建了Rest资源和Rest资源的操作，并且Rest资源和Rest操作都对应一个处理函数，如上图的RootResHandler和SampleOperHandler分别是处理资源和资源操作的方法，这些handler的具体实现如下：")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/be970b15905ba02a56cc0022d3114b5e/wps9.jpg",alt:"img"}})]),e._v(" "),a("p",[a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/1e75612911c5551b36b82b3e1f4ce24b/wps10.jpg",alt:"img"}})]),e._v(" "),a("p",[e._v("要注意RestOperation类，该类对应了我们SOE的一个操作，该类的参数如下：")]),e._v(" "),a("p",[e._v('RestOperation("sampleOperation",new string[] { "parm1", "parm2" },new string[] { "json" },SampleOperHandler); 这些参数分别对应了操作的名称，参数，支持的格式，以及该操作的处理函数。')]),e._v(" "),a("p",[e._v("一个资源可以有子资源，并且一个资源可以对应多个操作，对于资源的handler我们可以不用关注，但是操作的handler是我们整个SOE的核心部分。如下图定义了多个操作：")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/cd1cd0b332d5930692c523659acb2a6a/wps11.jpg",alt:"img"}})]),e._v(" "),a("p",[e._v("5、要素类,栅格对象，表等对象")]),e._v(" "),a("p",[e._v("​\tIMapServerDataAccess接口，该接口主要有两个方法，如下图：")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/38df478e1e134e2f7cbba01e94bb4ec4/wps12.jpg",alt:"img"}})]),e._v(" "),a("p",[e._v("第一个方法主要获取表，要素类，栅格数据，但是在地图文档中有的数据是和其他数据有关联的，比如join操作，那么通过第二个方法不但可以获取源表的数据，还可以获取目的表的数据。")]),e._v(" "),a("h1",{attrs:{id:"三、部署soe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、部署soe"}},[e._v("#")]),e._v(" 三、部署SOE")]),e._v(" "),a("p",[e._v("​\t当SOE写完之后，通过ArcGIS Manager 进行部署，在Manager中找到站点，然后找到扩展，选择添加扩展，如下图：")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/a9759ef9766867887061563d3ac96834/wps13.jpg",alt:"img"}})]),e._v(" "),a("p",[e._v("找到编译后的SOE文件，如下图：")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/e9823c56df056c93d0d42888663ea299/wps14.jpg",alt:"img"}})]),e._v(" "),a("p",[e._v("​\t部署成功之后会在Manager中看到，如下图：")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/15200163b6c822190aa556e8438aae32/wps15.jpg",alt:"img"}})]),e._v(" "),a("p",[e._v("​\t然后在服务à功能à勾选à保存并启动即部署完毕。")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/b8db5ecc59a5b7ab71c983bf93888949/wps16.jpg",alt:"img"}})]),e._v(" "),a("p",[e._v("​\t点击url链接，显示可用接口。")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/91cfde23156a917c4a8de92039d85a36/wps17.jpg",alt:"img"}})]),e._v(" "),a("p",[e._v("输入参数，得到计算结果：")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/7f16f811260a922381ae814399e7d1ef/wps18.jpg",alt:"img"}})]),e._v(" "),a("h1",{attrs:{id:"四、调试soe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、调试soe"}},[e._v("#")]),e._v(" 四、调试SOE")]),e._v(" "),a("p",[e._v("SOE的工程实际上是一个类库，，当启动ArcGIS Server的服务的时候，会在Windows的任务管理器中看到ArcSOC.exe这样的进程，这些进程对应的就是ArcGIS Server的服务，我们可以采用附加进程的方式对SOE进行调试，如下，我们找到所有的ArcSOC.exe，将这些附加到进程中：")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/528afa25fce6ac577ca68bed35e3c904/wps19.png",alt:"img"}})]),e._v(" "),a("p",[e._v("在SOE项目中添加断点，通过Rest的方式访问SOE的时候，就会进行调试，我们便可以跟踪，看哪里出现问题。")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/66c83181e898d8209b9a17e09b357c21/wps20.jpg",alt:"img"}}),e._v(" "),a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/4998e006f0cd031445acdb6e2b810306/wps21.jpg",alt:"img"}})]),e._v(" "),a("h1",{attrs:{id:"五、计算目前的soe工程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、计算目前的soe工程"}},[e._v("#")]),e._v(" 五、计算目前的SOE工程")]),e._v(" "),a("p",[e._v("Git地址：http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335/xdata/SH2018GH036/gis/gis-calculate-soe.git")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/d6d13348bb5f0fe41f2744f7fdf022c3/wps22.jpg",alt:"img"}})]),e._v(" "),a("p",[e._v("① 包含台账统计、自定义缓冲区统计、cad转图片三个操作接口")]),e._v(" "),a("p",[e._v("② 只有一个台账统计接口")]),e._v(" "),a("p",[e._v("③ 台账工具，控制台程序")]),e._v(" "),a("p",[e._v("相关soe问题记录文档：【腾讯文档】葵花宝典——计算产品问题集锦")]),e._v(" "),a("p",[e._v("https://docs.qq.com/sheet/DQ0RXdHdNWktNRWtZ")])])}),[],!1,null,null,null);t.default=s.exports}}]);