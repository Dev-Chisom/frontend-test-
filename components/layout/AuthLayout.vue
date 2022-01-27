<template>
  <div class="auth-layout">
    <div class="sticky top-0" style="z-index: 999">
      <OfflineNotice v-if="$nuxt.isOffline" />
    </div>
    <div class="page-container">
      <div class="main-content">
        <div class="page-content">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OfflineNotice from "~/components/common/OfflineNotice";

export default {
  components: {
    OfflineNotice,
  },

  methods: {
    storage() {
      if (process.client) {
        const isStorageSet = sessionStorage.getItem("storedData");

        if (!JSON.parse(isStorageSet)) {
          const login = {
            username: "admin",
            password: "123456",
          };
          sessionStorage.setItem("storedData", JSON.stringify(login));
        }
      }
    },
  },

  created() {
    this.storage();
    console.log("lol");
  },
};
</script>

<style lang="scss">
.auth-layout {
  transition: background-color 0.3s ease-in-out;

  .page-container {
    position: relative;

    .main-content {
      width: 100%;
      min-height: 100vh;
    }

    .page-content {
      padding: 1.5rem;
      z-index: 10;
      margin-top: 3.5rem;
      min-height: calc(100vh - 3.5rem);
    }
  }

  .auth-page {
    &__section {
      transition: all 0.3s ease-in-out;
      padding-bottom: 1.5rem;
    }

    &__title {
      font-weight: 600;
      margin-bottom: 0.5rem;
      text-align: center;
      font-size: 1.5rem;
      line-height: 2rem;
      width: 100%;
      color: $dark-dark;
    }

    &__continue-to-dashboard {
      font-size: 14px;
      color: $grey;
    }

    &__extras {
      p {
        margin-bottom: 1rem;
        color: $dark-dark;
      }
    }

    &__error {
      color: $red;
    }
  }
}
</style>
