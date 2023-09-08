(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{462:function(t,s,_){"use strict";_.r(s);var e=_(6),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"postgis-教程七：几何图形（geometry）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#postgis-教程七：几何图形（geometry）"}},[t._v("#")]),t._v(" PostGIS 教程七：几何图形（Geometry）")]),t._v(" "),_("blockquote",[_("p",[t._v("作者:网络 时间： 2020-10-16")])]),t._v(" "),_("h2",{attrs:{id:"一、介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、介绍"}},[t._v("#")]),t._v(" "),_("strong",[t._v("一、介绍")])]),t._v(" "),_("p",[t._v("在前面的章节中，我们已经往数据库中加载了数据，现在让我们来先看一些简单的例子。")]),t._v(" "),_("p",[t._v("在 pgAdmin 中，再次选择 nyc 数据库并打开"),_("strong",[t._v("SQL 查询工具")]),t._v("。将下面的 SQL 代码粘贴到"),_("strong",[t._v("pgAdmin SQL Editor 窗口")]),t._v("中（删除默认情况下可能存在的任何文本），然后执行。")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("ol",[_("li",[_("code",[t._v("CREATE TABLE geometries (name varchar, geom geometry);")])]),t._v(" "),_("li"),t._v(" "),_("li",[_("code",[t._v("INSERT INTO geometries VALUES")])]),t._v(" "),_("li",[_("code",[t._v("('Point', 'POINT(0 0)'),")])]),t._v(" "),_("li",[_("code",[t._v("('Linestring', 'LINESTRING(0 0, 1 1, 2 1, 2 2)'),")])]),t._v(" "),_("li",[_("code",[t._v("('Polygon', 'POLYGON((0 0, 1 0, 1 1, 0 1, 0 0))'),")])]),t._v(" "),_("li",[_("code",[t._v("('PolygonWithHole', 'POLYGON((0 0, 10 0, 10 10, 0 10, 0 0),(1 1, 1 2, 2 2, 2 1, 1 1))'),")])]),t._v(" "),_("li",[_("code",[t._v("('Collection', 'GEOMETRYCOLLECTION(POINT(2 0),POLYGON((0 0, 1 0, 1 1, 0 1, 0 0)))');")])]),t._v(" "),_("li"),t._v(" "),_("li",[_("code",[t._v("SELECT name, ST_AsText(geom) FROM geometries;")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181226164233896.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1NzMyMTQ3,size_16,color_FFFFFF,t_70",alt:"img"}})]),t._v(" "),_("p",[t._v("上面的示例创建了一个"),_("strong",[t._v("表")]),t._v("（geometries），然后向该"),_("strong",[t._v("表")]),t._v("中插入 5 个"),_("strong",[t._v("几何图形")]),t._v("数据（geometry）：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("一个"),_("strong",[t._v("点")]),t._v("（POINT）")])]),t._v(" "),_("li",[_("p",[t._v("一条"),_("strong",[t._v("线")]),t._v("（LINESTRING）")])]),t._v(" "),_("li",[_("p",[t._v("一个"),_("strong",[t._v("多边形")]),t._v("（POLYGON）")])]),t._v(" "),_("li",[_("p",[t._v("一个"),_("strong",[t._v("内含空洞的多边形")]),t._v("（POLYGON with a hole）")])]),t._v(" "),_("li",[_("p",[t._v("一个"),_("strong",[t._v("图形集合")]),t._v("（COLLECTION）")]),t._v(" "),_("p",[t._v("最后，查询表中的数据并输出。")])])]),t._v(" "),_("h2",{attrs:{id:"二、元数据表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、元数据表"}},[t._v("#")]),t._v(" "),_("strong",[t._v("二、元数据表")])]),t._v(" "),_("p",[t._v("为了符合"),_("strong",[t._v("Simple Features for SQL")]),t._v("（"),_("a",{attrs:{href:"https://postgis.net/workshops/postgis-intro/glossary.html#term-sfsql",target:"_blank",rel:"noopener noreferrer"}},[t._v("SFSQL"),_("OutboundLink")],1),t._v("）规范，PostGIS 提供了两张表用于追踪和报告数据库中的"),_("strong",[t._v("几何图形")]),t._v("（这两张表中的内容相当于元数据）：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("第一张表 spatial_ref_sys —— 定义了数据库已知的所有"),_("strong",[t._v("空间参照系统")]),t._v("，稍后将对其进行更详细的说明。")])]),t._v(" "),_("li",[_("p",[t._v("第二张表（实际上是"),_("strong",[t._v("视图")]),t._v("-view）geometry_columns —— 提供了数据库中所有空间数据表的描述信息。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/201812261711579.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1NzMyMTQ3,size_16,color_FFFFFF,t_70",alt:"img"}})])])]),t._v(" "),_("p",[t._v("​ geometry_columns 视图的结构")]),t._v(" "),_("p",[t._v("让我们来看一下"),_("strong",[t._v("数据库")]),t._v("中的 geometry_columns 表，像原先那样将以下命令粘贴到"),_("strong",[t._v("查询工具")]),t._v("中：")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("SELECT * FROM geometry_columns;\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181226171802954.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1NzMyMTQ3,size_16,color_FFFFFF,t_70",alt:"img"}})]),t._v(" "),_("ul",[_("li",[_("p",[t._v("f_table_catalog，f_table_schema，和 f_table_name 提供各个"),_("strong",[t._v("几何图形")]),t._v("（geometry）的"),_("strong",[t._v("要素表")]),t._v("（feature table）—— 即空间数据表 —— 的完全限定名称，分别是数据库名、模式名、空间数据表名。")])]),t._v(" "),_("li",[_("p",[t._v("f_geometry_column 包含对应空间数据表中用于记录几何信息的属性列的列名**。**")])]),t._v(" "),_("li",[_("p",[t._v("coord_dimension 定义几何图形的维度（2 维、3 维或 4 维）")])]),t._v(" "),_("li",[_("p",[t._v("srid 定义引用自 spatial_ref_sys 表的空间参考标识符")])]),t._v(" "),_("li",[_("p",[t._v('type 列定义了几何图形的类型。比如"'),_("strong",[t._v("点")]),t._v('（Point）"和"'),_("strong",[t._v("线串")]),t._v('（Linestring）"等类型。')]),t._v(" "),_("p",[t._v("通过查询该表，GIS 客户端和数据库可以确定检索数据时的预期内容，并可以执行任何必要的投影、处理、渲染而无需检查每个"),_("strong",[t._v("几何图形")]),t._v("（geometry）—— 这些就是元数据所带来的作用。")]),t._v(" "),_("p",[_("strong",[t._v("注意")]),t._v("：如果 nyc"),_("strong",[t._v("数据库")]),t._v("的"),_("strong",[t._v("表")]),t._v("没有指定 26918 的 srid，那该怎么办呢？通过更新"),_("strong",[t._v("表")]),t._v("很容易修复：")])])]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("SELECT UpdateGeometrySRID(‘nyc_neighborhoods’,’geom’,26918);\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("h2",{attrs:{id:"三、表示真实世界的对象"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、表示真实世界的对象"}},[t._v("#")]),t._v(" "),_("strong",[t._v("三、表示真实世界的对象")])]),t._v(" "),_("p",[_("strong",[t._v("Simple Features for SQL")]),t._v("（"),_("a",{attrs:{href:"https://postgis.net/workshops/postgis-intro/glossary.html#term-sfsql",target:"_blank",rel:"noopener noreferrer"}},[t._v("SFSQL"),_("OutboundLink")],1),t._v("）规范是 PostGIS 开发的原始指导标准，它定义了如何表示真实世界的对象。")]),t._v(" "),_("p",[t._v("通过形成连续的图形并以固定的分辨率对其进行数字化，实现了对真实世界的合理表示。")]),t._v(" "),_("p",[t._v("SFSQL 只规定了对真实世界对象的二维表示，然而，PostGIS 已将其扩展到 3 维和 4 维的表示。最近，"),_("strong",[t._v("SQL-Multimedia Part 3")]),t._v("（"),_("a",{attrs:{href:"https://postgis.net/workshops/postgis-intro/glossary.html#term-sql-mm",target:"_blank",rel:"noopener noreferrer"}},[t._v("SQL/MM"),_("OutboundLink")],1),t._v("）规范正式定义了它们自己的三维表示。")]),t._v(" "),_("p",[t._v("示例的"),_("strong",[t._v("表")]),t._v("包含不同几何图形类型的混合。我们可以使用读取"),_("strong",[t._v("几何图形")]),t._v("元数据的函数获取每个对象的基本信息：")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("ST_GeometryType(geometry)")]),t._v(" —— 返回几何图形的类型")]),t._v(" "),_("li",[_("strong",[t._v("ST_NDims(geometry)")]),t._v(" —— 返回几何图形的维数")]),t._v(" "),_("li",[_("strong",[t._v("ST_SRID(geometry)")]),t._v(" —— 返回几何图形的空间参考标识码")])]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("ol",[_("li",[_("code",[t._v("SELECT name, ST_GeometryType(geom), ST_NDims(geom), ST_SRID(geom)")])]),t._v(" "),_("li",[_("code",[t._v("FROM geometries;")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181227085146701.png",alt:"img"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181227090027362.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1NzMyMTQ3,size_16,color_FFFFFF,t_70",alt:"img"}})]),t._v(" "),_("h3",{attrs:{id:"_3-1、点（points）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-1、点（points）"}},[t._v("#")]),t._v(" "),_("strong",[t._v("3.1、点（Points）")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/2018122711073149",alt:"_images/points.png"}})]),t._v(" "),_("p",[t._v("空间"),_("strong",[t._v("点")]),t._v("（Point）表示地球上的单个位置。"),_("strong",[t._v("点")]),t._v("由单个坐标表示（包括 2 维、3 维或 4 维）。")]),t._v(" "),_("p",[t._v("当详细的细节（例如形状和大小）在目标空间尺度上不重要时，真实世界中的对象可以直接用"),_("strong",[t._v("点")]),t._v("表示。")]),t._v(" "),_("p",[t._v("例如，世界地图上的城市可以描述为"),_("strong",[t._v("点")]),t._v("，而在一幅州地图中可以将城市表示为"),_("strong",[t._v("多边形")]),t._v("。")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("ol",[_("li",[_("code",[t._v("SELECT ST_AsText(geom)")])]),t._v(" "),_("li",[_("code",[t._v("FROM geometries")])]),t._v(" "),_("li",[_("code",[t._v("WHERE name = 'Point';")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181227090725958.png",alt:"img"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181227090907443.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1NzMyMTQ3,size_16,color_FFFFFF,t_70",alt:"img"}})]),t._v(" "),_("p",[t._v("针对"),_("strong",[t._v("点")]),t._v("的一些特定"),_("strong",[t._v("空间函数")]),t._v("包括：")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("ST_X(geometry)")]),t._v(" —— 返回 X 坐标")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("ST_Y(geometry)")]),t._v(" —— 返回 Y 坐标")]),t._v(" "),_("p",[t._v("所以，我们这样来读取一个"),_("strong",[t._v("点")]),t._v("图形的坐标值：")])])]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("ol",[_("li",[_("code",[t._v("SELECT ST_X(geom), ST_Y(geom)")])]),t._v(" "),_("li",[_("code",[t._v("FROM geometries")])]),t._v(" "),_("li",[_("code",[t._v("WHERE name = 'Point';")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181227091508731.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1NzMyMTQ3,size_16,color_FFFFFF,t_70",alt:"img"}})]),t._v(" "),_("p",[_("strong",[t._v("纽约市地铁站")]),t._v("（nyc_subway_stations）表是一个以"),_("strong",[t._v("点")]),t._v("表示的数据集。以下"),_("strong",[t._v("SQL 查询")]),t._v("将返回一个"),_("strong",[t._v("点")]),t._v("图形数据（在 ST_AsText 列中）：")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("ol",[_("li",[_("code",[t._v("SELECT name, ST_AsText(geom)")])]),t._v(" "),_("li",[_("code",[t._v("FROM nyc_subway_stations")])]),t._v(" "),_("li",[_("code",[t._v("LIMIT 1;")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181227092245305.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1NzMyMTQ3,size_16,color_FFFFFF,t_70",alt:"img"}})]),t._v(" "),_("h3",{attrs:{id:"_3-2、线串（linestring）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-2、线串（linestring）"}},[t._v("#")]),t._v(" "),_("strong",[t._v("3.2、线串（Linestring）")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/2018122711073174",alt:"_images/lines.png"}})]),t._v(" "),_("p",[_("strong",[t._v("线串")]),t._v("（Linestring）是表示两个或多个位置之间的路径，它的形式是由两个或多个"),_("strong",[t._v("点")]),t._v("组成的有序序列。道路和河流通常表示为"),_("strong",[t._v("线串")]),t._v("。")]),t._v(" "),_("p",[t._v("如果"),_("strong",[t._v("线串")]),t._v("的起始点和结束点是同一个"),_("strong",[t._v("点")]),t._v("，则称其是"),_("strong",[t._v("闭合的")]),t._v("（closed）。")]),t._v(" "),_("p",[t._v("如果"),_("strong",[t._v("线串")]),t._v("不与自身交叉或接触（如果"),_("strong",[t._v("线串")]),t._v("是闭合的，则排除结束点），则称其是"),_("strong",[t._v("简单的")]),t._v("（simple）。")]),t._v(" "),_("p",[_("strong",[t._v("线串")]),t._v("既可以是"),_("strong",[t._v("闭合的")]),t._v("，也可以是"),_("strong",[t._v("简单的")]),t._v("。")]),t._v(" "),_("p",[_("strong",[t._v("纽约的街道网络数据")]),t._v("（nyc_streets）在前面的章节中已经加载到"),_("strong",[t._v("数据库")]),t._v("中了，这个数据集包含"),_("strong",[t._v("名称")]),t._v("和"),_("strong",[t._v("类型")]),t._v("等详细信息。")]),t._v(" "),_("p",[t._v("一条真实的街道可能由许多"),_("strong",[t._v("线串")]),t._v("组成，每条"),_("strong",[t._v("线串")]),t._v("代表一段具有不同属性特征的道路。")]),t._v(" "),_("p",[t._v("以下"),_("strong",[t._v("SQL 查询")]),t._v("将返回一个"),_("strong",[t._v("线串")]),t._v("图形的信息（在 ST_AsText 列中）")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("ol",[_("li",[_("code",[t._v("SELECT ST_AsText(geom)")])]),t._v(" "),_("li",[_("code",[t._v("FROM geometries")])]),t._v(" "),_("li",[_("code",[t._v("WHERE name = 'Linestring';")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181227095600396.png",alt:"img"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181227095650107.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1NzMyMTQ3,size_16,color_FFFFFF,t_70",alt:"img"}})]),t._v(" "),_("p",[t._v("用于处理"),_("strong",[t._v("线串")]),t._v("的一些特定"),_("strong",[t._v("空间函数")]),t._v("包括：")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("ST_Length(geometry)")]),t._v(" —— 返回线串的长度")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("ST_StartPoint(geometry)")]),t._v(" —— 将线串的第一个坐标作为点返回")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("ST_EndPoint(geometry）")]),t._v(" —— 将线串的最后一个坐标作为点返回")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("ST_NPoints(geometry)")]),t._v(" —— 返回线串的坐标数量")]),t._v(" "),_("p",[t._v("所以，我们的"),_("strong",[t._v("线串")]),t._v("的长度为：")])])]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("ol",[_("li",[_("code",[t._v("SELECT ST_Length(geom)")])]),t._v(" "),_("li",[_("code",[t._v("FROM geometries")])]),t._v(" "),_("li",[_("code",[t._v("WHERE name = 'Linestring';")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181227100113844.png",alt:"img"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181227100213660.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1NzMyMTQ3,size_16,color_FFFFFF,t_70",alt:"img"}})]),t._v(" "),_("h3",{attrs:{id:"_3-3、多边形（polygon）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-3、多边形（polygon）"}},[t._v("#")]),t._v(" "),_("strong",[t._v("3.3、多边形（Polygon）")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/2018122711073189",alt:"_images/polygons.png"}})]),t._v(" "),_("p",[_("strong",[t._v("多边形")]),t._v("（Polygon）是区域的表示形式。"),_("strong",[t._v("多边形")]),t._v("的外部边界由一个"),_("strong",[t._v("环")]),t._v("（Ring）表示，这个"),_("strong",[t._v("环")]),t._v("是一个"),_("strong",[t._v("线串")]),t._v("，如上面定义的，它既是闭合的，又是简单的。"),_("strong",[t._v("多边形")]),t._v("中的"),_("strong",[t._v("孔")]),t._v("（hole）也由"),_("strong",[t._v("环")]),t._v("表示。")]),t._v(" "),_("p",[_("strong",[t._v("多边形")]),t._v("用于表示重视"),_("strong",[t._v("大小")]),t._v("和"),_("strong",[t._v("形状")]),t._v("这两个特征的地理对象。城市边界、公园、建筑或水体都通常需要表示为"),_("strong",[t._v("多边形")]),t._v("，当比例尺足够大时，可以观测它们的面积。道路和河流有时也可以表示为"),_("strong",[t._v("多边形")]),t._v("。")]),t._v(" "),_("p",[t._v("以下"),_("strong",[t._v("SQL 查询")]),t._v("将返回两个"),_("strong",[t._v("多边形")]),t._v("图形的信息（在 ST_AsText 列中）：")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("ol",[_("li",[_("p",[_("code",[t._v("SELECT ST_AsText(geom)")])])]),t._v(" "),_("li",[_("p",[_("code",[t._v("FROM geometries")])])]),t._v(" "),_("li",[_("p",[_("code",[t._v("WHERE name LIKE 'Polygon%';")])]),t._v(" "),_("p",[_("strong",[t._v("注意")]),t._v('：我们不是在 WHERE 子句中使用"="符号，而是使用 LIKE 运算符执行字符串匹配操作。你可能习惯使用"*"符号作为模式匹配中的单字符或多字符匹配，但在 SQL 中，使用"%"符号和 LIKE 运算符来告诉系统执行全局匹配。')])])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181227101824907.png",alt:"img"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181227102029837.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1NzMyMTQ3,size_16,color_FFFFFF,t_70",alt:"img"}})]),t._v(" "),_("p",[t._v("第一个"),_("strong",[t._v("多边形")]),t._v("只有一个"),_("strong",[t._v("环")]),t._v("，第二个"),_("strong",[t._v("多边形")]),t._v('有一个内部的"'),_("strong",[t._v("孔洞")]),t._v('（hole）"，大多数图形系统都包含'),_("strong",[t._v("多边形")]),t._v("的概念，但 GIS 系统在允许"),_("strong",[t._v("多边形")]),t._v("有"),_("strong",[t._v("孔")]),t._v("方面是比较独特的。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181227102431294.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1NzMyMTQ3,size_16,color_FFFFFF,t_70",alt:"img"}})]),t._v(" "),_("p",[t._v("关于"),_("strong",[t._v("多边形")]),t._v("图形的一些特定"),_("strong",[t._v("空间函数")]),t._v("包括：")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("ST_Area(geometry)")]),t._v(" —— 返回多边形的面积")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("ST_NRings(geometry)")]),t._v(" —— 返回多边形中环的数量（通常为 1 个，其他是孔）")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("ST_ExteriorRing(geometry)")]),t._v(" —— 以线串的形式返回多边形最外面的环")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("ST_InteriorRingN(geometry, n)")]),t._v(" —— 以线串形式返回指定的内部环")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("ST_Perimeter(geometry)")]),t._v(" —— 返回所有环的长度")]),t._v(" "),_("p",[t._v("我们可以使用"),_("strong",[t._v("空间函数")]),t._v("计算"),_("strong",[t._v("多边形")]),t._v("的面积：")])])]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("ol",[_("li",[_("code",[t._v("SELECT name, ST_Area(geom)")])]),t._v(" "),_("li",[_("code",[t._v("FROM geometries")])]),t._v(" "),_("li",[_("code",[t._v("WHERE name LIKE 'Polygon%';")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181227103037638.png",alt:"img"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/2018122710345236.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1NzMyMTQ3,size_16,color_FFFFFF,t_70",alt:"img"}})]),t._v(" "),_("p",[t._v("请注意，带"),_("strong",[t._v("孔")]),t._v("的"),_("strong",[t._v("多边形")]),t._v("的面积是"),_("strong",[t._v("多边形外环")]),t._v("的面积（10 x 10 正方形）减去"),_("strong",[t._v("孔")]),t._v("的面积（1 x 1 正方形）")]),t._v(" "),_("h3",{attrs:{id:"_3-4、集合（collection）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-4、集合（collection）"}},[t._v("#")]),t._v(" "),_("strong",[t._v("3.4、集合（Collection）")])]),t._v(" "),_("p",[t._v("有四种"),_("strong",[t._v("集合")]),t._v("（Collection）类型，它们将多个简单几何图形组合为"),_("strong",[t._v("图形集合")]),t._v("：")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("MultiPoint")]),t._v(" —— 点集合")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("MultiLineString")]),t._v(" —— 线串集合")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("MultiPolygon")]),t._v(" —— 多边形集合")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("GeometryCollection")]),t._v(" —— 由任意几何图形（包括其他 GeometryCollection）组成的异构集合")]),t._v(" "),_("p",[_("strong",[t._v("集合")]),t._v("更多地出现在 GIS 软件中，而不是在通用图形软件中。")]),t._v(" "),_("p",[_("strong",[t._v("集合")]),t._v("对于将"),_("strong",[t._v("真实世界的对象")]),t._v("直接建模为"),_("strong",[t._v("空间对象")]),t._v("非常有用。例如，如何对被"),_("strong",[t._v("路权")]),t._v("（"),_("strong",[t._v("路权")]),t._v("指交通参与者的权利）分割的多个"),_("strong",[t._v("道路部分")]),t._v("进行建模？答案是将其作为"),_("strong",[t._v("MultiPolygon")]),t._v("，其组成部分位于"),_("strong",[t._v("路权")]),t._v("的两侧。")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://postgis.net/workshops/postgis-intro/_images/collection2.png",alt:"_images/collection2.png"}})]),t._v(" "),_("p",[t._v("我们示例中的"),_("strong",[t._v("几何图形集合")]),t._v("包含一个多边形和一个点：")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("ol",[_("li",[_("code",[t._v("SELECT name, ST_AsText(geom)")])]),t._v(" "),_("li",[_("code",[t._v("FROM geometries")])]),t._v(" "),_("li",[_("code",[t._v("WHERE name = 'Collection';")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181227110134577.png",alt:"img"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181227110152910.png",alt:"img"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/2018122711032982.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1NzMyMTQ3,size_16,color_FFFFFF,t_70",alt:"img"}})]),t._v(" "),_("p",[t._v("用于处理"),_("strong",[t._v("集合")]),t._v("的一些特定"),_("strong",[t._v("空间函数")]),t._v("：")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("ST_NumGeometries(geometry)")]),t._v(" —— 返回集合中的组成部分的数量")]),t._v(" "),_("li",[_("strong",[t._v("ST_GeometryN(geometry, n)")]),t._v(" —— 返回集合中指定的组成部分")]),t._v(" "),_("li",[_("strong",[t._v("ST_Area(geometry)")]),t._v(" —— 返回集合中所有多边形组成部分的总面积")]),t._v(" "),_("li",[_("strong",[t._v("ST_Length(geometry)")]),t._v(" —— 返回所有线段组成部分的总长度")])]),t._v(" "),_("h2",{attrs:{id:"四、几何图形输入和输出"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四、几何图形输入和输出"}},[t._v("#")]),t._v(" "),_("strong",[t._v("四、几何图形输入和输出")])]),t._v(" "),_("p",[t._v("在数据库中，"),_("strong",[t._v("几何图形")]),t._v("（Geometry）以仅供 PostGIS 使用的格式存储在磁盘上。为了让外部程序插入和检索有用的"),_("strong",[t._v("几何图形")]),t._v("信息，需要将它们转换为其他应用程序可以理解的格式。")]),t._v(" "),_("p",[t._v("幸运的是，PostGIS 支持以多种格式进行"),_("strong",[t._v("几何图形")]),t._v("的输入和输出。")]),t._v(" "),_("p",[t._v("①Well-known text（"),_("a",{attrs:{href:"https://postgis.net/workshops/postgis-intro/glossary.html#term-wkt",target:"_blank",rel:"noopener noreferrer"}},[t._v("WKT"),_("OutboundLink")],1),t._v("）")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("ST_GeomFromText(text, srid)")]),t._v(" —— 返回 geometry")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("ST_AsText(geometry)")]),t._v(" —— 返回 text")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("ST_AsEWKT(geometry)")]),t._v(" —— 返回 text")]),t._v(" "),_("p",[t._v("②Well-known binary（"),_("a",{attrs:{href:"https://postgis.net/workshops/postgis-intro/glossary.html#term-wkb",target:"_blank",rel:"noopener noreferrer"}},[t._v("WKB"),_("OutboundLink")],1),t._v("）")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("ST_GeomFromWKB(bytea)")]),t._v(" —— 返回 geometry")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("ST_AsBinary(geometry)")]),t._v(" —— 返回 bytea")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("ST_AsEWKB(geometry)")]),t._v(" —— 返回 bytea")]),t._v(" "),_("p",[t._v("③Geographic Mark-up Language（"),_("a",{attrs:{href:"https://postgis.net/workshops/postgis-intro/glossary.html#term-gml",target:"_blank",rel:"noopener noreferrer"}},[t._v("GML"),_("OutboundLink")],1),t._v("）")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("ST_GeomFromGML(text)")]),t._v(" —— 返回 geometry")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("ST_ASGML(geometry)")]),t._v(" —— 返回 text")]),t._v(" "),_("p",[t._v("④Keyhole Mark-up Language（"),_("a",{attrs:{href:"https://postgis.net/workshops/postgis-intro/glossary.html#term-kml",target:"_blank",rel:"noopener noreferrer"}},[t._v("KML"),_("OutboundLink")],1),t._v("）")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("ST_GeomFromKML(text)")]),t._v(" —— 返回 geometry")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("ST_ASKML(geometry)")]),t._v(" —— 返回 text")]),t._v(" "),_("p",[t._v("⑤"),_("a",{attrs:{href:"https://postgis.net/workshops/postgis-intro/glossary.html#term-geojson",target:"_blank",rel:"noopener noreferrer"}},[t._v("GeoJson"),_("OutboundLink")],1)])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("ST_AsGeoJSON(geometry)")]),t._v(" —— 返回 text")]),t._v(" "),_("p",[t._v("⑥Scalable Vector Graphics("),_("a",{attrs:{href:"https://postgis.net/workshops/postgis-intro/glossary.html#term-svg",target:"_blank",rel:"noopener noreferrer"}},[t._v("SVG"),_("OutboundLink")],1),t._v("）")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("ST_AsSVG(geometry)")]),t._v(" —— 返回 text")]),t._v(" "),_("p",[t._v("以上函数最常见的用法是将"),_("strong",[t._v("几何图形")]),t._v("的"),_("strong",[t._v("文本")]),t._v("（text）表示形式转换为内部表示形式：")]),t._v(" "),_("p",[t._v("请注意，除了具有"),_("strong",[t._v("几何图")]),t._v("形表示形式的"),_("strong",[t._v("文本")]),t._v("参数外，还可以指定一个提供几何图形"),_("strong",[t._v("SRID")]),t._v("的数字参数。")]),t._v(" "),_("p",[t._v("以下"),_("strong",[t._v("SQL 查询")]),t._v("展示了一个 WKB 表示形式的示例（将"),_("strong",[t._v("二进制")]),t._v("输出转换为 ASCII 格式以进行打印时，需要调用 encode()）：")])])]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("ol",[_("li",[_("code",[t._v("SELECT encode(")])]),t._v(" "),_("li",[_("code",[t._v("ST_AsBinary(ST_GeometryFromText('LINESTRING(0 0,1 0)')),")])]),t._v(" "),_("li",[_("code",[t._v("'hex');")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181227141049374.png",alt:"img"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181227141613303.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1NzMyMTQ3,size_16,color_FFFFFF,t_70",alt:"img"}})]),t._v(" "),_("p",[t._v("在本教程中，将使用 WKT，以确保你能够理解我们正在查看的"),_("strong",[t._v("几何图形")]),t._v("。")]),t._v(" "),_("p",[t._v("但是，在大多数实际生产环境中（如查看 GIS 应用程序中的数据、将数据传输到 web 客户端或远程处理数据），WKB 是首选的格式。")]),t._v(" "),_("p",[t._v("由于 WKT 和 WKB 是在"),_("a",{attrs:{href:"https://postgis.net/workshops/postgis-intro/glossary.html#term-sfsql",target:"_blank",rel:"noopener noreferrer"}},[t._v("SFSQ"),_("OutboundLink")],1),t._v("L 规范中定义的，因此它们不能处理 3 维或 4 维的几何图形。对于这些情况，PostGIS 定义了**Extended Well Known Text（EWKT）"),_("strong",[t._v("和")]),t._v("Extended Well Known Binary（EWKB）**格式以用于处理 3 维或 4 维的几何图形。")]),t._v(" "),_("p",[t._v("它们提供了与 WKT 和 WKB 相同的格式化功能，并且是在增加了"),_("strong",[t._v("维度")]),t._v("的情况下。")]),t._v(" "),_("p",[t._v("以下是 WKT 中"),_("strong",[t._v("三维")]),t._v("（3D）"),_("strong",[t._v("线串")]),t._v("示例：")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("SELECT ST_AsText(ST_GeometryFromText('LINESTRING(0 0 0,1 0 0,1 1 2)'));\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181227142545654.png",alt:"img"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181227142754377.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1NzMyMTQ3,size_16,color_FFFFFF,t_70",alt:"img"}})]),t._v(" "),_("p",[t._v("注意：文本表示形式发生了变化！这是因为 PostGIS 的文本输入程序在使用方面是自由的。它可以使用：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("十六进制编码的 EWKB")])]),t._v(" "),_("li",[_("p",[t._v("扩展的 WKT")])]),t._v(" "),_("li",[_("p",[t._v("ISO 标准的 WKT")]),t._v(" "),_("p",[t._v("在输出端，ST_AsText()只返回"),_("strong",[t._v("ISO 标准")]),t._v("的 WKT。")]),t._v(" "),_("p",[t._v("除了用于各种形式（WKT、WKB、GML、KML、JSON、SVG）的输出函数外，PostGIS 还有基于四种形式（WKT、WKB、GML、KML）的输入函数。")]),t._v(" "),_("p",[t._v("大多数应用程序使用 WKT 或 WKB 几何图形创建函数，但是也可以使用其他形式的几何图形创建函数。")]),t._v(" "),_("p",[t._v("下面是一个使用 GML 输入和输出 JSON 的示例：")])])]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("SELECT ST_AsGeoJSON(ST_GeomFromGML('<gml:Point><gml:coordinates>1,1</gml:coordinates></gml:Point>'));\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181228091757202.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1NzMyMTQ3,size_16,color_FFFFFF,t_70",alt:"img"}})]),t._v(" "),_("h2",{attrs:{id:"五、从文本转换"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#五、从文本转换"}},[t._v("#")]),t._v(" "),_("strong",[t._v("五、从文本转换")])]),t._v(" "),_("p",[t._v("到目前为止，我们看到的"),_("a",{attrs:{href:"https://postgis.net/workshops/postgis-intro/glossary.html#term-wkt",target:"_blank",rel:"noopener noreferrer"}},[t._v("WKT"),_("OutboundLink")],1),t._v("字符串都是'text'类型，我们使用 PostGIS 的函数 ST_GeomFromText()将它们转换为'gometry'类型。")]),t._v(" "),_("p",[t._v("PostgreSQL 包含一个简短形式的语法，允许数据从一种类型转换到另一种类型，即类型转换语法：")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("olddata::newtype\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[t._v("例如，将 double 类型转换为"),_("strong",[t._v("文本字符串")]),t._v("类型：")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("SELECT 0.9::text;\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[t._v("以下 SQL 语句将一个 WKT 字符串转换成一个"),_("strong",[t._v("几何图形")]),t._v("（geometry）：")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("SELECT 'POINT(0 0)'::geometry;\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181228092501947.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1NzMyMTQ3,size_16,color_FFFFFF,t_70",alt:"img"}})]),t._v(" "),_("p",[t._v("关于使用类型转换语法创建"),_("strong",[t._v("几何图形")]),t._v("，需要注意一点：除非指定 SRID，否则将得到一个包含未知 SRID 的"),_("strong",[t._v("几何图形")]),t._v("。")]),t._v(" "),_("p",[t._v("可以使用 EWKT 形式指定 SRID，该形式在前面包含一个 SRID：")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("SELECT 'SRID=4326;POINT(0 0)'::geometry;\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181228092903483.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1NzMyMTQ3,size_16,color_FFFFFF,t_70",alt:"img"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);