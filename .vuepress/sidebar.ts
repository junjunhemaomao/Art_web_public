import {SidebarConfig4Multiple} from "vuepress/config";
// @ts-ignore

export default {
    // 你可以保留部分必要的路径侧边栏配置
    "/关于我们/": ["", "个人经历"],
    // 默认根据文章标题渲染侧边栏
    "/": "auto",
} as SidebarConfig4Multiple;
