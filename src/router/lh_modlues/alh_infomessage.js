import Layout from "@/layout";

const alh_infomessageRouter = {
  path: "/alh_infomessage",
  component: Layout,
  redirect: "/alh_infomessage/index",
  meta: { title: "信息管理", icon: "el-icon-s-check" },
  children: [
    {
      path: "alh_infomessage",
      component: () => import("@/views/alh_infomessage/index.vue"),
      name: "alh_infomessage",
      meta: { title: "信息管理" },
    },
  ],
};

export default alh_infomessageRouter;
