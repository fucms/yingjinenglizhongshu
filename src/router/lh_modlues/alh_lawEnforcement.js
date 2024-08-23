import Layout from "@/layout";

const alh_lawEnforcementRouter = {
  path: "/alh_lawEnforcement",
  component: Layout,
  redirect: "/alh_lawEnforcement/index",
  meta: { title: "执法汇总", icon: "el-icon-s-check" },
  children: [
    {
      path: "alh_lawEnforcement",
      component: () => import("@/views/alh_lawEnforcement/index.vue"),
      name: "alh_lawEnforcement",
      meta: { title: "执法汇总" },
    },
  ],
};

export default alh_lawEnforcementRouter;
