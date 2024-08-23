<template>
    <div class="app-container">
        <el-row>
            <el-col :span="12">
                <MapView />
            </el-col>
            <el-col :span="12">
                <!-- <PanelGroup /> -->
                <div style="width: 100%;margin-left: 1%;">
                    <div class="box1">基本信息</div>
                    <div class="box1">安全管理机构</div>
                    <div class="box1">企业属性</div>
                </div>
                <div style="width: 100%;margin-left: 1%;">
                    <div class="box1">濒危情况</div>
                    <div class="box1">职业卫生</div>
                    <div class="box1">第三方评估</div>
                </div>
                <div style="width: 100%;margin-left: 1%;">
                    <div class="box1">安全投入</div>
                    <div class="box1">应急管理</div>
                    <div class="box1">安全培训</div>
                </div>
                <div style="width: 100%;margin-left: 1%;">
                    <div class="box1">事故信息</div>
                    <div class="box1">粉尘爆炸</div>
                    <div class="box1">第三方检测</div>
                </div>
                <br>
                <TransactionTable />
            </el-col>
        </el-row>
    </div>
</template>


<script>
import MapView from '../address/addressSelect/index.vue'
import PanelGroup from '../dashboard/admin/components/PanelGroup.vue'
import TransactionTable from '../dashboard/admin/components/TransactionTable.vue'
export default {
    data() {
        return {

        }
    },
    components: {
        MapView,
        PanelGroup,
        TransactionTable
    },
    created() {

    },
    methods: {

    }
}
</script>

<style scoped>
.box1 {
    background-color: rgb(226, 248, 255);
    width: 31%;
    height: 60px;
    float: left;
    margin: 1%;
    border-radius: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    text-align: center;
    line-height: 60px;
    font-size: 16px;
    font-weight: 600;
    color: rgb(74, 73, 73);
}
</style>