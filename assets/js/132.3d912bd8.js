(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{518:function(a,t,s){"use strict";s.r(t);var n=s(6),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"css-变形"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-变形"}},[a._v("#")]),a._v(" CSS 变形")]),a._v(" "),s("blockquote",[s("p",[a._v("作者：陈广录 时间：2020-01-14")])]),a._v(" "),s("h2",{attrs:{id:"_1-介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-介绍"}},[a._v("#")]),a._v(" 1 介绍")]),a._v(" "),s("p",[a._v("css3 中制作动画的几个属性 s：css3 中的变形（transform）、过渡（transition）、动画（animation）。")]),a._v(" "),s("h2",{attrs:{id:"_2-css3-变形（transform"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-css3-变形（transform"}},[a._v("#")]),a._v(" 2 CSS3 变形（transform)")]),a._v(" "),s("p",[a._v("变形功能不仅可以平移元素，还能做很多其他的事情，比如旋转、缩放、翻转等，让页面的动画与交互看起来更加自然。")]),a._v(" "),s("p",[a._v("语法：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("transform ： none | <transform-function> [ <transform-function> ]*\n也就是：\ntransform: rotate | scale | skew | translate |matrix;\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("坐标系：\n"),s("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/8af94c8d7d4b1a25795cb17e2ce5319c/20201230154349717.png",alt:""}})]),a._v(" "),s("p",[a._v("在 CSS 中，笛卡尔坐标系使用三个轴表示，x 轴的正值在右侧，负值在左侧。y 轴的正值沿纵轴向下，负值沿纵轴向上。\nz 轴上的正值离你较近，负值离你较远（与 z-index 相似）")]),a._v(" "),s("p",[a._v("基本属性：\n"),s("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/7efbcd89cbcdb88082d767583dc6f467/20210114183227213.png",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"_2-1-transform-origin："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-transform-origin："}},[a._v("#")]),a._v(" 2.1 transform-origin：")]),a._v(" "),s("p",[a._v("用于指定元素变形的中心点。默认中心点就是元素的正中心，即 XYZ 轴的 50% 50% 0 处。")]),a._v(" "),s("p",[a._v("通过该属性改变元素在 XYZ 轴的中心点，正值表示正向位移，负值表示负向位移")]),a._v(" "),s("h3",{attrs:{id:"_2-2-transform-style："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-transform-style："}},[a._v("#")]),a._v(" 2.2 transform-style：")]),a._v(" "),s("p",[a._v("这个属性只有两个值 flat 和 preserve-3d。用于指定舞台为 2D 或 3D，默认值 flat 表示 2D")]),a._v(" "),s("p",[a._v("注：在变形元素自身上指定该属性是没有用的，要在变形元素的父元素上设置该属性。")]),a._v(" "),s("h3",{attrs:{id:"_2-3-旋转-rotate（）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-旋转-rotate（）"}},[a._v("#")]),a._v(" 2.3 旋转 rotate（）")]),a._v(" "),s("p",[a._v("rotate(<angle>) :通过指定的角度参数对元素指定一个 2D rotation(2D 旋转)，需先有 transform-origin 属性的定义（"),s("strong",[a._v("默认旋转中点是中心点")]),a._v("）。\ntransform-origin 定义的是旋转的基点，其中 angle 是指选择角度，正顺时针旋转，负逆时针旋转。（关于变形基点已在前几篇中讲解过，"),s("a",{attrs:{href:"https://segmentfault.com/a/1190000017104127",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://segmentfault.com/a/11..."),s("OutboundLink")],1),a._v("）")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/5c1c0eb7aa3064225f13fd928fa24991/1610615141038-df0d8c92-f6dd-4b58-a13f-684c0f688df3.png",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"_2-4-移动-translate（x-y）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-移动-translate（x-y）"}},[a._v("#")]),a._v(" 2.4 移动 translate（X,Y）")]),a._v(" "),s("p",[a._v("transform(100px,20px);")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/a4f084d489a6ced0c3a451fd30990314/1610615140958-36514a16-dd0b-419c-aacd-2565979b73b9.png",alt:""}})]),a._v(" "),s("p",[a._v("transform:translateX(100px):")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/096ad59acb251bbe34dcfb9412ebcdf6/1610615140933-b3a04071-9ffa-40e1-8a37-6308b5d9bea0.png",alt:""}})]),a._v(" "),s("p",[a._v("transform:translateY(20px)")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/2de52b9857a049fe4fa12b70d1242cc6/1610615140933-a1a38303-a565-4f81-bfdd-2b170df02995.png",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"_2-5-缩放-scale（x-y）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-缩放-scale（x-y）"}},[a._v("#")]),a._v(" 2.5 缩放 scale（X,Y）")]),a._v(" "),s("p",[a._v("scale(<number>[, <number>])：提供执行[sx,sy]缩放矢量的两个参数指定一个 2D scale（2D 缩放）。如果第二个参数未提供，则取与第一个参数一样的值。而 Y 是一个可选参数，"),s("strong",[a._v("如果没有设置 Y 值，则表示 X，Y 两个方向的缩放倍数是一样的,并以 X 为准")]),a._v("。如：transform:scale(2,1.5);")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/3134adb1bead4df7adcbfe6101867017/1610615140881-e39222d2-15db-4c9f-a8aa-172f7e063f67.png",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"_2-6-斜切-skew"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-斜切-skew"}},[a._v("#")]),a._v(" 2.6 斜切 skew()")]),a._v(" "),s("p",[a._v("skew(<angle> [, <angle>]) ：X 轴 Y 轴上的 skew transformation（斜切变换）。第一个参数对应 X 轴，第二个参数对应 Y 轴。如果第二个参数未提供，则值为 0，也就是 Y 轴方向上无斜切。skew 是用来对元素进行扭曲变行，第一个参数是水平方向扭曲角度，第二个参数是垂直方向扭曲角度。其中第二个参数是可选参数，如果没有设置第二个参数，那么 Y 轴为 0deg。同样是以元素中心为基点，我们也可以通过 transform-origin 来改变元素的基点位置。\ntransform:skew(30deg,10deg);")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/4d2d5b214f49a6c9e276fc5081de45f6/1610615140931-fe6c7e33-ae95-4e61-a119-a5cd49d2c311.png",alt:""}})]),a._v(" "),s("p",[s("strong",[a._v("方法：X 轴：正数为左，负数为右； Y 轴：正数为下，负数为上")])]),a._v(" "),s("h3",{attrs:{id:"_2-7-矩阵-matrix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-矩阵-matrix"}},[a._v("#")]),a._v(" 2.7 矩阵 matrix()")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/6cd2fd92c89ece192ef35eb906673338/c58f0d242c4d2d057d9fbbcbafca0fe9.png",alt:""}})]),a._v(" "),s("p",[a._v("对二维向量进行转换")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/95f33141c6b0310e5bbb69a61e74bac1/7574b0786098ff7316a3f7f415280b38.png",alt:""}})]),a._v(" "),s("p",[a._v("其中 x1、y1 为经过 Matrix 转换后的向量。由公式可知，Matrix 中 e, f 主要用于设置元素在 X 轴和 Y 轴上的平移。a, d 主要用于设置元素在 X 轴和 Y 轴上的缩放。a,b,c,d 用于设置元素在 XY 平面上的旋转。rotate/translate/screw 等都可以直接通过设置 Matrix 来达到同样的效果。")]),a._v(" "),s("h2",{attrs:{id:"_3-css-3d-变形"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-css-3d-变形"}},[a._v("#")]),a._v(" 3 CSS 3D 变形")]),a._v(" "),s("p",[a._v("元素的平移、旋转、缩放和倾斜等功能。这些效果只是单纯在二维平面图上的，我们称之为 2D。在 2D 平面基础上多出一个 z 轴，称之为三维立体。")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/35e2829b88cdb6a974dbdefeff56be42/20201230145839344.png",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"_3-1-透视-perspective"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-透视-perspective"}},[a._v("#")]),a._v(" 3.1 透视 perspective()")]),a._v(" "),s("ul",[s("li",[a._v("透视原理：视点距离屏幕的长短。值越小表示用户眼睛距离屏幕越近，相当于创建一个较大的 3D 舞台。反之，值越大表示用户眼睛距离屏幕越远。（近大远小）")]),a._v(" "),s("li",[a._v("默认值是 none 表示无 3D 效果，只能设 px 值，不能设%百分比")]),a._v(" "),s("li",[a._v("perspective 一般作为一个属性，设置给父元素，作用于所有 3D 转换的子元素")])]),a._v(" "),s("h3",{attrs:{id:"_3-2-backface-visibility："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-backface-visibility："}},[a._v("#")]),a._v(" 3.2 backface-visibility：")]),a._v(" "),s("p",[a._v("用于是否可以看见 3D 舞台背面，默认值 visible 表示背面可见，可以设成 hidden 让背面不可见。通常当旋转时，如果不希望背面显示出来，该属性就很有用，设成 hidden 即可")]),a._v(" "),s("h3",{attrs:{id:"_3-3-translate3d"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-translate3d"}},[a._v("#")]),a._v(" 3.3 translate3d:")]),a._v(" "),s("p",[a._v("translate3d 位移系列中用于 3D 的有：translate3d，translateZ")]),a._v(" "),s("p",[a._v("translate3d(tx,ty,tz)，其中 tz 的 Z 轴长度只能为 px 值，不能为%百分比")]),a._v(" "),s("h3",{attrs:{id:"_3-4-rotate3d"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-rotate3d"}},[a._v("#")]),a._v(" 3.4 rotate3d")]),a._v(" "),s("p",[a._v("rotate3d 中的 3D 旋转主要包括 rotateX()、rotateY()、rotateZ()和 rotate3d(x,y,z,a)四个功能函数；")]),a._v(" "),s("h3",{attrs:{id:"_3-5-scale3d："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-scale3d："}},[a._v("#")]),a._v(" 3.5 scale3d：")]),a._v(" "),s("p",[a._v("scale3d 缩放系列中用于 3D 的有：scale3d(x,y,z)，scaleZ；仅当元素有深度时，这两个函数才有效果，而元素在默认情况下没有深度。如果让元素有一定的深度，例如绕 x 轴或 y 轴旋转，那么深度就可以缩放。使用 scalez()或者 scale3d()都可以")]),a._v(" "),s("h2",{attrs:{id:"_4-css3-过渡（transition）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-css3-过渡（transition）"}},[a._v("#")]),a._v(" 4 CSS3 过渡（transition）")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/689aa6ede26f864a128548dc82e4da20/1610615140930-958cf6a1-ad1a-4311-bcd9-7f1bcf88f845.png",alt:""}})]),a._v(" "),s("p",[s("strong",[a._v("属性详解")]),a._v(" "),s("strong",[a._v("transition-property")]),a._v("\n不是所有属性都能过渡，只有属性具有一个中间点值才具备过渡效果。\n"),s("strong",[a._v("transition-duration")]),a._v("\n指定从一个属性到另一个属性过渡所要花费的时间。默认值为 0，为 0 时，表示变化是瞬时的，看不到过渡效果。\n"),s("strong",[a._v("transiton-timing-function")]),a._v("\n过渡函数，有如下几种：")]),a._v(" "),s("ul",[s("li",[a._v("liner ：匀速")]),a._v(" "),s("li",[a._v("ease-in：加速")]),a._v(" "),s("li",[a._v("ease-out：减速")]),a._v(" "),s("li",[a._v("ease-in-out：先加速再减速")]),a._v(" "),s("li",[a._v("cubic-bezier：三次贝塞尔曲线，可以定制")])]),a._v(" "),s("p",[s("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/34d68704b6cc8a4defaa3ee32e05d940/1610615140989-400403a0-690d-4368-9dcd-896ce0f20da2.png",alt:""}})]),a._v(" "),s("p",[s("strong",[a._v("触发过渡")]),a._v("\n单纯的代码不会触发任何过渡操作，需要通过用户的行为（如点击，悬浮等）触发，可触发的方式有：\n:hoever :focus :checked 媒体查询触发 JavaScript 触发\n"),s("strong",[a._v("局限性")]),a._v("\ntransition 的优点在于简单易用，但是它有几个很大的局限。")]),a._v(" "),s("ul",[s("li",[a._v("（1）transition 需要事件触发，所以没法在网页加载时自动发生。")]),a._v(" "),s("li",[a._v("（2）transition 是一次性的，不能重复发生，除非一再触发。")]),a._v(" "),s("li",[a._v("（3）transition 只能定义开始状态和结束状态，不能定义中间状态，也就是说只有两个状态。")]),a._v(" "),s("li",[a._v("（4）一条 transition 规则，只能定义一个属性的变化，不能涉及多个属性。")])]),a._v(" "),s("p",[a._v("CSS Animation 就是为了解决这些问题而提出的。")]),a._v(" "),s("h2",{attrs:{id:"_5-css3-animation-动画"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-css3-animation-动画"}},[a._v("#")]),a._v(" 5 CSS3 animation(动画)")]),a._v(" "),s("p",[a._v("CSS3 的 animation 属性可以像 Flash 制作动画一样，通过控制关键帧来控制动画的每一步，实现更为复杂的动画效果。animation 实现动画效果主要由两部分组成：\n1）通过类似 Flash 动画中的帧来声明一个动画；\n2）在 animation 属性中调用关键帧声明的动画。**\n注：animation 属性到目前位置得到了大多数浏览器的支持，但是，需要添加浏览器前缀哦！\n**animation 动画属性**\n还是先列表格来说明属性，自己感觉会比较清晰：")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/5ca696230d7dec07631325b179f04bc5/1610615140946-1307e1c3-011a-4d70-9402-c41c001fdd32.png",alt:""}})]),a._v(" "),s("ul",[s("li",[s("p",[a._v("（1）animation-name：none 为默认值，将没有任何动画效果，其可以用来覆盖任何动画")])]),a._v(" "),s("li",[s("p",[a._v("（2）animation-duration：默认值为 0，意味着动画周期为 0，也就是没有任何动画效果")])]),a._v(" "),s("li",[s("p",[a._v("（3）animation-timing-function：与 transition-timing-function 一样")])]),a._v(" "),s("li",[s("p",[a._v("（4）animation-delay：在开始执行动画时需要等待的时间")])]),a._v(" "),s("li",[s("p",[a._v("（5）animation-iteration-count：定义动画的播放次数，默认为 1，如果为 infinite，则无限次循环播放")])]),a._v(" "),s("li",[s("p",[a._v("（6）animation-direction：默认为 nomal，每次循环都是向前播放，（0-100），另一个值为 alternate，动画播放为偶数次则向前播放，如果为基数词就反方向播放")])]),a._v(" "),s("li",[s("p",[a._v("（7）animation-state：默认为 running，播放，paused，暂停")])]),a._v(" "),s("li",[s("p",[a._v("（8）animation-fill-mode：定义动画开始之前和结束之后发生的操作，默认值为 none，动画结束时回到动画没开始时的状态；forwards，动画结束后继续应用最后关键帧的位置，即保存在结束状态；backwards，让动画回到第一帧的状态；both：轮流应用 forwards 和 backwards 规则。")]),a._v(" "),s("p",[s("strong",[a._v("@keyframes")]),a._v("\nCSS3 的 animation 制作动画效果主要包括两部分：")]),a._v(" "),s("ul",[s("li",[s("ol",[s("li",[a._v("用关键帧声明一个动画，")])])]),a._v(" "),s("li",[a._v("2.在 animation 调用关键帧声明的的动画。\n@keyframes 就是关键帧。这个帧与 Flash 里的帧类似，一个动画中可以有很多个帧。\n一个@keyframes 中的样式规则是由多个百分比构成的，可以在这个规则上创建多个百分比，从而达到一种不断变化的效果。另外，@keyframes 必须要加 webkit 前缀。举个例子：")])])])]),a._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[a._v("div:hover")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v("-webkit-animation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 1s changeColor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v("animation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 1s changeColor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[a._v("@-webkit-keyframes")]),a._v(" changeColor")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[a._v("0%")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" #c00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[a._v("50%")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" orange"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[a._v("100%")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" yellowgreen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[a._v("@keyframes")]),a._v(" changeColor")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[a._v("0%")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" #c00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[a._v("50%")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" orange"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[a._v("100%")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" yellowgreen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br")])]),s("p",[a._v("上面代码中的 0% 100%的百分号都不能省略，0%可以由 from 代替，100%可以由 to 代替。要让 changeColor 动画有效果，就必须要通过 CSS3animation 属性来调用它。")]),a._v(" "),s("p",[s("strong",[a._v("区别")])]),a._v(" "),s("p",[a._v("animation 属性类似于 transition，他们都是随着时间改变元素的属性值，其主要区别在于：transition 需要触发一个事件才会随着时间改变其 CSS 属性；animation 在不需要触发任何事件的情况下，也可以显式的随时间变化来改变元素 CSS 属性，达到一种动画的效果")])])}),[],!1,null,null,null);t.default=e.exports}}]);