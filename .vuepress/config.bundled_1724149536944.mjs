// .vuepress/config.ts
import { defineConfig } from "vuepress/config";

// .vuepress/navbar.ts
var navbar_default = [
  {
    text: "3D\u7F8E\u672F",
    link: "/3D\u7F8E\u672F/",
    items: [
      {
        text: "\u5EFA\u6A21",
        link: "/3D\u7F8E\u672F/#\u5EFA\u6A21"
      },
      {
        text: "UV",
        link: "/3D\u7F8E\u672F/#UV"
      },
      {
        text: "\u7ED1\u5B9A",
        link: "/3D\u7F8E\u672F/#\u7ED1\u5B9A"
      },
      {
        text: "\u52A8\u753B",
        link: "/3D\u7F8E\u672F/#\u52A8\u753B"
      },
      {
        text: "\u6E32\u67D3",
        link: "/3D\u7F8E\u672F/#\u6E32\u67D3"
      }
    ]
  },
  {
    text: "\u6E38\u620F\u5F15\u64CE",
    link: "/\u6E38\u620F\u5F15\u64CE/"
  },
  {
    text: "\u63D2\u4EF6\u5DE5\u5177",
    link: "/\u63D2\u4EF6\u5DE5\u5177/"
  },
  {
    text: "\u7F8E\u672F\u8D44\u4EA7\u5E93",
    link: "/\u7F8E\u672F\u8D44\u4EA7\u5E93/"
  },
  {
    text: "\u77E5\u8BC6\u767E\u79D1",
    link: "/\u77E5\u8BC6\u767E\u79D1/",
    items: [
      {
        text: "\u4E09\u5927\u6784\u6210",
        link: "/\u77E5\u8BC6\u767E\u79D1/#\u4E09\u5927\u6784\u6210"
      },
      {
        text: "\u8BBE\u8BA1\u77E5\u8BC6",
        link: "/\u77E5\u8BC6\u767E\u79D1/#\u8BBE\u8BA1\u77E5\u8BC6"
      },
      {
        text: "\u6E38\u620F\u8BBE\u8BA1",
        link: "/\u77E5\u8BC6\u767E\u79D1/#\u6E38\u620F\u8BBE\u8BA1"
      }
    ]
  },
  {
    text: "\u72EC\u7ACB\u6E38\u620F",
    link: "/\u72EC\u7ACB\u6E38\u620F/"
  },
  {
    text: "\u72EC\u7ACB\u7535\u5F71",
    link: "/\u72EC\u7ACB\u7535\u5F71/"
  },
  {
    text: "\u6F2B\u753B",
    link: "/\u6F2B\u753B/"
  },
  {
    text: "\u4F5C\u8005",
    link: "/\u4F5C\u8005/"
  }
];

// .vuepress/sidebars/codeNavSideBar.ts
var codeNavSideBar_default = [
  "",
  {
    title: "\u661F\u7403\u8D44\u6599",
    collapsable: true,
    children: [
      "\u661F\u7403\u8D44\u6599/\u5B66\u4E60\u8D44\u6E90",
      "\u661F\u7403\u8D44\u6599/\u4E13\u5C5E\u5B66\u4E60\u8DEF\u7EBF",
      "\u661F\u7403\u8D44\u6599/\u4E13\u5C5E\u4EA4\u6D41\u7FA4",
      "\u661F\u7403\u8D44\u6599/\u9C7C\u76AE\u7684\u5B66\u4E60\u7B14\u8BB0",
      "\u661F\u7403\u8D44\u6599/\u9C7C\u76AE\u7684\u6253\u5DE5\u65E5\u8BB0"
    ]
  },
  {
    title: "\u661F\u7403\u9879\u76EE",
    collapsable: true,
    children: [
      "/\u9879\u76EE\u5B9E\u6218/AI \u7B54\u9898\u5E94\u7528\u5E73\u53F0",
      "/\u9879\u76EE\u5B9E\u6218/\u4EE3\u7801\u751F\u6210\u5668\u5171\u4EAB\u5E73\u53F0",
      "/\u9879\u76EE\u5B9E\u6218/\u624B\u5199 RPC \u6846\u67B6",
      "/\u9879\u76EE\u5B9E\u6218/OJ \u5224\u9898\u7CFB\u7EDF",
      "/\u9879\u76EE\u5B9E\u6218/\u667A\u80FD BI \u5E73\u53F0",
      "/\u9879\u76EE\u5B9E\u6218/API \u5F00\u653E\u5E73\u53F0",
      "/\u9879\u76EE\u5B9E\u6218/\u805A\u5408\u641C\u7D22\u5E73\u53F0",
      "/\u9879\u76EE\u5B9E\u6218/\u7528\u6237\u4E2D\u5FC3\u9879\u76EE",
      "/\u9879\u76EE\u5B9E\u6218/\u4F19\u4F34\u5339\u914D\u7CFB\u7EDF",
      "/\u9879\u76EE\u5B9E\u6218/Java \u540E\u7AEF\u4E07\u7528\u9879\u76EE\u6A21\u677F",
      "/\u9879\u76EE\u5B9E\u6218/\u524D\u7AEF\u4E07\u7528\u9879\u76EE\u6A21\u677F",
      "/\u9879\u76EE\u5B9E\u6218/\u9C7C\u76AE\u9879\u76EE\u5B66\u4E60\u5EFA\u8BAE\uFF08\u5FC5\u8BFB\uFF09",
      "\u661F\u7403\u9879\u76EE/\u9879\u76EE\u8BAD\u7EC3\u8425",
      "\u661F\u7403\u9879\u76EE/Web \u7EC8\u7AEF\u9879\u76EE",
      "\u661F\u7403\u9879\u76EE/\u7F16\u7A0B\u5BFC\u822A\u5956\u52B1\u7CFB\u7EDF",
      "\u661F\u7403\u9879\u76EE/SQL \u751F\u6210\u5668\u9879\u76EE",
      "\u661F\u7403\u9879\u76EE/\u5DE5\u4F5C\u8BB0\u5F55\u5206\u6790\u5DE5\u5177"
    ]
  },
  {
    title: "\u661F\u7403\u76F4\u64AD",
    collapsable: true,
    children: ["\u661F\u7403\u76F4\u64AD/", "\u661F\u7403\u76F4\u64AD/\u5F80\u671F\u76F4\u64AD", "\u661F\u7403\u76F4\u64AD/\u5609\u5BBE\u5206\u4EAB"]
  },
  {
    title: "\u771F\u5B9E\u8BC4\u4EF7",
    collapsable: true,
    children: ["\u771F\u5B9E\u8BC4\u4EF7/"]
  },
  {
    title: "\u661F\u7403\u6545\u4E8B",
    collapsable: true,
    children: ["\u661F\u7403\u6545\u4E8B/"]
  },
  {
    title: "\u5173\u4E8E\u6211\u4EEC",
    collapsable: true,
    children: ["\u5173\u4E8E\u6211\u4EEC/", "\u5173\u4E8E\u6211\u4EEC/\u4E2A\u4EBA\u7ECF\u5386"]
  },
  "\u661F\u7403\u5E74\u5EA6\u603B\u7ED3",
  "\u52A0\u5165\u7F16\u7A0B\u5BFC\u822A"
];

// .vuepress/sidebars/knowledgeSideBar.ts
var knowledgeSideBar_default = [
  "",
  {
    title: "\u77E5\u8BC6\u788E\u7247",
    collapsable: false,
    children: [
      "4 \u79CD\u65B9\u6CD5\uFF0C\u5FEB\u901F\u521D\u59CB\u5316 Java \u9879\u76EE.md",
      "\u4F7F\u7528\u540E\u7AEF\u4EE3\u7801\u751F\u6210\u5668\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387.md",
      "\u524D\u7AEF\u5FC5\u5B66\u7684\u5F00\u53D1\u6846\u67B6\uFF0CAnt Design Pro.md",
      "\u540E\u7AEF\u5982\u4F55\u7F16\u5199\u5355\u5143\u6D4B\u8BD5\uFF1F .md",
      "\u540E\u7AEF\u9879\u76EE\u7ECF\u5178\u5206\u5C42\u67B6\u6784\u4ECB\u7ECD.md",
      "\u5982\u4F55\u9AD8\u6548\u6D4B\u8BD5\u63A5\u53E3\uFF1F\u81EA\u52A8\u751F\u6210\u63A5\u53E3\u6587\u6863.md",
      "\u5F00\u53D1\u4F01\u4E1A\u5FAE\u4FE1\u7FA4\u673A\u5668\u4EBA\uFF0C\u5B9E\u73B0\u5B9A\u65F6\u63D0\u9192.md",
      "\u3010\u8BBE\u8BA1\u6A21\u5F0F\u3011\u88C5\u9970\u8005\u6A21\u5F0F\uFF0C\u53CA\u5176\u5728JDK\u6E90\u7801\u4E2D\u7684\u5E94\u7528.md",
      "\u7528\u56DB\u79CD\u9501\u5B9E\u73B0\u52A0\u5165\u961F\u4F0D\u529F\u80FD(\u4F19\u4F34\u5339\u914D\u7CFB\u7EDF).md",
      "\u7528@Validated\u6CE8\u89E3\u5B9E\u73B0\u975E\u7A7A\u6821\u9A8C.md",
      "\u4F7F\u7528\u7B2C\u4E09\u65B9\u670D\u52A1(\u5B9D\u5854)\u5FEB\u901F\u90E8\u7F72\u9879\u76EE.md",
      "RESTful \u63A5\u53E3\u5B9E\u73B0\u4E0E\u6D4B\u8BD5( Spring Boot ).md",
      "\u5FEB\u901F\u5B66\u4F1A\u4E3A\u5F00\u6E90\u9879\u76EE\u505A\u8D21\u732E.md",
      "\u6574\u5408Spring JDBC\u64CD\u4F5C\u6570\u636E\u5E93.md",
      "Maven \u4E2D\u592E\u4ED3\u5E93\u53D1\u5305\u6D41\u7A0B.md",
      "Nacos \u914D\u7F6E\u4E2D\u5FC3\u642D\u5EFA.md",
      "Bean \u62F7\u8D1D\u4E4B MapStruct.md",
      "\u5982\u4F55\u5FEB\u901F\u5FFD\u7565 Git \u6587\u4EF6\u63D0\u4EA4\uFF1F.md",
      "EasyExcel \u5BFC\u51FA\u6587\u4EF6.md",
      "\u5982\u4F55\u5904\u7406 CompletableFuture \u4E2D\u7684\u4E24\u79CD\u5F02\u5E38(\u667A\u80FDBI\u9879\u76EE).md",
      "\u57FA\u4E8E Session \u5B9E\u73B0\u77ED\u4FE1\u767B\u5F55.md",
      "Synchronized \u5173\u952E\u5B57\u8BE6\u89E3.md",
      "Redission \u89E3\u9501\u5F02\u5E38\u89E3\u51B3\u65B9\u6848.md",
      "\u5B9E\u73B0\u4E3B\u9898\u6362\u80A4( CSS \u53D8\u91CF + \u7C7B\u540D\u5207\u6362).md",
      "SpringBoot \u6574\u5408 Minio\u5168\u6D41\u7A0B\uFF08\u4ECE\u5B89\u88C5 Minio \u5230\u5E94\u7528\uFF09.md",
      "\u3010Redis\u5E94\u7528\u3011UV\u7EDF\u8BA1.md",
      "\u300A\u8D2F\u7A7F\u8BBE\u8BA1\u6A21\u5F0F\u300B\u7B2C\u4E09\u65B9\u767B\u5F55\u5B9E\u8DF5[\u9644\u524D\u540E\u7AEF\u5B8C\u6574\u8FC7\u7A0B\u53CA\u6D4B\u8BD5].md",
      "Websocket.+ Spring-SseEmitter3 \u5B9E\u73B0\u8BAF\u98DE\u661F\u706BJava\u5BA2\u6237\u7AEF.md",
      "\u7528\u5E03\u9686\u8FC7\u6EE4\u5668\u5B9E\u73B0\u68C0\u67E5\u7528\u6237\u540D\u662F\u5426\u5B58\u5728(\u7528\u6237\u6CE8\u518C).md",
      "SpringSecurity \u6574\u5408 Oauth2.md",
      "\u524D\u7AEF\u521D\u59CB\u5316 Ant Design Pro \u7B14\u8BB0.md",
      "LiteFlow \u7F16\u6392\u5F0F\u7F16\u7A0B\u7B80\u5355\u4ECB\u7ECD.md",
      "\u57FA\u4E8E Redis \u5B9E\u73B0\u77ED\u4FE1\u767B\u5F55.md",
      "MySQL \u4E00\u68F5 B + \u6811\u53EF\u4EE5\u5B58\u591A\u5C11\u6761\u6570\u636E\uFF1F.md",
      "SpringBoot \u6574\u5408 ELK \u5B9E\u73B0\u65E5\u5FD7\u91C7\u96C6\u4E0E\u76D1\u63A7.md",
      "\u57FA\u4E8E\u81EA\u5B9A\u4E49\u6CE8\u89E3\u7684 Redisson \u5206\u5E03\u5F0F\u9501\u5B9E\u73B0.md",
      "\u73A9\u8F6C\u5F02\u6B65\u7F16\u7A0B\u5229\u5668 CompletableFuture.md",
      "\u901A\u8FC7 Windows \u811A\u672C\u6267\u884C\u6253\u5305\u64CD\u4F5C.md",
      "\u963F\u91CC\u4E91\u5BF9\u8C61\u5B58\u50A8 OSS.md",
      "\u540E\u7AEF Spring Boot \u4E07\u7528\u6A21\u677F\u4F7F\u7528.md",
      "\u4F7F\u7528 canal \u5B9E\u73B0\u589E\u91CF\u8BA2\u9605\u548C\u6D88\u8D39.md",
      "SpringBoot + Quartz \u7B80\u6613\u5B9A\u65F6\u4EFB\u52A1.md",
      "String \u7684 intern() \u65B9\u6CD5.md",
      "MySQL \u5B57\u7B26\u4E32\u65E5\u671F\u683C\u5F0F\u8F6C\u6362.md",
      "fail-fast \u673A\u5236\u662F\u4EC0\u4E48\uFF1F.md",
      "\u5341\u79CD SQL \u7684\u5199\u6CD5.md",
      "MyBatis \u6574\u5408\u591A\u6570\u636E\u6E90.md",
      "1\u79D2\u5C06\u672C\u5730SpringBoot\u9879\u76EEjar\u5305\u90E8\u7F72\u5230Linux\u73AF\u5883.md",
      "DDD \u662F\u4EC0\u4E48\uFF1F.md",
      "Oracle\u5230MySQL\u51FD\u6570\u66FF\u6362\u65B9\u6848\u6C47\u603B.md",
      "Springboot \u5F15\u5165 Nacos ( Windows \u7248).md",
      "\u5229\u7528\u5C40\u57DF\u7F51\u642D\u5EFA\u865A\u62DF\u673A\u5B9E\u73B0\u8BBF\u95EE\u9879\u76EE.md",
      "\u6D45\u8C08 cookie \u548C session.md",
      "\u7528 QQ \u90AE\u7BB1\u5B9E\u73B0\u9A8C\u8BC1\u7801\u529F\u80FD.md",
      "Redis \u5B9E\u73B0\u6587\u7AE0\u70B9\u8D5E\u529F\u80FD(\u9644\u5E26\u524D\u540E\u7AEF\u4EE3\u7801\u3001\u6570\u636E\u5E93).md",
      "\u963F\u91CC\u4E91\u77ED\u4FE1\u670D\u52A1\u5B9E\u73B0\u624B\u673A\u9A8C\u8BC1\u7801.md",
      "\u3010Ajax\u3011\u5F02\u6B65\u901A\u4FE1.md",
      "\u3010\u8BBE\u8BA1\u6A21\u5F0F\u3011\u4E03\u5927\u8BBE\u8BA1\u539F\u5219.md",
      "\u6587\u7AE0\u8BC4\u8BBA\u529F\u80FD\u524D\u540E\u7AEF\u5B9E\u73B0\u65B9\u6848\u603B\u7ED3.md",
      "\u3010\u7248\u672C\u63A7\u5236\u3011Git\u5FEB\u901F\u4E0A\u624B.md",
      "\u3010Java\u57FA\u7840\u3011\u6D88\u706D\u9B54\u6CD5\u503C-\u5E38\u91CF&\u679A\u4E3E\u8BE6\u8FF0.md",
      "MySQL \u7684 Char \u5E76\u4E0D\u4E00\u5B9A\u662F\u5B9A\u957F.md",
      "TextCNN \u6587\u672C\u5206\u7C7B\u6A21\u578B\u5728\u6587\u7AE0\u8BC4\u8BBA\u5BA1\u6838\u4E2D\u7684\u5B9E\u73B0\u4E0E\u90E8\u7F72.md",
      "\u7406\u89E3 IO \u591A\u8DEF\u590D\u7528.md",
      "ElasticSearch \u57FA\u7840\u6982\u5FF5\u4E0E\u5165\u95E8\u4F7F\u7528.md",
      "\u7406\u89E3\u8FDB\u7A0B\uFF0C\u7EBF\u7A0B\uFF0C\u534F\u7A0B.md",
      "\u7406\u89E3\u539F\u7801\u3001\u53CD\u7801\u3001\u8865\u7801.md",
      "\u5B9A\u4E49API\u5E76\u751F\u6210\u4EE3\u7801\uFF08 Go \u5FAE\u670D\u52A1\u6846\u67B6 Kratos \uFF09.md",
      "\u4F7F\u7528\u5BF9\u8C61\u5B58\u50A8\u5B9E\u73B0\u6587\u4EF6\u4E0A\u4F20\u4E0B\u8F7D.md",
      "MarkDown \u6587\u672C\u89E3\u6790\u6210 HTML \u5E76\u751F\u6210\u5927\u7EB2.md",
      "10 \u5206\u949F\u5FEB\u901F\u641E\u61C2 Lambda \u8868\u8FBE\u5F0F.md",
      "SpringBoot \u9879\u76EE\u4E2D\u5FEB\u901F\u5F15\u5165 Rabbit MQ \u901A\u7528\u505A\u6CD5.md",
      "OJ \u7ADE\u8D5B\u6392\u884C\u699C\u7EDF\u8BA1\u903B\u8F91\u8BBE\u8BA1\u4E0E\u4EE3\u7801\u5B9E\u73B0.md",
      "\u591A\u8BED\u8A00\u4EE3\u7801\u6C99\u7BB1\u7684\u8BBE\u8BA1\u4E0E\u5B9E\u73B0(OJ \u5728\u7EBF\u5224\u9898\u7CFB\u7EDF).md",
      "Java 8 \u65B0\u7279\u6027\uFF1AStream \u6D41\u5FEB\u901F\u5165\u95E8.md",
      "\u4F7F\u7528 NVM \u5FEB\u6377\u7BA1\u7406 Node \u7248\u672C\uFF08Win\u7248\uFF09.md",
      "Vue3 \u5FEB\u901F\u5B9E\u73B0\u6587\u4EF6\u4E0A\u4F20 OSS.md",
      "\u5982\u4F55\u89E3\u51B3\u7F13\u5B58\u51FB\u7A7F\uFF1F.md",
      "RabbitMQ\u4E00\u6B7B\u4FE1\u961F\u5217\u4ECB\u7ECD\u548C\u5E94\u7528.md",
      "\u8BE6\u89E3 SpringBoot \u81EA\u5B9A\u4E49 Starter.md",
      "\u4ECE\u805A\u5408\u641C\u7D22\u9879\u76EE\u89C6\u89D2\u5165\u95E8 ElasticSearch.md",
      "\u5E38\u7528\u7684\u6027\u80FD\u4F18\u5316\u65B9\u6CD5.md",
      "\u5E38\u7528\u7684\u5B58\u50A8\u4F18\u5316\u65B9\u6CD5.md",
      "Java \u5B9E\u73B0 GitHub \u7B2C\u4E09\u65B9\u767B\u5F55\u8BE6\u89E3.md",
      "\u4F19\u4F34\u5339\u914D\u5F15\u5165 GEO \u5B9E\u73B0\u641C\u7D22\u9644\u8FD1\u7528\u6237.md",
      "\u8BBE\u8BA1\u6A21\u5F0F\u5B9E\u8DF5\uFF08OJ\u5224\u9898\u548C\u805A\u5408\u641C\u7D22).md",
      "\u6A21\u677F\u5F15\u64CE-Thymeleaf\u4E0EFreemarker.md",
      "\u6D77\u91CF\u6570\u636E\u573A\u666F\u9762\u8BD5\u9898\uFF1A\u51FA\u73B0\u9891\u7387\u6700\u9AD8\u7684 100 \u4E2A\u8BCD.md",
      "\u6DF1\u5165\u4E86\u89E3\u8FDB\u7A0B\u548C\u7EBF\u7A0B\uFF1A\u6982\u5FF5\u3001\u533A\u522B\u548C\u4F18\u5316.md",
      "WebSocket \u524D\u540E\u7AEF\u8054\u8C03\u4F7F\u7528.md",
      "\u5E76\u53D1\u95EE\u9898\u7684\u4E09\u5927\u6839\u6E90\u662F\u4EC0\u4E48\uFF1F.md",
      "\u57FA\u4E8E GA \u9057\u4F20\u7B97\u6CD5\u7684\u667A\u80FD\u7EC4\u9898\u6A21\u5757\u7684\u8BBE\u8BA1\u4E0E\u5E94\u7528.md",
      "\u4F7F\u7528 AOP+\u81EA\u5B9A\u4E49\u6CE8\u89E3\u5B9E\u73B0\u65E5\u5FD7\u6253\u5370.md",
      "Hexo+Github+Netlify\u535A\u5BA2\u642D\u5EFA\u6559\u7A0B.md",
      "\u4EC0\u4E48\u662F\u63A5\u53E3\u7684\u5E42\u7B49\u6027\uFF0C\u5982\u4F55\u4FDD\u8BC1\u63A5\u53E3\u7684\u5E42\u7B49\u6027\uFF1F.md",
      "DTO\u8F6CVO\u5DE5\u5177.md",
      "\u63D0\u793A\u5DE5\u7A0B\u8FDB\u9636\u6280\u5DE7\uFF08\u5927\u6A21\u578B\uFF09.md",
      "MinIO+Docker \u4ECE\u96F6\u642D\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5B58\u50A8\u670D\u52A1.md",
      "MySQL8 \u7EFF\u8272\u7248\u5B89\u88C5.md",
      "IDEA+Docker\u8FDC\u7A0B\u90E8\u7F72SpringBoot\u9879\u76EE.md",
      "\u51FD\u6570\u5F0F\u63A5\u53E3\u7684\u4F7F\u7528.md",
      "\u9762\u8BD5\u8D85\u9AD8\u9891\u8003\u70B9\uFF1AHashMap \u6E90\u7801\u9010\u884C\u89E3\u6790.md",
      "MySQL\u57FA\u7840\u77E5\u8BC6\uFF1ADDL\u3001DML\u3001DQL\u3001DCL\u53CATPL\u7684\u4F7F\u7528.md",
      "SpringBoot\u901A\u8FC7\u81EA\u5B9A\u4E49\u6CE8\u89E3\u5B9E\u73B0\u591A\u6570\u636E\u6E90.md",
      "IDEA \u540C\u65F6\u5173\u8054 GitHub \u548C Gitee \u8FDC\u7A0B\u4ED3\u5E93.md",
      "\u7F13\u5B58\u7A7F\u900F\u3001\u7F13\u5B58\u51FB\u7A7F\u3001\u7F13\u5B58\u96EA\u5D29\u7684\u573A\u666F\u4EE5\u53CA\u89E3\u51B3\u65B9\u6CD5.md",
      "\u72B6\u6001\u673A\u6982\u5FF5\u4EE5\u53CA\u4F7F\u7528.md"
    ]
  }
];

