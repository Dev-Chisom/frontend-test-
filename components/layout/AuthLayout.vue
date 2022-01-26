<template>
  <div class="auth-layout">
    <div class="sticky top-0" style="z-index: 999;">
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
import OfflineNotice from '~/components/common/OfflineNotice';

export default {
  components: {
    OfflineNotice
  }
};
</script>

<style lang="scss">
.auth-layout {
  transition: background-color 0.3s ease-in-out;

  .page-container {
    @apply relative;

    .main-content {
      @apply w-full min-h-screen;
    }

    .page-content {
      @apply p-6 z-10;
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
      margin-bottom: .5rem;
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
