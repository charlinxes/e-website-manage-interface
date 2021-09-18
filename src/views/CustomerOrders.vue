<template>
  <div>
    <Loading :active.sync="isOuterLoading" loader="bars"></Loading>
    <div class="row mt-3">
      <div class="col-md-4 mb-4" v-for="item in filterProducts" :key="item.id">
        <div class="card border-0 shadow-sm">
          <div :style="{'background-image': `url(${item.imageUrl})`}"
            style="background-size: cover; background-position: center" class="bg-img-height"></div>
          <div class="card-body">
            <span class="badge badge-secondary float-end ml-2">{{item.category}}</span>
            <h5 class="card-title">
              <a href="#" class="text-dark">{{item.tittle}}</a>
            </h5>
            <p class="card-text">{{item.content}}</p>
            <div class="h4" v-if="item.price == item.origin_price">{{ item.origin_price | currencyFilter }} 元</div>
            <div class="d-flex justify-content-between align-items-baseline" v-else>
              <div><del class="h6">原價 {{ item.origin_price | currencyFilter }} 元</del></div>
              <div class="h4">現在只要 {{ item.price | currencyFilter }} 元</div>
            </div>
          </div>
          <div class="card-footer d-flex">
            <button type="button" class="btn btn-outline-secondary btn-sm" @click.prevent="getProduct(item.id)">
              查看更多
            </button>
            <button type="button" class="btn btn-outline-danger btn-sm ms-auto" disabled>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalLabel">{{ product.title }}</h5>
            <button type="button" class="btn-close" aria-label="Close" @click.prevent="myModal.hide()"></button>
          </div>
          <div class="modal-body">
            <img :src="product.imageUrl" class="img-fluid" alt="">
            <blockquote class="blockquote mt-3">
              <p>{{ product.content }}</p>
              <footer class="blockquote-footer text-end">{{ product.description }}</footer>
            </blockquote>
            <div class="h4" v-if="product.price == product.origin_price">{{ product.origin_price | currencyFilter }} 元</div>
            <div class="d-flex justify-content-between align-items-baseline" v-else>
              <div><del class="h6">原價 {{ product.origin_price | currencyFilter }} 元</del></div>
              <div class="h4">現在只要 {{ product.price | currencyFilter }} 元</div>
            </div>
            <select name="" class="form-control mt-3" v-model="product.num">
              <option :value="num" v-for="num in 10" :key="num">
                選購 {{num}} {{product.unit}}
              </option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-muted text-nowrap me-3">
              小計 <strong>{{ product.num * product.price | currencyFilter }}</strong> 元
            </div>
            <button type="button" class="btn btn-primary" disabled>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <Pagination v-bind="paginationObj" @updateDataList="getProducts"/>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';
import Pagination from '../components/Pagination.vue';

export default {
  name: 'CustomerOrders',
  data() {
    return {
      products: [],
      product: {},
      myModal: {},
      isOuterLoading: false,
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
  },
  created() {
    this.getProducts();
  },
  mounted() {
    this.myModal = new Modal(document.getElementById('productModal'));
  },
  computed: {
    filterProducts() {
      return this.products.filter((currentValue) => currentValue.is_enabled === '1');
    },
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
    getProduct(id) {
      this.isOuterLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
      this.$http.get(api).then((response) => {
        this.isOuterLoading = false;
        this.product = response.data.product;
        // 讓數量預設為1，但因為原本API傳進來的物件中沒有該屬性，所以要用set方法或ES6{...}使其能追蹤其狀態
        if (!this.product.num) { this.$set(this.product, 'num', 1); }
        this.myModal.show();
      });
    },
  },
};
</script>

<style lang="css" scoped>
  .bg-img-height{
    height: 150px
  };
</style>