// .vuepress/sidebars/roadmapSideBar.ts
var roadmapSideBar_default = [
  "",
  {
    title: "\u5B66\u4E60\u8DEF\u7EBF",
    collapsable: false,
    children: [
      "Java\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "\u524D\u7AEF\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "C++\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "Python\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "\u6570\u636E\u7ED3\u6784\u548C\u7B97\u6CD5\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "SQL\u514D\u8D39\u5B9E\u6218\u81EA\u5B66\u7F51\u7AD9 by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "\u8BA1\u7B97\u673A\u57FA\u7840\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "Git&GitHub\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "\u8BBE\u8BA1\u6A21\u5F0F\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "Linux\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md"
    ]
  }
];

// .vuepress/sidebars/projectSideBar.ts
var projectSideBar_default = [
  "",
  {
    title: "\u9879\u76EE\u5B9E\u6218",
    collapsable: false,
    children: [
      "\u9C7C\u76AE\u9879\u76EE\u5B66\u4E60\u5EFA\u8BAE\uFF08\u5FC5\u8BFB\uFF09.md",
      "AI \u7B54\u9898\u5E94\u7528\u5E73\u53F0.md",
      "\u4EE3\u7801\u751F\u6210\u5668\u5171\u4EAB\u5E73\u53F0.md",
      "\u624B\u5199 RPC \u6846\u67B6.md",
      "OJ \u5224\u9898\u7CFB\u7EDF.md",
      "\u667A\u80FD BI \u5E73\u53F0.md",
      "\u805A\u5408\u641C\u7D22\u5E73\u53F0.md",
      "API \u5F00\u653E\u5E73\u53F0.md",
      "\u4F19\u4F34\u5339\u914D\u7CFB\u7EDF.md",
      "\u7528\u6237\u4E2D\u5FC3\u9879\u76EE.md",
      "Java \u540E\u7AEF\u4E07\u7528\u9879\u76EE\u6A21\u677F.md",
      "\u524D\u7AEF\u4E07\u7528\u9879\u76EE\u6A21\u677F.md"
    ]
  }
];

// .vuepress/sidebars/productSideBar.ts
var productSideBar_default = [
  "",
  {
    title: "\u7F16\u7A0B\u5B66\u4E60",
    collapsable: false,
    children: [
      "\u540E\u7AEF\u7A81\u51FB - \u72C2\u98D9\u540E\u7AEF\u8BAD\u7EC3\u8425.md",
      "\u524D\u7AEF\u7A81\u51FB - \u524D\u7AEF\u9762\u8BD5\u8BAD\u7EC3\u8425.md",
      "\u8003\u7814\u966A\u8DD1 - \u7F16\u7A0B\u5BFC\u822A\u8BA1\u72D7\u4E0A\u5CB8.md"
    ]
  },
  {
    title: "\u5B9E\u7528\u5DE5\u5177",
    collapsable: false,
    children: [
      "\u6C42\u804C - \u5E2E\u4F60\u5199\u597D\u7B80\u5386\u7684\u795E\u5668.md",
      "\u4EA7\u54C1/\u9C7C\u806A\u660E/\u5DE5\u5177 - \u65E0\u95E8\u69DB AI \u5BF9\u8BDD\u7ED8\u753B\u795E\u5668",
      "\u4EA7\u54C1/\u4EE3\u7801\u5C0F\u6284/\u5DE5\u5177 - \u7B80\u5355\u6613\u7528\u7684\u4EE3\u7801\u5206\u4EAB\u795E\u5668",
      "\u4EA7\u54C1/\u526A\u5207\u677F\u52A9\u624B/\u5DE5\u5177 - \u9AD8\u989C\u503C\u7684\u526A\u5207\u677F\u52A9\u624B"
    ]
  }
];

// .vuepress/sidebars/selfStudySideBar.ts
var selfStudySideBar_default = [
  "",
  {
    title: "\u5927\u5B66\u7ECF\u5386",
    collapsable: true,
    children: [
      "\u5927\u5B66\u7ECF\u5386/\u6211\u5B66\u8BA1\u7B97\u673A\u7684\u56DB\u5E74\uFF0C\u5171\u52C9\uFF01.md",
      "\u5927\u5B66\u7ECF\u5386/\u4ECE\u5927\u5B66\u5230\u79CB\u62DB\uFF0C\u6211\u5982\u4F55\u62FF\u4E0B\u817E\u8BAFoffer.md",
      "\u5927\u5B66\u7ECF\u5386/\u5927\u5B66\uFF0C\u6211\u662F\u600E\u4E48\u8FB9\u5B66\u7F16\u7A0B\u8FB9\u8D5A\u94B1\u7684\uFF1F.md",
      "\u5927\u5B66\u7ECF\u5386/\u6211\u5927\u4E09\u65F6\u505A\u7684\u7F9E\u803B\u9879\u76EE\uFF01.md",
      "\u5927\u5B66\u7ECF\u5386/\u9C7C\u76AE\u7684\u8003\u8BC1\u7ECF\u5386.md",
      "\u5927\u5B66\u7ECF\u5386/\u9C7C\u76AE\u5728\u5B9E\u9A8C\u5BA4\u51FA\u7248\u6559\u6750\u7684\u7ECF\u5386.md",
      "\u5927\u5B66\u7ECF\u5386/\u9C7C\u76AE\u7684\u6BD5\u4E1A\u8BBE\u8BA1\uFF0C\u65F6\u9694\u4E00\u5E74\uFF0C\u4ECD\u611F\u89C9\u5934\u79C3.md",
      "\u5927\u5B66\u7ECF\u5386/\u9C7C\u76AE\u7684\u6BD5\u4E1A\u611F\u53D7.md",
      "\u5927\u5B66\u7ECF\u5386/\u9C7C\u76AE\u843D\u6237\u4E0A\u6D77\u5FC3\u5F97.md"
    ]
  },
  {
    title: "\u6C42\u804C\u7ECF\u5386",
    collapsable: true,
    children: [
      "\u6C42\u804C\u7ECF\u5386/\u6211\u7684\u7B2C\u4E00\u4EFD\u5B9E\u4E60\uFF0C\u5750\u9AD8\u94C1\u4E0A\u73ED.md",
      "\u6C42\u804C\u7ECF\u5386/\u6211\u7684\u7B2C\u4E8C\u4EFD\u5B9E\u4E60\uFF0C\u5B57\u8282\u8DF3\u52A8.md",
      "\u6C42\u804C\u7ECF\u5386/\u4ED6\u4E13\u4E1A\u7B2C\u4E00\uFF0C\u5374\u627E\u4E0D\u5230\u5DE5\u4F5C.md",
      "\u6C42\u804C\u7ECF\u5386/\u9762\u8BD5\u963F\u91CC6\u6B21\uFF0C\u4ECD\u7136\u5931\u8D25\u7684\u7ECF\u5386.md"
    ]
  },
  {
    title: "\u804C\u573A\u5DE5\u4F5C",
    collapsable: true,
    children: [
      "\u804C\u573A\u5DE5\u4F5C/Java\u5F00\u53D1\u8005\u5DE5\u4F5C\u90FD\u505A\u4EC0\u4E48\uFF1F.md",
      "\u804C\u573A\u5DE5\u4F5C/\u6211\u4ECE\u5BFC\u5E08\u8EAB\u4E0A\u5B66\u5230\u4E86\u4EC0\u4E48\uFF1F.md",
      "\u804C\u573A\u5DE5\u4F5C/\u6211\u5728\u817E\u8BAF\u7684\u8BD5\u7528\u671F\u603B\u7ED3.md",
      "\u804C\u573A\u5DE5\u4F5C/\u6211\u5728\u817E\u8BAF\u548C\u5B57\u8282\u7684\u5DE5\u4F5C\u611F\u53D7.md",
      "\u804C\u573A\u5DE5\u4F5C/\u6211\u5347\u7EA7\u4E3A\u4E91\u5F00\u53D1\u9AD8\u7EA7\u5E03\u9053\u5E08\u5566.md",
      "\u804C\u573A\u5DE5\u4F5C/\u6211\u5165\u804C\u4E00\u5E74\u7684\u611F\u53D7.md",
      "\u804C\u573A\u5DE5\u4F5C/\u79BB\u5F00\u5B66\u6821\u540E\uFF0C\u6211\u624D\u660E\u767D.md",
      "\u804C\u573A\u5DE5\u4F5C/\u6211\u83B7\u5F97\u4E86\u817E\u8BAF\u5185\u90E8\u7ADE\u8D5B\u7B2C\u4E00\u540D\uFF01.md",
      "\u804C\u573A\u5DE5\u4F5C/\u9C7C\u76AE\u8FD9\u4E2A\u6708\u5C31\u5199\u4E86\u8FD9\u70B9\u513F\u4EE3\u7801\uFF1F.md",
      "\u804C\u573A\u5DE5\u4F5C/\u8FD9\u5468\u6CA1\u5199\u4EE3\u7801\uFF0C\u7ADF\u7136\u5728\u505A\u8FD9\u4EF6\u4E8B\uFF01.md",
      "\u804C\u573A\u5DE5\u4F5C/\u5DE5\u4F5C\u540E\uFF0C\u6211\u575A\u6301\u4E86\u591A\u5E74\u7684\u4E60\u60EF.md",
      "\u804C\u573A\u5DE5\u4F5C/\u8F6C\u884C\u5927\u6570\u636E1\u4E2A\u6708\uFF0C\u6211\u9EBB\u4E86\u3002\u3002\u3002.md",
      "\u804C\u573A\u5DE5\u4F5C/\u5927\u5382\u505A\u7A0B\u5E8F\u5458\u4E24\u5E74\u534A\uFF0C\u6211\u7EC8\u4E8E\u5B66\u4F1A\u4E86\u3002\u3002\u3002.md",
      "\u804C\u573A\u5DE5\u4F5C/\u518D\u89C1\u4E86\uFF0C\u817E\u8BAF\uFF01.md"
    ]
  },
  {
    title: "\u521B\u4F5C\u7ECF\u5386",
    collapsable: true,
    children: [
      "\u521B\u4F5C\u7ECF\u5386/\u6BD5\u4E1A\u8FD9\u5E74\uFF0C\u6211\u6210\u4E3A\u4E86\u4E00\u540DUP\u4E3B.md",
      "\u521B\u4F5C\u7ECF\u5386/\u6211\u4E5F\u62E5\u6709\u4E8610\u4E07\u7C89\u4E1D.md",
      "\u521B\u4F5C\u7ECF\u5386/10w\u7C89\u4E1D\uFF0C\u6211\u5374\u54ED\u4E86.md",
      "\u521B\u4F5C\u7ECF\u5386/\u9C7C\u76AE\u5DE5\u4F5C+\u521B\u4F5C\u7684\u65E5\u5E38\u751F\u6D3B.md",
      "\u521B\u4F5C\u7ECF\u5386/\u4E8C\u5341\u56DB.md",
      "\u521B\u4F5C\u7ECF\u5386/\u4ECA\u5929\uFF0C\u6211\u8981\u641E\u4EF6\u5927\u4E8B\uFF01.md",
      "\u521B\u4F5C\u7ECF\u5386/\u6211\u4EEC\u641E\u4E86\u4EF6\u5927\u4E8B\uFF01.md",
      "\u521B\u4F5C\u7ECF\u5386/\u4E00\u6B21\u5F88\u610F\u5916\u7684\u7F51\u7AD9\u6545\u969C\u7ECF\u5386\u3002.md",
      "\u521B\u4F5C\u7ECF\u5386/\u4E00\u6B21\u9762\u5411UP\u4E3B\u7684\u56E2\u5EFA.md",
      "\u521B\u4F5C\u7ECF\u5386/\u201C\u8001\u5E08\uFF0C\u6211\u8C22\u8C22\u4F60\uFF01\u201D.md",
      "\u521B\u4F5C\u7ECF\u5386/\u6211\u88AB\u6700\u6068\u7684\u516C\u53F8\u91C7\u8BBF\u4E86\uFF01.md",
      "\u521B\u4F5C\u7ECF\u5386/\u5E2E\u963F\u91CC\u4E91\u62C9\u65B07000\u4EBA\uFF0C\u6211\u8F93\u7684\u5F88\u5F7B\u5E95\uFF01.md",
      "\u521B\u4F5C\u7ECF\u5386/\u7F51\u7AD9\u53C8\u88AB\u653B\u51FB\uFF0C\u6211\u5FC3\u6001\u5D29\u4E86.md",
      "\u521B\u4F5C\u7ECF\u5386/\u6765\u4E86\u6765\u4E86\uFF01.md"
    ]
  },
  {
    title: "\u521B\u4E1A\u7ECF\u5386",
    collapsable: true,
    children: [
      "\u521B\u4E1A\u7ECF\u5386/\u516C\u53F8\u592A\u7A33\u5B9A\u4E86\uFF01\u6211\u597D\u614C.md",
      "\u521B\u4E1A\u7ECF\u5386/\u521B\u4E1A\u4E00\u6708\u534A\uFF0C\u4E0D\u592A\u4E60\u60EF\u3002\u3002.md",
      "\u521B\u4E1A\u7ECF\u5386/\u6211\u4EEC\u516C\u53F8\u7684\u4F01\u4E1A\u6587\u5316\uFF01.md",
      "\u521B\u4E1A\u7ECF\u5386/\u6211\u4EEC\u516C\u53F8\u7684\u62DB\u4EBA\u65B9\u5F0F\uFF0C\u6709\u70B9\u4E0D\u4E00\u6837\uFF01.md",
      "\u521B\u4E1A\u7ECF\u5386/\u6211\u5728\u9C7C\u5382\u7684\u5B9E\u4E60\u751F\u6D3B.md",
      "\u521B\u4E1A\u7ECF\u5386/\u6211\u5F00\u4E1A\u4E86\uFF01.md",
      "\u521B\u4E1A\u7ECF\u5386/\u6CA1\u4E8B\u522B\u60F3\u4E0D\u5F00\u53BB\u521B\u4E1A\uFF01.md",
      "\u521B\u4E1A\u7ECF\u5386/\u7F8E\u597D\u7684\u5468\u672B\uFF0C\u53C8\u6539\u4E86\u4E00\u5929Bug\u3002\u3002.md",
      "\u521B\u4E1A\u7ECF\u5386/\u9762\u4E86\u4E2AJava\u5B9E\u4E60\u751F\uFF0C\u5C0F\u4F19\u5F88\u4F18\u79C0\uFF01.md"
    ]
  },
  {
    title: "\u751F\u6D3B\u65E5\u5E38",
    collapsable: true,
    children: [
      "\u751F\u6D3B\u65E5\u5E38/2022\uFF0C\u5927\u5BB6\u8FC7\u5F97\u600E\u4E48\u6837\u5462\uFF1F.md",
      "\u751F\u6D3B\u65E5\u5E38/\u4F11\u5047\u7ED3\u675F\uFF0C\u5B9A\u4E2A\u65B0\u76EE\u6807\uFF01.md",
      "\u751F\u6D3B\u65E5\u5E38/\u518D\u804A\u804A\u8FD9\u5468\u7684\u72B6\u6001.md",
      "\u751F\u6D3B\u65E5\u5E38/\u5927\u5BB6\u4FDD\u91CD\u554A\u2026.md",
      "\u751F\u6D3B\u65E5\u5E38/\u5BF9\u4E0D\u8D77\uFF0C\u6211\u4E0D\u662F\u4E00\u4E2A\u81EA\u5F8B\u7684\u4EBA.md",
      "\u751F\u6D3B\u65E5\u5E38/\u5F00\u5DE5\u7B2C\u4E00\u5929\uFF0C\u6211\u5BB3\u6015\u4E86.md",
      "\u751F\u6D3B\u65E5\u5E38/\u6211\u653E\u5047\u5566\uFF01\u8FD922\u5929\u5E72\u70B9\u5565\u5462.md",
      "\u751F\u6D3B\u65E5\u5E38/\u6211\u88AB\u9694\u79BB\u4E86\uFF01.md",
      "\u751F\u6D3B\u65E5\u5E38/\u6211\u9633\u8FC7\u4E86\uFF0C\u522B\u62C5\u5FC3\uFF01.md",
      "\u751F\u6D3B\u65E5\u5E38/\u65B0\u5E74\u7B2C\u4E00\u5929\uFF0C\u6211\u5C31\u868C\u57E0\u4F4F\u4E86\uFF01.md",
      "\u751F\u6D3B\u65E5\u5E38/\u804A\u804A\u6700\u8FD1\u7684\u72B6\u6001\u5427.md",
      "\u751F\u6D3B\u65E5\u5E38/\u90FD\u8FD9\u4E2A\u70B9\u513F\u4E86\uFF0C\u8FD9\u5E2E\u4EBA\u7ADF\u7136\u5728\u3002\u3002\u3002.md",
      "\u751F\u6D3B\u65E5\u5E38/\u968F\u4FBF\u804A\u804A.md"
    ]
  }
];

// .vuepress/sidebars/programmingShareSideBar.ts
var programmingShareSideBar_default = [
  "",
  {
    title: "\u5165\u95E8\u5FC5\u770B-\u5B66\u4E60\u8DEF\u7EBF",
    collapsable: true,
    children: [
      "\u5165\u95E8\u5FC5\u770B-\u5B66\u4E60\u8DEF\u7EBF/"
    ]
  },
  {
    title: "\u5B66\u4E60\u6307\u5357",
    collapsable: true,
    children: [
      "\u5B66\u4E60\u6307\u5357/"
    ]
  },
  {
    title: "\u5F00\u53D1\u7ECF\u9A8C",
    collapsable: true,
    children: [
      "\u5F00\u53D1\u7ECF\u9A8C/"
    ]
  },
  {
    title: "\u6C42\u804C\u7ECF\u9A8C",
    collapsable: true,
    children: [
      "\u6C42\u804C\u7ECF\u9A8C/"
    ]
  },
  {
    title: "\u804C\u573A\u7ECF\u9A8C",
    collapsable: true,
    children: [
      "\u804C\u573A\u7ECF\u9A8C/"
    ]
  },
  {
    title: "\u6280\u672F\u5206\u4EAB",
    collapsable: true,
    children: [
      "\u6280\u672F\u5206\u4EAB/"
    ]
  },
  {
    title: "\u5B9E\u6218\u6559\u7A0B",
    collapsable: true,
    children: [
      "\u5B9E\u6218\u6559\u7A0B/"
    ]
  },
  {
    title: "\u9879\u76EE\u6559\u7A0B",
    collapsable: true,
    children: [
      "\u9879\u76EE\u6559\u7A0B/"
    ]
  },
  {
    title: "\u7F16\u7A0B\u8D44\u6E90",
    collapsable: true,
    children: [
      "\u7F16\u7A0B\u8D44\u6E90/"
    ]
  },
  {
    title: "\u79D1\u6280\u79D1\u666E",
    collapsable: true,
    children: [
      "\u79D1\u6280\u79D1\u666E/"
    ]
  },
  {
    title: "\u5176\u4ED6",
    collapsable: true,
    children: [
      "\u5176\u4ED6/"
    ]
  }
];

