(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{500:function(t,_,v){"use strict";v.r(_);var a=v(6),e=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"国土空间一张图-soe-台账开发说明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#国土空间一张图-soe-台账开发说明"}},[t._v("#")]),t._v(" 国土空间一张图 SOE 台账开发说明")]),t._v(" "),v("blockquote",[v("p",[t._v("作者:Dist 时间： 2020-10-16")])]),t._v(" "),v("p",[t._v("普通 SOE 台账")]),t._v(" "),v("h1",{attrs:{id:"_1、综合台账接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、综合台账接口"}},[t._v("#")]),t._v(" 1、综合台账接口")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[t._v("**接口方式**")])]),t._v(" "),v("th",[t._v("Http RESTFul WebService")]),t._v(" "),v("th"),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[t._v("**接口名称**")])]),t._v(" "),v("td",[t._v("landCompositionStatistics")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("**HTTP 提交*****")]),t._v("*方式****")]),t._v(" "),v("td",[t._v("GET、POST")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("**接口描述**")])]),t._v(" "),v("td",[t._v("综合台账接口")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("**地址**")])]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("**输入参数**")])]),t._v(" "),v("td",[v("strong",[t._v("**参数名**")])]),t._v(" "),v("td",[v("strong",[t._v("**类型**")])]),t._v(" "),v("td",[v("strong",[t._v("**描述**")])])]),t._v(" "),v("tr",[v("td",[t._v("layerName")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("图层名（必选）")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("classifyField")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("分类字段名（必选）")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("geometry")]),t._v(" "),v("td",[t._v("Json")]),t._v(" "),v("td",[t._v("自定义查询范围图形（可选）")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("whereClause")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("行政区查询条件（可选）")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("dicName")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("分类字典文件名（可选）")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("**输入*****")]),t._v("*参数*"),v("strong",[t._v("**")]),t._v("*实例****")]),t._v(" "),v("td",[t._v('GET：（1） 以行政区为单位进行缓存计算—无范围、无条件整体统计 layerName=总规规划用地 classifyField=YDDMdicName=城规用地分类用地平衡或 dicName=””其他参数为 null（2） 根据行政区获取数据—有属性条件自定义统计 layerName=总规规划用地 classifyField=YDDMdicName=城规用地分类用地平衡或 dicName=””whereClause= xzqLevel=0& xzqName=福州市其他参数为 null 说明：xzqLevel——0: 国,1: 省,2: 市,3: 区县,4: 乡镇,5: 村（3） 自定义范围计算—有范围条件自定义统计 layerName=总规规划用地 classifyField=YDDMdicName=城规用地分类用地平衡或 dicName=””其他参数为 nullgeometry= {"rings":[[[119.27877807617188,25.740250241229266],[119.27990618983969,25.740214788829014],[119.28102985135827,25.74010857154268],[119.28214462614889,25.739932008561382],[119.2832461147048,25.739685796698527],[119.28840490416329,25.737453389152623],[119.27764996250406,25.740214788829014],[119.27877807617188,25.740250241229266]]]}')]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("**调用*****")]),t._v("*成功****")]),t._v(" "),v("td",[t._v("状态")]),t._v(" "),v("td",[t._v("业务码")]),t._v(" "),v("td",[t._v("说明")])]),t._v(" "),v("tr",[v("td",[t._v("success")]),t._v(" "),v("td",[t._v("1000")]),t._v(" "),v("td",[t._v("成功获取数据")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("**调用*****")]),t._v("*成功输出实例****")]),t._v(" "),v("td",[t._v("正确结果示例")]),t._v(" "),v("td",[t._v("参考附件")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("错误结果示例")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("异常结果示例")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("**调用失败**")])]),t._v(" "),v("td",[t._v("状态")]),t._v(" "),v("td",[t._v("业务码")]),t._v(" "),v("td",[t._v("说明")])]),t._v(" "),v("tr",[v("td",[t._v("fail")]),t._v(" "),v("td",[t._v("2000")]),t._v(" "),v("td",[t._v("程序错误")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("error")]),t._v(" "),v("td",[t._v("2010")]),t._v(" "),v("td",[t._v("传参错误")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("error")]),t._v(" "),v("td",[t._v("2020")]),t._v(" "),v("td",[t._v("配置错误")]),t._v(" "),v("td")])])]),t._v(" "),v("p",[t._v("附件：")]),t._v(" "),v("h1",{attrs:{id:"_1、综合台账调用示例："}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、综合台账调用示例："}},[t._v("#")]),t._v(" 1、综合台账调用示例：")]),t._v(" "),v("h2",{attrs:{id:"_1-1、计算全部"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1、计算全部"}},[t._v("#")]),t._v(" 1.1、计算全部")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/0244c3c7353bc4227dd9376acf8ad0d5/wps167.jpg",alt:"img"}})]),t._v(" "),v("h2",{attrs:{id:"_1-2、根据行政区获取"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2、根据行政区获取"}},[t._v("#")]),t._v(" 1.2、根据行政区获取")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/d5f58d29dbb9181284afca3a640d2b6c/wps168.jpg",alt:"img"}})]),t._v(" "),v("h2",{attrs:{id:"_1-3、自定义范围"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3、自定义范围"}},[t._v("#")]),t._v(" 1.3、自定义范围")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/7e8b0a4146cb3e236399515a5fdff464/wps169.jpg",alt:"img"}})]),t._v(" "),v("p",[t._v("开发说明：")]),t._v(" "),v("h3",{attrs:{id:"_1、-配置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、-配置"}},[t._v("#")]),t._v(" 1、 配置:")]),t._v(" "),v("p",[t._v("配置文件位置设置：")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/cd3dd8d4c39bf9c7be84a15a4ac43bf5/wps170.jpg",alt:"img"}})]),t._v(" "),v("p",[t._v("字典表配置：配置文件节点：DicFilePath")]),t._v(" "),v("p",[t._v("结果文件位置：配置文件节点：ResultPath")]),t._v(" "),v("h3",{attrs:{id:"_2、过程步骤："}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、过程步骤："}},[t._v("#")]),t._v(" 2、过程步骤：")]),t._v(" "),v("p",[t._v("无范围无条件整体统计：")]),t._v(" "),v("p",[t._v("1）通过配置的行政区划级别和服务图层 URL 获得地图服务中的行政区划的 Geometry")]),t._v(" "),v("p",[t._v("2）判断是否采用字典统计，如果是，解析获得用地字典表的结构")]),t._v(" "),v("p",[t._v("3）利用空间要素图层和行政区范围作 esriSpatialRelIntersects（空间相交）分析计算不同等级的行政区用地；如果配置有用地字典表，则通过字典统计；反之，则通过行政区统计；")]),t._v(" "),v("p",[t._v("4）将统计结果保存为 json 文件")]),t._v(" "),v("p",[t._v("另外有一个问题，目前版本代码好像只能通过用地分类字典统计，如下图：")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/cef5aeb0e9ffa68087b2f131346554e5/wps171.jpg",alt:"img"}})]),t._v(" "),v("p",[v("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/e4735ee637ab28d0ac36c5cc9b3d3f0b/wps172.jpg",alt:"img"}})]),t._v(" "),v("p",[t._v("有范围条件自定义统计—即 geometry 参数不为空，指定空间范围统计")]),t._v(" "),v("p",[t._v("步骤与整体统计差不多，只是不用通过地图服务获取 Geometry 了，而是直接解析 geometry 参数获得空间范围，然后利用空间要素图层和空间范围作 esriSpatialRelIntersects（空间相交）分析计算得到统计结果，返回的结果中包含统计结果，不生成 json 文件")]),t._v(" "),v("p",[t._v("有属性条件自定义统计—即 whereClause 参数不为空，指定行政区划统计")]),t._v(" "),v("p",[t._v("​ 有属性条件自定义统计是直接从整体统计结果中查询获取到具体的行政区划统计结果，返回的结果中包含统计结果，不生成 json 文件")]),t._v(" "),v("h1",{attrs:{id:"高级统计台账："}},[v("a",{staticClass:"header-anchor",attrs:{href:"#高级统计台账："}},[t._v("#")]),t._v(" 高级统计台账：")]),t._v(" "),v("p",[t._v("是一个控制台程序，可以用于统计多个图层的用地情况，但是看代码只能进行无条件无范围的整体统计")]),t._v(" "),v("h2",{attrs:{id:"_1、配置："}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、配置："}},[t._v("#")]),t._v(" 1、配置：")]),t._v(" "),v("p",[t._v("​ 配置文件位置：..\\bin\\Conf\\configInfo.properties")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/a60c88e0db75f1a42e38fa55d74f85c9/wps173.jpg",alt:"img"}})]),t._v(" "),v("p",[t._v("WorkDbConnStr：空间库直连，获得统计图层")]),t._v(" "),v("p",[t._v("ConfigPath：普通 SOE 台账的配置文件路径")]),t._v(" "),v("p",[t._v("LayerNames：用于获取空间库图层，可以配置多个图层名")]),t._v(" "),v("p",[t._v("高级统计台账只是在普通台账的基础上套了一个循环，可以统计多个图层，另外因为不是以 SOE 服务的形式，所以不会因为请求时间过长而导致无法进行统计。")])])}),[],!1,null,null,null);_.default=e.exports}}]);