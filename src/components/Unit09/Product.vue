<template>
  <div class="row_recharge product">
    <h2>Danh sách sản phẩm</h2>
    <el-card class="listProduct">
      <el-row>
        <a class="btn btnAdd el-button el-button--primary el-button--mini is-plain"
        @click="dialogAddProduct = true">
          Thêm mới
        </a>
        <el-input
            class="input-search"
            v-model="searchKey"
            @keydown.enter.native="handleSearch"
            clearable
            placeholder="Nhập vào tên sản phẩm để tìm kiếm"
        >
        </el-input>
        <el-button class="btnSearch" icon="el-icon-search" @click="handleSearch">Tìm kiếm</el-button>
      </el-row>
      <el-table
          :data=listProducts
          style="width: 100%">
        <el-table-column
            min-width="100px"
            prop="name"
            label="Tên sản phẩm"
        >
          <template slot-scope="product">
            <span class="product_name">{{product.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column
            width="120px"
            label="Ảnh"
        >
          <template slot-scope="product">
            <img :src="`http://vuecourse.zent.edu.vn/storage/${product.row.image}`" alt="" class="img_user">
          </template>
        </el-table-column>
        <el-table-column
            min-width="100px"
            prop="description"
            label="Mô tả">
          <template slot-scope="product">
            {{product.row.description}}
          </template>
        </el-table-column>
        <el-table-column
            min-width="100px"
            prop="price"
            sortable
            label="Giá">
          <template slot-scope="product">
            {{product.row.price}}
          </template>
        </el-table-column>
        <el-table-column
            min-width="100px"
            prop="created_at"
            align="center"
            label="Hành động">
          <template slot-scope="product">
            <a class="btn btnRecharge el-button el-button--primary el-button--mini is-plain"
            @click="openDialogUpdateProduct(product.row)">
              Sửa
            </a>
            <a class="btn btnRecharge el-button el-button--danger el-button--mini is-plain"
            @click="deleteProduct(product.row.id)">
              Xoá
            </a>
          </template>
        </el-table-column>
      </el-table>
      <div class="paginationWarp">
        <el-col :span="10">
          <div class="textInfo">
            <p>Số lượng kết quả: {{ page.from }} - {{ page.to }} của {{ page.total }} </p>
          </div>
        </el-col>

        <el-col :span="14">
          <el-pagination
              layout="prev, pager, next"
              :total="page.total"
              :page-size="page.pageSize"
              :current-page="page.currentPage"
              @current-change="handleCurrentChange">
          </el-pagination>
        </el-col>
      </div>
    </el-card>
    <el-dialog width="35%" top="5vh" title="Thêm mới sản phẩm" :visible.sync="dialogAddProduct" class="modalProduct">
      <el-row :gutter="24">
        <el-col :span="24">
          <el-row>
            <div class="inputWarp">
              <label>Tên sản phẩm <span class="required">*</span></label>
              <el-input v-model="name"></el-input>
            </div>
          </el-row>
          <el-row>
            <div class="inputWarp" >
              <label>Mô tả <span class="required">*</span></label>
              <el-input v-model="description"></el-input>
            </div>
          </el-row>
          <el-row>
            <div class="inputWarp">
              <label>Giá <span class="required">*</span></label>
              <el-input v-model="price"></el-input>
            </div>
          </el-row>
          <el-row>
            <div class="inputWarp">
              <label>Hình ảnh <span class="required">*</span></label><br>
              <div>
                <div class="col-lg-9 col-xl-6">
                  <div class="image-input image-input-outline" id="kt_profile_avatar">
                    <div class="image-input-wrapper">
                      <img
                          class="el-upload-list__item-thumbnail avatar"
                          v-if="avatarUrl"
                          :src="avatarUrl"
                      >
                    </div>
                    <label
                        class="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                        data-action="change"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="Change avatar"
                    >
                      <i class="fa fa-pen icon-sm text-muted"></i>
                      <input
                          type="file"
                          name="profile_avatar"
                          accept="image/*"
                          @change="onChangeAvatar"
                      />
                      <input type="hidden" name="profile_avatar_remove" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </el-row>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click=clearForm>Đóng</el-button>
        <el-button type="primary" @click="handleAddProduct">Tạo mới</el-button>
      </span>
    </el-dialog>
    <el-dialog width="35%" top="5vh" title="Cập nhật sản phẩm" :visible.sync="dialogUpdateProduct" class="modalProduct">
      <el-row :gutter="24">
        <el-col :span="24">
          <el-row>
            <div class="inputWarp">
              <label>Tên sản phẩm <span class="required">*</span></label>
              <el-input v-model="name"></el-input>
            </div>
          </el-row>
          <el-row>
            <div class="inputWarp" >
              <label>Mô tả <span class="required">*</span></label>
              <el-input v-model="description"></el-input>
            </div>
          </el-row>
          <el-row>
            <div class="inputWarp">
              <label>Giá <span class="required">*</span></label>
              <el-input  v-model="price"></el-input>
            </div>
          </el-row>
          <el-row>
            <div class="inputWarp">
              <label>Hình ảnh <span class="required">*</span></label><br>
              <div>
                <div class="col-lg-9 col-xl-6">
                  <div class="image-input image-input-outline" id="kt_profile">
                    <div class="image-input-wrapper">
                      <img
                          class="el-upload-list__item-thumbnail avatar"
                          v-if="avatarUrl"
                          :src="avatarUrl"
                      >
                      <img
                          class="el-upload-list__item-thumbnail avatar"
                          v-else-if="avatar"
                          :src="`http://vuecourse.zent.edu.vn/storage/${avatar}`"
                      >
                      <img
                          class="el-upload-list__item-thumbnail avatar"
                          v-else
                          src=""
                      >
                    </div>
                    <label
                        class="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                        data-action="change"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="Change avatar"
                    >
                      <i class="fa fa-pen icon-sm text-muted"></i>
                      <input
                          type="file"
                          name="profile_avatar"
                          accept="image/*"
                          @change="onChangeAvatar"
                      />
                      <input v-model="avatar" type="hidden" name="profile_avatar_remove" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </el-row>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click=clearForm>Đóng</el-button>
        <el-button type="primary" @click="handleUpdateProduct">Cập nhật</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// import moment from 'moment'
import _ from 'lodash'
import axios from "axios";
export default {
  name: "Product",
  data(){
    return{
      dialogAddProduct: false,
      dialogUpdateProduct: false,
      listProducts: [],
      searchKey: '',
      page: {
        currentPage: 1,
        pageSize: 10,
        total: 0,
        from: 0,
        to: 0
      },
      id: '',
      name: '',
      description: '',
      price: '',
      image: '',
      fileList: [],
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      avatarUrl: null,
      avatar:null
    }
  },
  mounted() {
    this.getListProduct();
  },
  watch: {
    // avatarUrl(){
    //   if (this.avatarUrl && this.avatarUrl.length >0){
    //     this.avatar = null
    //   }
    // },
    searchKey:function () {
      if(this.searchKey.length === 0){
        this.getListProduct()
      }
    },
  },
  methods:{
    handleCurrentChange(page) {
      let param = {}
      if (this.searchKey.length>0){
        param = {
          page: page,
          q: this.searchKey
        }
      }else {
        param = {
          page: page
        }
      }
      this.getListProduct(param);
    },
    getListProduct(param){
      axios({
        method: 'get',
        url: 'http://vuecourse.zent.edu.vn/api/products',
        params: param
      }).then((res) => {
        this.page.currentPage = _.get(res, 'data.data.current_page')
        this.page.pageSize = _.get(res, 'data.data.per_page')
        this.page.total = _.get(res, 'data.data.total', 0)
        let from = _.get(res, 'data.data.from', 0)
        let to = _.get(res, 'data.data.to', 0)
        this.page.from = from ? from : 0
        this.page.to = to ? to : 0
        this.listProducts = (_.get(res, 'data.data.data'))
      })
    },
    handleAddProduct(){
      let data = new FormData();
      data.append('name', this.name);
      data.append('description', this.description);
      data.append('price', this.price);
      data.append('image', this.avatar);
      axios.post('http://vuecourse.zent.edu.vn/api/products',
          data,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
      ).then(() => {
        this.getListProduct()
        this.clearForm()
        this.dialogAddProduct = false
        this.$message({
          type: 'success',
          message: 'Thêm mới thành công'
        });
      })
    },
    openDialogUpdateProduct(product){
      this.id = _.get(product, 'id')
      this.name = _.get(product, 'name', "")
      this.description = _.get(product, 'description', "")
      this.price = _.get(product, 'price', "")
      this.avatar = _.get(product, 'image', "")
      this.dialogUpdateProduct = true
    },
    handleUpdateProduct(){
      let data = new FormData();
      data.append('name', this.name);
      data.append('description', this.description);
      data.append('price', this.price);
      data.append('image', this.avatar);
      axios.post('http://vuecourse.zent.edu.vn/api/products/'+this.id,
          data,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
      ).then(() => {
        this.getListProduct()
        this.clearForm()
        this.dialogUpdateProduct = false
        this.$message({
          type: 'success',
          message: 'Cập nhật thành công'
        });
      })
    },
    deleteProduct(id){
        this.$confirm('Dữ liệu không thể khôi phục. Bạn chắc chắn xoá?', 'Cảnh báo!', {
          confirmButtonText: 'Xoá',
          cancelButtonText: 'Huỷ',
          type: 'warning'
        }).then(() => {
          axios({
            method: 'delete',
            url: 'http://vuecourse.zent.edu.vn/api/products/'+id,
          }).then(() => {
            this.getListProduct()
            this.clearForm()
            this.$message({
              type: 'success',
              message: 'Xoá thành công'
            });
          })
        })
    },
    clearForm(){
      this.dialogUpdateProduct = false
      this.dialogAddProduct = false
      this.name =  ''
      this.description = ''
      this.price = ''
      this.id = ''
      this.avatar = null
      this.avatarUrl = null
    },
    handleSearch(){
      let param = {
          q: this.searchKey
        }
      this.getListProduct(param);
    },
    onChangeAvatar(e) {
      if (e.target.files.length) {
        this.avatar = e.target.files[0];
        this.avatarUrl = URL.createObjectURL(e.target.files[0]);
      }
    },
  }
}
</script>

<style scoped lang="scss">
.product{
  padding: 50px 200px;

  .listProduct{
    height: calc(100vh - 200px) !important;

    .btnAdd{
      float: left;
    }

    .product_name{
      text-decoration: none;
      font-weight: bold;
      //color: #00acc1;
    }

    .input-search{
      width: 30%;
      margin-right: 10px;
    }

    .btnSearch{
      //float: right;
    }

  }

  .modalProduct{
    .el-dialog__body{
      input{
        margin-top: 5px!important;
      }
    }
    .inputWarp{
      margin-bottom: 20px;

      label{
        float: left;
        font-weight: bold;
      }
    }
  }

  .required{
    color: red;
  }
.avatar{
  width: 100px;
  margin-right: 400px;
  object-fit: cover;
}
  .img_user{
    width: 50px;
  }
}
</style>