(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{439:function(t,a,s){"use strict";s.r(a);var e=s(6),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"启动模型计算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动模型计算"}},[t._v("#")]),t._v(" 启动模型计算")]),t._v(" "),s("blockquote",[s("p",[t._v("作者：于佳鑫")])]),t._v(" "),s("p",[t._v("因为这个地方比较复杂而且涉及到的地方比较多，所以单独独立成一篇文章来介绍，下面先看一下这部分的流程图。")]),t._v(" "),s("img",{staticStyle:{zoom:"63%"},attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/a3a6695dccdab64dd1641d7223fc9fd9/图片2.png",alt:"图片2"}}),t._v(" "),s("p",[t._v("启动模型计算这一部分在后台主要做了两件事：1. 调用模型对用户上传的数据进行计算 2. 调用自动发服务模块将用户上传的 gdb 文件发布成服务。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/22c7a1d04e9fc8909a27153b94ac5f3a/image-20200918135523067.png",alt:"image-20200918135523067"}}),t._v(" "),s("h3",{attrs:{id:"_1-1-自动发服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-自动发服务"}},[t._v("#")]),t._v(" 1.1 自动发服务")]),t._v(" "),s("p",[s("strong",[t._v("此部分涉及到的表：")])]),t._v(" "),s("p",[t._v("MapServerLog（存放发布服务时的日志）")]),t._v(" "),s("blockquote",[s("p",[t._v("注：只列出部分重要的字段。")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("描述")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("reviewTaskId")]),t._v(" "),s("td",[t._v("审查任务 id")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("sourceFileId")]),t._v(" "),s("td",[t._v("发布服务的数据源文件 id（ResourceFile 表）")]),t._v(" "),s("td",[t._v("这个就是矢量数据下的那个 gdb 文件的 id")])]),t._v(" "),s("tr",[s("td",[t._v("publishStatus")]),t._v(" "),s("td",[t._v("发布状态")]),t._v(" "),s("td",[t._v("0 -> 以发布，未检测，此时前端会提示“服务正在发布中，请等待！”")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td"),t._v(" "),s("td",[t._v("1 -> 已检测，发布成功")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td"),t._v(" "),s("td",[t._v("2 -> 已检测，发布失败，此时前端会提示“是否重新发服务”")])]),t._v(" "),s("tr",[s("td",[t._v("serviceName")]),t._v(" "),s("td",[t._v("服务名称")]),t._v(" "),s("td",[t._v("前端最终通过这个拼接出地址调用发布出来的服务")])])])]),t._v(" "),s("p",[s("strong",[t._v("代码逻辑：")])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MapPublishServiceImpl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("java\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 发布地图服务\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Async")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("publishMapService")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" reviewTaskId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果之前已经发布过服务，则清楚之前发布的痕迹")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cleanUpMapServiceData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reviewTaskId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发布服务，此时会记录日志，publishStatus 的值为 0")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("publish")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reviewTaskId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 检查服务发布状态（死循环），如果成功将 publishStatus 的值改为 1，失败将 publishStatus 的值改为 2")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkPublishStatus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reviewTaskId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("h3",{attrs:{id:"_1-2-启动模型计算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-启动模型计算"}},[t._v("#")]),t._v(" 1.2 启动模型计算")]),t._v(" "),s("p",[s("strong",[t._v("涉及到的表：")])]),t._v(" "),s("p",[t._v("ModelCalcDatasourceLog（存放模型计算的数据源信息）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("描述")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("reviewTaskId")]),t._v(" "),s("td",[t._v("审查任务 id")]),t._v(" "),s("td",[t._v("一个审查任务的成果包中可能有多个数据源")])]),t._v(" "),s("tr",[s("td",[t._v("sysCode")]),t._v(" "),s("td",[t._v("数据源 code")]),t._v(" "),s("td",[t._v("调用模型上传数据源，模型返回的唯一标识")])]),t._v(" "),s("tr",[s("td",[t._v("datasourceType")]),t._v(" "),s("td",[t._v("数据源类型")]),t._v(" "),s("td",[t._v("标识着数据源在成果包的哪个位置")])])])]),t._v(" "),s("p",[t._v("ModelCalcLog（模型计算任务日志）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("描述")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("reviewTaskId")]),t._v(" "),s("td",[t._v("审查任务 id")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("taskInstanceId")]),t._v(" "),s("td",[t._v("任务实例 code")]),t._v(" "),s("td",[t._v("模型计算任务的唯一标识")])]),t._v(" "),s("tr",[s("td",[t._v("reviewPointId")]),t._v(" "),s("td",[t._v("审查要点 id")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("calcStatus")]),t._v(" "),s("td",[t._v("模型计算状态")]),t._v(" "),s("td",[t._v("0 -> 计算中")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td"),t._v(" "),s("td",[t._v("1 -> 计算成功")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td"),t._v(" "),s("td",[t._v("2 -> 计算失败")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td"),t._v(" "),s("td",[t._v("3 -> 未计算，出现的原因：在数据库中配置了这个模型参与计算，但是却没有给他配置计算任务（ModelCalcTask）"),s("img",{staticStyle:{zoom:"25%"},attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/92dbc308c401070506c240a95ff0e883/image-20200918160209256.png",alt:"image-20200918160209256"}})])])])]),t._v(" "),s("p",[t._v("ModelCalculationResult（存放模型计算结果，纵表）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("描述")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("reviewTaskId")]),t._v(" "),s("td",[t._v("审查任务 id")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("reviewPointId")]),t._v(" "),s("td",[t._v("审查要点 id")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("key")]),t._v(" "),s("td",[t._v("属性名")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("value")]),t._v(" "),s("td",[t._v("属性值")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("position")]),t._v(" "),s("td",[t._v("代表是哪一行的数据")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[t._v("ModelConflictServer（模型计算的差异服务）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("描述")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("reviewTaskId")]),t._v(" "),s("td",[t._v("审查任务 id")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("reviewPointId")]),t._v(" "),s("td",[t._v("审查要点 id")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("serverName")]),t._v(" "),s("td",[t._v("服务名")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("layerName")]),t._v(" "),s("td",[t._v("图层名")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("strong",[t._v("类名的含义")]),t._v("：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("类名")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("DownloadDatasourceFile")]),t._v(" "),s("td",[t._v("负责寻找到数据源并且下载")])]),t._v(" "),s("tr",[s("td",[t._v("AcquireTaskInstanceFunctional")]),t._v(" "),s("td",[t._v("负责封装不同模型的请求参数")])]),t._v(" "),s("tr",[s("td",[t._v("DisposeCalcResultFunctional")]),t._v(" "),s("td",[t._v("负责解析不同模型返回的参数")])]),t._v(" "),s("tr",[s("td",[t._v("ModelCalcTask")]),t._v(" "),s("td",[t._v("其实它应该叫“模型计算算法”，其中封装了模型系统中每种算法的请求-解析流程。")])])])]),t._v(" "),s("p",[s("strong",[t._v("代码逻辑：")])]),t._v(" "),s("p",[t._v("--------------- MmsCalcServiceImpl2")]),t._v(" "),s("ol",[s("li",[t._v("将审查任务的状态改为【计算中】")]),t._v(" "),s("li",[t._v("调用 startTaskFaced#batchStartCalcTaskV2() 对模型任务进行计算")])]),t._v(" "),s("p",[t._v("--------------- StartTaskFaced")]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("获取所有计算规则对象，通过审查任务的 planType 和 areaLevel 查询出需要计算的审查要点，并将其与计算规则对象绑定起来。此时如果发现系统中没有配置审查要点对应的“计算规则”，那么将会记录日志 calcStatus = 3（未计算）。")]),t._v(" "),s("li",[t._v("过滤出“计算规则”对象之后，获取“计算规则”对象所需的数据源，进行数据源的注册。")]),t._v(" "),s("li",[t._v("启动所有模型的计算（合并发服务除外），调用 StartTaskTemplateMethod")])]),t._v(" "),s("p",[t._v("--------------- StartTaskTemplateMethod（这个是模板方法，主要调用的是 ModelCalcTask 中的方法）")]),t._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[t._v("封装参数请求模型（AcquireTaskInstanceFunctional）获取模型任务的实例 code")]),t._v(" "),s("li",[t._v("记录模型【正在运行中】的日志（ModelCalcLog 表）")]),t._v(" "),s("li",[t._v("轮训的请求模型任务是否计算成功，成功继续往下走，失败则记录模型【计算失败】")]),t._v(" "),s("li",[t._v("获取模型结果")]),t._v(" "),s("li",[t._v("解析模型结果（DisposeCalcResultFunctional）成为我们系统需要的格式")]),t._v(" "),s("li",[t._v("结果入库")])]),t._v(" "),s("p",[t._v("--------------- StartTaskFaced")]),t._v(" "),s("ol",{attrs:{start:"12"}},[s("li",[t._v("启动合并发服务模型的计算，调用 StartTaskTemplateMethod（同 6~11）")])]),t._v(" "),s("h4",{attrs:{id:"合并发服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合并发服务"}},[t._v("#")]),t._v(" 合并发服务")]),t._v(" "),s("p",[t._v("有的空间性模型需要计算差异图斑，之前也是在 ModelCalculationResult 表中存储的，但是图斑数据量太大了，导致查询比较缓慢，所以新增了一个合并发服务的模型，将这些差异图斑发布成服务由前端调用。所以合并发服务需要在所有空间模型计算完成之后再计算。")]),t._v(" "),s("p",[t._v("前端获取差异图层的接口为：/v2/reviewPoint/conflictServer/{reviewTaskId}/{reviewPointId}")]),t._v(" "),s("h4",{attrs:{id:"前端调用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端调用"}},[t._v("#")]),t._v(" 前端调用")]),t._v(" "),s("blockquote",[s("p",[t._v("注：看不懂的话先看常见问题 2")])]),t._v(" "),s("p",[t._v("一个模型计算规则由 AcquireTaskInstanceFunctional 和 DisposeCalcResultFunctional 组成，其中解析方式（DisposeCalcResultFunctional）相同的模型计算结果返回给前端时封装的格式也相同，例如：")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/10b90d434bc4b487b728018725a833df/image-20200921142406784.png",alt:"image-20200921142406784"}}),t._v(" "),s("p",[t._v("这个计算规则配置的解析是 6，所以他对应的返回给前端的接口也就是 types6：")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/8eb75432258b2fe9bc58b217e816b896/image-20200921142544018.png",alt:"image-20200921142544018"}}),t._v(" "),s("h3",{attrs:{id:"_1-3-常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-常见问题"}},[t._v("#")]),t._v(" 1.3 常见问题")]),t._v(" "),s("h4",{attrs:{id:"_1）如何添加审查要点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1）如何添加审查要点"}},[t._v("#")]),t._v(" 1）如何添加审查要点")]),t._v(" "),s("p",[t._v("ReviewPoint 表")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("注释")]),t._v(" "),s("th",[t._v("作用")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("id")]),t._v(" "),s("td",[t._v("节点 id")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("系统自动生成")])]),t._v(" "),s("tr",[s("td",[t._v("reviewPointName")]),t._v(" "),s("td",[t._v("审查要点名")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("与模型名一一对应")])]),t._v(" "),s("tr",[s("td",[t._v("doubleScreen")]),t._v(" "),s("td",[t._v("是否双屏")]),t._v(" "),s("td",[t._v("控制前端页面双屏展示")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("parentId")]),t._v(" "),s("td",[s("strong",[t._v("父节点 id")])]),t._v(" "),s("td",[t._v("维持树形结构")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("leafNode")]),t._v(" "),s("td",[s("strong",[t._v("是否叶子节点")])]),t._v(" "),s("td",[t._v("审查要点树叶子节点")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("display")]),t._v(" "),s("td",[s("strong",[t._v("是否显示")])]),t._v(" "),s("td",[s("strong",[t._v("控制是否在前端显示该审查要点")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("fromModelCalculation")]),t._v(" "),s("td",[s("strong",[t._v("是否来自模型计算")])]),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("reviewPointType")]),t._v(" "),s("td",[s("strong",[t._v("审查要点类型编码")])]),t._v(" "),s("td",[t._v("唯一标识")]),t._v(" "),s("td",[t._v("禁止非开发人员修改")])]),t._v(" "),s("tr",[s("td",[t._v("position")]),t._v(" "),s("td",[s("strong",[t._v("排序位置")])]),t._v(" "),s("td",[s("strong",[t._v("在同一层级中的位置")])]),t._v(" "),s("td",[t._v("可控制前端审查要点树显示顺序")])]),t._v(" "),s("tr",[s("td",[t._v("subTitle")]),t._v(" "),s("td",[s("strong",[t._v("副标题")])]),t._v(" "),s("td",[s("strong",[t._v("前端会显示副标题")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("modelVersionCode")]),t._v(" "),s("td",[s("strong",[t._v("模型版本 code")])]),t._v(" "),s("td",[t._v("与模型匹配唯一标志")]),t._v(" "),s("td",[t._v("严格检查和模型系统中是否一致")])]),t._v(" "),s("tr",[s("td",[t._v("belongAreaLevel")]),t._v(" "),s("td",[s("strong",[t._v("适用的地区层级")])]),t._v(" "),s("td",[t._v("当前审查要点适用于哪一级别")]),t._v(" "),s("td",[t._v("0:国家级,1:省级,2:市级,3:县级,4:乡镇级")])]),t._v(" "),s("tr",[s("td",[t._v("belongPlanType")]),t._v(" "),s("td",[s("strong",[t._v("适用的规划类型")])]),t._v(" "),s("td",[t._v("当前审查要点适用于哪一规划类型")]),t._v(" "),s("td",[t._v("100000:总体规划,200000:专项规划,300000:详细规划")])]),t._v(" "),s("tr",[s("td",[t._v("participateCalc")]),t._v(" "),s("td",[s("strong",[t._v("控制是否参与计算")])]),t._v(" "),s("td",[t._v("控制是否调用模型进行计算")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("hasService")]),t._v(" "),s("td",[s("strong",[t._v("是否具有差异图斑服务")])]),t._v(" "),s("td",[t._v("控制是否参与合并发布服务")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("needPublicService")]),t._v(" "),s("td",[t._v("是否需要发布服务")]),t._v(" "),s("td",[t._v("空间性要点才需要发服务")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[t._v("新增审查要点的 sql：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" ARS_REVIEW_POINT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" display"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" doublescreen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" frommodelcalculation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" leafnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" participatecalc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                             modelversioncode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" parentid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" belongarealevel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" belongplantype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reviewpointname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                             reviewpointtype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" subtitle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hasservice"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" algorithmname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" needpublicservice"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("随便写个id，不要重复就好"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Y'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'N'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<需要模型计算的审查要点为Y，不来自为 N>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<叶子节点为Y，非叶子节点为N'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'N'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<模型code>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("父目录的id，没有父目录则为"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("规划类型（"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000")]),t._v(":总体规划"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200000")]),t._v(":专项规划"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300000")]),t._v(":详细规划）"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("层级（"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(":国家级"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(":省级"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(":市级"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(":县级"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(":乡镇级）"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("同级最大的position"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<审查要点的名字>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("随便编一个不要重复就行"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'N'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<算法名称>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<需要发服务填Y，不需要为N>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("之后再去要点配置模块进行配置就好了。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/758ed322093d916e47b1aed32ea4bde7/image-20200921132103539.png",alt:"image-20200921132103539"}}),t._v(" "),s("h4",{attrs:{id:"_2）如何对接新模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2）如何对接新模型"}},[t._v("#")]),t._v(" 2）如何对接新模型")]),t._v(" "),s("p",[t._v("对接新模型之前一定要确定这个新模型的算法是否已经开发过了，可以问实施这个模型和之前系统上的有没有相同的，确定没有再进行开发。")]),t._v(" "),s("p",[t._v("接下来，我们走一下开发新模型的流程：")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/163405ef5d94c908ddec1d2d168a49ea/image-20200921132918607.png",alt:"image-20200921132918607"}}),t._v(" "),s("p",[t._v("从上面的介绍，大家应该知道对接模型的核心是 AcquireTaskInstanceFunctional（封装请求参数） 和 DisposeCalcResultFunctional（解析请求结果） 类，我们先看下 AcquireTaskInstanceFunctional 接口：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AcquireTaskInstanceFunctional")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * 获取任务实例code\n     *\n     * @param reviewTaskId 审查任务id\n     * @param reviewPointType    审查要点类型代码\n     * @return 模型内边的任务实例code\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("acquireTaskInstances")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" reviewTaskId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" reviewPointType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * 获取当前需要的数据源type\n     *\n     * @return 数据源types\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDatasourceTypes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br")])]),s("p",[t._v("里面有两个方法，我们先看第二个方法，这个方法是获取这个模型计算时需要的数据源类型，所以"),s("strong",[t._v("首先我们需要知道：我们要对接的新模型需要哪些数据源，这个信息可以通过实施来知道。")])]),t._v(" "),s("p",[t._v("我们再看第一个方法，这个方法的作用是封装参数，发送请求获取模型任务实例 code，所以"),s("strong",[t._v("第二步，我们需要知道需要请求的参数是什么样的，这个信息可以通过模型的开发来知道")]),t._v("，模型开发可能会给你这样格式的请求参数：")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"modelVersionCode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<模型code>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"realtimeAttributes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"accessLayer"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\\"name\\":\\"\\",\\"source\\":\\"<数据源的code>\\"}"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"checkedLayer"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\\"name\\":\\"\\",\\"source\\":\\"<数据源的code>\\"}"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br")])]),s("blockquote",[s("p",[t._v("注：先看下配置文件中配置的这几个地址")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/117018b9b47c9bf5abc2a3ba865baee5/image-20200921134932890.png",alt:"image-20200921134932890"}}),t._v(" "),s("p",[t._v("写代码前可以先通过这几个接口先检查一下这个新模型是否可以正常的运行并返回结果。")]),t._v(" "),s("p",[t._v("swagger 地址分别为：")]),t._v(" "),s("p",[t._v("http://52.82.98.186:7321/swagger/index.html")]),t._v(" "),s("p",[t._v("http://52.82.98.186:7322/swagger/index.html")])]),t._v(" "),s("p",[t._v("有了请求的参数我们就可以编写 AcquireTaskInstanceFunctional 类的实现，通过接口返回的结果我们也能编写 DisposeCalcResultFunctional 了。")]),t._v(" "),s("p",[s("strong",[t._v("之后我们需要新增一个 ModelCalcTask 类，使用 Spring 的依赖注入将刚刚写好的 AcquireTaskInstanceFunctional 和 DisposeCalcResultFunctional 注入进去")]),t._v("，像这样：")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/40d50ce9ee6cd7269ebb03fcb6b6185e/image-20200921140430612.png",alt:"image-20200921140430612"}}),t._v(" "),s("p",[t._v("AbstractModelCalcTask 类还有一个抽象方法 getTypes()，这个方法会返回这个类能够计算的审查要点类型，所以还需要在 ReviewPointTypeProperties 类中添加一个 getTypes10() 方法。")]),t._v(" "),s("p",[t._v("ReviewPointTypeProperties 类对应的是配置文件的这个地方：")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/92dbc308c401070506c240a95ff0e883/image-20200918160209256.png",alt:"image-20200918160209256"}}),t._v(" "),s("p",[t._v("最后，我们需要在下面这个地方配置上新写的计算规则：")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/7d4075d1cf5400fd792127471b0237fc/image-20200921140908913.png",alt:"image-20200921140908913"}}),t._v(" "),s("h5",{attrs:{id:"总结："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结："}},[t._v("#")]),t._v(" 总结：")]),t._v(" "),s("ol",[s("li",[t._v("问实施/模型开发这个新模型使用到的数据源有哪些")]),t._v(" "),s("li",[t._v("问模型开发，这个新模型的请求参数是什么样的，与数据源 code 之间的对应关系是啥")]),t._v(" "),s("li",[t._v("知道了这两点，就可以写 AcquireTaskInstanceFunctional 类的实现了，假设是 AcquireTaskInstanceFunctional10")]),t._v(" "),s("li",[t._v("从这个可以看到模型计算的结果是什么样的（当然也可以通过接口获取到，上面已经说了），这样就可以写 DisposeCalcResultFunctional 类的实现，假设是 DisposeCalcResultFunctional10。")])]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/2887d6815317bafad7615ddd615561f2/image-20200921141339560.png",alt:"image-20200921141339560"}}),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[t._v("有了这两个就可以写 AbstractModelCalcTask 的实现，假设是 ModelCalcTask10，将上面新写的 2 个类通过依赖注入注入进去。")]),t._v(" "),s("li",[t._v("在 ReviewPointTypeProperties 类中新增 getTypes10() 方法，返回能由新增的计算规则计算的模型的审查要点类型。")]),t._v(" "),s("li",[t._v("将新写的 ModelCalcTask10 配置到 "),s("code",[t._v("META-INF/services/com.dist.ars.manager.remote.mms2.modelCalcTask.AbstractModelCalcTask")]),t._v(" 文件中。")])]),t._v(" "),s("h4",{attrs:{id:"文件预览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件预览"}},[t._v("#")]),t._v(" 文件预览")]),t._v(" "),s("p",[t._v("在我们配置的审查要点中有两项是辅助性模型里面的，计算这两项的目的就是为了对规划成果中 mdb 和 gdb 文件进行预览。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/0a05f322992fdcd0fbaae142a1ca8083/image-20200921143625136.png",alt:"image-20200921143625136"}}),t._v(" "),s("h5",{attrs:{id:"mdb-文件预览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mdb-文件预览"}},[t._v("#")]),t._v(" mdb 文件预览")]),t._v(" "),s("p",[t._v("对应的 Command 为 TableAchievementCommand，这个 command 主要的作用就是根据 reviewTaskId 和 MDB 表格解析对应的 reviewPointId 获取计算结果返回前端。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/de66d53a4b014d52ba30bd6114a443fd/image-20200921144101753.png",alt:"image-20200921144101753"}}),t._v(" "),s("h5",{attrs:{id:"gdb-文件预览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gdb-文件预览"}},[t._v("#")]),t._v(" gdb 文件预览")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/9d1f52770684939bef9c4b763dfedff2/image-20200921144352186.png",alt:"image-20200921144352186"}}),t._v(" "),s("p",[t._v("所以 gdb 文件预览分为两个部分，一个是获取自动发服务发出来的地图服务，前端请求流程如下：")]),t._v(" "),s("ol",[s("li",[t._v("请求 /v2/reviewTask/mapService/{reviewTaskId} 获取地图发布状态")]),t._v(" "),s("li",[t._v("请求 /v1/reviewPoint/serverUrl/{reviewTaskId} 获取服务名称")]),t._v(" "),s("li",[t._v("根据服务名称拼接地址获取 gdb 服务。")])]),t._v(" "),s("p",[t._v("第二个是 GDB 图层解析模型计算出来的几个图层信息，对应的 Command 为 VectorDataCommand。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/eb6cbaa6f29fe14f75b7a62f4f351fd7/image-20200921144655354.png",alt:"image-20200921144655354"}}),t._v(" "),s("blockquote",[s("p",[t._v("注意：因为自动发出来的服务也有图层信息，如果我们返回给前端图层信息数组不为空，那么将会取交集，如果返回的数组为空，则会直接使用发出来服务的图层信息。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);