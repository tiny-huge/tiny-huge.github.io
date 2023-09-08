(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{530:function(e,a,o){"use strict";o.r(a);var t=o(6),s=Object(t.a)({},(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"cookie-中的-samesite-设置"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cookie-中的-samesite-设置"}},[e._v("#")]),e._v(" Cookie 中的 SameSite 设置")]),e._v(" "),o("blockquote",[o("p",[e._v("作者: 刘俊 日期: 2020-06-15")])]),e._v(" "),o("h1",{attrs:{id:"cookie-中的-samesite-设置-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cookie-中的-samesite-设置-2"}},[e._v("#")]),e._v(" Cookie 中的 SameSite 设置")]),e._v(" "),o("h2",{attrs:{id:"什么是-cookie"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#什么是-cookie"}},[e._v("#")]),e._v(" 什么是 Cookie")]),e._v(" "),o("p",[e._v("HTTP 协议本身是无状态的。什么是无状态呢，即服务器无法判断用户身份。Cookie 实际上是一小段的文本信息（key-value 格式）。客户端向服务器发起请求，如果服务器需要记录该用户状态，就使用 response 向客户端浏览器颁发一个 Cookie。客户端浏览器会把 Cookie 保存起来。当浏览器再请求该网站时，浏览器把请求的网址连同该 Cookie 一同提交给服务器。服务器检查该 Cookie，以此来辨认用户状态。")]),e._v(" "),o("h2",{attrs:{id:"第一方-cookie-和第三方-cookie"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#第一方-cookie-和第三方-cookie"}},[e._v("#")]),e._v(" 第一方 cookie 和第三方 cookie")]),e._v(" "),o("h3",{attrs:{id:"第一方-cookie"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#第一方-cookie"}},[e._v("#")]),e._v(" 第一方 cookie")]),e._v(" "),o("p",[e._v("第一方 cookie 指的是由网络用户访问的域创建的 cookie。例如：当用户通过网络浏览器点击简书 jianshu.com 时，浏览器会在第一个页面中发送一个网页请求，这个过程需要用户直接与 jianshu.com 互动例如登录什么的。这样网络浏览器随后就将此数据文件保存到 jianshu.com 域名下的用户计算机上。\n"),o("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/588bd5123332bf2618cc62fe8540abf3/19506176-efe43ab72ac58423.png",alt:"保存到本地的cookie文件"}})]),e._v(" "),o("h3",{attrs:{id:"第三方-cookie"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#第三方-cookie"}},[e._v("#")]),e._v(" 第三方 cookie")]),e._v(" "),o("p",[e._v("第三方 cookie 是建立在别的域名不是你访问的域名（地址栏中的网址）， 比如：广告网络商就是最常见的第三方 cookies 的来源，他们用它们在多个网站上追踪用户的行为，当然这些活动可以用来调整广告。此外图像、 JavaScript 和 iframe 通常也会导致第三方 cookies 的生成。")]),e._v(" "),o("blockquote",[o("p",[e._v("解释一下广告是如何精准投放的。首先我们所看到的广告都是由一些互联网巨头集合中小网络媒体资源，通过联盟平台帮助广告主实现广告投放，并进行数据监测统计，当你的网站或博客有一定的流量时可以去这些广告联盟官网进行申请。以百度联盟为例：使用百度的时候，会把你的此次搜索保存到 cookie 中，并且分配这个浏览器唯一可标识的 ID 号，当打开人人影视的时候，该页的广告模块就向第三方也就是广告服务商的服务器去请求百度保存在浏览器的 cookie，然后就可以知道你最近浏览或者搜索过哪些商品，然后就返回给你相关的广告。")])]),e._v(" "),o("h2",{attrs:{id:"cookie-的查看"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cookie-的查看"}},[e._v("#")]),e._v(" Cookie 的查看")]),e._v(" "),o("p",[e._v("我们可以在浏览器的开发者工具中查看到当前页面的 Cookie：\n"),o("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/c83e2f6314c516f5172807adf134de61/19506176-89e3b0041a89ae8c.png",alt:"Application"}}),e._v(" "),o("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/e62c2671159883e49b93c3da11355756/19506176-8ae99c59f2a50c2a.png",alt:"cookie查看2"}})]),e._v(" "),o("h2",{attrs:{id:"cookie-的设置"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cookie-的设置"}},[e._v("#")]),e._v(" Cookie 的设置")]),e._v(" "),o("ul",[o("li",[e._v("1、客户端发送 HTTP 请求到服务器")]),e._v(" "),o("li",[e._v("2、当服务器收到 HTTP 请求时，在响应头里面添加一个 Set-Cookie 字段")]),e._v(" "),o("li",[e._v("3、浏览器收到响应后保存下 Cookie")]),e._v(" "),o("li",[e._v("4、之后对该服务器每一次请求中都通过 Cookie 字段将 Cookie 信息发送给服务器。\n我通过 post 请求一个登录接口，并在登录接口中在响应头里面添加一个 Set-Cookie 字段\n"),o("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/72abb6ccded8c2c1f47876e35e3b4a49/19506176-29b6fa724cdb9755.png",alt:"代码1"}}),e._v(" "),o("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/36385b9676961af9081e8126a78b7ba5/19506176-ee31b68ae574fbdf.png",alt:"代码2"}}),e._v("\n我们在请求返回的 Response Headers 可以看到 Set-Cookie 字段：和 Request Headers 看到 cookie 字段（Response Headers 和 Request Headers 的作用和区别待补充）\n"),o("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/9404f68c9481f6ae217611910a141b5c/19506176-1d3c78100a09a1d4.png",alt:"接口请求头里"}}),e._v(" "),o("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/6c28b7f327c6906c48be5f273a7ef214/19506176-8e97c4876c1d7259.png",alt:"接口cookie中"}}),e._v("\n当我们再调用这个服务器上的另外一个接口时我们就可以很轻松的拿到这个 cookie 值\n"),o("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/0fcf97a5efdcc174611e6331bceda3ec/19506176-c728f56e7c1a49ba.png",alt:"代码3"}}),e._v("\n我们就可以通过获取的 cookie 对登录用户进行再次验证，通过其 cookie 中的信息跳转不同的页面。\n"),o("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/f5d0331d40db35db0c566bb55fdac5e4/19506176-34bff5684b93c990.png",alt:"代码4"}}),e._v(" "),o("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/7c883ab064bbac6d9512bd170af914aa/19506176-66ab2d51a4876850.png",alt:"另一个接口接收到的cookie"}})])]),e._v(" "),o("blockquote",[o("p",[e._v("这里提一下前端是只能读取在前端的 cookie 而后台设置的 cookie 只有在同域的情况下才能读取到。")])]),e._v(" "),o("h2",{attrs:{id:"cookie-的属性"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cookie-的属性"}},[e._v("#")]),e._v(" Cookie 的属性")]),e._v(" "),o("h3",{attrs:{id:"name-value"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#name-value"}},[e._v("#")]),e._v(" Name/Value")]),e._v(" "),o("p",[e._v("键值对，可以设置要保存的 Key/Value，注意这里的 NAME 不能和其他属性项的名字一样")]),e._v(" "),o("h3",{attrs:{id:"expires"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#expires"}},[e._v("#")]),e._v(" Expires")]),e._v(" "),o("p",[e._v("过期时间，在设置的某个时间点后该 Cookie 就会失效。Cookie 中的 maxAge 用来表示该属性，单位为秒。maxAge 有 3 种值，分别为正数，负数和 0。\n如果 maxAge 属性为正数，则表示该 Cookie 会在 maxAge 秒之后自动失效。浏览器会将 maxAge 为正数的 Cookie 持久化，即写到对应的 Cookie 文件中（每个浏览器存储的位置不一致）。无论客户关闭了浏览器还是电脑，只要还在 maxAge 秒之前，登录网站时该 Cookie 仍然有效。当为 0 时表示立即删除 cookie。为负数时到期时间为创建时间之前。运行窗口关闭后会销毁时间到期的 cookie。\n"),o("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/31b32b5a0dc6113f95b19b41244b4f80/19506176-a382efc74ab3bbc1.png",alt:"为负数"}})]),e._v(" "),o("h3",{attrs:{id:"domain"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#domain"}},[e._v("#")]),e._v(" Domain")]),e._v(" "),o("p",[e._v("Domain 指定了 Cookie 可以送达的主机名。假如没有指定，那么默认值为当前文档访问地址中的主机部分（但是不包含子域名）。但不能将一个 cookie 的域设置成服务器所在的域之外的域。是无效的。\n"),o("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/e978dd7ac2c022f94012928bf88e8b8f/19506176-84fa06eea5d5c293.png",alt:"非服务器所在域"}})]),e._v(" "),o("h3",{attrs:{id:"path"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[e._v("#")]),e._v(" Path")]),e._v(" "),o("p",[e._v('Path 指定了一个 URL 路径，这个路径必须出现在要请求的资源的路径中才可以发送 Cookie 首部。设置为"/"表示允许所有路径都可以使用 Cookie，\nDomain 和 Path 标识共同定义了 Cookie 的作用域：即 Cookie 应该发送给哪些 URL。')]),e._v(" "),o("h3",{attrs:{id:"secure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#secure"}},[e._v("#")]),e._v(" Secure")]),e._v(" "),o("p",[e._v("标记为 Secure 的 Cookie 只应通过被 HTTPS 协议加密过的请求发送给服务端。使用 HTTPS 安全协议，可以保护 Cookie 在浏览器和 Web 服务器间的传输过程中不被窃取和篡改。")]),e._v(" "),o("h3",{attrs:{id:"httponly"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#httponly"}},[e._v("#")]),e._v(" HTTPOnly")]),e._v(" "),o("p",[e._v("设置 HTTPOnly 属性可以防止客户端脚本通过 document.cookie 等方式访问 Cookie，有助于避免 XSS 攻击。")]),e._v(" "),o("h3",{attrs:{id:"samesite"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#samesite"}},[e._v("#")]),e._v(" SameSite")]),e._v(" "),o("p",[e._v("SameSite 也是这篇博客的主体，首先我们来看看这个参数的作用。\nSameSite 属性可以让 Cookie 在跨站请求时不会被发送，从而可以阻止跨站请求伪造攻击（CSRF）。至于什么是 CSRF 这里就不具体说了。\nSameSite 可以有下面三种值：")]),e._v(" "),o("ul",[o("li",[e._v("1、Strict 仅允许一方请求携带 Cookie，即浏览器将只发送相同站点请求的 Cookie，即当前网页 URL 与请求目标 URL 完全一致。")]),e._v(" "),o("li",[e._v("2、Lax 允许部分第三方请求携带 Cookie")]),e._v(" "),o("li",[e._v("3、None 无论是否跨站都会发送 Cookie\n造成现在无法获取 cookie 是因为之前默认是 None 的，Chrome80 后默认是 Lax。")])]),e._v(" "),o("h4",{attrs:{id:"跨域和跨站"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#跨域和跨站"}},[e._v("#")]),e._v(" 跨域和跨站")]),e._v(" "),o("p",[e._v("首先要理解的一点就是跨站和跨域是不同的。同站(same-site)/跨站(cross-site)」和第一方(first-party)/第三方(third-party)是等价的。但是与浏览器同源策略（SOP）中的「同源(same-origin)/跨域(cross-origin)」是完全不同的概念。\n同源策略的同源是指两个 URL 的协议/主机名/端口一致。例如"),o("a",{attrs:{href:"https://127.0.0.1:8000/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://127.0.0.1:8000/"),o("OutboundLink")],1),e._v("它的协议是 https，主机名是 127.0.0.1，端口是 8000。")]),e._v(" "),o("p",[e._v("同源策略作为浏览器的安全基石，其「同源」判断是比较严格的，相对而言，Cookie 中的「同站」判断就比较宽松：只要两个 URL 的 eTLD+1 相同即可，不需要考虑协议和端口。其中，eTLD 表示有效顶级域名，注册于 Mozilla 维护的公共后缀列表（Public Suffix List）中，例如，.com、.co.uk、.github.io 等。eTLD+1 则表示，有效顶级域名+二级域名，例如"),o("a",{attrs:{href:"http://taobao.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("taobao.com"),o("OutboundLink")],1),e._v("等。这部分内容还需要再补充。")]),e._v(" "),o("h4",{attrs:{id:"改变"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#改变"}},[e._v("#")]),e._v(" 改变")]),e._v(" "),o("p",[e._v("来看下从 None 改成 Lax 到底影响了哪些地方的 Cookies 的发送。\n"),o("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/495c6cdf4ef94e682e039d5b402a2506/19506176-0f3e256e10049c7b.png",alt:"影响表"}}),e._v("\n从上图可以看出，对大部分 web 应用而言，Post 表单，iframe，AJAX，Image 这四种情况从以前的跨站会发送三方 Cookie，变成了不发送。故这四种情况跨站给第三方发送 Cookie 需要在设置的时候将 SameSite 设置为 None。")]),e._v(" "),o("h2",{attrs:{id:"谷歌浏览器中对第三方的-cookie-设置"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#谷歌浏览器中对第三方的-cookie-设置"}},[e._v("#")]),e._v(" 谷歌浏览器中对第三方的 cookie 设置")]),e._v(" "),o("h3",{attrs:{id:"samesite-by-default-cookies"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#samesite-by-default-cookies"}},[e._v("#")]),e._v(" SameSite by default cookies")]),e._v(" "),o("p",[o("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/d304a436d612f09c39b790e04dc4cdb1/19506176-3214cb164f563400.png",alt:"允许第三方"}}),e._v("\n把这个设置关了就允许所有的第三方 cookie")]),e._v(" "),o("h3",{attrs:{id:"cookies-without-samesite-must-be-secure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cookies-without-samesite-must-be-secure"}},[e._v("#")]),e._v(" Cookies without SameSite must be secure")]),e._v(" "),o("p",[o("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/4db5d323777c24775451d3c24f6cab42/19506176-270a25ba8eb67ffa.png",alt:"https"}}),e._v("\n这个设置就是所谓的许多博客提到的 http 设置 SameSite=None 无效必须设置 Secure 的原因。如果把这个设置设置为 Disabled，那么 http 设置 SameSite=None 是有效的。")]),e._v(" "),o("h3",{attrs:{id:"enable-removing-samesite-none-cookies"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#enable-removing-samesite-none-cookies"}},[e._v("#")]),e._v(" Enable removing SameSite=None cookies")]),e._v(" "),o("p",[o("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/ea759277c01ec586b055b2afa37a3e83/19506176-1b2b76b64797890d.png",alt:"在浏览器设置中管理第三方cookie"}}),e._v("\n这个是关于第三方 cookie 是否可以在谷歌设置中"),o("a",{attrs:{href:"chrome://settings/siteData"}},[e._v("chrome://settings/siteData")]),e._v("单独删除第三方 cookie。\n"),o("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/938532ae0a29de4a979aacba0f33bb7e/19506176-5b1720a53b9dd0a8.png",alt:"开启这个设置"}}),e._v(" "),o("img",{attrs:{src:"http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335//fellow-travellers/picgorepo/uploads/0682bd4663f34c77c508740f05a2f5b6/19506176-e9a8c5c572ada103.png",alt:"关掉这个设置"}})])])}),[],!1,null,null,null);a.default=s.exports}}]);