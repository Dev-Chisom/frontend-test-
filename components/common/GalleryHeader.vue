<template>
  <header class="gallery-dashboard-header">
    <div class="gallery-dashboard-header__left-side">
      <div class="gallery-dashboard-header__logo" mobile :show-sidebar="showSidebar">
        <button @click="openPageSidebar">
          <img :src="parseStaticUrl(menuIcon)" alt="...">
        </button>
      </div>
      <div v-if="headerTitle" class="gallery-dashboard-header__title" :show-sidebar="showSidebar">
        <span>{{ headerTitle }}</span>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    headerTitle: {
      type: String,
      default: '',
    },
    showSidebar: {
      type: Boolean,
      default: true
    },
    menuIcon: {
      type: String,
      default: '/svg/icon-menu.svg',
    }
  },
  computed: {
    isSettingsPage () {
      return this.$route.path.toLowerCase().includes('/settings');
    },
    isCheckoutPage () {
      return this.$route.path === '/cart/checkout';
    },
    showOnlyProfileNavOption () {
      return this.showSidebar && !this.isCheckoutPage;
    },
  },
  methods: {
    ...mapActions({
      openPageSidebar: 'page/openPageSidebar',
    })
  }
};
</script>

<style lang="scss" scoped>
.gallery-dashboard-header {
  width: 100%;
  display: flex;
  position: sticky;
  top: 0;
  background-color: $dark;
  color: $light;
  padding: 0 1rem;
  height: 70px;
  z-index: 999;

  &__left-side {
    display: flex;
    align-items: center;

    @media (min-width: 1024px) {
      min-width: 17.5rem;
    }
  }

  &__right-side {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    &[mobile] {
      display: none;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        margin-right: 0.25rem;
      }

      &[show-sidebar] {
        display: block;

        @media (min-width: 1024px) {
          display: none;
        }
      }
    }

    &[desktop] {
      margin: auto 0.5rem;
      display: none;
      width: fit-content;

      img {
        width: 40px;
        height: 40px;
      }

      @media (min-width: 1024px) {
        display: flex;
        align-items: center;
      }
    }
  }

  & > :last-child {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  &__title {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    margin: 0 .5rem;
    font-weight: 300;
    min-width: max-content;

    & > span {
      @apply truncate;
      width: calc(100vw - 16.5rem);

      @media (min-width: 1024px) {
        width: calc(17.5rem - 5rem);
      }
    }

    @media (min-width: 640px) {
      @apply text-xl;
    }

    @media (min-width: 768px) {
      @apply text-2xl;
    }
  }

  &__nav-options {
    @apply h-full flex items-center justify-end;
  }

  &__nav-option {
    @apply h-full flex items-center relative;
    border-left: 1px solid rgba($light, 0.1);
    padding: 1rem;
    height: 70px;
    min-width: max-content;

    & > img {
      height: 24px;
      margin: 1px 0 0 0;

      @media (min-width: 1280px) {
        margin: 1px 0 0 0.5rem;
      }
    }

    & > span {
      min-width: max-content;
    }

    &.hide-on-mobile {
      display: none;

      @media (min-width: 1024px) {
        display: flex;
      }
    }
  }

  .select-currency {
    color: $dark;
    height: 30px;
    border-radius: 2.1px;
    padding: 0.5rem 2rem 0.5rem 0.5rem;
    font-size: small;
    font-weight: bold;
    background-color: $grey-bg-lighter;
    background-position: right 0.25rem center;
    background-size: 24px 24px;
    background-repeat: no-repeat;

    @media (min-width: 1280px) {
      margin-left: 0.75rem;
    }
  }

  .profile-dropdown {
    @apply h-full flex items-center;

    .profile-pic {
      width: 40px;
      height: 40px;
      min-width: 40px;
      min-height: 40px;
      border-radius: 50%;
      background-color: $yellow;
      object-fit: cover;
      border: 2px solid transparent;

      &:hover {
        border: 2px solid rgba(40, 80, 23, 0.2);
        opacity: 0.85;
      }

      @media (min-width: 1024px) {
        margin-right: 0.5rem;
      }
    }

    .profile-initials {
      margin-right: 0.5rem;
    }
  }

  .mobile-responsive-min-width {
    min-width: 100vw;

    @media (min-width: 640px) {
      min-width: 388px;
    }
  }
}
</style>
