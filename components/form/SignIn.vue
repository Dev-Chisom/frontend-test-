<template>
  <div class="signin-form">
    <form class="form" @submit.prevent="submitRequest">
      <div class="form-group">
        <InputText
          v-model="username"
          type="username"
          autocomplete="username"
          placeholder="Username"
          class-name="form-input"
          id-name="login-username"
        />
      </div>
      <div class="form-group">
        <InputText
          v-model="password"
          type="password"
          autocomplete="current-password"
          placeholder="Password"
          class-name="form-input"
          id-name="login-password"
          @focus="showInvalidFieldsError = true"
        />
      </div>
      <button
        id="login-button"
        class="button block"
        type="submit"
        :disabled="invalidFields"
      >
        {{ buttonText }}
      </button>
    </form>
  </div>
</template>

<script>
import InputText from "~/components/common/InputText";

export default {
  components: {
    InputText,
  },
  data() {
    return {
      loading: false,
      username: "",
      password: "",
      showInvalidFieldsError: false,
    };
  },
  computed: {
    invalidFields() {
      return !this.password.length;
    },
    buttonText() {
      return this.loading ? "Signing in..." : "Sign in";
    },
  },

  methods: {
    submitRequest() {
      const isStorageSet = JSON.parse(sessionStorage.getItem("p"));
      if (
        this.username === isStorageSet.username &&
        this.password === isStorageSet.password
      ) {
        const loginUser = {
          username: this.username,
          password: this.password,
        };
        sessionStorage.setItem("savedUser", JSON.stringify(loginUser));
        this.$router.push("/gallery");
      } else {
        console.log("error");
      }
    },
  },
};
</script>

<style  lang="scss" scoped>
.signin-form {
  &__error {
    color: $red;
  }
}
</style>

