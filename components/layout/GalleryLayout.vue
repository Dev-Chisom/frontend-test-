<template>
  <div class="dashboard-layout" :show-sidebar="showSidebar" :show-page-sidebar="showPageSidebar">
    <div style="z-index: 999; position: sticky; top: 0;">
      <OfflineNotice v-if="$nuxt.isOffline" />
      <GalleryHeader :header-title="headerTitle" :show-sidebar="showSidebar" :is-public-page="isPublicPage" />
    </div>
    <div class="page-container">
      <div v-if="showSidebar" class="page-sidebar-wrapper">
        <GallerySidebar />
      </div>
      <div class="page-content-overlay" @click="togglePageSidebar" />
      <div class="page-content-wrapper">
        <div class="page-content">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import GalleryHeader from '~/components/common/GalleryHeader';
import GallerySidebar from '~/components/common/GallerySidebar';
import OfflineNotice from '~/components/common/OfflineNotice';

export default {
  components: {
    GalleryHeader,
    GallerySidebar,
    OfflineNotice,
  },
  props: {
    headerTitle: {
      type: String,
      default: '',
    },
    showSidebar: {
      type: Boolean,
      default: true
    },
    isPublicPage: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    ...mapGetters({
      showPageSidebar: 'page/showPageSidebar',
    })
  },
  methods: {
   ...mapActions({
      togglePageSidebar: 'page/togglePageSidebar'
    })
  }
};
</script>

<style lang="scss">
.dashboard-layout {
  transition: background-color 0.3s ease-in-out;
  background-color: #fff;

  &.bg-light-on-md {
    background-color: $light;

    @media (min-width: 768px) {
      background-color: $grey-bg-lightest;
    }
  }

  .page-container {
    display: flex;
    position: relative;
    overflow: hidden;
    height: calc(100vh - 70px);

    .page-sidebar-wrapper {
      background: $light;
      min-width: 17.5rem;
      width: 17.5rem;
      transition: margin 0.25s ease;
      margin-left: -17.5rem;
      position: fixed;
      min-height: 100vh;
      height: 100%;
      overflow-y: auto;
      z-index: 1001;
      top: 0;

      @media (min-width: 1024px) {
        background: initial;
        top: auto;
        margin-left: 0;
      }
    }

    .page-content-wrapper {
      width: 100%;
      height: 100%;
      overflow: auto;
      margin-left: 0;
      transition: margin 0.25s ease;
      padding: 1rem;
    }

    .page-content-overlay {
      display: none;
      background-color: $dark;
      opacity: 0.55;
      cursor: pointer;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      z-index: 1000;

      @media (min-width: 1024px) {
        display: none;
      }
    }

    .page-content {
      width: 100%;
      min-height: 100%;
    }
  }

  &[show-sidebar] {
    &[show-page-sidebar] {
      .page-content-overlay {
        display: block;
      }

      .page-container {
        .page-sidebar-wrapper {
          margin-left: 0;
        }
      }
    }

    @media (min-width: 1024px) {
      .page-container {
        .page-sidebar-wrapper {
          background: $grey-bg-lightest;
          min-width: 17.5rem;
          width: 17.5rem;
          transition: margin 0.25s ease;
          position: fixed;
          min-height: 100%;
          overflow-y: auto;
          z-index: 10;
          padding-bottom: 70px;
        }

        .page-content-wrapper {
          margin-left: 17.5rem;
        }
      }
    }
  }
}
</style>
