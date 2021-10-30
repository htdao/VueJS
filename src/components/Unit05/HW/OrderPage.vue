<template>
  <Page :active="active">
    <template #header>
      <b>Quản lý hóa đơn</b>
    </template>
    <template #main>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="Date" width="180"></el-table-column>
        <el-table-column prop="name" label="Name" width="180"></el-table-column>
        <el-table-column prop="Hành động" label="Address"></el-table-column>
        <el-table-column
            label="Hành động">
          <template slot-scope="scope">
            <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">Delete
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
            class="pagination"
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="40">
        </el-pagination>
      </div>
    </template>
  </Page>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import Page from "./Page";
export default {
  name: "OrderPage",
  components: {
    Page
  },
  data() {
    return {
      currentPage: 1,
      active: '3'
    }
  },
  computed: {
    ...mapState('order', [
      'tableData'
    ]),
    ...mapGetters('order', [
      // Getter muốn gọi đến
    ])
  },
  methods:{
    ...mapMutations('order', [
      // Mutation muốn gọi đến
        'deleteProduct'
    ]),
    handleDelete(value){
      this.deleteProduct(value)
    },
    handleSizeChange(val) {
      console.log(`${val} items per page`);
    },
    handleCurrentChange(val) {
      console.log(`current page: ${val}`);
    }
  }
}
</script>

<style scoped>
</style>