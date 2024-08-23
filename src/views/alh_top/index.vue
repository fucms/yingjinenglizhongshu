<template>
    <div class="app-container">
        <el-row>
            <el-col :span="12">
                <el-col :span="12">
                    <PieChart />
                </el-col>
                <el-col :span="12">
                    <RaddarChart />
                </el-col>
                <br>
                <TransactionTable />
            </el-col>
            <el-col :span="12">
                <MapView />
            </el-col>
        </el-row>
    </div>
</template>


<script>
import MapView from '../address/addressSelect/index.vue'
import PieChart from '../dashboard/admin/components/PieChart.vue'
import RaddarChart from '../dashboard/admin/components/RaddarChart.vue'
import TransactionTable from '../dashboard/admin/components/TransactionTable.vue'
export default {
    data() {
        return {

        }
    },
    components: {
        MapView,
        PieChart,
        RaddarChart,
        TransactionTable
    },
    created() {

    },
    methods: {

    }
}
</script>

<style scoped></style>