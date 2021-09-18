<template>
  <div>
    <h1 class="text-center mt-5">HOLO購物網後台</h1>
    <main class="form-signin">
      <form>
        <h3 class="h3 mb-3 fw-normal">請登錄</h3>
        <div class="form-floating">
          <input type="email" class="form-control" :class="{'border-danger':showAlert}" id="floatingInput"
            placeholder="name@example.com" v-model="user.username">
          <label for="floatingInput">郵箱地址</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" :class="{'border-danger':showAlert}" id="floatingPassword"
            placeholder="Password" v-model="user.password">
          <label for="floatingPassword">密碼</label>
        </div>
        <div v-if="showAlert" class="text-danger mb-1">用戶名或密碼錯誤,請重新輸入</div>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> 記住我
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit" @click.prevent="login">
          登陸 <font-awesome-icon v-if="isLoading" icon="spinner" spin/>
        </button>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      showAlert: false,
      isLoading: false,
    };
  },
  methods: {
    login() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`;
      this.$http.post(api, this.user).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          // 因為瀏覽器同源政策，不能直接讓伺服器存cookie到本地，只能讓伺服器先傳回token
          // 然後根據伺服器傳回來的資訊，於前端設置cookie
          const { token } = response.data;
          const { expired } = response.data;
          document.cookie = `hexToken = ${token}; expires = ${new Date(expired)}`;
          this.$router.push({ path: '/admin/products' });
          this.isLoading = false;
        } else {
          this.showAlert = true;
          this.isLoading = false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  body {
    display: flex;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
  }

  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
  }

  .form-signin .checkbox {
    font-weight: 400;
  }

  .form-signin .form-floating:focus-within {
    z-index: 2;
  }

  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>