// .vuepress/sidebars/bugFixManual.ts
var bugFixManual_default = [
  "",
  {
    title: "\u7ECF\u5178 Bug \u89E3\u51B3\u65B9\u6848",
    collapsable: true,
    children: [
      "\u7ECF\u5178 Bug \u89E3\u51B3\u65B9\u6848/Bug \u89E3\u51B3  \u524D\u7AEF\u65E0\u6CD5\u6B63\u786E\u8BF7\u6C42\u540E\u7AEF\u63A5\u53E3\u5E76\u5F97\u5230\u54CD\u5E94\uFF1F",
      "\u7ECF\u5178 Bug \u89E3\u51B3\u65B9\u6848/Bug \u89E3\u51B3  \u524D\u7AEF\u6846\u67B6\u521D\u59CB\u5316\u9519\u8BEF",
      "\u7ECF\u5178 Bug \u89E3\u51B3\u65B9\u6848/Bug \u89E3\u51B3  \u524D\u7AEF\u9879\u76EE\u65E0\u6CD5\u6B63\u786E\u5B89\u88C5\u4F9D\u8D56\uFF1F",
      "\u7ECF\u5178 Bug \u89E3\u51B3\u65B9\u6848/Bug \u89E3\u51B3  \u524D\u7AEF\u9879\u76EE\u80FD\u8FD0\u884C\uFF0C\u4F46\u6709\u5F88\u591A\u9519\u8BEF\u63D0\u793A\u548C\u544A\u8B66\uFF1F",
      "\u7ECF\u5178 Bug \u89E3\u51B3\u65B9\u6848/Bug \u89E3\u51B3  \u540E\u7AEF\u9879\u76EE\u65E0\u6CD5\u6B63\u5E38\u542F\u52A8\uFF0C\u6216\u4F9D\u8D56\u670D\u52A1\u8FDE\u63A5\u5931\u8D25",
      "\u7ECF\u5178 Bug \u89E3\u51B3\u65B9\u6848/Bug \u89E3\u51B3  \u6570\u636E\u67E5\u8BE2\u4E3A\u7A7A\u6216\u9519\u8BEF",
      "\u7ECF\u5178 Bug \u89E3\u51B3\u65B9\u6848/Bug \u89E3\u51B3  \u65E0\u6CD5\u6B63\u5E38\u767B\u5F55\u6216\u83B7\u53D6\u4E0D\u5230\u7528\u6237\u4FE1\u606F",
      "\u7ECF\u5178 Bug \u89E3\u51B3\u65B9\u6848/Bug \u89E3\u51B3  \u65E0\u6CD5\u8BBF\u95EE\u7EBF\u4E0A\u670D\u52A1",
      "\u7ECF\u5178 Bug \u89E3\u51B3\u65B9\u6848/Bug \u89E3\u51B3  \u672C\u5730\u9879\u76EE\u4E0A\u7EBF\u540E\u51FA\u73B0\u9519\u8BEF",
      "\u7ECF\u5178 Bug \u89E3\u51B3\u65B9\u6848/Bug \u89E3\u51B3  \u9879\u76EE\u542F\u52A8\u5931\u8D25",
      "\u7ECF\u5178 Bug \u89E3\u51B3\u65B9\u6848/Bug \u89E3\u51B3\uFF5C\u65E0\u6CD5\u6B63\u786E\u8BBF\u95EE\u5230\u9875\u9762\u6216\u51FA\u73B0 404 \u9519\u8BEF",
      "\u7ECF\u5178 Bug \u89E3\u51B3\u65B9\u6848/Bug \u89E3\u51B3\uFF5C\u7EC4\u4EF6\u5E93\u62A5\u9519\u3001\u6216\u6837\u5F0F\u4E22\u5931\u4E0D\u751F\u6548"
    ]
  },
  {
    title: "\u89E3\u51B3 Bug \u7684\u6D41\u7A0B\u5957\u8DEF",
    collapsable: true,
    children: [
      "\u89E3\u51B3 Bug \u7684\u6D41\u7A0B\u5957\u8DEF/\u5E38\u89C1\u5199 Bug \u539F\u56E0\u6C47\u603B",
      "\u89E3\u51B3 Bug \u7684\u6D41\u7A0B\u5957\u8DEF/\u5E38\u89C1\u8BF7\u6C42\u9519\u8BEF\u7801\u89E3\u91CA\u53CA\u89E3\u51B3\u65B9\u6848",
      "\u89E3\u51B3 Bug \u7684\u6D41\u7A0B\u5957\u8DEF/\u89E3\u51B3 Bug \u7684\u6D41\u7A0B\u5957\u8DEF\u603B\u7ED3"
    ]
  }
];

// .vuepress/sidebar.ts
var sidebar_default = {
  "/\u5B66\u4E60\u8DEF\u7EBF/": roadmapSideBar_default,
  "/\u9879\u76EE\u5B9E\u6218/": projectSideBar_default,
  "/\u7F16\u7A0B\u5BFC\u822A/": codeNavSideBar_default,
  "/\u4EA7\u54C1\u670D\u52A1/": productSideBar_default,
  "/\u77E5\u8BC6\u788E\u7247/": knowledgeSideBar_default,
  "/Bug\u624B\u518C/": bugFixManual_default,
  "/\u81EA\u5B66\u4E4B\u8DEF/": selfStudySideBar_default,
  "/\u7F16\u7A0B\u5206\u4EAB/": programmingShareSideBar_default,
  "/\u5173\u4E8E\u6211\u4EEC/": ["", "\u4E2A\u4EBA\u7ECF\u5386"],
  "/": "auto"
};

// .vuepress/footer.ts
var footer_default = {
  friendLinks: [
    {
      label: "\u7AD9\u957F - \u6D6A\u6D6A\u5C71\u541B",
      href: "https://yuyuanweb.feishu.cn/wiki/Abldw5WkjidySxkKxU2cQdAtnah"
    },
    {
      label: "\u541B\u7684\u7B80\u5386",
      href: "https://www.laoyujianli.com/"
    },
    {
      label: "\u7F8E\u672F\u5B66\u4E60\u8D44\u6599",
      href: "https://yuyuanweb.feishu.cn/wiki/VC1qwmX9diCBK3kidyec74vFnde"
    }
  ],
  copyright: {
    href: "https://beian.miit.gov.cn/",
    name: "\u5DDDICP\u5907123\u53F7"
  }
};

// .vuepress/extraSideBar.ts
var extraSideBar_default = [
  {
    title: "\u624B\u673A\u770B",
    icon: "/icon/mobile.png",
    popoverTitle: "\u5FAE\u4FE1\u626B\u4E00\u626B",
    popoverUrl: "/qrcode-codefather.png",
    popoverDesc: "\u53EF\u4EE5\u624B\u673A\u770B\u6216\u5206\u4EAB\u81F3\u670B\u53CB\u5708"
  },
  {
    title: "\u661F\u7403",
    icon: "/icon/xingqiu.png",
    popoverTitle: '<span style="font-size:0.8rem;font-weight:bold;"><span style="color:red;">\u4FDD\u59C6\u7EA7\u5B9E\u6218\u9879\u76EE\u6559\u7A0B</span>\u3001\u7F16\u7A0B\u5B66\u4E60\u6307\u5357\u3001\u5B66\u4E60\u8D44\u6E90\u3001\u6C42\u804C\u6307\u5357\u3001\u6280\u672F\u5206\u4EAB\u3001\u7F16\u7A0B\u4EA4\u6D41</span>',
    popoverUrl: "/qrcode-codenav.png",
    popoverDesc: "\u77E5\u8BC6\u661F\u7403\uFF1A\u7F16\u7A0B\u5BFC\u822A"
  },
  {
    title: "\u4EA4\u6D41\u7FA4",
    icon: "/icon/weixin.png",
    popoverTitle: '<span style="font-size:0.8rem;font-weight:bold;">\u626B\u7801\u6DFB\u52A0 <span style="color:red;">\u7F16\u7A0B\u5BFC\u822A\u5C0F\u52A9\u624B\u5FAE\u4FE1</span>\uFF0C\u62C9\u4F60\u8FDB\u4E13\u5C5E\u7F16\u7A0B\u5B66\u4E60\u4EA4\u6D41\u7FA4</span>',
    popoverUrl: "/qrcode-codenavhelper.png"
  },
  {
    title: "\u4E0B\u8D44\u6599",
    icon: "/icon/xiazai.png",
    popoverTitle: '<span style="font-size:0.8rem;font-weight:bold;">\u626B\u7801\u5173\u6CE8\u7AD9\u957F\u516C\u4F17\u53F7\uFF0C\u56DE\u590D <span style="color:red;">\u5B66\u4E60</span> \u83B7\u53D6\u6D77\u91CF\u7F16\u7A0B\u5B66\u4E60\u8D44\u6E90\u300C\u65E0\u4EFB\u4F55\u5957\u8DEF\u300D</span>',
    popoverUrl: "/qrcode-mpcoder_yupi.jpg",
    popoverDesc: "\u516C\u4F17\u53F7: \u7A0B\u5E8F\u5458\u9C7C\u76AE"
  },
  {
    title: "\u652F\u6301\u6211",
    icon: "/icon/dianzan.png",
    popoverTitle: ' <span style="font-size:0.8rem;font-weight:bold;">\u9F13\u52B1\u548C\u8D5E\u8D4F\u6211</span>',
    popoverUrl: "/qrcode-thumb.jpg",
    popoverDesc: "\u611F\u8C22\u60A8\u7684\u652F\u6301\uFF0C\u4F5C\u8005\u5934\u53D1++"
  }
];

