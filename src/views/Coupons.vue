<template>
  <div class="coupons">
    <!-- 插入全屏載入效果 -->
    <Loading :active.sync="isOuterLoading" loader="bars"></Loading>
    <div class="alert alert-danger alert-dismissible fade show
      w-auto d-inline-block position-absolute start-50 translate-middle-x" id="myAlert" role="alert" v-if="showAlert">
      <strong>{{alertMessage}}</strong>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div class="text-end mt-4">
      <button class="btn btn-primary" @click.prevent="showModal(true)">建立新的優惠卷</button>
    </div>
    <div class="table-responsive">
      <table class="table mt-4 text-nowrap">
        <thead>
          <tr class="text-center">
            <th>名稱</th>
            <th width="16%">折扣百分比</th>
            <th width="18%">到期日</th>
            <th class="text-center" width="15%">是否啟用</th>
            <th class="text-center" width="20%">編輯 / 刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item) in coupons" :key="item.id" class="text-center">
            <td>{{ item.title }}</td>
            <td>{{ item.percent }}%</td>
            <td>{{ item.due_date | dateFilter }}</td>
            <td>
              <span v-if="item.is_enabled == 1" class="text-success">啟用</span>
              <span v-else>未啟用</span>
            </td>
            <td>
              <button class="btn btn-outline-primary btn-sm" @click.prevent="showModal(false, item)">編輯</button>
              <button class="btn btn-outline-danger btn-sm ms-2" @click.prevent="showDelModal(item)">刪除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="couponModal" tabindex="-1" role="dialog" aria-labelledby="couponModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <ValidationObserver v-slot="{ handleSubmit }" ref="form">
          <form @submit.prevent="handleSubmit(updateCoupon)" novalidate>
            <div class="modal-content border-0">
              <div class="modal-header">
                <h5 class="modal-title" id="couponModalLabel">
                  優惠卷
                </h5>
                <button type="button" class="btn-close" aria-label="Close" @click.prevent="hideModal"></button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-12">
                    <ValidationProvider name="title" rules="required" v-slot="{ errors, classes }">
                      <label for="title">標題</label>
                      <input type="text" class="form-control" :class="classes" id="title" placeholder="請輸入標題" v-model="tempCoupon.title">
                      <p class="text-danger fw-bold mt-1 mb-1">{{errors[0]}}</p>
                    </ValidationProvider>
                  </div>
                  <div class="col-12 mt-3">
                    <ValidationProvider name="coupon_code" :rules="{ regex: /^[a-zA-Z0-9]+$/, length: 10 }" v-slot="{ errors, classes }">
                      <label for="coupon_code">優惠碼</label>
                      <input type="text" class="form-control" :class="classes" id="coupon_code" placeholder="請輸入優惠碼" v-model="tempCoupon.code" required>
                      <p class="text-danger fw-bold mt-1 mb-1">{{errors[0]}}</p>
                    </ValidationProvider>
                  </div>
                  <div class="col-12 mt-3">
                    <ValidationProvider name="due_date" rules="required" v-slot="{ errors, classes }">
                      <label for="due_date">到期日</label>
                      <!-- 這裡v-modal先綁到due_date，而非tempCoupon.due_date，因為要先用watch改成時間戳形式才能上傳 -->
                      <input type="date" class="form-control" :class="classes" id="due_date" v-model="due_date">
                      <p class="text-danger fw-bold mt-1 mb-1">{{errors[0]}}</p>
                    </ValidationProvider>
                  </div>
                  <div class="col-12 mt-3">
                    <ValidationProvider name="discount" rules="required|min_value:0" v-slot="{ errors, classes }">
                      <label for="discount">折扣百分比</label>
                      <input type="text" class="form-control" :class="classes" id="discount" placeholder="請輸入折扣百分比" v-model="tempCoupon.percent">
                      <p class="text-danger fw-bold mt-1 mb-1">{{errors[0]}}</p>
                    </ValidationProvider>
                  </div>
                  <div class="col-12 mt-3">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="is_enabled"
                        v-model="tempCoupon.is_enabled" true-value="1" false-value="0">
                      <label class="form-check-label" for="is_enabled">是否啟用</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" @click.prevent="hideModal">關閉</button>
                <button type="submit" class="btn btn-primary">確認優惠卷內容</button>
              </div>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
    <!-- delModal -->
    <div class="modal fade" id="delCouponModal" tabindex="-1" role="dialog" aria-labelledby="couponModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="couponModalLabel">
              <span>刪除優惠卷</span>
            </h5>
            <button type="button" class="btn-close" aria-label="Close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            是否刪除 <strong class="text-danger">{{ tempCoupon.title }}</strong> 優惠卷(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click.prevent="updateCoupon">確認刪除</button>
          </div>
        </div>
      </div>
    </div>

    <Pagination v-bind="paginationObj" @updateDataList="getCoupons"/>

  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';
import Alert from 'bootstrap/js/dist/alert';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import Pagination from '../components/Pagination.vue';
import dateFilter from '../filters/dateFilter';

export default {
  name: 'Coupons',
  data() {
    return {
      coupons: [],
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        due_date: '',
        code: '',
      },
      myModal: {},
      modalState: '',
      isOuterLoading: false,
      showAlert: false,
      alertMessage: '',
      due_date: '',
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
    this.getCoupons();
  },
  mounted() {
    this.myModal = new Modal(document.getElementById('couponModal'));
    this.delMyModal = new Modal(document.getElementById('delCouponModal'));
    this.myAlert = new Alert(document.getElementById('myAlert'));
  },
  watch: {
    due_date() {
      // 獲取以秒為單位的時間戳，因為API要求以此形式上傳
      const timestamp = Math.floor(new Date(this.due_date) / 1000);
      this.tempCoupon.due_date = timestamp;
    },
  },
  methods: {
    getCoupons(page = 1) {
      this.isOuterLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${page}`;
      this.$http.get(api).then((response) => {
        this.isOuterLoading = false;
        this.coupons = response.data.coupons;
        this.paginationObj = response.data.pagination;
      });
    },
    showModal(judge, item) {
      if (judge) {
        this.tempCoupon = {};
        this.due_date = '';
        this.modalState = 'add';
        this.myModal.show();
      } else {
        this.tempCoupon = { ...item };
        this.due_date = dateFilter(item.due_date);
        this.modalState = 'revise';
        this.myModal.show();
      }
    },
    showDelModal(item) {
      this.tempCoupon = { ...item };
      this.modalState = 'delete';
      this.delMyModal.show();
    },
    hideModal() {
      this.myModal.hide();
      this.$refs.form.reset();
    },
    updateCoupon() {
      if (this.modalState === 'add') {
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`;
        this.$http.post(api, { data: this.tempCoupon }).then((response) => {
          if (response.data.success) {
            this.hideModal();
            this.getCoupons();
          } else {
            this.hideModal();
            this.alertShow(response.data.message);
          }
        });
      } else if (this.modalState === 'revise') {
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${this.tempCoupon.id}`;
        this.$http.put(api, { data: this.tempCoupon }).then((response) => {
          if (response.data.success) {
            this.hideModal();
            this.getCoupons();
          } else {
            this.hideModal();
            this.alertShow(response.data.message);
          }
        });
      } else if (this.modalState === 'delete') {
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${this.tempCoupon.id}`;
        this.$http.delete(api, { data: this.tempCoupon }).then((response) => {
          if (response.data.success) {
            this.delMyModal.hide();
            this.getCoupons();
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
  },
};
</script>
