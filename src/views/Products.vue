<template>
  <div class="products">
    <!-- 插入全屏載入效果 -->
    <Loading :active.sync="isOuterLoading" loader="bars"></Loading>
    <div class="alert alert-danger alert-dismissible fade show
      w-auto d-inline-block position-absolute start-50 translate-middle-x" id="myAlert" role="alert" v-if="showAlert">
      <strong>{{alertMessage}}</strong>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div class="text-end mt-4">
      <button class="btn btn-primary" @click.prevent="showModal(true)">建立新的產品</button>
    </div>
    <div class="table-responsive">
      <table class="table mt-4 text-nowrap">
        <thead>
          <tr>
            <th>分類</th>
            <th>產品名稱</th>
            <th>原價</th>
            <th>售價</th>
            <th class="text-center">是否啟用</th>
            <th class="text-center">編輯 / 刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item) in products" :key="item.id">
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td class="text-end">{{ item.origin_price | currencyFilter }}</td>
            <td class="text-end">{{ item.price | currencyFilter }}</td>
            <td class="text-center">
              <span v-if="item.is_enabled == 1" class="text-success">啟用</span>
              <span v-else>未啟用</span>
            </td>
            <td class="text-center">
              <button class="btn btn-outline-primary btn-sm" @click.prevent="showModal(false, item)">編輯</button>
              <button class="btn btn-outline-danger btn-sm ms-2" @click.prevent="showDelModal(item)">刪除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="productModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <ValidationObserver v-slot="{ handleSubmit }" ref="form">
          <form @submit.prevent="handleSubmit(updateProduct)" novalidate>
            <div class="modal-content border-0">
              <div class="modal-header bg-dark text-white">
                <h5 class="modal-title" id="productModalLabel">
                  <span>新增產品</span>
                </h5>
                <button type="button" class="btn-close" aria-label="Close" @click.prevent="hideModal"></button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-sm-4">
                    <div class="row">
                      <!-- <div class="col-12">
                        <label for="image">輸入圖片網址</label>
                        <input type="text" class="form-control" id="image" placeholder="請輸入圖片連結" v-model="tempProduct.imageUrl">
                      </div> -->
                      <div class="col-12">
                        <ValidationProvider name="image" v-slot="{ errors, classes }">
                          <label for="customFile">上傳圖片
                            <!-- 加上fontawesome的動畫icon -->
                            <font-awesome-icon v-if="isInnerLoading" icon="spinner" spin/>
                          </label>
                          <input type="text" v-show="false" class="form-control" id="image" placeholder="請輸入圖片連結" v-model="tempProduct.imageUrl" required>
                          <input type="file" name="file-to-upload" class="form-control" :class="classes" id="customFile" ref="files" @change="uploadFile">
                          <p class="text-danger fw-bold mt-1 mb-1">{{errors[0]}}</p>
                          <p class="text-danger fw-bold" v-if="showInsideAlert">上傳失敗，{{alertMessage}}</p>
                        </ValidationProvider>
                      </div>
                      <img :src="tempProduct.imageUrl" class="img-fluid" :alt="tempProduct.image">
                    </div>
                  </div>
                  <div class="col-sm-8">
                    <div class="row">
                      <div class="col-12">
                        <ValidationProvider name="title" rules="required" v-slot="{ errors, classes }">
                          <label for="title">標題</label>
                          <input type="text" class="form-control" :class="classes" id="title" placeholder="請輸入標題" v-model="tempProduct.title">
                          <p class="text-danger fw-bold mt-1 mb-1">{{errors[0]}}</p>
                        </ValidationProvider>
                      </div>

                      <div class="col-12 mt-3">
                        <div class="row">
                          <div class="col-md-6">
                            <ValidationProvider name="category" rules="required" v-slot="{ errors, classes }">
                              <label for="category">分類</label>
                              <select class="form-control" :class="classes" name="category" id="category" v-model="tempProduct.category">
                                <option value="" disabled selected>請選擇分類</option>
                                <option value="cloth">服飾</option>
                                <option value="food">食品</option>
                                <option value="furniture">家居</option>
                              </select>
                              <p class="text-danger fw-bold mt-1 mb-1">{{errors[0]}}</p>
                            </ValidationProvider>
                          </div>
                          <div class="col-md-6">
                            <ValidationProvider name="category" rules="required|length:1" v-slot="{ errors, classes }">
                              <label for="price">單位</label>
                              <input type="unit" class="form-control" :class="classes" id="unit" placeholder="請輸入單位" v-model="tempProduct.unit">
                              <p class="text-danger fw-bold mt-1 mb-1">{{errors[0]}}</p>
                            </ValidationProvider>
                          </div>
                        </div>
                      </div>

                      <div class="col-12 mt-3">
                        <div class="row">
                          <div class="col-md-6">
                            <ValidationProvider name="origin_price" rules="required|min_value:0" v-slot="{ errors, classes }">
                              <label for="origin_price">原價</label>
                              <input type="number" class="form-control" :class="classes" id="origin_price" placeholder="請輸入原價" v-model="tempProduct.origin_price">
                              <p class="text-danger fw-bold mt-1 mb-1">{{errors[0]}}</p>
                            </ValidationProvider>
                          </div>
                          <div class="col-md-6">
                            <ValidationProvider name="price" rules="required|min_value:0" v-slot="{ errors, classes }">
                              <label for="price">售價</label>
                              <input type="number" class="form-control" :class="classes" id="price" placeholder="請輸入售價(小於等於原價)" v-model="tempProduct.price">
                              <p class="text-danger fw-bold mt-1 mb-1">{{errors[0]}}</p>
                            </ValidationProvider>
                          </div>
                        </div>
                      </div>

                      <hr class="mt-4"/>
                      <div class="col-12">
                        <ValidationProvider name="content" rules="required" v-slot="{ errors, classes }">
                          <label for="content">說明內容</label>
                          <textarea type="text" class="form-control" :class="classes" id="content" placeholder="請輸入產品描述" v-model="tempProduct.content"></textarea>
                          <p class="text-danger fw-bold mt-1 mb-1">{{errors[0]}}</p>
                        </ValidationProvider>
                      </div>
                      <div class="col-12 mt-3">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="is_enabled"
                            v-model="tempProduct.is_enabled" true-value="1" false-value="0">
                          <label class="form-check-label" for="is_enabled">
                            是否啟用
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" @click.prevent="hideModal">取消</button>
                <button type="submit" class="btn btn-primary">確認</button>
              </div>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
    <!-- delModal -->
    <div class="modal fade" id="delProductModal" tabindex="-1" role="dialog" aria-labelledby="productModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="productModalLabel">
              <span>刪除產品</span>
            </h5>
            <button type="button" class="btn-close" aria-label="Close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            是否刪除 <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click.prevent="updateProduct">確認刪除</button>
          </div>
        </div>
      </div>
    </div>

    <Pagination v-bind="paginationObj" @updateDataList="getProducts"/>

  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';
