# 毒鸡汤 Node.js Serverless 版

毒鸡汤网页 nows.fun 真是简洁又有趣，只是用的 php+mysql 部署有些麻烦。

我用 Node.js 读 txt 代替，放到阿里云函数计算，无需购买服务器，按量计费。

静态资源放 OSS，绑定域名，申请免费 HTTPS 证书，很快就部署好了。

而且阿里云函数计算每月前 100 万次调用免费。

对于简单小项目，Serverless 真是方便又便宜。

部署完成后： 最毒鸡汤 https://3www.top


----

## 分支 nows-html-js-version 

可以把数据直接放网页里，用js随机读取，这样连node.js环境都不用了，

直接返回一个html网页，js读取数据，也不用刷新网页，速度更快了，体验更好。


----

## 还可以 Serverless 也不用

直接使用阿里云OSS托管index.html页面也行。

OSS配置静态网站托管 https://help.aliyun.com/document_detail/31872.html
