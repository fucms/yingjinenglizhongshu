import Layout from "@/layout";

const alh_superviseRouter = {
  path: "/alh_supervise",
  component: Layout,
  redirect: "/alh_supervise/index",
  meta: { title: "监管", icon: "el-icon-s-check" },
  children: [
    {
      path: "alh_supervise",
      component: () => import("@/views/alh_supervise/index.vue"),
      name: "alh_supervise",
      meta: { title: "监管" },
    },
  ],
};

export default alh_superviseRouter;