// .vuepress/config.ts
var author = "\u541B\u541B";
var domain = "https://codefather.cn";
var tags = ["\u6E38\u620F\u7F8E\u672F", "\u539F\u753B", "\u5EFA\u6A21"];
var config_default = defineConfig({
  title: "\u541B\u7684\u6E38\u620F\u7F8E\u672F\u77E5\u8BC6\u5E93",
  description: "\u7EC8\u8EAB\u5B66\u4E60\uFF0C\u7EC8\u8EAB\u6210\u957F\u3002",
  port: 18e3,
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "keywords",
        content: "\u6E38\u620F\u7F8E\u672F, \u539F\u753B, \u5EFA\u6A21, ZBrush, \u6B21\u65F6\u4EE3, \u7279\u6548, UI,\u6280\u672F\u7F8E\u672F, \u9879\u76EE, \u6E38\u620F\u516C\u53F8, \u6C42\u804C, \u9762\u7ECF"
      }
    ],
    [
      "script",
      {},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?2675818a983a3131404cee835018f016";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `
    ]
  ],
  permalink: "/:slug",
  extraWatchFiles: [".vuepress/*.ts", ".vuepress/sidebars/*.ts"],
  markdown: {
    lineNumbers: true,
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"]
  },
  plugins: [
    ["@vuepress/back-to-top"],
    [
      "@vuepress/google-analytics",
      {
        ga: "GTM-WVS9HM6W"
      }
    ],
    ["@vuepress/medium-zoom"],
    [
      "seo",
      {
        siteTitle: (_, $site) => $site.title,
        title: ($page) => $page.title,
        description: ($page) => $page.frontmatter.description || $page.description,
        author: (_, $site) => $site.themeConfig.author || author,
        tags: ($page) => $page.frontmatter.tags || tags,
        type: ($page) => "article",
        url: (_, $site, path) => ($site.themeConfig.domain || domain || "") + path,
        image: ($page, $site) => $page.frontmatter.image && ($site.themeConfig.domain && !$page.frontmatter.image.startsWith("http") || "") + $page.frontmatter.image,
        publishedAt: ($page) => $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: ($page) => $page.lastUpdated && new Date($page.lastUpdated)
      }
    ],
    [
      "sitemap",
      {
        hostname: domain
      }
    ],
    ["vuepress-plugin-baidu-autopush"],
    ["vuepress-plugin-tags"],
    [
      "vuepress-plugin-code-copy",
      {
        successText: "\u4EE3\u7801\u5DF2\u590D\u5236"
      }
    ],
    [
      "feed",
      {
        canonical_base: domain,
        count: 1e4,
        posts_directories: []
      }
    ],
    ["img-lazy"]
  ],
  themeConfig: {
    logo: "/logo.png",
    nav: navbar_default,
    sidebar: sidebar_default,
    lastUpdated: "\u6700\u8FD1\u66F4\u65B0",
    repo: "liyupi/codefather",
    docsBranch: "master",
    editLinks: true,
    editLinkText: "\u5B8C\u5584\u9875\u9762",
    footer: footer_default,
    extraSideBar: extraSideBar_default
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZ1ZXByZXNzL2NvbmZpZy50cyIsICIudnVlcHJlc3MvbmF2YmFyLnRzIiwgIi52dWVwcmVzcy9zaWRlYmFycy9jb2RlTmF2U2lkZUJhci50cyIsICIudnVlcHJlc3Mvc2lkZWJhcnMva25vd2xlZGdlU2lkZUJhci50cyIsICIudnVlcHJlc3Mvc2lkZWJhcnMvcm9hZG1hcFNpZGVCYXIudHMiLCAiLnZ1ZXByZXNzL3NpZGViYXJzL3Byb2plY3RTaWRlQmFyLnRzIiwgIi52dWVwcmVzcy9zaWRlYmFycy9wcm9kdWN0U2lkZUJhci50cyIsICIudnVlcHJlc3Mvc2lkZWJhcnMvc2VsZlN0dWR5U2lkZUJhci50cyIsICIudnVlcHJlc3Mvc2lkZWJhcnMvcHJvZ3JhbW1pbmdTaGFyZVNpZGVCYXIudHMiLCAiLnZ1ZXByZXNzL3NpZGViYXJzL2J1Z0ZpeE1hbnVhbC50cyIsICIudnVlcHJlc3Mvc2lkZWJhci50cyIsICIudnVlcHJlc3MvZm9vdGVyLnRzIiwgIi52dWVwcmVzcy9leHRyYVNpZGVCYXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2dWVwcmVzcy9jb25maWdcIjtcclxuaW1wb3J0IG5hdmJhciBmcm9tIFwiLi9uYXZiYXJcIjtcclxuaW1wb3J0IHNpZGViYXIgZnJvbSBcIi4vc2lkZWJhclwiO1xyXG5pbXBvcnQgZm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xyXG5pbXBvcnQgZXh0cmFTaWRlQmFyIGZyb20gXCIuL2V4dHJhU2lkZUJhclwiO1xyXG5cclxuY29uc3QgYXV0aG9yID0gXCJcdTU0MUJcdTU0MUJcIjtcclxuY29uc3QgZG9tYWluID0gXCJodHRwczovL2NvZGVmYXRoZXIuY25cIjtcclxuY29uc3QgdGFncyA9IFtcIlx1NkUzOFx1NjIwRlx1N0Y4RVx1NjcyRlwiLCBcIlx1NTM5Rlx1NzUzQlwiLCBcIlx1NUVGQVx1NkEyMVwiXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgdGl0bGU6IFwiXHU1NDFCXHU3Njg0XHU2RTM4XHU2MjBGXHU3RjhFXHU2NzJGXHU3N0U1XHU4QkM2XHU1RTkzXCIsXHJcbiAgZGVzY3JpcHRpb246IFwiXHU3RUM4XHU4RUFCXHU1QjY2XHU0RTYwXHVGRjBDXHU3RUM4XHU4RUFCXHU2MjEwXHU5NTdGXHUzMDAyXCIsXHJcbiAgcG9ydDogMTgwMDAsIC8vIFx1NkRGQlx1NTJBMFx1N0FFRlx1NTNFM1x1OTE0RFx1N0Y2RVxyXG4gIGhlYWQ6IFtcclxuICAgIC8vIFx1N0FEOVx1NzBCOVx1NTZGRVx1NjgwN1xyXG4gICAgW1wibGlua1wiLCB7IHJlbDogXCJpY29uXCIsIGhyZWY6IFwiL2Zhdmljb24uaWNvXCIgfV0sXHJcbiAgICAvLyBTRU9cclxuICAgIFtcclxuICAgICAgXCJtZXRhXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcImtleXdvcmRzXCIsXHJcbiAgICAgICAgY29udGVudDpcclxuICAgICAgICAgIFwiXHU2RTM4XHU2MjBGXHU3RjhFXHU2NzJGLCBcdTUzOUZcdTc1M0IsIFx1NUVGQVx1NkEyMSwgWkJydXNoLCBcdTZCMjFcdTY1RjZcdTRFRTMsIFx1NzI3OVx1NjU0OCwgVUksXHU2MjgwXHU2NzJGXHU3RjhFXHU2NzJGLCBcdTk4NzlcdTc2RUUsIFx1NkUzOFx1NjIwRlx1NTE2Q1x1NTNGOCwgXHU2QzQyXHU4MDRDLCBcdTk3NjJcdTdFQ0ZcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICAvLyBcdTc2N0VcdTVFQTZcdTdFREZcdThCQTFcclxuICAgIFtcclxuICAgICAgXCJzY3JpcHRcIixcclxuICAgICAge30sXHJcbiAgICAgIGBcclxuICAgICAgICB2YXIgX2htdCA9IF9obXQgfHwgW107XHJcbiAgICAgICAgKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgdmFyIGhtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICAgICAgICAgIGhtLnNyYyA9IFwiaHR0cHM6Ly9obS5iYWlkdS5jb20vaG0uanM/MjY3NTgxOGE5ODNhMzEzMTQwNGNlZTgzNTAxOGYwMTZcIjtcclxuICAgICAgICAgIHZhciBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIilbMF07IFxyXG4gICAgICAgICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShobSwgcyk7XHJcbiAgICAgICAgfSkoKTtcclxuICAgICAgYCxcclxuICAgIF0sXHJcbiAgXSxcclxuICBwZXJtYWxpbms6IFwiLzpzbHVnXCIsXHJcblxyXG4gIC8vIFx1NzZEMVx1NTQyQ1x1NjU4N1x1NEVGNlx1NTNEOFx1NTMxNlx1RkYwQ1x1NzBFRFx1NjZGNFx1NjVCMFxyXG4gIGV4dHJhV2F0Y2hGaWxlczogW1wiLnZ1ZXByZXNzLyoudHNcIiwgXCIudnVlcHJlc3Mvc2lkZWJhcnMvKi50c1wiXSxcclxuICBtYXJrZG93bjoge1xyXG4gICAgLy8gXHU1RjAwXHU1NDJGXHU0RUUzXHU3ODAxXHU1NzU3XHU3Njg0XHU4ODRDXHU1M0Y3XHJcbiAgICBsaW5lTnVtYmVyczogdHJ1ZSxcclxuICAgIC8vIFx1NjUyRlx1NjMwMSA0IFx1N0VBN1x1NEVFNVx1NEUwQVx1NzY4NFx1NjgwN1x1OTg5OFx1NkUzMlx1NjdEM1xyXG4gICAgZXh0cmFjdEhlYWRlcnM6IFtcImgyXCIsIFwiaDNcIiwgXCJoNFwiLCBcImg1XCIsIFwiaDZcIl0sXHJcbiAgfSxcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcGx1Z2luczogW1xyXG4gICAgW1wiQHZ1ZXByZXNzL2JhY2stdG8tdG9wXCJdLFxyXG4gICAgLy8gR29vZ2xlIFx1NTIwNlx1Njc5MFxyXG4gICAgW1xyXG4gICAgICBcIkB2dWVwcmVzcy9nb29nbGUtYW5hbHl0aWNzXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBnYTogXCJHVE0tV1ZTOUhNNldcIiwgLy8gXHU4ODY1XHU1MTQ1XHU4MUVBXHU1REYxXHU3Njg0XHU4QzM3XHU2QjRDXHU1MjA2XHU2NzkwIElEXHVGRjBDXHU2QkQ0XHU1OTgyIFVBLTAwMDAwMDAwLTBcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBbXCJAdnVlcHJlc3MvbWVkaXVtLXpvb21cIl0sXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbG9yaXNsZWl2YS92dWVwcmVzcy1wbHVnaW4tc2VvXHJcbiAgICBbXHJcbiAgICAgIFwic2VvXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBzaXRlVGl0bGU6IChfLCAkc2l0ZSkgPT4gJHNpdGUudGl0bGUsXHJcbiAgICAgICAgdGl0bGU6ICgkcGFnZSkgPT4gJHBhZ2UudGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICgkcGFnZSkgPT5cclxuICAgICAgICAgICRwYWdlLmZyb250bWF0dGVyLmRlc2NyaXB0aW9uIHx8ICRwYWdlLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGF1dGhvcjogKF8sICRzaXRlKSA9PiAkc2l0ZS50aGVtZUNvbmZpZy5hdXRob3IgfHwgYXV0aG9yLFxyXG4gICAgICAgIHRhZ3M6ICgkcGFnZSkgPT4gJHBhZ2UuZnJvbnRtYXR0ZXIudGFncyB8fCB0YWdzLFxyXG4gICAgICAgIHR5cGU6ICgkcGFnZSkgPT4gXCJhcnRpY2xlXCIsXHJcbiAgICAgICAgdXJsOiAoXywgJHNpdGUsIHBhdGgpID0+XHJcbiAgICAgICAgICAoJHNpdGUudGhlbWVDb25maWcuZG9tYWluIHx8IGRvbWFpbiB8fCBcIlwiKSArIHBhdGgsXHJcbiAgICAgICAgaW1hZ2U6ICgkcGFnZSwgJHNpdGUpID0+XHJcbiAgICAgICAgICAkcGFnZS5mcm9udG1hdHRlci5pbWFnZSAmJlxyXG4gICAgICAgICAgKCgkc2l0ZS50aGVtZUNvbmZpZy5kb21haW4gJiZcclxuICAgICAgICAgICAgISRwYWdlLmZyb250bWF0dGVyLmltYWdlLnN0YXJ0c1dpdGgoXCJodHRwXCIpKSB8fFxyXG4gICAgICAgICAgICBcIlwiKSArICRwYWdlLmZyb250bWF0dGVyLmltYWdlLFxyXG4gICAgICAgIHB1Ymxpc2hlZEF0OiAoJHBhZ2UpID0+XHJcbiAgICAgICAgICAkcGFnZS5mcm9udG1hdHRlci5kYXRlICYmIG5ldyBEYXRlKCRwYWdlLmZyb250bWF0dGVyLmRhdGUpLFxyXG4gICAgICAgIG1vZGlmaWVkQXQ6ICgkcGFnZSkgPT4gJHBhZ2UubGFzdFVwZGF0ZWQgJiYgbmV3IERhdGUoJHBhZ2UubGFzdFVwZGF0ZWQpLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9la29lcnlhbnRvL3Z1ZXByZXNzLXBsdWdpbi1zaXRlbWFwXHJcbiAgICBbXHJcbiAgICAgIFwic2l0ZW1hcFwiLFxyXG4gICAgICB7XHJcbiAgICAgICAgaG9zdG5hbWU6IGRvbWFpbixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vSU9yaWVucy92dWVwcmVzcy1wbHVnaW4tYmFpZHUtYXV0b3B1c2hcclxuICAgIFtcInZ1ZXByZXNzLXBsdWdpbi1iYWlkdS1hdXRvcHVzaFwiXSxcclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96cTk5Mjk5L3Z1ZXByZXNzLXBsdWdpbi90cmVlL21hc3Rlci92dWVwcmVzcy1wbHVnaW4tdGFnc1xyXG4gICAgW1widnVlcHJlc3MtcGx1Z2luLXRhZ3NcIl0sXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vem5pY2hvbGFzYnJvd24vdnVlcHJlc3MtcGx1Z2luLWNvZGUtY29weVxyXG4gICAgW1xyXG4gICAgICBcInZ1ZXByZXNzLXBsdWdpbi1jb2RlLWNvcHlcIixcclxuICAgICAge1xyXG4gICAgICAgIHN1Y2Nlc3NUZXh0OiBcIlx1NEVFM1x1NzgwMVx1NURGMlx1NTkwRFx1NTIzNlwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJtYXN0ZXJpc2gvdnVlcHJlc3MtcGx1Z2luLWZlZWRcclxuICAgIFtcclxuICAgICAgXCJmZWVkXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBjYW5vbmljYWxfYmFzZTogZG9tYWluLFxyXG4gICAgICAgIGNvdW50OiAxMDAwMCxcclxuICAgICAgICAvLyBcdTk3MDBcdTg5ODFcdTgxRUFcdTUyQThcdTYzQThcdTkwMDFcdTc2ODRcdTY1ODdcdTY4NjNcdTc2RUVcdTVGNTVcclxuICAgICAgICBwb3N0c19kaXJlY3RvcmllczogW10sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3RvbGtpbmcvdnVlcHJlc3MtcGx1Z2luLWltZy1sYXp5XHJcbiAgICBbXCJpbWctbGF6eVwiXSxcclxuICBdLFxyXG4gIC8vIFx1NEUzQlx1OTg5OFx1OTE0RFx1N0Y2RVxyXG4gIHRoZW1lQ29uZmlnOiB7XHJcbiAgICBsb2dvOiBcIi9sb2dvLnBuZ1wiLFxyXG4gICAgbmF2OiBuYXZiYXIsXHJcbiAgICBzaWRlYmFyLFxyXG4gICAgbGFzdFVwZGF0ZWQ6IFwiXHU2NzAwXHU4RkQxXHU2NkY0XHU2NUIwXCIsXHJcblxyXG4gICAgLy8gR2l0SHViIFx1NEVEM1x1NUU5M1x1NEY0RFx1N0Y2RVxyXG4gICAgcmVwbzogXCJsaXl1cGkvY29kZWZhdGhlclwiLFxyXG4gICAgZG9jc0JyYW5jaDogXCJtYXN0ZXJcIixcclxuXHJcbiAgICAvLyBcdTdGMTZcdThGOTFcdTk0RkVcdTYzQTVcclxuICAgIGVkaXRMaW5rczogdHJ1ZSxcclxuICAgIGVkaXRMaW5rVGV4dDogXCJcdTVCOENcdTU1ODRcdTk4NzVcdTk3NjJcIixcclxuXHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAvLyBcdTVFOTVcdTkwRThcdTcyNDhcdTY3NDNcdTRGRTFcdTYwNkZcclxuICAgIGZvb3RlcixcclxuICAgIC8vIFx1OTg5RFx1NTkxNlx1NTNGM1x1NEZBN1x1OEZCOVx1NjgwRlxyXG4gICAgZXh0cmFTaWRlQmFyLFxyXG4gIH0sXHJcbn0pO1xyXG4iLCAiaW1wb3J0IHtOYXZJdGVtfSBmcm9tIFwidnVlcHJlc3MvY29uZmlnXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDogXCIzRFx1N0Y4RVx1NjcyRlwiLFxyXG4gICAgICAgIGxpbms6IFwiLzNEXHU3RjhFXHU2NzJGL1wiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU1RUZBXHU2QTIxXCIsIGxpbms6IFwiLzNEXHU3RjhFXHU2NzJGLyNcdTVFRkFcdTZBMjFcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJVVlwiLCBsaW5rOiBcIi8zRFx1N0Y4RVx1NjcyRi8jVVZcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJcdTdFRDFcdTVCOUFcIiwgbGluazogXCIvM0RcdTdGOEVcdTY3MkYvI1x1N0VEMVx1NUI5QVwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlx1NTJBOFx1NzUzQlwiLCBsaW5rOiBcIi8zRFx1N0Y4RVx1NjcyRi8jXHU1MkE4XHU3NTNCXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU2RTMyXHU2N0QzXCIsIGxpbms6IFwiLzNEXHU3RjhFXHU2NzJGLyNcdTZFMzJcdTY3RDNcIixcclxuICAgICAgICAgICAgfSxcclxuICAgIFxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTZFMzhcdTYyMEZcdTVGMTVcdTY0Q0VcIixcclxuICAgICAgICBsaW5rOiAnL1x1NkUzOFx1NjIwRlx1NUYxNVx1NjRDRS8nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRleHQ6IFwiXHU2M0QyXHU0RUY2XHU1REU1XHU1MTc3XCIsXHJcbiAgICAgICAgbGluazogJy9cdTYzRDJcdTRFRjZcdTVERTVcdTUxNzcvJ1xyXG4gICAgfSxcclxuICAgXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTdGOEVcdTY3MkZcdThENDRcdTRFQTdcdTVFOTNcIixcclxuICAgICAgICBsaW5rOiAnL1x1N0Y4RVx1NjcyRlx1OEQ0NFx1NEVBN1x1NUU5My8nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRleHQ6IFwiXHU3N0U1XHU4QkM2XHU3NjdFXHU3OUQxXCIsXHJcbiAgICAgICAgbGluazogJy9cdTc3RTVcdThCQzZcdTc2N0VcdTc5RDEvJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlx1NEUwOVx1NTkyN1x1Njc4NFx1NjIxMFwiLCBsaW5rOiBcIi9cdTc3RTVcdThCQzZcdTc2N0VcdTc5RDEvI1x1NEUwOVx1NTkyN1x1Njc4NFx1NjIxMFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlx1OEJCRVx1OEJBMVx1NzdFNVx1OEJDNlwiLCBsaW5rOiBcIi9cdTc3RTVcdThCQzZcdTc2N0VcdTc5RDEvI1x1OEJCRVx1OEJBMVx1NzdFNVx1OEJDNlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlx1NkUzOFx1NjIwRlx1OEJCRVx1OEJBMVwiLCBsaW5rOiBcIi9cdTc3RTVcdThCQzZcdTc2N0VcdTc5RDEvI1x1NkUzOFx1NjIwRlx1OEJCRVx1OEJBMVwiLFxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRleHQ6IFwiXHU3MkVDXHU3QUNCXHU2RTM4XHU2MjBGXCIsXHJcbiAgICAgICAgbGluazogJy9cdTcyRUNcdTdBQ0JcdTZFMzhcdTYyMEYvJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlx1NzJFQ1x1N0FDQlx1NzUzNVx1NUY3MVwiLFxyXG4gICAgICAgIGxpbms6ICcvXHU3MkVDXHU3QUNCXHU3NTM1XHU1RjcxLydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTZGMkJcdTc1M0JcIixcclxuICAgICAgICBsaW5rOiAnL1x1NkYyQlx1NzUzQi8nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRleHQ6IFwiXHU0RjVDXHU4MDA1XCIsXHJcbiAgICAgICAgbGluazogJy9cdTRGNUNcdTgwMDUvJ1xyXG4gICAgfSxcclxuXSBhcyBOYXZJdGVtW107XHJcbiIsICJleHBvcnQgZGVmYXVsdCBbXHJcbiAgXCJcIixcclxuICB7XHJcbiAgICB0aXRsZTogXCJcdTY2MUZcdTc0MDNcdThENDRcdTY1OTlcIixcclxuICAgIGNvbGxhcHNhYmxlOiB0cnVlLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAgXCJcdTY2MUZcdTc0MDNcdThENDRcdTY1OTkvXHU1QjY2XHU0RTYwXHU4RDQ0XHU2RTkwXCIsXHJcbiAgICAgIFwiXHU2NjFGXHU3NDAzXHU4RDQ0XHU2NTk5L1x1NEUxM1x1NUM1RVx1NUI2Nlx1NEU2MFx1OERFRlx1N0VCRlwiLFxyXG4gICAgICBcIlx1NjYxRlx1NzQwM1x1OEQ0NFx1NjU5OS9cdTRFMTNcdTVDNUVcdTRFQTRcdTZENDFcdTdGQTRcIixcclxuICAgICAgXCJcdTY2MUZcdTc0MDNcdThENDRcdTY1OTkvXHU5QzdDXHU3NkFFXHU3Njg0XHU1QjY2XHU0RTYwXHU3QjE0XHU4QkIwXCIsXHJcbiAgICAgIFwiXHU2NjFGXHU3NDAzXHU4RDQ0XHU2NTk5L1x1OUM3Q1x1NzZBRVx1NzY4NFx1NjI1M1x1NURFNVx1NjVFNVx1OEJCMFwiLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlx1NjYxRlx1NzQwM1x1OTg3OVx1NzZFRVwiLFxyXG4gICAgY29sbGFwc2FibGU6IHRydWUsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICBcIi9cdTk4NzlcdTc2RUVcdTVCOUVcdTYyMTgvQUkgXHU3QjU0XHU5ODk4XHU1RTk0XHU3NTI4XHU1RTczXHU1M0YwXCIsXHJcbiAgICAgIFwiL1x1OTg3OVx1NzZFRVx1NUI5RVx1NjIxOC9cdTRFRTNcdTc4MDFcdTc1MUZcdTYyMTBcdTU2NjhcdTUxNzFcdTRFQUJcdTVFNzNcdTUzRjBcIixcclxuICAgICAgXCIvXHU5ODc5XHU3NkVFXHU1QjlFXHU2MjE4L1x1NjI0Qlx1NTE5OSBSUEMgXHU2ODQ2XHU2N0I2XCIsXHJcbiAgICAgIFwiL1x1OTg3OVx1NzZFRVx1NUI5RVx1NjIxOC9PSiBcdTUyMjRcdTk4OThcdTdDRkJcdTdFREZcIixcclxuICAgICAgXCIvXHU5ODc5XHU3NkVFXHU1QjlFXHU2MjE4L1x1NjY3QVx1ODBGRCBCSSBcdTVFNzNcdTUzRjBcIixcclxuICAgICAgXCIvXHU5ODc5XHU3NkVFXHU1QjlFXHU2MjE4L0FQSSBcdTVGMDBcdTY1M0VcdTVFNzNcdTUzRjBcIixcclxuICAgICAgXCIvXHU5ODc5XHU3NkVFXHU1QjlFXHU2MjE4L1x1ODA1QVx1NTQwOFx1NjQxQ1x1N0QyMlx1NUU3M1x1NTNGMFwiLFxyXG4gICAgICBcIi9cdTk4NzlcdTc2RUVcdTVCOUVcdTYyMTgvXHU3NTI4XHU2MjM3XHU0RTJEXHU1RkMzXHU5ODc5XHU3NkVFXCIsXHJcbiAgICAgIFwiL1x1OTg3OVx1NzZFRVx1NUI5RVx1NjIxOC9cdTRGMTlcdTRGMzRcdTUzMzlcdTkxNERcdTdDRkJcdTdFREZcIixcclxuICAgICAgXCIvXHU5ODc5XHU3NkVFXHU1QjlFXHU2MjE4L0phdmEgXHU1NDBFXHU3QUVGXHU0RTA3XHU3NTI4XHU5ODc5XHU3NkVFXHU2QTIxXHU2NzdGXCIsXHJcbiAgICAgIFwiL1x1OTg3OVx1NzZFRVx1NUI5RVx1NjIxOC9cdTUyNERcdTdBRUZcdTRFMDdcdTc1MjhcdTk4NzlcdTc2RUVcdTZBMjFcdTY3N0ZcIixcclxuICAgICAgXCIvXHU5ODc5XHU3NkVFXHU1QjlFXHU2MjE4L1x1OUM3Q1x1NzZBRVx1OTg3OVx1NzZFRVx1NUI2Nlx1NEU2MFx1NUVGQVx1OEJBRVx1RkYwOFx1NUZDNVx1OEJGQlx1RkYwOVwiLFxyXG4gICAgICBcIlx1NjYxRlx1NzQwM1x1OTg3OVx1NzZFRS9cdTk4NzlcdTc2RUVcdThCQURcdTdFQzNcdTg0MjVcIixcclxuICAgICAgXCJcdTY2MUZcdTc0MDNcdTk4NzlcdTc2RUUvV2ViIFx1N0VDOFx1N0FFRlx1OTg3OVx1NzZFRVwiLFxyXG4gICAgICBcIlx1NjYxRlx1NzQwM1x1OTg3OVx1NzZFRS9cdTdGMTZcdTdBMEJcdTVCRkNcdTgyMkFcdTU5NTZcdTUyQjFcdTdDRkJcdTdFREZcIixcclxuICAgICAgXCJcdTY2MUZcdTc0MDNcdTk4NzlcdTc2RUUvU1FMIFx1NzUxRlx1NjIxMFx1NTY2OFx1OTg3OVx1NzZFRVwiLFxyXG4gICAgICBcIlx1NjYxRlx1NzQwM1x1OTg3OVx1NzZFRS9cdTVERTVcdTRGNUNcdThCQjBcdTVGNTVcdTUyMDZcdTY3OTBcdTVERTVcdTUxNzdcIixcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJcdTY2MUZcdTc0MDNcdTc2RjRcdTY0QURcIixcclxuICAgIGNvbGxhcHNhYmxlOiB0cnVlLFxyXG4gICAgY2hpbGRyZW46IFtcIlx1NjYxRlx1NzQwM1x1NzZGNFx1NjRBRC9cIiwgXCJcdTY2MUZcdTc0MDNcdTc2RjRcdTY0QUQvXHU1RjgwXHU2NzFGXHU3NkY0XHU2NEFEXCIsIFwiXHU2NjFGXHU3NDAzXHU3NkY0XHU2NEFEL1x1NTYwOVx1NUJCRVx1NTIwNlx1NEVBQlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlx1NzcxRlx1NUI5RVx1OEJDNFx1NEVGN1wiLFxyXG4gICAgY29sbGFwc2FibGU6IHRydWUsXHJcbiAgICBjaGlsZHJlbjogW1wiXHU3NzFGXHU1QjlFXHU4QkM0XHU0RUY3L1wiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlx1NjYxRlx1NzQwM1x1NjU0NVx1NEU4QlwiLFxyXG4gICAgY29sbGFwc2FibGU6IHRydWUsXHJcbiAgICBjaGlsZHJlbjogW1wiXHU2NjFGXHU3NDAzXHU2NTQ1XHU0RThCL1wiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlx1NTE3M1x1NEU4RVx1NjIxMVx1NEVFQ1wiLFxyXG4gICAgY29sbGFwc2FibGU6IHRydWUsXHJcbiAgICBjaGlsZHJlbjogW1wiXHU1MTczXHU0RThFXHU2MjExXHU0RUVDL1wiLCBcIlx1NTE3M1x1NEU4RVx1NjIxMVx1NEVFQy9cdTRFMkFcdTRFQkFcdTdFQ0ZcdTUzODZcIl0sXHJcbiAgfSxcclxuICBcIlx1NjYxRlx1NzQwM1x1NUU3NFx1NUVBNlx1NjAzQlx1N0VEM1wiLFxyXG4gIFwiXHU1MkEwXHU1MTY1XHU3RjE2XHU3QTBCXHU1QkZDXHU4MjJBXCIsXHJcbl07XHJcbiIsICJleHBvcnQgZGVmYXVsdCBbXHJcbiAgXCJcIixcclxuICB7XHJcbiAgICB0aXRsZTogXCJcdTc3RTVcdThCQzZcdTc4OEVcdTcyNDdcIixcclxuICAgIGNvbGxhcHNhYmxlOiBmYWxzZSxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIFwiNCBcdTc5Q0RcdTY1QjlcdTZDRDVcdUZGMENcdTVGRUJcdTkwMUZcdTUyMURcdTU5Q0JcdTUzMTYgSmF2YSBcdTk4NzlcdTc2RUUubWRcIixcclxuICAgICAgXCJcdTRGN0ZcdTc1MjhcdTU0MEVcdTdBRUZcdTRFRTNcdTc4MDFcdTc1MUZcdTYyMTBcdTU2NjhcdUZGMENcdTYzRDBcdTlBRDhcdTVGMDBcdTUzRDFcdTY1NDhcdTczODcubWRcIixcclxuICAgICAgXCJcdTUyNERcdTdBRUZcdTVGQzVcdTVCNjZcdTc2ODRcdTVGMDBcdTUzRDFcdTY4NDZcdTY3QjZcdUZGMENBbnQgRGVzaWduIFByby5tZFwiLFxyXG4gICAgICBcIlx1NTQwRVx1N0FFRlx1NTk4Mlx1NEY1NVx1N0YxNlx1NTE5OVx1NTM1NVx1NTE0M1x1NkQ0Qlx1OEJENVx1RkYxRiAubWRcIixcclxuICAgICAgXCJcdTU0MEVcdTdBRUZcdTk4NzlcdTc2RUVcdTdFQ0ZcdTUxNzhcdTUyMDZcdTVDNDJcdTY3QjZcdTY3ODRcdTRFQ0JcdTdFQ0QubWRcIixcclxuICAgICAgXCJcdTU5ODJcdTRGNTVcdTlBRDhcdTY1NDhcdTZENEJcdThCRDVcdTYzQTVcdTUzRTNcdUZGMUZcdTgxRUFcdTUyQThcdTc1MUZcdTYyMTBcdTYzQTVcdTUzRTNcdTY1ODdcdTY4NjMubWRcIixcclxuICAgICAgXCJcdTVGMDBcdTUzRDFcdTRGMDFcdTRFMUFcdTVGQUVcdTRGRTFcdTdGQTRcdTY3M0FcdTU2NjhcdTRFQkFcdUZGMENcdTVCOUVcdTczQjBcdTVCOUFcdTY1RjZcdTYzRDBcdTkxOTIubWRcIixcclxuICAgICAgXCJcdTMwMTBcdThCQkVcdThCQTFcdTZBMjFcdTVGMEZcdTMwMTFcdTg4QzVcdTk5NzBcdTgwMDVcdTZBMjFcdTVGMEZcdUZGMENcdTUzQ0FcdTUxNzZcdTU3MjhKREtcdTZFOTBcdTc4MDFcdTRFMkRcdTc2ODRcdTVFOTRcdTc1MjgubWRcIixcclxuICAgICAgXCJcdTc1MjhcdTU2REJcdTc5Q0RcdTk1MDFcdTVCOUVcdTczQjBcdTUyQTBcdTUxNjVcdTk2MUZcdTRGMERcdTUyOUZcdTgwRkQoXHU0RjE5XHU0RjM0XHU1MzM5XHU5MTREXHU3Q0ZCXHU3RURGKS5tZFwiLFxyXG4gICAgICBcIlx1NzUyOEBWYWxpZGF0ZWRcdTZDRThcdTg5RTNcdTVCOUVcdTczQjBcdTk3NUVcdTdBN0FcdTY4MjFcdTlBOEMubWRcIixcclxuICAgICAgXCJcdTRGN0ZcdTc1MjhcdTdCMkNcdTRFMDlcdTY1QjlcdTY3MERcdTUyQTEoXHU1QjlEXHU1ODU0KVx1NUZFQlx1OTAxRlx1OTBFOFx1N0Y3Mlx1OTg3OVx1NzZFRS5tZFwiLFxyXG4gICAgICBcIlJFU1RmdWwgXHU2M0E1XHU1M0UzXHU1QjlFXHU3M0IwXHU0RTBFXHU2RDRCXHU4QkQ1KCBTcHJpbmcgQm9vdCApLm1kXCIsXHJcbiAgICAgIFwiXHU1RkVCXHU5MDFGXHU1QjY2XHU0RjFBXHU0RTNBXHU1RjAwXHU2RTkwXHU5ODc5XHU3NkVFXHU1MDVBXHU4RDIxXHU3MzJFLm1kXCIsXHJcbiAgICAgIFwiXHU2NTc0XHU1NDA4U3ByaW5nIEpEQkNcdTY0Q0RcdTRGNUNcdTY1NzBcdTYzNkVcdTVFOTMubWRcIixcclxuICAgICAgXCJNYXZlbiBcdTRFMkRcdTU5MkVcdTRFRDNcdTVFOTNcdTUzRDFcdTUzMDVcdTZENDFcdTdBMEIubWRcIixcclxuICAgICAgXCJOYWNvcyBcdTkxNERcdTdGNkVcdTRFMkRcdTVGQzNcdTY0MkRcdTVFRkEubWRcIixcclxuICAgICAgXCJCZWFuIFx1NjJGN1x1OEQxRFx1NEU0QiBNYXBTdHJ1Y3QubWRcIixcclxuICAgICAgXCJcdTU5ODJcdTRGNTVcdTVGRUJcdTkwMUZcdTVGRkRcdTc1NjUgR2l0IFx1NjU4N1x1NEVGNlx1NjNEMFx1NEVBNFx1RkYxRi5tZFwiLFxyXG4gICAgICBcIkVhc3lFeGNlbCBcdTVCRkNcdTUxRkFcdTY1ODdcdTRFRjYubWRcIixcclxuICAgICAgXCJcdTU5ODJcdTRGNTVcdTU5MDRcdTc0MDYgQ29tcGxldGFibGVGdXR1cmUgXHU0RTJEXHU3Njg0XHU0RTI0XHU3OUNEXHU1RjAyXHU1RTM4KFx1NjY3QVx1ODBGREJJXHU5ODc5XHU3NkVFKS5tZFwiLFxyXG4gICAgICBcIlx1NTdGQVx1NEU4RSBTZXNzaW9uIFx1NUI5RVx1NzNCMFx1NzdFRFx1NEZFMVx1NzY3Qlx1NUY1NS5tZFwiLFxyXG4gICAgICBcIlN5bmNocm9uaXplZCBcdTUxNzNcdTk1MkVcdTVCNTdcdThCRTZcdTg5RTMubWRcIixcclxuICAgICAgXCJSZWRpc3Npb24gXHU4OUUzXHU5NTAxXHU1RjAyXHU1RTM4XHU4OUUzXHU1MUIzXHU2NUI5XHU2ODQ4Lm1kXCIsXHJcbiAgICAgIFwiXHU1QjlFXHU3M0IwXHU0RTNCXHU5ODk4XHU2MzYyXHU4MEE0KCBDU1MgXHU1M0Q4XHU5MUNGICsgXHU3QzdCXHU1NDBEXHU1MjA3XHU2MzYyKS5tZFwiLFxyXG4gICAgICBcIlNwcmluZ0Jvb3QgXHU2NTc0XHU1NDA4IE1pbmlvXHU1MTY4XHU2RDQxXHU3QTBCXHVGRjA4XHU0RUNFXHU1Qjg5XHU4OEM1IE1pbmlvIFx1NTIzMFx1NUU5NFx1NzUyOFx1RkYwOS5tZFwiLFxyXG4gICAgICBcIlx1MzAxMFJlZGlzXHU1RTk0XHU3NTI4XHUzMDExVVZcdTdFREZcdThCQTEubWRcIixcclxuICAgICAgXCJcdTMwMEFcdThEMkZcdTdBN0ZcdThCQkVcdThCQTFcdTZBMjFcdTVGMEZcdTMwMEJcdTdCMkNcdTRFMDlcdTY1QjlcdTc2N0JcdTVGNTVcdTVCOUVcdThERjVbXHU5NjQ0XHU1MjREXHU1NDBFXHU3QUVGXHU1QjhDXHU2NTc0XHU4RkM3XHU3QTBCXHU1M0NBXHU2RDRCXHU4QkQ1XS5tZFwiLFxyXG4gICAgICBcIldlYnNvY2tldC4rIFNwcmluZy1Tc2VFbWl0dGVyMyBcdTVCOUVcdTczQjBcdThCQUZcdTk4REVcdTY2MUZcdTcwNkJKYXZhXHU1QkEyXHU2MjM3XHU3QUVGLm1kXCIsXHJcbiAgICAgIFwiXHU3NTI4XHU1RTAzXHU5Njg2XHU4RkM3XHU2RUU0XHU1NjY4XHU1QjlFXHU3M0IwXHU2OEMwXHU2N0U1XHU3NTI4XHU2MjM3XHU1NDBEXHU2NjJGXHU1NDI2XHU1QjU4XHU1NzI4KFx1NzUyOFx1NjIzN1x1NkNFOFx1NTE4QykubWRcIixcclxuICAgICAgXCJTcHJpbmdTZWN1cml0eSBcdTY1NzRcdTU0MDggT2F1dGgyLm1kXCIsXHJcbiAgICAgIFwiXHU1MjREXHU3QUVGXHU1MjFEXHU1OUNCXHU1MzE2IEFudCBEZXNpZ24gUHJvIFx1N0IxNFx1OEJCMC5tZFwiLFxyXG4gICAgICBcIkxpdGVGbG93IFx1N0YxNlx1NjM5Mlx1NUYwRlx1N0YxNlx1N0EwQlx1N0I4MFx1NTM1NVx1NEVDQlx1N0VDRC5tZFwiLFxyXG4gICAgICBcIlx1NTdGQVx1NEU4RSBSZWRpcyBcdTVCOUVcdTczQjBcdTc3RURcdTRGRTFcdTc2N0JcdTVGNTUubWRcIixcclxuICAgICAgXCJNeVNRTCBcdTRFMDBcdTY4RjUgQiArIFx1NjgxMVx1NTNFRlx1NEVFNVx1NUI1OFx1NTkxQVx1NUMxMVx1Njc2MVx1NjU3MFx1NjM2RVx1RkYxRi5tZFwiLFxyXG4gICAgICBcIlNwcmluZ0Jvb3QgXHU2NTc0XHU1NDA4IEVMSyBcdTVCOUVcdTczQjBcdTY1RTVcdTVGRDdcdTkxQzdcdTk2QzZcdTRFMEVcdTc2RDFcdTYzQTcubWRcIixcclxuICAgICAgXCJcdTU3RkFcdTRFOEVcdTgxRUFcdTVCOUFcdTRFNDlcdTZDRThcdTg5RTNcdTc2ODQgUmVkaXNzb24gXHU1MjA2XHU1RTAzXHU1RjBGXHU5NTAxXHU1QjlFXHU3M0IwLm1kXCIsXHJcbiAgICAgIFwiXHU3M0E5XHU4RjZDXHU1RjAyXHU2QjY1XHU3RjE2XHU3QTBCXHU1MjI5XHU1NjY4IENvbXBsZXRhYmxlRnV0dXJlLm1kXCIsXHJcbiAgICAgIFwiXHU5MDFBXHU4RkM3IFdpbmRvd3MgXHU4MTFBXHU2NzJDXHU2MjY3XHU4ODRDXHU2MjUzXHU1MzA1XHU2NENEXHU0RjVDLm1kXCIsXHJcbiAgICAgIFwiXHU5NjNGXHU5MUNDXHU0RTkxXHU1QkY5XHU4QzYxXHU1QjU4XHU1MEE4IE9TUy5tZFwiLFxyXG4gICAgICBcIlx1NTQwRVx1N0FFRiBTcHJpbmcgQm9vdCBcdTRFMDdcdTc1MjhcdTZBMjFcdTY3N0ZcdTRGN0ZcdTc1MjgubWRcIixcclxuICAgICAgXCJcdTRGN0ZcdTc1MjggY2FuYWwgXHU1QjlFXHU3M0IwXHU1ODlFXHU5MUNGXHU4QkEyXHU5NjA1XHU1NDhDXHU2RDg4XHU4RDM5Lm1kXCIsXHJcbiAgICAgIFwiU3ByaW5nQm9vdCArIFF1YXJ0eiBcdTdCODBcdTY2MTNcdTVCOUFcdTY1RjZcdTRFRkJcdTUyQTEubWRcIixcclxuICAgICAgXCJTdHJpbmcgXHU3Njg0IGludGVybigpIFx1NjVCOVx1NkNENS5tZFwiLFxyXG4gICAgICBcIk15U1FMIFx1NUI1N1x1N0IyNlx1NEUzMlx1NjVFNVx1NjcxRlx1NjgzQ1x1NUYwRlx1OEY2Q1x1NjM2Mi5tZFwiLFxyXG4gICAgICBcImZhaWwtZmFzdCBcdTY3M0FcdTUyMzZcdTY2MkZcdTRFQzBcdTRFNDhcdUZGMUYubWRcIixcclxuICAgICAgXCJcdTUzNDFcdTc5Q0QgU1FMIFx1NzY4NFx1NTE5OVx1NkNENS5tZFwiLFxyXG4gICAgICBcIk15QmF0aXMgXHU2NTc0XHU1NDA4XHU1OTFBXHU2NTcwXHU2MzZFXHU2RTkwLm1kXCIsXHJcbiAgICAgIFwiMVx1NzlEMlx1NUMwNlx1NjcyQ1x1NTczMFNwcmluZ0Jvb3RcdTk4NzlcdTc2RUVqYXJcdTUzMDVcdTkwRThcdTdGNzJcdTUyMzBMaW51eFx1NzNBRlx1NTg4My5tZFwiLFxyXG4gICAgICBcIkRERCBcdTY2MkZcdTRFQzBcdTRFNDhcdUZGMUYubWRcIixcclxuICAgICAgXCJPcmFjbGVcdTUyMzBNeVNRTFx1NTFGRFx1NjU3MFx1NjZGRlx1NjM2Mlx1NjVCOVx1Njg0OFx1NkM0N1x1NjAzQi5tZFwiLFxyXG4gICAgICBcIlNwcmluZ2Jvb3QgXHU1RjE1XHU1MTY1IE5hY29zICggV2luZG93cyBcdTcyNDgpLm1kXCIsXHJcbiAgICAgIFwiXHU1MjI5XHU3NTI4XHU1QzQwXHU1N0RGXHU3RjUxXHU2NDJEXHU1RUZBXHU4NjVBXHU2MkRGXHU2NzNBXHU1QjlFXHU3M0IwXHU4QkJGXHU5NUVFXHU5ODc5XHU3NkVFLm1kXCIsXHJcbiAgICAgIFwiXHU2RDQ1XHU4QzA4IGNvb2tpZSBcdTU0OEMgc2Vzc2lvbi5tZFwiLFxyXG4gICAgICBcIlx1NzUyOCBRUSBcdTkwQUVcdTdCQjFcdTVCOUVcdTczQjBcdTlBOENcdThCQzFcdTc4MDFcdTUyOUZcdTgwRkQubWRcIixcclxuICAgICAgXCJSZWRpcyBcdTVCOUVcdTczQjBcdTY1ODdcdTdBRTBcdTcwQjlcdThENUVcdTUyOUZcdTgwRkQoXHU5NjQ0XHU1RTI2XHU1MjREXHU1NDBFXHU3QUVGXHU0RUUzXHU3ODAxXHUzMDAxXHU2NTcwXHU2MzZFXHU1RTkzKS5tZFwiLFxyXG4gICAgICBcIlx1OTYzRlx1OTFDQ1x1NEU5MVx1NzdFRFx1NEZFMVx1NjcwRFx1NTJBMVx1NUI5RVx1NzNCMFx1NjI0Qlx1NjczQVx1OUE4Q1x1OEJDMVx1NzgwMS5tZFwiLFxyXG4gICAgICBcIlx1MzAxMEFqYXhcdTMwMTFcdTVGMDJcdTZCNjVcdTkwMUFcdTRGRTEubWRcIixcclxuICAgICAgXCJcdTMwMTBcdThCQkVcdThCQTFcdTZBMjFcdTVGMEZcdTMwMTFcdTRFMDNcdTU5MjdcdThCQkVcdThCQTFcdTUzOUZcdTUyMTkubWRcIixcclxuICAgICAgXCJcdTY1ODdcdTdBRTBcdThCQzRcdThCQkFcdTUyOUZcdTgwRkRcdTUyNERcdTU0MEVcdTdBRUZcdTVCOUVcdTczQjBcdTY1QjlcdTY4NDhcdTYwM0JcdTdFRDMubWRcIixcclxuICAgICAgXCJcdTMwMTBcdTcyNDhcdTY3MkNcdTYzQTdcdTUyMzZcdTMwMTFHaXRcdTVGRUJcdTkwMUZcdTRFMEFcdTYyNEIubWRcIixcclxuICAgICAgXCJcdTMwMTBKYXZhXHU1N0ZBXHU3ODQwXHUzMDExXHU2RDg4XHU3MDZEXHU5QjU0XHU2Q0Q1XHU1MDNDLVx1NUUzOFx1OTFDRiZcdTY3OUFcdTRFM0VcdThCRTZcdThGRjAubWRcIixcclxuICAgICAgXCJNeVNRTCBcdTc2ODQgQ2hhciBcdTVFNzZcdTRFMERcdTRFMDBcdTVCOUFcdTY2MkZcdTVCOUFcdTk1N0YubWRcIixcclxuICAgICAgXCJUZXh0Q05OIFx1NjU4N1x1NjcyQ1x1NTIwNlx1N0M3Qlx1NkEyMVx1NTc4Qlx1NTcyOFx1NjU4N1x1N0FFMFx1OEJDNFx1OEJCQVx1NUJBMVx1NjgzOFx1NEUyRFx1NzY4NFx1NUI5RVx1NzNCMFx1NEUwRVx1OTBFOFx1N0Y3Mi5tZFwiLFxyXG4gICAgICBcIlx1NzQwNlx1ODlFMyBJTyBcdTU5MUFcdThERUZcdTU5MERcdTc1MjgubWRcIixcclxuICAgICAgXCJFbGFzdGljU2VhcmNoIFx1NTdGQVx1Nzg0MFx1Njk4Mlx1NUZGNVx1NEUwRVx1NTE2NVx1OTVFOFx1NEY3Rlx1NzUyOC5tZFwiLFxyXG4gICAgICBcIlx1NzQwNlx1ODlFM1x1OEZEQlx1N0EwQlx1RkYwQ1x1N0VCRlx1N0EwQlx1RkYwQ1x1NTM0Rlx1N0EwQi5tZFwiLFxyXG4gICAgICBcIlx1NzQwNlx1ODlFM1x1NTM5Rlx1NzgwMVx1MzAwMVx1NTNDRFx1NzgwMVx1MzAwMVx1ODg2NVx1NzgwMS5tZFwiLFxyXG4gICAgICBcIlx1NUI5QVx1NEU0OUFQSVx1NUU3Nlx1NzUxRlx1NjIxMFx1NEVFM1x1NzgwMVx1RkYwOCBHbyBcdTVGQUVcdTY3MERcdTUyQTFcdTY4NDZcdTY3QjYgS3JhdG9zIFx1RkYwOS5tZFwiLFxyXG4gICAgICBcIlx1NEY3Rlx1NzUyOFx1NUJGOVx1OEM2MVx1NUI1OFx1NTBBOFx1NUI5RVx1NzNCMFx1NjU4N1x1NEVGNlx1NEUwQVx1NEYyMFx1NEUwQlx1OEY3RC5tZFwiLFxyXG4gICAgICBcIk1hcmtEb3duIFx1NjU4N1x1NjcyQ1x1ODlFM1x1Njc5MFx1NjIxMCBIVE1MIFx1NUU3Nlx1NzUxRlx1NjIxMFx1NTkyN1x1N0VCMi5tZFwiLFxyXG4gICAgICBcIjEwIFx1NTIwNlx1OTQ5Rlx1NUZFQlx1OTAxRlx1NjQxRVx1NjFDMiBMYW1iZGEgXHU4ODY4XHU4RkJFXHU1RjBGLm1kXCIsXHJcbiAgICAgIFwiU3ByaW5nQm9vdCBcdTk4NzlcdTc2RUVcdTRFMkRcdTVGRUJcdTkwMUZcdTVGMTVcdTUxNjUgUmFiYml0IE1RIFx1OTAxQVx1NzUyOFx1NTA1QVx1NkNENS5tZFwiLFxyXG4gICAgICBcIk9KIFx1N0FERVx1OEQ1Qlx1NjM5Mlx1ODg0Q1x1Njk5Q1x1N0VERlx1OEJBMVx1OTAzQlx1OEY5MVx1OEJCRVx1OEJBMVx1NEUwRVx1NEVFM1x1NzgwMVx1NUI5RVx1NzNCMC5tZFwiLFxyXG4gICAgICBcIlx1NTkxQVx1OEJFRFx1OEEwMFx1NEVFM1x1NzgwMVx1NkM5OVx1N0JCMVx1NzY4NFx1OEJCRVx1OEJBMVx1NEUwRVx1NUI5RVx1NzNCMChPSiBcdTU3MjhcdTdFQkZcdTUyMjRcdTk4OThcdTdDRkJcdTdFREYpLm1kXCIsXHJcbiAgICAgIFwiSmF2YSA4IFx1NjVCMFx1NzI3OVx1NjAyN1x1RkYxQVN0cmVhbSBcdTZENDFcdTVGRUJcdTkwMUZcdTUxNjVcdTk1RTgubWRcIixcclxuICAgICAgXCJcdTRGN0ZcdTc1MjggTlZNIFx1NUZFQlx1NjM3N1x1N0JBMVx1NzQwNiBOb2RlIFx1NzI0OFx1NjcyQ1x1RkYwOFdpblx1NzI0OFx1RkYwOS5tZFwiLFxyXG4gICAgICBcIlZ1ZTMgXHU1RkVCXHU5MDFGXHU1QjlFXHU3M0IwXHU2NTg3XHU0RUY2XHU0RTBBXHU0RjIwIE9TUy5tZFwiLFxyXG4gICAgICBcIlx1NTk4Mlx1NEY1NVx1ODlFM1x1NTFCM1x1N0YxM1x1NUI1OFx1NTFGQlx1N0E3Rlx1RkYxRi5tZFwiLFxyXG4gICAgICBcIlJhYmJpdE1RXHU0RTAwXHU2QjdCXHU0RkUxXHU5NjFGXHU1MjE3XHU0RUNCXHU3RUNEXHU1NDhDXHU1RTk0XHU3NTI4Lm1kXCIsXHJcbiAgICAgIFwiXHU4QkU2XHU4OUUzIFNwcmluZ0Jvb3QgXHU4MUVBXHU1QjlBXHU0RTQ5IFN0YXJ0ZXIubWRcIixcclxuICAgICAgXCJcdTRFQ0VcdTgwNUFcdTU0MDhcdTY0MUNcdTdEMjJcdTk4NzlcdTc2RUVcdTg5QzZcdTg5RDJcdTUxNjVcdTk1RTggRWxhc3RpY1NlYXJjaC5tZFwiLFxyXG4gICAgICBcIlx1NUUzOFx1NzUyOFx1NzY4NFx1NjAyN1x1ODBGRFx1NEYxOFx1NTMxNlx1NjVCOVx1NkNENS5tZFwiLFxyXG4gICAgICBcIlx1NUUzOFx1NzUyOFx1NzY4NFx1NUI1OFx1NTBBOFx1NEYxOFx1NTMxNlx1NjVCOVx1NkNENS5tZFwiLFxyXG4gICAgICBcIkphdmEgXHU1QjlFXHU3M0IwIEdpdEh1YiBcdTdCMkNcdTRFMDlcdTY1QjlcdTc2N0JcdTVGNTVcdThCRTZcdTg5RTMubWRcIixcclxuICAgICAgXCJcdTRGMTlcdTRGMzRcdTUzMzlcdTkxNERcdTVGMTVcdTUxNjUgR0VPIFx1NUI5RVx1NzNCMFx1NjQxQ1x1N0QyMlx1OTY0NFx1OEZEMVx1NzUyOFx1NjIzNy5tZFwiLFxyXG4gICAgICBcIlx1OEJCRVx1OEJBMVx1NkEyMVx1NUYwRlx1NUI5RVx1OERGNVx1RkYwOE9KXHU1MjI0XHU5ODk4XHU1NDhDXHU4MDVBXHU1NDA4XHU2NDFDXHU3RDIyKS5tZFwiLFxyXG4gICAgICBcIlx1NkEyMVx1Njc3Rlx1NUYxNVx1NjRDRS1UaHltZWxlYWZcdTRFMEVGcmVlbWFya2VyLm1kXCIsXHJcbiAgICAgIFwiXHU2RDc3XHU5MUNGXHU2NTcwXHU2MzZFXHU1NzNBXHU2NjZGXHU5NzYyXHU4QkQ1XHU5ODk4XHVGRjFBXHU1MUZBXHU3M0IwXHU5ODkxXHU3Mzg3XHU2NzAwXHU5QUQ4XHU3Njg0IDEwMCBcdTRFMkFcdThCQ0QubWRcIixcclxuICAgICAgXCJcdTZERjFcdTUxNjVcdTRFODZcdTg5RTNcdThGREJcdTdBMEJcdTU0OENcdTdFQkZcdTdBMEJcdUZGMUFcdTY5ODJcdTVGRjVcdTMwMDFcdTUzM0FcdTUyMkJcdTU0OENcdTRGMThcdTUzMTYubWRcIixcclxuICAgICAgXCJXZWJTb2NrZXQgXHU1MjREXHU1NDBFXHU3QUVGXHU4MDU0XHU4QzAzXHU0RjdGXHU3NTI4Lm1kXCIsXHJcbiAgICAgIFwiXHU1RTc2XHU1M0QxXHU5NUVFXHU5ODk4XHU3Njg0XHU0RTA5XHU1OTI3XHU2ODM5XHU2RTkwXHU2NjJGXHU0RUMwXHU0RTQ4XHVGRjFGLm1kXCIsXHJcbiAgICAgIFwiXHU1N0ZBXHU0RThFIEdBIFx1OTA1N1x1NEYyMFx1N0I5N1x1NkNENVx1NzY4NFx1NjY3QVx1ODBGRFx1N0VDNFx1OTg5OFx1NkEyMVx1NTc1N1x1NzY4NFx1OEJCRVx1OEJBMVx1NEUwRVx1NUU5NFx1NzUyOC5tZFwiLFxyXG4gICAgICBcIlx1NEY3Rlx1NzUyOCBBT1ArXHU4MUVBXHU1QjlBXHU0RTQ5XHU2Q0U4XHU4OUUzXHU1QjlFXHU3M0IwXHU2NUU1XHU1RkQ3XHU2MjUzXHU1MzcwLm1kXCIsXHJcbiAgICAgIFwiSGV4bytHaXRodWIrTmV0bGlmeVx1NTM1QVx1NUJBMlx1NjQyRFx1NUVGQVx1NjU1OVx1N0EwQi5tZFwiLFxyXG4gICAgICBcIlx1NEVDMFx1NEU0OFx1NjYyRlx1NjNBNVx1NTNFM1x1NzY4NFx1NUU0Mlx1N0I0OVx1NjAyN1x1RkYwQ1x1NTk4Mlx1NEY1NVx1NEZERFx1OEJDMVx1NjNBNVx1NTNFM1x1NzY4NFx1NUU0Mlx1N0I0OVx1NjAyN1x1RkYxRi5tZFwiLFxyXG4gICAgICBcIkRUT1x1OEY2Q1ZPXHU1REU1XHU1MTc3Lm1kXCIsXHJcbiAgICAgIFwiXHU2M0QwXHU3OTNBXHU1REU1XHU3QTBCXHU4RkRCXHU5NjM2XHU2MjgwXHU1REU3XHVGRjA4XHU1OTI3XHU2QTIxXHU1NzhCXHVGRjA5Lm1kXCIsXHJcbiAgICAgIFwiTWluSU8rRG9ja2VyIFx1NEVDRVx1OTZGNlx1NjQyRFx1NUVGQVx1NEUwMFx1NEUyQVx1NjU4N1x1NEVGNlx1NUI1OFx1NTBBOFx1NjcwRFx1NTJBMS5tZFwiLFxyXG4gICAgICAgXCJNeVNRTDggXHU3RUZGXHU4MjcyXHU3MjQ4XHU1Qjg5XHU4OEM1Lm1kXCIsXHJcbiAgICAgIFwiSURFQStEb2NrZXJcdThGRENcdTdBMEJcdTkwRThcdTdGNzJTcHJpbmdCb290XHU5ODc5XHU3NkVFLm1kXCIsXHJcbiAgICAgIFwiXHU1MUZEXHU2NTcwXHU1RjBGXHU2M0E1XHU1M0UzXHU3Njg0XHU0RjdGXHU3NTI4Lm1kXCIsXHJcbiAgICAgIFwiXHU5NzYyXHU4QkQ1XHU4RDg1XHU5QUQ4XHU5ODkxXHU4MDAzXHU3MEI5XHVGRjFBSGFzaE1hcCBcdTZFOTBcdTc4MDFcdTkwMTBcdTg4NENcdTg5RTNcdTY3OTAubWRcIixcclxuICAgICAgXCJNeVNRTFx1NTdGQVx1Nzg0MFx1NzdFNVx1OEJDNlx1RkYxQURETFx1MzAwMURNTFx1MzAwMURRTFx1MzAwMURDTFx1NTNDQVRQTFx1NzY4NFx1NEY3Rlx1NzUyOC5tZFwiLFxyXG4gICAgICBcIlNwcmluZ0Jvb3RcdTkwMUFcdThGQzdcdTgxRUFcdTVCOUFcdTRFNDlcdTZDRThcdTg5RTNcdTVCOUVcdTczQjBcdTU5MUFcdTY1NzBcdTYzNkVcdTZFOTAubWRcIixcclxuICAgICAgXCJJREVBIFx1NTQwQ1x1NjVGNlx1NTE3M1x1ODA1NCBHaXRIdWIgXHU1NDhDIEdpdGVlIFx1OEZEQ1x1N0EwQlx1NEVEM1x1NUU5My5tZFwiLFxyXG4gICAgICBcIlx1N0YxM1x1NUI1OFx1N0E3Rlx1OTAwRlx1MzAwMVx1N0YxM1x1NUI1OFx1NTFGQlx1N0E3Rlx1MzAwMVx1N0YxM1x1NUI1OFx1OTZFQVx1NUQyOVx1NzY4NFx1NTczQVx1NjY2Rlx1NEVFNVx1NTNDQVx1ODlFM1x1NTFCM1x1NjVCOVx1NkNENS5tZFwiLFxyXG4gICAgICBcIlx1NzJCNlx1NjAwMVx1NjczQVx1Njk4Mlx1NUZGNVx1NEVFNVx1NTNDQVx1NEY3Rlx1NzUyOC5tZFwiXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcbiIsICJleHBvcnQgZGVmYXVsdCBbXHJcbiAgXCJcIixcclxuICB7XHJcbiAgICB0aXRsZTogXCJcdTVCNjZcdTRFNjBcdThERUZcdTdFQkZcIixcclxuICAgIGNvbGxhcHNhYmxlOiBmYWxzZSxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIFwiSmF2YVx1NUI2Nlx1NEU2MFx1OERFRlx1N0VCRiBieSBcdTdBMEJcdTVFOEZcdTU0NThcdTlDN0NcdTc2QUUubWRcIixcclxuICAgICAgXCJcdTUyNERcdTdBRUZcdTVCNjZcdTRFNjBcdThERUZcdTdFQkYgYnkgXHU3QTBCXHU1RThGXHU1NDU4XHU5QzdDXHU3NkFFLm1kXCIsXHJcbiAgICAgIFwiQysrXHU1QjY2XHU0RTYwXHU4REVGXHU3RUJGIGJ5IFx1N0EwQlx1NUU4Rlx1NTQ1OFx1OUM3Q1x1NzZBRS5tZFwiLFxyXG4gICAgICBcIlB5dGhvblx1NUI2Nlx1NEU2MFx1OERFRlx1N0VCRiBieSBcdTdBMEJcdTVFOEZcdTU0NThcdTlDN0NcdTc2QUUubWRcIixcclxuICAgICAgXCJcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODRcdTU0OENcdTdCOTdcdTZDRDVcdTVCNjZcdTRFNjBcdThERUZcdTdFQkYgYnkgXHU3QTBCXHU1RThGXHU1NDU4XHU5QzdDXHU3NkFFLm1kXCIsXHJcbiAgICAgIFwiU1FMXHU1MTREXHU4RDM5XHU1QjlFXHU2MjE4XHU4MUVBXHU1QjY2XHU3RjUxXHU3QUQ5IGJ5IFx1N0EwQlx1NUU4Rlx1NTQ1OFx1OUM3Q1x1NzZBRS5tZFwiLFxyXG4gICAgICBcIlx1OEJBMVx1N0I5N1x1NjczQVx1NTdGQVx1Nzg0MFx1NUI2Nlx1NEU2MFx1OERFRlx1N0VCRiBieSBcdTdBMEJcdTVFOEZcdTU0NThcdTlDN0NcdTc2QUUubWRcIixcclxuICAgICAgXCJHaXQmR2l0SHViXHU1QjY2XHU0RTYwXHU4REVGXHU3RUJGIGJ5IFx1N0EwQlx1NUU4Rlx1NTQ1OFx1OUM3Q1x1NzZBRS5tZFwiLFxyXG4gICAgICBcIlx1OEJCRVx1OEJBMVx1NkEyMVx1NUYwRlx1NUI2Nlx1NEU2MFx1OERFRlx1N0VCRiBieSBcdTdBMEJcdTVFOEZcdTU0NThcdTlDN0NcdTc2QUUubWRcIixcclxuICAgICAgXCJMaW51eFx1NUI2Nlx1NEU2MFx1OERFRlx1N0VCRiBieSBcdTdBMEJcdTVFOEZcdTU0NThcdTlDN0NcdTc2QUUubWRcIixcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuIiwgImV4cG9ydCBkZWZhdWx0IFtcclxuICBcIlwiLFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlx1OTg3OVx1NzZFRVx1NUI5RVx1NjIxOFwiLFxyXG4gICAgY29sbGFwc2FibGU6IGZhbHNlLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAgXCJcdTlDN0NcdTc2QUVcdTk4NzlcdTc2RUVcdTVCNjZcdTRFNjBcdTVFRkFcdThCQUVcdUZGMDhcdTVGQzVcdThCRkJcdUZGMDkubWRcIixcclxuICAgICAgXCJBSSBcdTdCNTRcdTk4OThcdTVFOTRcdTc1MjhcdTVFNzNcdTUzRjAubWRcIixcclxuICAgICAgXCJcdTRFRTNcdTc4MDFcdTc1MUZcdTYyMTBcdTU2NjhcdTUxNzFcdTRFQUJcdTVFNzNcdTUzRjAubWRcIixcclxuICAgICAgXCJcdTYyNEJcdTUxOTkgUlBDIFx1Njg0Nlx1NjdCNi5tZFwiLFxyXG4gICAgICBcIk9KIFx1NTIyNFx1OTg5OFx1N0NGQlx1N0VERi5tZFwiLFxyXG4gICAgICBcIlx1NjY3QVx1ODBGRCBCSSBcdTVFNzNcdTUzRjAubWRcIixcclxuICAgICAgXCJcdTgwNUFcdTU0MDhcdTY0MUNcdTdEMjJcdTVFNzNcdTUzRjAubWRcIixcclxuICAgICAgXCJBUEkgXHU1RjAwXHU2NTNFXHU1RTczXHU1M0YwLm1kXCIsXHJcbiAgICAgIFwiXHU0RjE5XHU0RjM0XHU1MzM5XHU5MTREXHU3Q0ZCXHU3RURGLm1kXCIsXHJcbiAgICAgIFwiXHU3NTI4XHU2MjM3XHU0RTJEXHU1RkMzXHU5ODc5XHU3NkVFLm1kXCIsXHJcbiAgICAgIFwiSmF2YSBcdTU0MEVcdTdBRUZcdTRFMDdcdTc1MjhcdTk4NzlcdTc2RUVcdTZBMjFcdTY3N0YubWRcIixcclxuICAgICAgXCJcdTUyNERcdTdBRUZcdTRFMDdcdTc1MjhcdTk4NzlcdTc2RUVcdTZBMjFcdTY3N0YubWRcIixcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuIiwgImV4cG9ydCBkZWZhdWx0IFtcclxuICBcIlwiLFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlx1N0YxNlx1N0EwQlx1NUI2Nlx1NEU2MFwiLFxyXG4gICAgY29sbGFwc2FibGU6IGZhbHNlLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAgXCJcdTU0MEVcdTdBRUZcdTdBODFcdTUxRkIgLSBcdTcyQzJcdTk4RDlcdTU0MEVcdTdBRUZcdThCQURcdTdFQzNcdTg0MjUubWRcIixcclxuICAgICAgXCJcdTUyNERcdTdBRUZcdTdBODFcdTUxRkIgLSBcdTUyNERcdTdBRUZcdTk3NjJcdThCRDVcdThCQURcdTdFQzNcdTg0MjUubWRcIixcclxuICAgICAgXCJcdTgwMDNcdTc4MTRcdTk2NkFcdThERDEgLSBcdTdGMTZcdTdBMEJcdTVCRkNcdTgyMkFcdThCQTFcdTcyRDdcdTRFMEFcdTVDQjgubWRcIixcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJcdTVCOUVcdTc1MjhcdTVERTVcdTUxNzdcIixcclxuICAgIGNvbGxhcHNhYmxlOiBmYWxzZSxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIFwiXHU2QzQyXHU4MDRDIC0gXHU1RTJFXHU0RjYwXHU1MTk5XHU1OTdEXHU3QjgwXHU1Mzg2XHU3Njg0XHU3OTVFXHU1NjY4Lm1kXCIsXHJcbiAgICAgIFwiXHU0RUE3XHU1NEMxL1x1OUM3Q1x1ODA2QVx1NjYwRS9cdTVERTVcdTUxNzcgLSBcdTY1RTBcdTk1RThcdTY5REIgQUkgXHU1QkY5XHU4QkREXHU3RUQ4XHU3NTNCXHU3OTVFXHU1NjY4XCIsXHJcbiAgICAgIFwiXHU0RUE3XHU1NEMxL1x1NEVFM1x1NzgwMVx1NUMwRlx1NjI4NC9cdTVERTVcdTUxNzcgLSBcdTdCODBcdTUzNTVcdTY2MTNcdTc1MjhcdTc2ODRcdTRFRTNcdTc4MDFcdTUyMDZcdTRFQUJcdTc5NUVcdTU2NjhcIixcclxuICAgICAgXCJcdTRFQTdcdTU0QzEvXHU1MjZBXHU1MjA3XHU2NzdGXHU1MkE5XHU2MjRCL1x1NURFNVx1NTE3NyAtIFx1OUFEOFx1OTg5Q1x1NTAzQ1x1NzY4NFx1NTI2QVx1NTIwN1x1Njc3Rlx1NTJBOVx1NjI0QlwiXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcbiIsICJleHBvcnQgZGVmYXVsdCBbXHJcbiAgXCJcIixcclxuICB7XHJcbiAgICB0aXRsZTogXCJcdTU5MjdcdTVCNjZcdTdFQ0ZcdTUzODZcIixcclxuICAgIGNvbGxhcHNhYmxlOiB0cnVlLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAgXCJcdTU5MjdcdTVCNjZcdTdFQ0ZcdTUzODYvXHU2MjExXHU1QjY2XHU4QkExXHU3Qjk3XHU2NzNBXHU3Njg0XHU1NkRCXHU1RTc0XHVGRjBDXHU1MTcxXHU1MkM5XHVGRjAxLm1kXCIsXHJcbiAgICAgIFwiXHU1OTI3XHU1QjY2XHU3RUNGXHU1Mzg2L1x1NEVDRVx1NTkyN1x1NUI2Nlx1NTIzMFx1NzlDQlx1NjJEQlx1RkYwQ1x1NjIxMVx1NTk4Mlx1NEY1NVx1NjJGRlx1NEUwQlx1ODE3RVx1OEJBRm9mZmVyLm1kXCIsXHJcbiAgICAgIFwiXHU1OTI3XHU1QjY2XHU3RUNGXHU1Mzg2L1x1NTkyN1x1NUI2Nlx1RkYwQ1x1NjIxMVx1NjYyRlx1NjAwRVx1NEU0OFx1OEZCOVx1NUI2Nlx1N0YxNlx1N0EwQlx1OEZCOVx1OEQ1QVx1OTRCMVx1NzY4NFx1RkYxRi5tZFwiLFxyXG4gICAgICBcIlx1NTkyN1x1NUI2Nlx1N0VDRlx1NTM4Ni9cdTYyMTFcdTU5MjdcdTRFMDlcdTY1RjZcdTUwNUFcdTc2ODRcdTdGOUVcdTgwM0JcdTk4NzlcdTc2RUVcdUZGMDEubWRcIixcclxuICAgICAgXCJcdTU5MjdcdTVCNjZcdTdFQ0ZcdTUzODYvXHU5QzdDXHU3NkFFXHU3Njg0XHU4MDAzXHU4QkMxXHU3RUNGXHU1Mzg2Lm1kXCIsXHJcbiAgICAgIFwiXHU1OTI3XHU1QjY2XHU3RUNGXHU1Mzg2L1x1OUM3Q1x1NzZBRVx1NTcyOFx1NUI5RVx1OUE4Q1x1NUJBNFx1NTFGQVx1NzI0OFx1NjU1OVx1Njc1MFx1NzY4NFx1N0VDRlx1NTM4Ni5tZFwiLFxyXG4gICAgICBcIlx1NTkyN1x1NUI2Nlx1N0VDRlx1NTM4Ni9cdTlDN0NcdTc2QUVcdTc2ODRcdTZCRDVcdTRFMUFcdThCQkVcdThCQTFcdUZGMENcdTY1RjZcdTk2OTRcdTRFMDBcdTVFNzRcdUZGMENcdTRFQ0RcdTYxMUZcdTg5QzlcdTU5MzRcdTc5QzMubWRcIixcclxuICAgICAgXCJcdTU5MjdcdTVCNjZcdTdFQ0ZcdTUzODYvXHU5QzdDXHU3NkFFXHU3Njg0XHU2QkQ1XHU0RTFBXHU2MTFGXHU1M0Q3Lm1kXCIsXHJcbiAgICAgIFwiXHU1OTI3XHU1QjY2XHU3RUNGXHU1Mzg2L1x1OUM3Q1x1NzZBRVx1ODQzRFx1NjIzN1x1NEUwQVx1NkQ3N1x1NUZDM1x1NUY5Ny5tZFwiXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiXHU2QzQyXHU4MDRDXHU3RUNGXHU1Mzg2XCIsXHJcbiAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIFwiXHU2QzQyXHU4MDRDXHU3RUNGXHU1Mzg2L1x1NjIxMVx1NzY4NFx1N0IyQ1x1NEUwMFx1NEVGRFx1NUI5RVx1NEU2MFx1RkYwQ1x1NTc1MFx1OUFEOFx1OTRDMVx1NEUwQVx1NzNFRC5tZFwiLFxyXG4gICAgICBcIlx1NkM0Mlx1ODA0Q1x1N0VDRlx1NTM4Ni9cdTYyMTFcdTc2ODRcdTdCMkNcdTRFOENcdTRFRkRcdTVCOUVcdTRFNjBcdUZGMENcdTVCNTdcdTgyODJcdThERjNcdTUyQTgubWRcIixcclxuICAgICAgXCJcdTZDNDJcdTgwNENcdTdFQ0ZcdTUzODYvXHU0RUQ2XHU0RTEzXHU0RTFBXHU3QjJDXHU0RTAwXHVGRjBDXHU1Mzc0XHU2MjdFXHU0RTBEXHU1MjMwXHU1REU1XHU0RjVDLm1kXCIsXHJcbiAgICAgIFwiXHU2QzQyXHU4MDRDXHU3RUNGXHU1Mzg2L1x1OTc2Mlx1OEJENVx1OTYzRlx1OTFDQzZcdTZCMjFcdUZGMENcdTRFQ0RcdTcxMzZcdTU5MzFcdThEMjVcdTc2ODRcdTdFQ0ZcdTUzODYubWRcIlxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlx1ODA0Q1x1NTczQVx1NURFNVx1NEY1Q1wiLFxyXG4gICAgY29sbGFwc2FibGU6IHRydWUsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICBcIlx1ODA0Q1x1NTczQVx1NURFNVx1NEY1Qy9KYXZhXHU1RjAwXHU1M0QxXHU4MDA1XHU1REU1XHU0RjVDXHU5MEZEXHU1MDVBXHU0RUMwXHU0RTQ4XHVGRjFGLm1kXCIsXHJcbiAgICAgIFwiXHU4MDRDXHU1NzNBXHU1REU1XHU0RjVDL1x1NjIxMVx1NEVDRVx1NUJGQ1x1NUUwOFx1OEVBQlx1NEUwQVx1NUI2Nlx1NTIzMFx1NEU4Nlx1NEVDMFx1NEU0OFx1RkYxRi5tZFwiLFxyXG4gICAgICBcIlx1ODA0Q1x1NTczQVx1NURFNVx1NEY1Qy9cdTYyMTFcdTU3MjhcdTgxN0VcdThCQUZcdTc2ODRcdThCRDVcdTc1MjhcdTY3MUZcdTYwM0JcdTdFRDMubWRcIixcclxuICAgICAgXCJcdTgwNENcdTU3M0FcdTVERTVcdTRGNUMvXHU2MjExXHU1NzI4XHU4MTdFXHU4QkFGXHU1NDhDXHU1QjU3XHU4MjgyXHU3Njg0XHU1REU1XHU0RjVDXHU2MTFGXHU1M0Q3Lm1kXCIsXHJcbiAgICAgIFwiXHU4MDRDXHU1NzNBXHU1REU1XHU0RjVDL1x1NjIxMVx1NTM0N1x1N0VBN1x1NEUzQVx1NEU5MVx1NUYwMFx1NTNEMVx1OUFEOFx1N0VBN1x1NUUwM1x1OTA1M1x1NUUwOFx1NTU2Ni5tZFwiLFxyXG4gICAgICBcIlx1ODA0Q1x1NTczQVx1NURFNVx1NEY1Qy9cdTYyMTFcdTUxNjVcdTgwNENcdTRFMDBcdTVFNzRcdTc2ODRcdTYxMUZcdTUzRDcubWRcIixcclxuICAgICAgXCJcdTgwNENcdTU3M0FcdTVERTVcdTRGNUMvXHU3OUJCXHU1RjAwXHU1QjY2XHU2ODIxXHU1NDBFXHVGRjBDXHU2MjExXHU2MjREXHU2NjBFXHU3NjdELm1kXCIsXHJcbiAgICAgIFwiXHU4MDRDXHU1NzNBXHU1REU1XHU0RjVDL1x1NjIxMVx1ODNCN1x1NUY5N1x1NEU4Nlx1ODE3RVx1OEJBRlx1NTE4NVx1OTBFOFx1N0FERVx1OEQ1Qlx1N0IyQ1x1NEUwMFx1NTQwRFx1RkYwMS5tZFwiLFxyXG4gICAgICBcIlx1ODA0Q1x1NTczQVx1NURFNVx1NEY1Qy9cdTlDN0NcdTc2QUVcdThGRDlcdTRFMkFcdTY3MDhcdTVDMzFcdTUxOTlcdTRFODZcdThGRDlcdTcwQjlcdTUxM0ZcdTRFRTNcdTc4MDFcdUZGMUYubWRcIixcclxuICAgICAgXCJcdTgwNENcdTU3M0FcdTVERTVcdTRGNUMvXHU4RkQ5XHU1NDY4XHU2Q0ExXHU1MTk5XHU0RUUzXHU3ODAxXHVGRjBDXHU3QURGXHU3MTM2XHU1NzI4XHU1MDVBXHU4RkQ5XHU0RUY2XHU0RThCXHVGRjAxLm1kXCIsXHJcbiAgICAgIFwiXHU4MDRDXHU1NzNBXHU1REU1XHU0RjVDL1x1NURFNVx1NEY1Q1x1NTQwRVx1RkYwQ1x1NjIxMVx1NTc1QVx1NjMwMVx1NEU4Nlx1NTkxQVx1NUU3NFx1NzY4NFx1NEU2MFx1NjBFRi5tZFwiLFxyXG4gICAgICBcIlx1ODA0Q1x1NTczQVx1NURFNVx1NEY1Qy9cdThGNkNcdTg4NENcdTU5MjdcdTY1NzBcdTYzNkUxXHU0RTJBXHU2NzA4XHVGRjBDXHU2MjExXHU5RUJCXHU0RTg2XHUzMDAyXHUzMDAyXHUzMDAyLm1kXCIsXHJcbiAgICAgIFwiXHU4MDRDXHU1NzNBXHU1REU1XHU0RjVDL1x1NTkyN1x1NTM4Mlx1NTA1QVx1N0EwQlx1NUU4Rlx1NTQ1OFx1NEUyNFx1NUU3NFx1NTM0QVx1RkYwQ1x1NjIxMVx1N0VDOFx1NEU4RVx1NUI2Nlx1NEYxQVx1NEU4Nlx1MzAwMlx1MzAwMlx1MzAwMi5tZFwiLFxyXG4gICAgICBcIlx1ODA0Q1x1NTczQVx1NURFNVx1NEY1Qy9cdTUxOERcdTg5QzFcdTRFODZcdUZGMENcdTgxN0VcdThCQUZcdUZGMDEubWRcIixcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJcdTUyMUJcdTRGNUNcdTdFQ0ZcdTUzODZcIixcclxuICAgIGNvbGxhcHNhYmxlOiB0cnVlLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAgXCJcdTUyMUJcdTRGNUNcdTdFQ0ZcdTUzODYvXHU2QkQ1XHU0RTFBXHU4RkQ5XHU1RTc0XHVGRjBDXHU2MjExXHU2MjEwXHU0RTNBXHU0RTg2XHU0RTAwXHU1NDBEVVBcdTRFM0IubWRcIixcclxuICAgICAgXCJcdTUyMUJcdTRGNUNcdTdFQ0ZcdTUzODYvXHU2MjExXHU0RTVGXHU2MkU1XHU2NzA5XHU0RTg2MTBcdTRFMDdcdTdDODlcdTRFMUQubWRcIixcclxuICAgICAgXCJcdTUyMUJcdTRGNUNcdTdFQ0ZcdTUzODYvMTB3XHU3Qzg5XHU0RTFEXHVGRjBDXHU2MjExXHU1Mzc0XHU1NEVEXHU0RTg2Lm1kXCIsXHJcbiAgICAgIFwiXHU1MjFCXHU0RjVDXHU3RUNGXHU1Mzg2L1x1OUM3Q1x1NzZBRVx1NURFNVx1NEY1QytcdTUyMUJcdTRGNUNcdTc2ODRcdTY1RTVcdTVFMzhcdTc1MUZcdTZEM0IubWRcIixcclxuICAgICAgXCJcdTUyMUJcdTRGNUNcdTdFQ0ZcdTUzODYvXHU0RThDXHU1MzQxXHU1NkRCLm1kXCIsXHJcbiAgICAgIFwiXHU1MjFCXHU0RjVDXHU3RUNGXHU1Mzg2L1x1NEVDQVx1NTkyOVx1RkYwQ1x1NjIxMVx1ODk4MVx1NjQxRVx1NEVGNlx1NTkyN1x1NEU4Qlx1RkYwMS5tZFwiLFxyXG4gICAgICBcIlx1NTIxQlx1NEY1Q1x1N0VDRlx1NTM4Ni9cdTYyMTFcdTRFRUNcdTY0MUVcdTRFODZcdTRFRjZcdTU5MjdcdTRFOEJcdUZGMDEubWRcIixcclxuICAgICAgXCJcdTUyMUJcdTRGNUNcdTdFQ0ZcdTUzODYvXHU0RTAwXHU2QjIxXHU1Rjg4XHU2MTBGXHU1OTE2XHU3Njg0XHU3RjUxXHU3QUQ5XHU2NTQ1XHU5NjlDXHU3RUNGXHU1Mzg2XHUzMDAyLm1kXCIsXHJcbiAgICAgIFwiXHU1MjFCXHU0RjVDXHU3RUNGXHU1Mzg2L1x1NEUwMFx1NkIyMVx1OTc2Mlx1NTQxMVVQXHU0RTNCXHU3Njg0XHU1NkUyXHU1RUZBLm1kXCIsXHJcbiAgICAgIFwiXHU1MjFCXHU0RjVDXHU3RUNGXHU1Mzg2L1x1MjAxQ1x1ODAwMVx1NUUwOFx1RkYwQ1x1NjIxMVx1OEMyMlx1OEMyMlx1NEY2MFx1RkYwMVx1MjAxRC5tZFwiLFxyXG4gICAgICBcIlx1NTIxQlx1NEY1Q1x1N0VDRlx1NTM4Ni9cdTYyMTFcdTg4QUJcdTY3MDBcdTYwNjhcdTc2ODRcdTUxNkNcdTUzRjhcdTkxQzdcdThCQkZcdTRFODZcdUZGMDEubWRcIixcclxuICAgICAgXCJcdTUyMUJcdTRGNUNcdTdFQ0ZcdTUzODYvXHU1RTJFXHU5NjNGXHU5MUNDXHU0RTkxXHU2MkM5XHU2NUIwNzAwMFx1NEVCQVx1RkYwQ1x1NjIxMVx1OEY5M1x1NzY4NFx1NUY4OFx1NUY3Qlx1NUU5NVx1RkYwMS5tZFwiLFxyXG4gICAgICBcIlx1NTIxQlx1NEY1Q1x1N0VDRlx1NTM4Ni9cdTdGNTFcdTdBRDlcdTUzQzhcdTg4QUJcdTY1M0JcdTUxRkJcdUZGMENcdTYyMTFcdTVGQzNcdTYwMDFcdTVEMjlcdTRFODYubWRcIixcclxuICAgICAgXCJcdTUyMUJcdTRGNUNcdTdFQ0ZcdTUzODYvXHU2NzY1XHU0RTg2XHU2NzY1XHU0RTg2XHVGRjAxLm1kXCIsXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiXHU1MjFCXHU0RTFBXHU3RUNGXHU1Mzg2XCIsXHJcbiAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIFwiXHU1MjFCXHU0RTFBXHU3RUNGXHU1Mzg2L1x1NTE2Q1x1NTNGOFx1NTkyQVx1N0EzM1x1NUI5QVx1NEU4Nlx1RkYwMVx1NjIxMVx1NTk3RFx1NjE0Qy5tZFwiLFxyXG4gICAgICBcIlx1NTIxQlx1NEUxQVx1N0VDRlx1NTM4Ni9cdTUyMUJcdTRFMUFcdTRFMDBcdTY3MDhcdTUzNEFcdUZGMENcdTRFMERcdTU5MkFcdTRFNjBcdTYwRUZcdTMwMDJcdTMwMDIubWRcIixcclxuICAgICAgXCJcdTUyMUJcdTRFMUFcdTdFQ0ZcdTUzODYvXHU2MjExXHU0RUVDXHU1MTZDXHU1M0Y4XHU3Njg0XHU0RjAxXHU0RTFBXHU2NTg3XHU1MzE2XHVGRjAxLm1kXCIsXHJcbiAgICAgIFwiXHU1MjFCXHU0RTFBXHU3RUNGXHU1Mzg2L1x1NjIxMVx1NEVFQ1x1NTE2Q1x1NTNGOFx1NzY4NFx1NjJEQlx1NEVCQVx1NjVCOVx1NUYwRlx1RkYwQ1x1NjcwOVx1NzBCOVx1NEUwRFx1NEUwMFx1NjgzN1x1RkYwMS5tZFwiLFxyXG4gICAgICBcIlx1NTIxQlx1NEUxQVx1N0VDRlx1NTM4Ni9cdTYyMTFcdTU3MjhcdTlDN0NcdTUzODJcdTc2ODRcdTVCOUVcdTRFNjBcdTc1MUZcdTZEM0IubWRcIixcclxuICAgICAgXCJcdTUyMUJcdTRFMUFcdTdFQ0ZcdTUzODYvXHU2MjExXHU1RjAwXHU0RTFBXHU0RTg2XHVGRjAxLm1kXCIsXHJcbiAgICAgIFwiXHU1MjFCXHU0RTFBXHU3RUNGXHU1Mzg2L1x1NkNBMVx1NEU4Qlx1NTIyQlx1NjBGM1x1NEUwRFx1NUYwMFx1NTNCQlx1NTIxQlx1NEUxQVx1RkYwMS5tZFwiLFxyXG4gICAgICBcIlx1NTIxQlx1NEUxQVx1N0VDRlx1NTM4Ni9cdTdGOEVcdTU5N0RcdTc2ODRcdTU0NjhcdTY3MkJcdUZGMENcdTUzQzhcdTY1MzlcdTRFODZcdTRFMDBcdTU5MjlCdWdcdTMwMDJcdTMwMDIubWRcIixcclxuICAgICAgXCJcdTUyMUJcdTRFMUFcdTdFQ0ZcdTUzODYvXHU5NzYyXHU0RTg2XHU0RTJBSmF2YVx1NUI5RVx1NEU2MFx1NzUxRlx1RkYwQ1x1NUMwRlx1NEYxOVx1NUY4OFx1NEYxOFx1NzlDMFx1RkYwMS5tZFwiLFxyXG5cclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJcdTc1MUZcdTZEM0JcdTY1RTVcdTVFMzhcIixcclxuICAgIGNvbGxhcHNhYmxlOiB0cnVlLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAgXCJcdTc1MUZcdTZEM0JcdTY1RTVcdTVFMzgvMjAyMlx1RkYwQ1x1NTkyN1x1NUJCNlx1OEZDN1x1NUY5N1x1NjAwRVx1NEU0OFx1NjgzN1x1NTQ2Mlx1RkYxRi5tZFwiLFxyXG4gICAgICBcIlx1NzUxRlx1NkQzQlx1NjVFNVx1NUUzOC9cdTRGMTFcdTUwNDdcdTdFRDNcdTY3NUZcdUZGMENcdTVCOUFcdTRFMkFcdTY1QjBcdTc2RUVcdTY4MDdcdUZGMDEubWRcIixcclxuICAgICAgXCJcdTc1MUZcdTZEM0JcdTY1RTVcdTVFMzgvXHU1MThEXHU4MDRBXHU4MDRBXHU4RkQ5XHU1NDY4XHU3Njg0XHU3MkI2XHU2MDAxLm1kXCIsXHJcbiAgICAgIFwiXHU3NTFGXHU2RDNCXHU2NUU1XHU1RTM4L1x1NTkyN1x1NUJCNlx1NEZERFx1OTFDRFx1NTU0QVx1MjAyNi5tZFwiLFxyXG4gICAgICBcIlx1NzUxRlx1NkQzQlx1NjVFNVx1NUUzOC9cdTVCRjlcdTRFMERcdThENzdcdUZGMENcdTYyMTFcdTRFMERcdTY2MkZcdTRFMDBcdTRFMkFcdTgxRUFcdTVGOEJcdTc2ODRcdTRFQkEubWRcIixcclxuICAgICAgXCJcdTc1MUZcdTZEM0JcdTY1RTVcdTVFMzgvXHU1RjAwXHU1REU1XHU3QjJDXHU0RTAwXHU1OTI5XHVGRjBDXHU2MjExXHU1QkIzXHU2MDE1XHU0RTg2Lm1kXCIsXHJcbiAgICAgIFwiXHU3NTFGXHU2RDNCXHU2NUU1XHU1RTM4L1x1NjIxMVx1NjUzRVx1NTA0N1x1NTU2Nlx1RkYwMVx1OEZEOTIyXHU1OTI5XHU1RTcyXHU3MEI5XHU1NTY1XHU1NDYyLm1kXCIsXHJcbiAgICAgIFwiXHU3NTFGXHU2RDNCXHU2NUU1XHU1RTM4L1x1NjIxMVx1ODhBQlx1OTY5NFx1NzlCQlx1NEU4Nlx1RkYwMS5tZFwiLFxyXG4gICAgICBcIlx1NzUxRlx1NkQzQlx1NjVFNVx1NUUzOC9cdTYyMTFcdTk2MzNcdThGQzdcdTRFODZcdUZGMENcdTUyMkJcdTYyQzVcdTVGQzNcdUZGMDEubWRcIixcclxuICAgICAgXCJcdTc1MUZcdTZEM0JcdTY1RTVcdTVFMzgvXHU2NUIwXHU1RTc0XHU3QjJDXHU0RTAwXHU1OTI5XHVGRjBDXHU2MjExXHU1QzMxXHU4NjhDXHU1N0UwXHU0RjRGXHU0RTg2XHVGRjAxLm1kXCIsXHJcbiAgICAgIFwiXHU3NTFGXHU2RDNCXHU2NUU1XHU1RTM4L1x1ODA0QVx1ODA0QVx1NjcwMFx1OEZEMVx1NzY4NFx1NzJCNlx1NjAwMVx1NTQyNy5tZFwiLFxyXG4gICAgICBcIlx1NzUxRlx1NkQzQlx1NjVFNVx1NUUzOC9cdTkwRkRcdThGRDlcdTRFMkFcdTcwQjlcdTUxM0ZcdTRFODZcdUZGMENcdThGRDlcdTVFMkVcdTRFQkFcdTdBREZcdTcxMzZcdTU3MjhcdTMwMDJcdTMwMDJcdTMwMDIubWRcIixcclxuICAgICAgXCJcdTc1MUZcdTZEM0JcdTY1RTVcdTVFMzgvXHU5NjhGXHU0RkJGXHU4MDRBXHU4MDRBLm1kXCIsXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcbiIsICJleHBvcnQgZGVmYXVsdCBbXHJcbiAgICBcIlwiLFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlx1NTE2NVx1OTVFOFx1NUZDNVx1NzcwQi1cdTVCNjZcdTRFNjBcdThERUZcdTdFQkZcIixcclxuICAgICAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIlx1NTE2NVx1OTVFOFx1NUZDNVx1NzcwQi1cdTVCNjZcdTRFNjBcdThERUZcdTdFQkYvXCJcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJcdTVCNjZcdTRFNjBcdTYzMDdcdTUzNTdcIixcclxuICAgICAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIlx1NUI2Nlx1NEU2MFx1NjMwN1x1NTM1Ny9cIixcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJcdTVGMDBcdTUzRDFcdTdFQ0ZcdTlBOENcIixcclxuICAgICAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIlx1NUYwMFx1NTNEMVx1N0VDRlx1OUE4Qy9cIixcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJcdTZDNDJcdTgwNENcdTdFQ0ZcdTlBOENcIixcclxuICAgICAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIlx1NkM0Mlx1ODA0Q1x1N0VDRlx1OUE4Qy9cIixcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJcdTgwNENcdTU3M0FcdTdFQ0ZcdTlBOENcIixcclxuICAgICAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIlx1ODA0Q1x1NTczQVx1N0VDRlx1OUE4Qy9cIixcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJcdTYyODBcdTY3MkZcdTUyMDZcdTRFQUJcIixcclxuICAgICAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIlx1NjI4MFx1NjcyRlx1NTIwNlx1NEVBQi9cIixcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJcdTVCOUVcdTYyMThcdTY1NTlcdTdBMEJcIixcclxuICAgICAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIlx1NUI5RVx1NjIxOFx1NjU1OVx1N0EwQi9cIixcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJcdTk4NzlcdTc2RUVcdTY1NTlcdTdBMEJcIixcclxuICAgICAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIlx1OTg3OVx1NzZFRVx1NjU1OVx1N0EwQi9cIixcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJcdTdGMTZcdTdBMEJcdThENDRcdTZFOTBcIixcclxuICAgICAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIlx1N0YxNlx1N0EwQlx1OEQ0NFx1NkU5MC9cIixcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJcdTc5RDFcdTYyODBcdTc5RDFcdTY2NkVcIixcclxuICAgICAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIlx1NzlEMVx1NjI4MFx1NzlEMVx1NjY2RS9cIixcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJcdTUxNzZcdTRFRDZcIixcclxuICAgICAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIlx1NTE3Nlx1NEVENi9cIixcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuXTtcclxuIiwgImV4cG9ydCBkZWZhdWx0IFtcclxuICAgIFwiXCIsXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiXHU3RUNGXHU1MTc4IEJ1ZyBcdTg5RTNcdTUxQjNcdTY1QjlcdTY4NDhcIixcclxuICAgICAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIlx1N0VDRlx1NTE3OCBCdWcgXHU4OUUzXHU1MUIzXHU2NUI5XHU2ODQ4L0J1ZyBcdTg5RTNcdTUxQjMgIFx1NTI0RFx1N0FFRlx1NjVFMFx1NkNENVx1NkI2M1x1Nzg2RVx1OEJGN1x1NkM0Mlx1NTQwRVx1N0FFRlx1NjNBNVx1NTNFM1x1NUU3Nlx1NUY5N1x1NTIzMFx1NTRDRFx1NUU5NFx1RkYxRlwiLFxyXG4gICAgICAgICAgICBcIlx1N0VDRlx1NTE3OCBCdWcgXHU4OUUzXHU1MUIzXHU2NUI5XHU2ODQ4L0J1ZyBcdTg5RTNcdTUxQjMgIFx1NTI0RFx1N0FFRlx1Njg0Nlx1NjdCNlx1NTIxRFx1NTlDQlx1NTMxNlx1OTUxOVx1OEJFRlwiLFxyXG4gICAgICAgICAgICBcIlx1N0VDRlx1NTE3OCBCdWcgXHU4OUUzXHU1MUIzXHU2NUI5XHU2ODQ4L0J1ZyBcdTg5RTNcdTUxQjMgIFx1NTI0RFx1N0FFRlx1OTg3OVx1NzZFRVx1NjVFMFx1NkNENVx1NkI2M1x1Nzg2RVx1NUI4OVx1ODhDNVx1NEY5RFx1OEQ1Nlx1RkYxRlwiLFxyXG4gICAgICAgICAgICBcIlx1N0VDRlx1NTE3OCBCdWcgXHU4OUUzXHU1MUIzXHU2NUI5XHU2ODQ4L0J1ZyBcdTg5RTNcdTUxQjMgIFx1NTI0RFx1N0FFRlx1OTg3OVx1NzZFRVx1ODBGRFx1OEZEMFx1ODg0Q1x1RkYwQ1x1NEY0Nlx1NjcwOVx1NUY4OFx1NTkxQVx1OTUxOVx1OEJFRlx1NjNEMFx1NzkzQVx1NTQ4Q1x1NTQ0QVx1OEI2Nlx1RkYxRlwiLFxyXG4gICAgICAgICAgICBcIlx1N0VDRlx1NTE3OCBCdWcgXHU4OUUzXHU1MUIzXHU2NUI5XHU2ODQ4L0J1ZyBcdTg5RTNcdTUxQjMgIFx1NTQwRVx1N0FFRlx1OTg3OVx1NzZFRVx1NjVFMFx1NkNENVx1NkI2M1x1NUUzOFx1NTQyRlx1NTJBOFx1RkYwQ1x1NjIxNlx1NEY5RFx1OEQ1Nlx1NjcwRFx1NTJBMVx1OEZERVx1NjNBNVx1NTkzMVx1OEQyNVwiLFxyXG4gICAgICAgICAgICBcIlx1N0VDRlx1NTE3OCBCdWcgXHU4OUUzXHU1MUIzXHU2NUI5XHU2ODQ4L0J1ZyBcdTg5RTNcdTUxQjMgIFx1NjU3MFx1NjM2RVx1NjdFNVx1OEJFMlx1NEUzQVx1N0E3QVx1NjIxNlx1OTUxOVx1OEJFRlwiLFxyXG4gICAgICAgICAgICBcIlx1N0VDRlx1NTE3OCBCdWcgXHU4OUUzXHU1MUIzXHU2NUI5XHU2ODQ4L0J1ZyBcdTg5RTNcdTUxQjMgIFx1NjVFMFx1NkNENVx1NkI2M1x1NUUzOFx1NzY3Qlx1NUY1NVx1NjIxNlx1ODNCN1x1NTNENlx1NEUwRFx1NTIzMFx1NzUyOFx1NjIzN1x1NEZFMVx1NjA2RlwiLFxyXG4gICAgICAgICAgICBcIlx1N0VDRlx1NTE3OCBCdWcgXHU4OUUzXHU1MUIzXHU2NUI5XHU2ODQ4L0J1ZyBcdTg5RTNcdTUxQjMgIFx1NjVFMFx1NkNENVx1OEJCRlx1OTVFRVx1N0VCRlx1NEUwQVx1NjcwRFx1NTJBMVwiLFxyXG4gICAgICAgICAgICBcIlx1N0VDRlx1NTE3OCBCdWcgXHU4OUUzXHU1MUIzXHU2NUI5XHU2ODQ4L0J1ZyBcdTg5RTNcdTUxQjMgIFx1NjcyQ1x1NTczMFx1OTg3OVx1NzZFRVx1NEUwQVx1N0VCRlx1NTQwRVx1NTFGQVx1NzNCMFx1OTUxOVx1OEJFRlwiLFxyXG4gICAgICAgICAgICBcIlx1N0VDRlx1NTE3OCBCdWcgXHU4OUUzXHU1MUIzXHU2NUI5XHU2ODQ4L0J1ZyBcdTg5RTNcdTUxQjMgIFx1OTg3OVx1NzZFRVx1NTQyRlx1NTJBOFx1NTkzMVx1OEQyNVwiLFxyXG4gICAgICAgICAgICBcIlx1N0VDRlx1NTE3OCBCdWcgXHU4OUUzXHU1MUIzXHU2NUI5XHU2ODQ4L0J1ZyBcdTg5RTNcdTUxQjNcdUZGNUNcdTY1RTBcdTZDRDVcdTZCNjNcdTc4NkVcdThCQkZcdTk1RUVcdTUyMzBcdTk4NzVcdTk3NjJcdTYyMTZcdTUxRkFcdTczQjAgNDA0IFx1OTUxOVx1OEJFRlwiLFxyXG4gICAgICAgICAgICBcIlx1N0VDRlx1NTE3OCBCdWcgXHU4OUUzXHU1MUIzXHU2NUI5XHU2ODQ4L0J1ZyBcdTg5RTNcdTUxQjNcdUZGNUNcdTdFQzRcdTRFRjZcdTVFOTNcdTYyQTVcdTk1MTlcdTMwMDFcdTYyMTZcdTY4MzdcdTVGMEZcdTRFMjJcdTU5MzFcdTRFMERcdTc1MUZcdTY1NDhcIixcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJcdTg5RTNcdTUxQjMgQnVnIFx1NzY4NFx1NkQ0MVx1N0EwQlx1NTk1N1x1OERFRlwiLFxyXG4gICAgICAgIGNvbGxhcHNhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwiXHU4OUUzXHU1MUIzIEJ1ZyBcdTc2ODRcdTZENDFcdTdBMEJcdTU5NTdcdThERUYvXHU1RTM4XHU4OUMxXHU1MTk5IEJ1ZyBcdTUzOUZcdTU2RTBcdTZDNDdcdTYwM0JcIixcclxuICAgICAgICAgICAgXCJcdTg5RTNcdTUxQjMgQnVnIFx1NzY4NFx1NkQ0MVx1N0EwQlx1NTk1N1x1OERFRi9cdTVFMzhcdTg5QzFcdThCRjdcdTZDNDJcdTk1MTlcdThCRUZcdTc4MDFcdTg5RTNcdTkxQ0FcdTUzQ0FcdTg5RTNcdTUxQjNcdTY1QjlcdTY4NDhcIixcclxuICAgICAgICAgICAgXCJcdTg5RTNcdTUxQjMgQnVnIFx1NzY4NFx1NkQ0MVx1N0EwQlx1NTk1N1x1OERFRi9cdTg5RTNcdTUxQjMgQnVnIFx1NzY4NFx1NkQ0MVx1N0EwQlx1NTk1N1x1OERFRlx1NjAzQlx1N0VEM1wiLFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG5dO1xyXG4iLCAiaW1wb3J0IHtTaWRlYmFyQ29uZmlnNE11bHRpcGxlfSBmcm9tIFwidnVlcHJlc3MvY29uZmlnXCI7XHJcbmltcG9ydCBjb2RlTmF2U2lkZUJhciBmcm9tIFwiLi9zaWRlYmFycy9jb2RlTmF2U2lkZUJhclwiO1xyXG5pbXBvcnQga25vd2xlZGdlU2lkZUJhciBmcm9tIFwiLi9zaWRlYmFycy9rbm93bGVkZ2VTaWRlQmFyXCI7XHJcbmltcG9ydCByb2FkbWFwU2lkZUJhciBmcm9tIFwiLi9zaWRlYmFycy9yb2FkbWFwU2lkZUJhclwiO1xyXG5pbXBvcnQgcHJvamVjdFNpZGVCYXIgZnJvbSBcIi4vc2lkZWJhcnMvcHJvamVjdFNpZGVCYXJcIjtcclxuaW1wb3J0IHByb2R1Y3RTaWRlQmFyIGZyb20gXCIuL3NpZGViYXJzL3Byb2R1Y3RTaWRlQmFyXCI7XHJcbmltcG9ydCBzZWxmU3R1ZHlTaWRlQmFyIGZyb20gXCIuL3NpZGViYXJzL3NlbGZTdHVkeVNpZGVCYXJcIjtcclxuaW1wb3J0IHByb2dyYW1taW5nU2hhcmVTaWRlQmFyIGZyb20gXCIuL3NpZGViYXJzL3Byb2dyYW1taW5nU2hhcmVTaWRlQmFyXCI7XHJcbmltcG9ydCBidWdGaXhNYW51YWwgZnJvbSBcIi4vc2lkZWJhcnMvYnVnRml4TWFudWFsXCJcclxuLy8gQHRzLWlnbm9yZVxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBcIi9cdTVCNjZcdTRFNjBcdThERUZcdTdFQkYvXCI6IHJvYWRtYXBTaWRlQmFyLFxyXG4gICAgXCIvXHU5ODc5XHU3NkVFXHU1QjlFXHU2MjE4L1wiOiBwcm9qZWN0U2lkZUJhcixcclxuICAgIFwiL1x1N0YxNlx1N0EwQlx1NUJGQ1x1ODIyQS9cIjogY29kZU5hdlNpZGVCYXIsXHJcbiAgICBcIi9cdTRFQTdcdTU0QzFcdTY3MERcdTUyQTEvXCI6IHByb2R1Y3RTaWRlQmFyLFxyXG4gICAgXCIvXHU3N0U1XHU4QkM2XHU3ODhFXHU3MjQ3L1wiOiBrbm93bGVkZ2VTaWRlQmFyLFxyXG4gICAgXCIvQnVnXHU2MjRCXHU1MThDL1wiOiBidWdGaXhNYW51YWwsXHJcbiAgICBcIi9cdTgxRUFcdTVCNjZcdTRFNEJcdThERUYvXCI6IHNlbGZTdHVkeVNpZGVCYXIsXHJcbiAgICBcIi9cdTdGMTZcdTdBMEJcdTUyMDZcdTRFQUIvXCI6IHByb2dyYW1taW5nU2hhcmVTaWRlQmFyLFxyXG4gICAgXCIvXHU1MTczXHU0RThFXHU2MjExXHU0RUVDL1wiOiBbXCJcIiwgXCJcdTRFMkFcdTRFQkFcdTdFQ0ZcdTUzODZcIl0sXHJcbiAgICAvLyBcdTk2NERcdTdFQTdcdUZGMENcdTlFRDhcdThCQTRcdTY4MzlcdTYzNkVcdTY1ODdcdTdBRTBcdTY4MDdcdTk4OThcdTZFMzJcdTY3RDNcdTRGQTdcdThGQjlcdTY4MEZcclxuICAgIFwiL1wiOiBcImF1dG9cIixcclxufSBhcyBTaWRlYmFyQ29uZmlnNE11bHRpcGxlO1xyXG4iLCAiLyoqXHJcbiAqIFx1NUU5NVx1OTBFOFx1NzI0OFx1Njc0M1x1NEZFMVx1NjA2RlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGZyaWVuZExpbmtzOiBbXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIlx1N0FEOVx1OTU3RiAtIFx1NkQ2QVx1NkQ2QVx1NUM3MVx1NTQxQlwiLFxyXG4gICAgICAvLyBpY29uOiBcIi9pY29uL3VzZXIuc3ZnXCIsXHJcbiAgICAgIGhyZWY6IFwiaHR0cHM6Ly95dXl1YW53ZWIuZmVpc2h1LmNuL3dpa2kvQWJsZHc1V2tqaWR5U3hrS3hVMmNRZEF0bmFoXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJcdTU0MUJcdTc2ODRcdTdCODBcdTUzODZcIixcclxuICAgICAgaHJlZjogXCJodHRwczovL3d3dy5sYW95dWppYW5saS5jb20vXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJcdTdGOEVcdTY3MkZcdTVCNjZcdTRFNjBcdThENDRcdTY1OTlcIixcclxuICAgICAgaHJlZjogXCJodHRwczovL3l1eXVhbndlYi5mZWlzaHUuY24vd2lraS9WQzFxd21YOWRpQ0JLM2tpZHllYzc0dkZuZGVcIixcclxuICAgIH0sXHJcbiAgXSxcclxuICBjb3B5cmlnaHQ6IHtcclxuICAgIGhyZWY6IFwiaHR0cHM6Ly9iZWlhbi5taWl0Lmdvdi5jbi9cIixcclxuICAgIG5hbWU6IFwiXHU1RERESUNQXHU1OTA3MTIzXHU1M0Y3XCIsXHJcbiAgfSxcclxufTtcclxuIiwgIi8qKlxyXG4gKiBcdTk4OURcdTU5MTZcdTUzRjNcdTRGQTdcdThGQjlcdTY4MEZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJcdTYyNEJcdTY3M0FcdTc3MEJcIixcclxuICAgIGljb246IFwiL2ljb24vbW9iaWxlLnBuZ1wiLFxyXG4gICAgcG9wb3ZlclRpdGxlOiBcIlx1NUZBRVx1NEZFMVx1NjI2Qlx1NEUwMFx1NjI2QlwiLFxyXG4gICAgcG9wb3ZlclVybDpcclxuICAgICAgXCIvcXJjb2RlLWNvZGVmYXRoZXIucG5nXCIsXHJcbiAgICBwb3BvdmVyRGVzYzogXCJcdTUzRUZcdTRFRTVcdTYyNEJcdTY3M0FcdTc3MEJcdTYyMTZcdTUyMDZcdTRFQUJcdTgxRjNcdTY3MEJcdTUzQ0JcdTU3MDhcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlx1NjYxRlx1NzQwM1wiLFxyXG4gICAgaWNvbjogXCIvaWNvbi94aW5ncWl1LnBuZ1wiLFxyXG4gICAgcG9wb3ZlclRpdGxlOlxyXG4gICAgICAnPHNwYW4gc3R5bGU9XCJmb250LXNpemU6MC44cmVtO2ZvbnQtd2VpZ2h0OmJvbGQ7XCI+PHNwYW4gc3R5bGU9XCJjb2xvcjpyZWQ7XCI+XHU0RkREXHU1OUM2XHU3RUE3XHU1QjlFXHU2MjE4XHU5ODc5XHU3NkVFXHU2NTU5XHU3QTBCPC9zcGFuPlx1MzAwMVx1N0YxNlx1N0EwQlx1NUI2Nlx1NEU2MFx1NjMwN1x1NTM1N1x1MzAwMVx1NUI2Nlx1NEU2MFx1OEQ0NFx1NkU5MFx1MzAwMVx1NkM0Mlx1ODA0Q1x1NjMwN1x1NTM1N1x1MzAwMVx1NjI4MFx1NjcyRlx1NTIwNlx1NEVBQlx1MzAwMVx1N0YxNlx1N0EwQlx1NEVBNFx1NkQ0MTwvc3Bhbj4nLFxyXG4gICAgcG9wb3ZlclVybDpcclxuICAgICAgXCIvcXJjb2RlLWNvZGVuYXYucG5nXCIsXHJcbiAgICBwb3BvdmVyRGVzYzogXCJcdTc3RTVcdThCQzZcdTY2MUZcdTc0MDNcdUZGMUFcdTdGMTZcdTdBMEJcdTVCRkNcdTgyMkFcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlx1NEVBNFx1NkQ0MVx1N0ZBNFwiLFxyXG4gICAgaWNvbjogXCIvaWNvbi93ZWl4aW4ucG5nXCIsXHJcbiAgICBwb3BvdmVyVGl0bGU6XHJcbiAgICAgICc8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTowLjhyZW07Zm9udC13ZWlnaHQ6Ym9sZDtcIj5cdTYyNkJcdTc4MDFcdTZERkJcdTUyQTAgPHNwYW4gc3R5bGU9XCJjb2xvcjpyZWQ7XCI+XHU3RjE2XHU3QTBCXHU1QkZDXHU4MjJBXHU1QzBGXHU1MkE5XHU2MjRCXHU1RkFFXHU0RkUxPC9zcGFuPlx1RkYwQ1x1NjJDOVx1NEY2MFx1OEZEQlx1NEUxM1x1NUM1RVx1N0YxNlx1N0EwQlx1NUI2Nlx1NEU2MFx1NEVBNFx1NkQ0MVx1N0ZBNDwvc3Bhbj4nLFxyXG4gICAgcG9wb3ZlclVybDpcclxuICAgICAgXCIvcXJjb2RlLWNvZGVuYXZoZWxwZXIucG5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJcdTRFMEJcdThENDRcdTY1OTlcIixcclxuICAgIGljb246IFwiL2ljb24veGlhemFpLnBuZ1wiLFxyXG4gICAgcG9wb3ZlclRpdGxlOlxyXG4gICAgICAnPHNwYW4gc3R5bGU9XCJmb250LXNpemU6MC44cmVtO2ZvbnQtd2VpZ2h0OmJvbGQ7XCI+XHU2MjZCXHU3ODAxXHU1MTczXHU2Q0U4XHU3QUQ5XHU5NTdGXHU1MTZDXHU0RjE3XHU1M0Y3XHVGRjBDXHU1NkRFXHU1OTBEIDxzcGFuIHN0eWxlPVwiY29sb3I6cmVkO1wiPlx1NUI2Nlx1NEU2MDwvc3Bhbj4gXHU4M0I3XHU1M0Q2XHU2RDc3XHU5MUNGXHU3RjE2XHU3QTBCXHU1QjY2XHU0RTYwXHU4RDQ0XHU2RTkwXHUzMDBDXHU2NUUwXHU0RUZCXHU0RjU1XHU1OTU3XHU4REVGXHUzMDBEPC9zcGFuPicsXHJcbiAgICBwb3BvdmVyVXJsOlxyXG4gICAgICBcIi9xcmNvZGUtbXBjb2Rlcl95dXBpLmpwZ1wiLFxyXG4gICAgcG9wb3ZlckRlc2M6IFwiXHU1MTZDXHU0RjE3XHU1M0Y3OiBcdTdBMEJcdTVFOEZcdTU0NThcdTlDN0NcdTc2QUVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlx1NjUyRlx1NjMwMVx1NjIxMVwiLFxyXG4gICAgaWNvbjogXCIvaWNvbi9kaWFuemFuLnBuZ1wiLFxyXG4gICAgcG9wb3ZlclRpdGxlOlxyXG4gICAgICAnIDxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjAuOHJlbTtmb250LXdlaWdodDpib2xkO1wiPlx1OUYxM1x1NTJCMVx1NTQ4Q1x1OEQ1RVx1OEQ0Rlx1NjIxMTwvc3Bhbj4nLFxyXG4gICAgcG9wb3ZlclVybDpcclxuICAgICAgXCIvcXJjb2RlLXRodW1iLmpwZ1wiLFxyXG4gICAgcG9wb3ZlckRlc2M6XHJcbiAgICAgIFwiXHU2MTFGXHU4QzIyXHU2MEE4XHU3Njg0XHU2NTJGXHU2MzAxXHVGRjBDXHU0RjVDXHU4MDA1XHU1OTM0XHU1M0QxKytcIixcclxuICB9LFxyXG5dO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUE7OztBQ0VBLElBQU8saUJBQVE7QUFBQSxFQUNYO0FBQUEsSUFDSSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDSDtBQUFBLFFBQ0ksTUFBTTtBQUFBLFFBQU0sTUFBTTtBQUFBO0FBQUEsTUFFdEI7QUFBQSxRQUNJLE1BQU07QUFBQSxRQUFNLE1BQU07QUFBQTtBQUFBLE1BRXRCO0FBQUEsUUFDSSxNQUFNO0FBQUEsUUFBTSxNQUFNO0FBQUE7QUFBQSxNQUV0QjtBQUFBLFFBQ0ksTUFBTTtBQUFBLFFBQU0sTUFBTTtBQUFBO0FBQUEsTUFFdEI7QUFBQSxRQUNJLE1BQU07QUFBQSxRQUFNLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUs5QjtBQUFBLElBQ0ksTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUEsRUFFVjtBQUFBLElBQ0ksTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUEsRUFHVjtBQUFBLElBQ0ksTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUEsRUFFVjtBQUFBLElBQ0ksTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0g7QUFBQSxRQUNJLE1BQU07QUFBQSxRQUFRLE1BQU07QUFBQTtBQUFBLE1BRXhCO0FBQUEsUUFDSSxNQUFNO0FBQUEsUUFBUSxNQUFNO0FBQUE7QUFBQSxNQUV4QjtBQUFBLFFBQ0ksTUFBTTtBQUFBLFFBQVEsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS2hDO0FBQUEsSUFDSSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQSxFQUVWO0FBQUEsSUFDSSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQSxFQUVWO0FBQUEsSUFDSSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQSxFQUVWO0FBQUEsSUFDSSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQTs7O0FDcEVkLElBQU8seUJBQVE7QUFBQSxFQUNiO0FBQUEsRUFDQTtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUE7QUFBQTtBQUFBLEVBR0o7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBO0FBQUE7QUFBQSxFQUdKO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixVQUFVLENBQUMsNkJBQVMscURBQWE7QUFBQTtBQUFBLEVBRW5DO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixVQUFVLENBQUM7QUFBQTtBQUFBLEVBRWI7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLFVBQVUsQ0FBQztBQUFBO0FBQUEsRUFFYjtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsVUFBVSxDQUFDLDZCQUFTO0FBQUE7QUFBQSxFQUV0QjtBQUFBLEVBQ0E7QUFBQTs7O0FDekRGLElBQU8sMkJBQVE7QUFBQSxFQUNiO0FBQUEsRUFDQTtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUE7QUFBQTtBQUFBOzs7QUNoSE4sSUFBTyx5QkFBUTtBQUFBLEVBQ2I7QUFBQSxFQUNBO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBO0FBQUE7QUFBQTs7O0FDZk4sSUFBTyx5QkFBUTtBQUFBLEVBQ2I7QUFBQSxFQUNBO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUE7QUFBQTtBQUFBOzs7QUNqQk4sSUFBTyx5QkFBUTtBQUFBLEVBQ2I7QUFBQSxFQUNBO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUE7QUFBQTtBQUFBLEVBR0o7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUE7QUFBQTtBQUFBOzs7QUNsQk4sSUFBTywyQkFBUTtBQUFBLEVBQ2I7QUFBQSxFQUNBO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUE7QUFBQTtBQUFBLEVBR0o7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUE7QUFBQTtBQUFBLEVBR0o7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBO0FBQUE7QUFBQSxFQUdKO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQTtBQUFBO0FBQUEsRUFHSjtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBO0FBQUE7QUFBQSxFQUlKO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBO0FBQUE7QUFBQTs7O0FDbkdOLElBQU8sa0NBQVE7QUFBQSxFQUNYO0FBQUEsRUFDQTtBQUFBLElBQ0ksT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ047QUFBQTtBQUFBO0FBQUEsRUFHUjtBQUFBLElBQ0ksT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ047QUFBQTtBQUFBO0FBQUEsRUFHUjtBQUFBLElBQ0ksT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ047QUFBQTtBQUFBO0FBQUEsRUFHUjtBQUFBLElBQ0ksT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ047QUFBQTtBQUFBO0FBQUEsRUFHUjtBQUFBLElBQ0ksT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ047QUFBQTtBQUFBO0FBQUEsRUFHUjtBQUFBLElBQ0ksT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ047QUFBQTtBQUFBO0FBQUEsRUFHUjtBQUFBLElBQ0ksT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ047QUFBQTtBQUFBO0FBQUEsRUFHUjtBQUFBLElBQ0ksT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ047QUFBQTtBQUFBO0FBQUEsRUFHUjtBQUFBLElBQ0ksT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ047QUFBQTtBQUFBO0FBQUEsRUFHUjtBQUFBLElBQ0ksT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ047QUFBQTtBQUFBO0FBQUEsRUFHUjtBQUFBLElBQ0ksT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ047QUFBQTtBQUFBO0FBQUE7OztBQzVFWixJQUFPLHVCQUFRO0FBQUEsRUFDWDtBQUFBLEVBQ0E7QUFBQSxJQUNJLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUNOO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQTtBQUFBO0FBQUEsRUFHUjtBQUFBLElBQ0ksT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ047QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBO0FBQUE7QUFBQTs7O0FDaEJaLElBQU8sa0JBQVE7QUFBQSxFQUNYLDhCQUFVO0FBQUEsRUFDViw4QkFBVTtBQUFBLEVBQ1YsOEJBQVU7QUFBQSxFQUNWLDhCQUFVO0FBQUEsRUFDViw4QkFBVTtBQUFBLEVBQ1YscUJBQVc7QUFBQSxFQUNYLDhCQUFVO0FBQUEsRUFDViw4QkFBVTtBQUFBLEVBQ1YsOEJBQVUsQ0FBQyxJQUFJO0FBQUEsRUFFZixLQUFLO0FBQUE7OztBQ2xCVCxJQUFPLGlCQUFRO0FBQUEsRUFDYixhQUFhO0FBQUEsSUFDWDtBQUFBLE1BQ0UsT0FBTztBQUFBLE1BRVAsTUFBTTtBQUFBO0FBQUEsSUFFUjtBQUFBLE1BQ0UsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBO0FBQUEsSUFFUjtBQUFBLE1BQ0UsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBO0FBQUE7QUFBQSxFQUdWLFdBQVc7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQTtBQUFBOzs7QUNsQlYsSUFBTyx1QkFBUTtBQUFBLEVBQ2I7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLGNBQWM7QUFBQSxJQUNkLFlBQ0U7QUFBQSxJQUNGLGFBQWE7QUFBQTtBQUFBLEVBRWY7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLGNBQ0U7QUFBQSxJQUNGLFlBQ0U7QUFBQSxJQUNGLGFBQWE7QUFBQTtBQUFBLEVBRWY7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLGNBQ0U7QUFBQSxJQUNGLFlBQ0U7QUFBQTtBQUFBLEVBRUo7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLGNBQ0U7QUFBQSxJQUNGLFlBQ0U7QUFBQSxJQUNGLGFBQWE7QUFBQTtBQUFBLEVBRWY7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLGNBQ0U7QUFBQSxJQUNGLFlBQ0U7QUFBQSxJQUNGLGFBQ0U7QUFBQTtBQUFBOzs7QVp4Q04sSUFBTSxTQUFTO0FBQ2YsSUFBTSxTQUFTO0FBQ2YsSUFBTSxPQUFPLENBQUMsNEJBQVEsZ0JBQU07QUFFNUIsSUFBTyxpQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLElBRUosQ0FBQyxRQUFRLEVBQUUsS0FBSyxRQUFRLE1BQU07QUFBQSxJQUU5QjtBQUFBLE1BQ0U7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixTQUNFO0FBQUE7QUFBQTtBQUFBLElBSU47QUFBQSxNQUNFO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBV0osV0FBVztBQUFBLEVBR1gsaUJBQWlCLENBQUMsa0JBQWtCO0FBQUEsRUFDcEMsVUFBVTtBQUFBLElBRVIsYUFBYTtBQUFBLElBRWIsZ0JBQWdCLENBQUMsTUFBTSxNQUFNLE1BQU0sTUFBTTtBQUFBO0FBQUEsRUFHM0MsU0FBUztBQUFBLElBQ1AsQ0FBQztBQUFBLElBRUQ7QUFBQSxNQUNFO0FBQUEsTUFDQTtBQUFBLFFBQ0UsSUFBSTtBQUFBO0FBQUE7QUFBQSxJQUdSLENBQUM7QUFBQSxJQUVEO0FBQUEsTUFDRTtBQUFBLE1BQ0E7QUFBQSxRQUNFLFdBQVcsQ0FBQyxHQUFHLFVBQVUsTUFBTTtBQUFBLFFBQy9CLE9BQU8sQ0FBQyxVQUFVLE1BQU07QUFBQSxRQUN4QixhQUFhLENBQUMsVUFDWixNQUFNLFlBQVksZUFBZSxNQUFNO0FBQUEsUUFDekMsUUFBUSxDQUFDLEdBQUcsVUFBVSxNQUFNLFlBQVksVUFBVTtBQUFBLFFBQ2xELE1BQU0sQ0FBQyxVQUFVLE1BQU0sWUFBWSxRQUFRO0FBQUEsUUFDM0MsTUFBTSxDQUFDLFVBQVU7QUFBQSxRQUNqQixLQUFLLENBQUMsR0FBRyxPQUFPLFNBQ2IsT0FBTSxZQUFZLFVBQVUsVUFBVSxNQUFNO0FBQUEsUUFDL0MsT0FBTyxDQUFDLE9BQU8sVUFDYixNQUFNLFlBQVksU0FDaEIsT0FBTSxZQUFZLFVBQ2xCLENBQUMsTUFBTSxZQUFZLE1BQU0sV0FBVyxXQUNwQyxNQUFNLE1BQU0sWUFBWTtBQUFBLFFBQzVCLGFBQWEsQ0FBQyxVQUNaLE1BQU0sWUFBWSxRQUFRLElBQUksS0FBSyxNQUFNLFlBQVk7QUFBQSxRQUN2RCxZQUFZLENBQUMsVUFBVSxNQUFNLGVBQWUsSUFBSSxLQUFLLE1BQU07QUFBQTtBQUFBO0FBQUEsSUFJL0Q7QUFBQSxNQUNFO0FBQUEsTUFDQTtBQUFBLFFBQ0UsVUFBVTtBQUFBO0FBQUE7QUFBQSxJQUlkLENBQUM7QUFBQSxJQUVELENBQUM7QUFBQSxJQUVEO0FBQUEsTUFDRTtBQUFBLE1BQ0E7QUFBQSxRQUNFLGFBQWE7QUFBQTtBQUFBO0FBQUEsSUFJakI7QUFBQSxNQUNFO0FBQUEsTUFDQTtBQUFBLFFBQ0UsZ0JBQWdCO0FBQUEsUUFDaEIsT0FBTztBQUFBLFFBRVAsbUJBQW1CO0FBQUE7QUFBQTtBQUFBLElBSXZCLENBQUM7QUFBQTtBQUFBLEVBR0gsYUFBYTtBQUFBLElBQ1gsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLElBQ0w7QUFBQSxJQUNBLGFBQWE7QUFBQSxJQUdiLE1BQU07QUFBQSxJQUNOLFlBQVk7QUFBQSxJQUdaLFdBQVc7QUFBQSxJQUNYLGNBQWM7QUFBQSxJQUlkO0FBQUEsSUFFQTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
