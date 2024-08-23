import Layout from "@/layout";

const alh_emergencyRouter = {
  path: "/alh_emergency",
  component: Layout,
  redirect: "/alh_emergency/index",
  meta: { title: "应急指挥", icon: "el-icon-s-check" },
  children: [
    {
      path: "alh_emergency",
      component: () => import("@/views/alh_emergency/index.vue"),
      name: "alh_emergency",
      meta: { title: "应急资源信息管理" },
    },
  ],
};

export default alh_emergencyRouter;