import Alert from 'bootstrap/js/dist/alert';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import Pagination from '../components/Pagination.vue';

export default {
  name: 'Products',
  data() {
    return {
      products: [],
      tempProduct: {},
      myModal: {},
      modalState: '',
      isOuterLoading: false,
      isInnerLoading: false,
      showAlert: false,
      showInsideAlert: false,
      alertMessage: '',
      paginationObj: {
        total_pages: 1,
        current_page: 1,
        has_pre: false,
        has_next: false,
      },
    };
  },
  components: {
    Pagination,
    ValidationProvider,
    ValidationObserver,
  },
  created() {
    this.getProducts();
  },
  mounted() {
    this.myModal = new Modal(document.getElementById('productModal'));
    this.delMyModal = new Modal(document.getElementById('delProductModal'));
    this.myAlert = new Alert(document.getElementById('myAlert'));
  },
  methods: {
    getProducts(page = 1) {
      this.isOuterLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
      this.$http.get(api).then((response) => {
        this.isOuterLoading = false;
        this.products = response.data.products;
        this.paginationObj = response.data.pagination;
      });
    },
    showModal(judge, item) {
      if (judge) {
        document.getElementById('customFile').value = '';
        this.tempProduct = {};
        this.modalState = 'add';
        this.myModal.show();
      } else {
        document.getElementById('customFile').value = '';
        this.tempProduct = { ...item };
        this.modalState = 'revise';
        this.myModal.show();
      }
    },
    showDelModal(item) {
      this.tempProduct = { ...item };
      this.modalState = 'delete';
      this.delMyModal.show();
    },
    hideModal() {
      this.myModal.hide();
      this.$refs.form.reset();
      this.showInsideAlert = false;
    },
    updateProduct() {
      if (this.modalState === 'add') {
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`;
        this.$http.post(api, { data: this.tempProduct }).then((response) => {
          if (response.data.success) {
            this.hideModal();
            this.getProducts();
          } else {
            this.hideModal();
            this.alertShow(response.data.message);
          }
        });
      } else if (this.modalState === 'revise') {
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${this.tempProduct.id}`;
        this.$http.put(api, { data: this.tempProduct }).then((response) => {
          if (response.data.success) {
            this.hideModal();
            this.getProducts();
          } else {
            this.hideModal();
            this.alertShow(response.data.message);
          }
        });
      } else if (this.modalState === 'delete') {
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${this.tempProduct.id}`;
        this.$http.delete(api, { data: this.tempProduct }).then((response) => {
          if (response.data.success) {
            this.delMyModal.hide();
            this.getProducts();
          } else {
            this.delMyModal.hide();
            this.alertShow(response.data.message);
          }
        });
      }
    },
    alertShow(msg) {
      this.alertMessage = msg;
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 5000);
    },
    uploadFile(event) {
      this.isInnerLoading = true;
      const uploadedFile = event.target.files[0];
      // 或是 const uploadedFile = this.$refs.files.files[0];
      // event.target 相當於 this.refs.files(HTML要設置 ref="files")
      console.log(uploadedFile);
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile); // file-to-upload 這個名稱是根據API規定的識別名稱
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`;
      this.$http.post(api, formData, { headers: { 'Content-Type': 'multipart/form-data' } }).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          this.tempProduct = { ...this.tempProduct, imageUrl: response.data.imageUrl };
          this.showInsideAlert = false;
        } else {
          this.alertMessage = response.data.message;
          this.showInsideAlert = true;
        }
        this.isInnerLoading = false;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .invalid {
    border-color: red;
  }
</style>
