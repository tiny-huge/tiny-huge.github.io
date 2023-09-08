(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{516:function(t,_,v){"use strict";v.r(_);var a=v(6),r=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"标准文档流"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#标准文档流"}},[t._v("#")]),t._v(" 标准文档流")]),t._v(" "),v("blockquote",[v("p",[t._v("作者: 刘周玮、何慧婷 日期：2020-11-10")])]),t._v(" "),v("h2",{attrs:{id:"_1-文档流"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-文档流"}},[t._v("#")]),t._v(" 1. 文档流")]),t._v(" "),v("p",[t._v('"文档流"或"流式布局"是在对布局进行任何更改之前，在页面上显示"块"和"内联"元素的方式。 这个"流"本质上是一系列的事物，它们都在你的布局中一起工作，并且互相了解。 一旦某部分脱离了"流"，它就会独立地工作。')]),t._v(" "),v("p",[t._v("标准文档流分为两种等级："),v("code",[t._v("块级元素")]),t._v(" 和 "),v("code",[t._v("行内元素：")])]),t._v(" "),v("h3",{attrs:{id:"_1-1-块级元素"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-块级元素"}},[t._v("#")]),t._v(" 1.1. 块级元素")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("1.1.1 流动方向："),v("br"),t._v(" "),v("strong",[t._v("从上到下")]),t._v(" ，霸占一行，不能与其他任何元素并列。像默认的"),v("code",[t._v("<div></div>")]),t._v("每一个元素占据一行，不并排（块级元素就算设置了宽度不占满，也不会合成一行，即不并排，除非设置定位属性：默认情况下，每个块级元素独占一行） 。")])]),t._v(" "),v("li",[v("p",[t._v("1.1.2 特性：")])]),t._v(" "),v("li",[v("ul",[v("li",[t._v("总是在新行上开始，占据一整行")])])]),t._v(" "),v("li",[v("ul",[v("li",[t._v("高度，行高以及外边距和内边距都可控制")])])]),t._v(" "),v("li",[v("ul",[v("li",[t._v("宽度缺省是它的容器的 100%，即和父亲一样宽，除非设定一个宽度")])])]),t._v(" "),v("li",[v("ul",[v("li",[t._v("它可以容纳内联元素和其他块元素")])])])]),t._v(" "),v("h3",{attrs:{id:"_1-2-行内元素"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-行内元素"}},[t._v("#")]),t._v(" 1.2. 行内元素")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("1.2.1 流动方向："),v("br"),t._v(" "),v("strong",[t._v("从左到右")]),t._v("， 与其他元素并排。像默认的"),v("code",[t._v("<span></span>")]),t._v("直到排满一行，才会另起一行。")])]),t._v(" "),v("li",[v("p",[t._v("1.2.2 特性：")])]),t._v(" "),v("li",[v("ul",[v("li",[t._v("和其他元素都在一行上")])])]),t._v(" "),v("li",[v("ul",[v("li",[t._v("不能设置宽、高。默认的宽度就是它的文字或图片的宽度，不可改变。")])])]),t._v(" "),v("li",[v("ul",[v("li",[t._v("设置高度 height 无效，可以通过 line-height 来设置")])])]),t._v(" "),v("li",[v("ul",[v("li",[t._v("设置 margin 和 padding 只有左右有效，上下无效")])])]),t._v(" "),v("li",[v("ul",[v("li",[t._v("内联元素只能容纳文本或者其他内联元素")])])])]),t._v(" "),v("p",[t._v("  所有的"),v("strong",[t._v("文本级标签")]),t._v("都是"),v("strong",[t._v("行内元素")]),t._v("，"),v("em",[t._v("除了 p")]),t._v("；"),v("strong",[t._v("p 是个文本级，但是是个块级元素")]),t._v("；")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/c569d07a39f31da7dac194086bb4f741/0081Kckwgy1gklccm0o94j30vq0u0136.jpg",alt:""}})]),t._v(" "),v("h2",{attrs:{id:"_2-脱离文档流"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-脱离文档流"}},[t._v("#")]),t._v(" 2 脱离文档流")]),t._v(" "),v("p",[t._v("  元素脱离文档流之后，将不再在文档流中占据空间，而是处于浮动状态（可以理解为漂浮在文档流的上方）。")]),t._v(" "),v("p",[t._v("  脱离文档流的元素的定位基于正常的文档流，当一个元素脱离文档流后，依然在文档流中的其他元素将忽略该元素并填补其原先的空间。")]),t._v(" "),v("p",[t._v("  css 中有三种手段可以使一个元素脱离标准文档流，分别为"),v("strong",[t._v("浮动")]),t._v("和"),v("strong",[t._v("绝对定位")]),t._v("，"),v("strong",[t._v("固定定位")]),t._v("。(浮动元素对于块元素脱离文档流，对于行内元素没有脱离文档流)")]),t._v(" "),v("h3",{attrs:{id:"_2-1-position-属性及表现"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-position-属性及表现"}},[t._v("#")]),t._v(" 2.1 position 属性及表现")]),t._v(" "),v("h4",{attrs:{id:"_2-1-1-定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-定义"}},[t._v("#")]),t._v(" 2.1.1 定义")]),t._v(" "),v("p",[t._v("  position 属性用于指定一个元素在文档中的定位方式。top，right，bottom 和 left 属性则决定了该元素的最终位置。")]),t._v(" "),v("br"),t._v(" "),v("div",{attrs:{align:"center"}},[v("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/4a4eca6ac0d517cf6ba1a489d354d7d0/muq394pIO1E8WPS.jpg",width:"80%"}})]),t._v(" "),v("br"),t._v(" "),v("h3",{attrs:{id:"_2-2-float-及清除"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-float-及清除"}},[t._v("#")]),t._v(" 2.2 float 及清除")]),t._v(" "),v("h4",{attrs:{id:"_2-2-1-定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-定义"}},[t._v("#")]),t._v(" 2.2.1 定义")]),t._v(" "),v("p",[t._v("  float 属性指定一个元素应沿其容器的左侧或右侧放置，允许文本和内联元素环绕它。该元素从网页的正常流动(文档流)中移除，尽管仍然保持部分的流动性。")]),t._v(" "),v("br"),t._v(" "),v("div",{attrs:{align:"center"}},[v("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/235386b87c225bea430b112abed6d113/OCFp4Tk9XymwE7Y.jpg",width:"60%"}}),t._v(" "),v("p",[t._v("* inline-start 和 inline-end 除火狐以外都不兼容")])]),t._v(" "),v("br"),t._v(" "),v("h4",{attrs:{id:"_2-2-2-特性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-特性"}},[t._v("#")]),t._v(" 2.2.2 特性")]),t._v(" "),v("ul",[v("li",[v("ol",[v("li",[t._v("脱离文档：元素设置为浮动后脱离文档流，并不占据空间，而此浮动元素在文档流空出的位置，由后续的非浮动元素填充，块级元素直接填充上去，内联元素则有空隙就插入。使用 float 脱离文档流时，其他盒子会无视这个元素，但其他盒子内的文本依然会为这个元素让出位置，环绕在该元素的周围。")])])]),t._v(" "),v("li",[v("ol",{attrs:{start:"2"}},[v("li",[t._v("浮动可以内联排列：浮动会向左/向右浮动，直到碰到另一个浮动元素为止，这是浮动可以内联排列的特征。也就是说，浮动可以设置宽高，并且能够一行多个，类似于 "),v("code",[t._v("inline-block")]),t._v(" 属性的效果。")])])]),t._v(" "),v("li",[v("ol",{attrs:{start:"3"}},[v("li",[t._v("父元素高度坍塌：浮动元素脱离了文档流，并不占据文档流的位置，自然父元素也就不能被撑开，所以没了高度。")])])]),t._v(" "),v("li",[v("ol",{attrs:{start:"4"}},[v("li",[t._v("使用 float 意味着使用块布局，float 会在某些情况下修改 "),v("code",[t._v("display")]),t._v(" 值的计算值：当 "),v("code",[t._v("display")]),t._v(" 为 "),v("code",[t._v("inline")]),t._v(", "),v("code",[t._v("inline-block")]),t._v(", "),v("code",[t._v("table-row")]),t._v(", "),v("code",[t._v("table-row-group")]),t._v(", "),v("code",[t._v("table-column")]),t._v(", "),v("code",[t._v("table-column-group")]),t._v(", "),v("code",[t._v("table-cell")]),t._v(", "),v("code",[t._v("table-caption")]),t._v(", "),v("code",[t._v("table-header-group")]),t._v(", "),v("code",[t._v("table-footer-group")]),t._v(" 时，"),v("code",[t._v("display")]),t._v(" 的计算值会被改为 "),v("code",[t._v("block")]),t._v(" ；当 "),v("code",[t._v("display")]),t._v(" 为 "),v("code",[t._v("inline-table")]),t._v(" 时， "),v("code",[t._v("display")]),t._v(" 的计算值会被改为 "),v("code",[t._v("table")]),t._v(" ;当 "),v("code",[t._v("display")]),t._v(" 为 "),v("code",[t._v("flex")]),t._v(", "),v("code",[t._v("inline-flex")]),t._v(" 时，计算值不改变，"),v("code",[t._v("float")]),t._v(" 也不起作用。")])])]),t._v(" "),v("li",[v("ol",{attrs:{start:"5"}},[v("li",[t._v("如果浮动非替换元素，则要指定一个明确的宽度；否则，它们会尽可能地窄。")])])])]),t._v(" "),v("h3",{attrs:{id:"_2-3-清除浮动"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-清除浮动"}},[t._v("#")]),t._v(" 2.3 清除浮动")]),t._v(" "),v("h4",{attrs:{id:"_2-3-1-清除-float-带来的影响：clear"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-清除-float-带来的影响：clear"}},[t._v("#")]),t._v(" 2.3.1 清除 float 带来的影响：clear")]),t._v(" "),v("p",[t._v("  clear 属性指定一个元素是否必须移动(清除浮动后)到在它之前的浮动元素下面。clear 属性适用于浮动和非浮动元素。“移动到在它之前的浮动元素下面”指元素的 border-box 的顶边接触在它之前的浮动元素的 margin-box 的底边。")]),t._v(" "),v("br"),t._v(" "),v("div",{attrs:{align:"center"}},[v("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/235386b87c225bea430b112abed6d113/OCFp4Tk9XymwE7Y.jpg",width:"60%"}}),t._v(" "),v("p",[t._v("* inline-start 和 inline-end 除火狐以外都不兼容")])]),t._v(" "),v("br"),t._v(" "),v("h4",{attrs:{id:"_2-3-2-上边距消失"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-上边距消失"}},[t._v("#")]),t._v(" 2.3.2 上边距消失")]),t._v(" "),v("br"),t._v(" "),v("div",{attrs:{align:"center"}},[v("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/d615028600a8b7dbac8c4f6fb1c3774f/PreoMQ5UHLYyIaT.png",width:"90%"}})]),t._v(" "),v("br"),t._v(" "),v("h5",{attrs:{id:"_2-3-2-1-背景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-1-背景"}},[t._v("#")]),t._v(" 2.3.2.1 背景")]),t._v(" "),v("p",[t._v("  如上图所示，天蓝色块容器没有设置 height 属性，天蓝色块容器内包含三个块元素，由高到低排列，第一个和第二个元素是浮动元素，第二个和第三个元素清除了左侧的浮动。此时，第一个和第二个元素对于所有块元素而言脱离了文档流。如果第三个元素没有清除浮动，天蓝色块容器会发生高度塌陷，假装看不见第一个和第二个元素；而在第三个元素清除浮动后，天蓝色块容器依然假装看不见第一个和第二个元素，浏览器根据 clear 属性为第三个元素计算了第三个元素紧贴第二个元素定位所需要的高度，并将高度赋给了第三个元素的 top 属性，天蓝色容器块根据第三个元素的 top, height, margin, padding, border 撑开了内容框。")]),t._v(" "),v("h5",{attrs:{id:"_2-3-2-2-块元素的上边距为什么不起效果"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-2-块元素的上边距为什么不起效果"}},[t._v("#")]),t._v(" 2.3.2.2 块元素的上边距为什么不起效果")]),t._v(" "),v("p",[t._v("  第三个元素的 padding-top 值小于浏览器计算获得的 top 值，因此上边距看上去没有效果。为了使第三个元素和第二个元素产生间距，可以为第二个元素设置下边距，或者为第三个元素设置更大的 padding-top。")]),t._v(" "),v("h4",{attrs:{id:"_2-3-3-清除浮动引发的父元素高度塌陷"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-3-清除浮动引发的父元素高度塌陷"}},[t._v("#")]),t._v(" 2.3.3 清除浮动引发的父元素高度塌陷")]),t._v(" "),v("h5",{attrs:{id:"_2-3-3-1-在父元素触发-bfc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-3-1-在父元素触发-bfc"}},[t._v("#")]),t._v(" 2.3.3.1 在父元素触发 BFC")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context",target:"_blank",rel:"noopener noreferrer"}},[t._v("可参考如何触发一个新的 BFC"),v("OutboundLink")],1)]),t._v(" "),v("h5",{attrs:{id:"_2-3-3-2-借助-clear"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-3-2-借助-clear"}},[t._v("#")]),t._v(" 2.3.3.2 借助 clear")]),t._v(" "),v("p",[t._v("  利用 clear 属性自动计算需要让出的高度的特性，在父元素中添加一个空白标签，为空白标签赋上 clear 属性;或在 :after 类中写 clear 属性；或在浮动元素相邻的非浮动元素上使用 clear。")]),t._v(" "),v("pre",[t._v('.out:after {\n  content: "";\n  display: block;\n  height: 0;\n  clear: both;\n}   \n.out{\n  zoom: 1;\n}\n')]),t._v(" "),v("ul",[v("li",[t._v("content 属性，表示伪元素的内容,设置:before 和:after 时必须设置其 content 属性，否则伪元素就不起作用，本例 content: “”表示给父元素结尾放了一个空白字符。")]),t._v(" "),v("li",[t._v("after 添加的内容默认是 inline 元素，但是行内元素会找空隙插入浮动元素，依然撑不起父容器高度，所以我们需要把插入的元素设置成块元素 block。")]),t._v(" "),v("li",[t._v("height: 0 是让这个这个空白字符不显示出来。")]),t._v(" "),v("li",[t._v("zoom: 1 的解释见下文。")])]),t._v(" "),v("h5",{attrs:{id:"_2-3-3-3-在父元素触发-haslayout"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-3-3-在父元素触发-haslayout"}},[t._v("#")]),t._v(" 2.3.3.3 在父元素触发 hasLayout")]),t._v(" "),v("p",[t._v("  在父元素触发 hasLayout（IE5.5/6/7 中的 BFC），如果要考虑兼容性最好既触发 hasLayout 又触发 BFC。")]),t._v(" "),v("p",[v("strong",[t._v("① 如何触发 hasLayout")])]),t._v(" "),v("br"),t._v(" "),v("div",{attrs:{align:"center"}},[v("img",{attrs:{src:"https://i.loli.net/2020/11/16/DCFl9uxaVLmPTwI.jpg",width:"90%"}}),t._v(" "),v("p",[t._v("* zoom=1 副作用最小")])]),t._v(" "),v("br"),t._v(" "),v("p",[t._v("###overflow 与 clip")]),t._v(" "),v("hr"),t._v(" "),v("h5",{attrs:{id:"_2-3-3-3-overflow"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-3-3-overflow"}},[t._v("#")]),t._v(" 2.3.3.3 overflow")]),t._v(" "),v("p",[v("strong",[t._v("1.")]),t._v(" overflow 定义"),v("br"),t._v("\n  根据 CSS2 的定义，overflow 决定了一个块容器元素的内容在它超出元素框的情况下是否需要被裁剪。 overflow 对元素的所有内容都起作用，除了以下两种情况："),v("br"),t._v("\n  ① 如果元素的某个子元素的包含块是 "),v("strong",[t._v("视口")]),t._v("，那么那个子元素不受 overflow 控制。"),v("br"),t._v("\n  ② 如果元素的某个子元素的包含块是 "),v("strong",[t._v("元素的祖先")]),t._v("，那么那个子元素也不受 overflow 控制。")]),t._v(" "),v("p",[t._v("  根据 MDN 的定义， overflow 定义当一个元素的内容太大而无法适应"),v("strong",[t._v("块级格式化上下文")]),t._v("的时候该做什么。")]),t._v(" "),v("br"),t._v(" "),v("div",{attrs:{align:"center"}},[v("img",{attrs:{src:"https://i.loli.net/2020/11/16/CzHErZbA2xPYQde.jpg",width:"60%"}})]),t._v(" "),v("br"),t._v(" "),v("p",[v("strong",[t._v("2.")]),t._v(" overflow 失效")]),t._v(" "),v("br"),t._v(" "),v("div",{attrs:{align:"center"}},[v("img",{attrs:{src:"https://i.loli.net/2020/11/16/pwIuKn6MYeJcSQg.png",width:"90%"}})]),t._v(" "),v("br"),t._v(" "),v("p",[t._v("2.1 背景"),v("br"),t._v("\n  overflow 不处理包含块超出设置 overflow 属性的元素自身的子元素内容。元素的包含块会根据 position 属性的不同发生相应的变化。根元素的包含块尺寸与视口相当，固定在画布原点；静态定位和相对定位的元素的包含块是最近的块容器父元素的盒模型的内容边界；固定定位元素的包含块与根元块的包含块相同；绝对定位元素由最近的父元素（绝对定位 | 相对定位 | 固定定位）生成包含块，如果没有满足条件的父元素，则包含块是初始包含块。")]),t._v(" "),v("p",[t._v("2.2 上图 overflow 失效的原因"),v("br"),t._v("\n  子元素绝对定位，而设置了 overflow 属性的父元素是静态定位，因此绝对定位的子元素的包含块必然是父元素的祖先，overflow 无法处理包含块超出设置 overflow 属性的元素自身的子元素内容，因此 overflow 失效。解决 overflow 失效的方法是改变父元素的 position 属性，absolute, fixed, relative 都可以使子元素的包含块变成父元素，根据使用场景按需设置即可。")]),t._v(" "),v("h5",{attrs:{id:"_2-3-3-4-clip-已废弃"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-3-4-clip-已废弃"}},[t._v("#")]),t._v(" 2.3.3.4 clip (已废弃)")]),t._v(" "),v("p",[v("strong",[t._v("1.")]),t._v(" clip 定义"),v("br"),t._v("\n  根据 CSS2 的定义，裁剪区域决定了一个元素的 border box 中哪一部分可见。裁剪区域由 clip 属性设定，clip 属性只作用于绝对定位的元素。"),v("br"),t._v("\n  clip 属性可取值有：auto, "),v("code",[t._v("rect(<top>, <right>, <bottom>, <left>)")]),t._v("与 inherit。其中，"),v("code",[t._v("<top>和<bottom>")]),t._v("指定相对于盒子上边框边界的偏移，"),v("code",[t._v("<right>和<left>")]),t._v("指定相对于盒子左边框边界的偏移。")]),t._v(" "),v("p",[t._v("【补充】："),v("br"),t._v("\n  clip 属性可由 clip-path 属性代替。")]),t._v(" "),v("p",[t._v("【参考】:")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://drafts.csswg.org/css2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS2 规范"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Learn/CSS",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://www.cnblogs.com/fsjohnhuang/p/5291166.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS 魔法堂：hasLayout 原来是这样!"),v("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=r.exports}}]);