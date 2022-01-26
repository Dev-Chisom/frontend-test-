<template>
  <header class="gallery-dashboard-header">
    <div class="gallery-dashboard-header__left-side">
      <div
        class="gallery-dashboard-header__logo"
        mobile
        :show-sidebar="showSidebar"
      >
        <button @click="openPageSidebar">
          <img :src="parseStaticUrl(menuIcon)" alt="icon" />
        </button>
      </div>
      <div
        v-if="headerTitle"
        class="gallery-dashboard-header__title"
        :show-sidebar="showSidebar"
      >
        <span>{{ headerTitle }}</span>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    headerTitle: {
      type: String,
      default: "",
    },
    showSidebar: {
      type: Boolean,
      default: true,
    },
    menuIcon: {
      type: String,
      default: "/svg/icon-menu.svg",
    },
  },
  methods: {
    ...mapActions({
      openPageSidebar: "page/openPageSidebar",
    }),
  },
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

  button {
    background: #000;
    outline: none;
    border: 0;

    @include for-desktop-only {
      display: none;
    }
  }

  &__left-side {
    display: flex;
    align-items: center;

    @media (min-width: 1024px) {
      min-width: 17.5rem;
    }
  }
  &__title {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    margin: 0 0.5rem;
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
      font-size: 1.25rem;
      line-height: 1.75rem;
    }

    @media (min-width: 768px) {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
}
</style>
