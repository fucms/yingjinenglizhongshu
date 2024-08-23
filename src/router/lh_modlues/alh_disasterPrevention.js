import Layout from "@/layout";

const disasterPreventionRouter = {
  path: "/disasterPrevention",
  component: Layout,
  redirect: "/alh_disasterPrevention/index",
  meta: { title: "防灾减灾", icon: "el-icon-s-check" },
  children: [
    {
      path: "alh_disasterPrevention",
      component: () => import("@/views/alh_disasterPrevention/index.vue"),
      name: "alh_disasterPrevention",
      meta: { title: "防灾减灾" },
    },
  ],
};

export default disasterPreventionRouter;
