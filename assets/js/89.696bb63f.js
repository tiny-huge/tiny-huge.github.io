(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{476:function(t,e,v){"use strict";v.r(e);var o=v(6),l=Object(o.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"mvvmlight"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mvvmlight"}},[t._v("#")]),t._v(" MVVMLight")]),t._v(" "),v("blockquote",[v("p",[t._v("作者:网络 时间： 2020-10-16")])]),t._v(" "),v("p",[v("strong",[t._v("一、MVVM 概述")])]),t._v(" "),v("p",[t._v("MVVM 是 Model-View-ViewModel 的简写，主要目的是为了解耦视图（View）和模型（Model）。")]),t._v(" "),v("p",[t._v("MVVM 结构如下：")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335/fellow-travellers/picgorepo/uploads/54c2189f63bacf35bdf298add72e31ee/1463878-20181122153357654-1043270966.png",alt:"img"}})]),t._v(" "),v("p",[t._v("相对于之前把逻辑结构写在 Code Behind 的方式，MVVM 模式几乎完全解耦了视图和逻辑业务的关系，通过数据绑定和命令绑定来处理 UI 属性及事件驱动；")]),t._v(" "),v("p",[t._v("同时，ViewModel 中对属性的变更也会通知到 View 前端，让 View 前端实时更新。")]),t._v(" "),v("p",[t._v("关于更多的 MVVM，可以参考https://www.codeproject.com/kb/wpf/wpfmvvmquickstart.aspx")]),t._v(" "),v("p",[v("strong",[t._v("二、MVVMLight 概述")])]),t._v(" "),v("p",[t._v("MVVMLight 是一个实现 MVVM 模式的轻量级框架（相对于 Prism），能够更好的帮助我们开发 WPF 、Windows Phone、Windows 8、SilverLight 相关项目。")]),t._v(" "),v("p",[t._v("MVVMLight 的作者 Laurent Bugnion 是个微软 MVP，作者将代码开源到 Codeplex 上面：http://mvvmlight.codeplex.com/。")]),t._v(" "),v("p",[t._v("MVVMLight 的官网：http://www.mvvmlight.net/，上面有详细的介绍和视频文档，有兴趣可以了解下。")]),t._v(" "),v("p",[v("strong",[t._v("三、WPF 项目中使用 MVMLight 框架")])]),t._v(" "),v("p",[t._v("WPF 项目中使用 MVMLight 框架主要包括以下两种方式：")]),t._v(" "),v("p",[t._v("方式一：")]),t._v(" "),v("p",[t._v("官网（http://www.mvvmlight.net/）上下载MVVMLight Toolkit，安装之后，VS 模板中会出现 MvvmLight 项目模板，然后就可以直接使用该项目模板来创建项目了。")]),t._v(" "),v("p",[t._v("方式二：")]),t._v(" "),v("p",[t._v("利用 NuGet 安装")]),t._v(" "),v("p",[t._v("新建一个 WPF 工程，在引用处，鼠标右键，选择管理 NuGet 包，在弹出的界面中搜 mvvmlight，然后安装最新的包即可。")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335/fellow-travellers/picgorepo/uploads/d61086ebd510900f95d929315a926cdf/1463878-20181122161148016-1539472298.png",alt:"img"}}),v("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335/fellow-travellers/picgorepo/uploads/8938fb4b1e287613a812809971a9a54b/1463878-20181122161158952-1332943459.png",alt:"img"}})]),t._v(" "),v("p",[t._v("安装成功后，会在我们新建的 Wpf 工程中自动生成 ViewModel 文件夹，里面包含 MainViewModel.cs 和 ViewModelLocator.cs 两个文件。")]),t._v(" "),v("p",[t._v("至此，一个基于 MVVMLight 框架的 WPF 项目基本搭建完成。")])])}),[],!1,null,null,null);e.default=l.exports}}]);