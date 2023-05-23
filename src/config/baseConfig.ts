// 官网配置
export default {
  header: [
    {
      name: "Introduction",
      cName: "指南",
      type: "guide",
      path: "#/guide/introduction",
      pathName: "#/zh-CN/guide/introduction",
      pathEnName: "#/en-US/guide/introduction", // TODO: 临时方案
    },
    {
      name: "Components",
      cName: "组件",
      type: "component",
      path: "#/component/button",
      pathName: "#/zh-CN/component/button",
      pathEnName: "#/en-US/component/button", // TODO: 临时方案
    },
  ],
  docs: {
    name: "指南",
    enName: "Essentials",
    packages: [
      {
        name: "Introduction",
        cName: "介绍",
        show: true,
      },
      {
        name: "QuickStart",
        cName: "快速上手",
        show: true,
      },
      {
        name: "InternationalAndTheme",
        cName: "国际化/主题",
        show: true,
      },
      {
        name: "Notice",
        cName: "常见问题",
        show: true,
      },
      {
        name: "CHANGELOG",
        cName: "更新日志",
        show: true,
      },
    ],
  },
};
