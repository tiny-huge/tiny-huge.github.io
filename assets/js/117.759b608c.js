(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{502:function(s,a,t){"use strict";t.r(a);var n=t(6),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"java计算服务容器化改造"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java计算服务容器化改造"}},[s._v("#")]),s._v(" Java计算服务容器化改造")]),s._v(" "),t("blockquote",[t("p",[s._v("作者:于福豪  时间： 2021-01-05")])]),s._v(" "),t("blockquote",[t("p",[s._v("http://elb-791125809.cn-northwest-1.elb.amazonaws.com.cn:5335/xdata/sh2019gh144/back-end/gis-server-root")]),s._v(" "),t("p",[s._v("分支：gis-docker-20201105")])]),s._v(" "),t("h2",{attrs:{id:"一、集成springalibaba-nacos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、集成springalibaba-nacos"}},[s._v("#")]),s._v(" 一、集成springalibaba+nacos")]),s._v(" "),t("ul",[t("li",[s._v("使用nacos作为配置中心和注册中心")]),s._v(" "),t("li",[s._v("考虑将审查规则文件"),t("code",[s._v("planCheckRule.xml")]),s._v("也放到配置中心文件中，尝试获取子节点list对象时，没解析出来。")])]),s._v(" "),t("h2",{attrs:{id:"二、supermap-iobject基础镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、supermap-iobject基础镜像"}},[s._v("#")]),s._v(" 二、supermap-iobject基础镜像")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("制作基础镜像，开始将所有环境依赖安装到一个镜像里，达到5G")])]),s._v(" "),t("li",[t("p",[s._v("后经运维人员修改，只安装iobject所需的环境，依赖宿主机内的iobject环境，"),t("strong",[s._v("需映射宿主机的supermap-iobject安装路径到容器内的特定路径里")]),t("code",[s._v("/usr/local/iobject")])])]),s._v(" "),t("li",[t("p",[s._v("基础镜像地址")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.31")]),s._v(".36.236/middleware/dist-jdk18:latest\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("h2",{attrs:{id:"三、容器内使用web许可"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、容器内使用web许可"}},[s._v("#")]),s._v(" 三、容器内使用web许可")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("需要宿主机内部署web许可")])]),s._v(" "),t("li",[t("p",[s._v("容器内应用添加获取web许可的代码")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//65400为购买的许可模块 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" arrayOfInt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("65400")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" login "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BSLicense")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("login")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"161.189.205.144"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9183")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" arrayOfInt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("存在的问题")]),s._v(" "),t("ul",[t("li",[s._v("正式许可中，"),t("strong",[s._v("一个容器占用一套许可")]),s._v("。多个容器就要占用多套许可。")]),s._v(" "),t("li",[s._v("如果共用许可，不能同一时刻，获取许可。")])])])]),s._v(" "),t("h2",{attrs:{id:"四、传输文件上传到mongo里"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、传输文件上传到mongo里"}},[s._v("#")]),s._v(" 四、传输文件上传到mongo里")]),s._v(" "),t("ul",[t("li",[s._v("合规审查导出报告")])]),s._v(" "),t("h2",{attrs:{id:"五、自动发服务的工程文件存空间库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、自动发服务的工程文件存空间库"}},[s._v("#")]),s._v(" 五、自动发服务的工程文件存空间库")]),s._v(" "),t("ul",[t("li",[s._v("针对iserver容器\n"),t("ul",[t("li",[s._v("路径映射的方式可以用来发布文件型GIS数据，如文件型工作空间、MBTiles瓦片包等。")]),s._v(" "),t("li",[s._v("对于存储在数据库中的GIS数据，如数据库型工作空间、MongoDB瓦片等，则无需此映射。建议将数据库单独部署，例如部署在宿主机上或其他机器上，并使所有iServer都可以访问该数据库。")])])]),s._v(" "),t("li",[s._v("文件型工作空间不能直接另存为数据库型的工作空间\n"),t("ul",[t("li",[s._v("存入的相当于本地文件的索引，只能在本地数据库中正常发布服务。")]),s._v(" "),t("li",[s._v("发布到其他服务器上的服务，数据源会缺失")])])])]),s._v(" "),t("h2",{attrs:{id:"六、整合配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、整合配置文件"}},[s._v("#")]),s._v(" 六、整合配置文件")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("把所有配置文件都放置在一个主文件夹下，方便配置文件的挂载，方便配置。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("gis-config\n├── planCheck\n├── publishMapTemplate\n│   └── template\n└── tzStatistics\n    └── dicFile\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])])]),s._v(" "),t("h2",{attrs:{id:"七、整合数据文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#七、整合数据文件"}},[s._v("#")]),s._v(" 七、整合数据文件")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("将所有数据文件都放置在一个主文件夹下，方便数据文件的挂载，方便排查问题")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("webApi-data\n├── loadData\n├── log\n│   ├── gis-server-bizservice\n│   └── gis-server-web\n├── planCheckReport\n├── publicMapData\n│   ├── publishMapDatasource\n│   └── publishMapServerDataDir\n│   \n├── tzStatisticsResult\n└── uploadItemData\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])])])]),s._v(" "),t("h2",{attrs:{id:"八、新增dockerfile文件构建镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#八、新增dockerfile文件构建镜像"}},[s._v("#")]),s._v(" 八、新增Dockerfile文件构建镜像")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 基础镜像使用supermap-iobject镜像")]),s._v("\nFROM "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.31")]),s._v(".36.236/middleware/dist-jdk18:latest\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 维护人员")]),s._v("\nMAINTAINER yufh@dist.com.cn\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 工作目录")]),s._v("\nWORKDIR webApi\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将jar包,配置文件夹,启动文件添加到容器中")]),s._v("\nADD gis-server-web.jar /webApi/gis-server-web.jar\nADD gis-server-service-land.jar /webApi/gis-server-service-land.jar\nADD gis-config /webApi/gis-config\nADD gis-config/startUp.sh /webApi/startUp.sh\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修复java.security.InvalidKeyException: Illegal keyW size错误")]),s._v("\nRUN "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/#crypto.policy=unlimited/crypto.policy=unlimited/g'")]),s._v(" /usr/local/jdk1.8.0_152/jre/lib/security/java.security\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动文件授权")]),s._v("\nRUN "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x startUp.sh\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动文件")]),s._v("\nENTRYPOINT "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./startUp.sh"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("ul",[t("li",[s._v("采用一个容器内运行两个jar包的方式。")])]),s._v(" "),t("h2",{attrs:{id:"九、容器化部署步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#九、容器化部署步骤"}},[s._v("#")]),s._v(" 九、容器化部署步骤")]),s._v(" "),t("blockquote",[t("p",[s._v("spring-alibaba-cloud + nacos")])]),s._v(" "),t("p",[s._v("1、启动nacos")]),s._v(" "),t("ul",[t("li",[s._v("新建命名空间")]),s._v(" "),t("li",[s._v("在新建的命名空间内导入示例配置")]),s._v(" "),t("li",[s._v("修改相应的配置信息")])]),s._v(" "),t("p",[s._v("2、下拉项目")]),s._v(" "),t("ul",[t("li",[s._v("修改land和web模块的"),t("code",[s._v("bootstrap.yml")]),s._v(" nacos配置信息")])]),s._v(" "),t("p",[s._v("3、gitlab代码库里添加Jenkins角色")]),s._v(" "),t("p",[s._v("4、jenkins新建流水线项目")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("添加Pipeline脚本")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("//脚本示例\npipeline "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    agent "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            label "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Slave179'")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    environment "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         def version "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" script: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mvn help:evaluate -Dexpression=project.version -q -DforceStdout'")]),s._v(", returnStdout: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n        //  def version "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1.0.0-SNAPSHOT'")]),s._v("\n         def artifactId "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'gis-service'")]),s._v("\n         def "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("projectNameSpace")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nr_sh2019gh144'")]),s._v("\n         def "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("harborIp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'172.31.36.236'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    stages"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        stage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pull'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            steps"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'gis-docker-20201105'")]),s._v(", credentialsId: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jenkins-gitlab'")]),s._v(", url: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ssh://git@elbgit-1200450932.cn-northwest-1.elb.amazonaws.com.cn:5337/xdata/sh2019gh144/back-end/gis-server-root.git'")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        stage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'compiler'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            steps"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n                "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${version}")]),s._v('"')]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("'\n                mvn clean package -DskipTests -P pg-prod\n                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("'\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        stage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'build'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            steps"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("'\n                "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" ./gis-server-web/Dockerfile gis-server-web/target\n                "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" ./gis-server-service-land/target/gis-server-service-land.jar gis-server-web/target\n                "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" ./gis-config gis-server-web/target  \n                docker build -t "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${harborIp}")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${projectNameSpace}")]),s._v("/b_"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${artifactId}")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${version}")]),s._v(" gis-server-web/target\n                docker build -t "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${harborIp}")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${projectNameSpace}")]),s._v("/b_"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${artifactId}")]),s._v(":latest gis-server-web/target\n                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("'\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t\tstage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'push'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            steps"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("'\n                docker push "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${harborIp}")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${projectNameSpace}")]),s._v("/b_"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${artifactId}")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${version}")]),s._v("\n                docker push "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${harborIp}")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${projectNameSpace}")]),s._v("/b_"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${artifactId}")]),s._v(":latest\n                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("'\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        stage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'update'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            steps"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("'\n                "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":/usr/local/rancher-v2.3.2\n                rancher kubectl --namespace"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("backend-nr apply -f /yaml/NR-yaml/nr-gis-service-ts.yaml "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" null "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n                rancher kubectl replace --force -f /yaml/NR-yaml/nr-dme-cloud-ts.yaml "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" null\n                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("'\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br")])]),t("p",[s._v("修改内容：")]),s._v(" "),t("ul",[t("li",[s._v("项目名称，分组")]),s._v(" "),t("li",[s._v("harbor仓库地址")]),s._v(" "),t("li",[s._v("项目仓库地址，分支")]),s._v(" "),t("li",[s._v("编译命令，分支")])])])]),s._v(" "),t("p",[s._v("5、查看harbor仓库中构建的镜像")]),s._v(" "),t("ul",[t("li",[s._v("复制下载镜像命令")])]),s._v(" "),t("p",[s._v("6、在Rancher里部署服务")]),s._v(" "),t("ul",[t("li",[s._v("填写项目信息")]),s._v(" "),t("li",[s._v("粘贴下载镜像命令")]),s._v(" "),t("li",[s._v("进行端口映射")]),s._v(" "),t("li",[s._v("进行supermap-iobject基础镜像的基础环境目录映射\n"),t("ul",[t("li",[s._v("主机路径: supermap-iobjectsjava的安装路径")]),s._v(" "),t("li",[s._v("容器路径: /usr/local/iobject")])])]),s._v(" "),t("li",[s._v("进行配置文件的路径映射\n"),t("ul",[t("li",[s._v("主机路径: /opt/webApi/gis-config")]),s._v(" "),t("li",[s._v("容器路径: /webApi/gis-config")])])]),s._v(" "),t("li",[s._v("进行数据文件的路径映射\n"),t("ul",[t("li",[s._v("主机路径: /opt/webApi-data")]),s._v(" "),t("li",[s._v("容器路径: /webApi-data")])])])]),s._v(" "),t("p",[s._v("7、启动服务")])])}),[],!1,null,null,null);a.default=e.exports}}]);