<template>
  <GalleryLayout header-title="Home">
    <section id="dashboard-page">
      <div class="xl:grid grid-cols-12 gap-4">
        <div class="col-span-7 xl:col-span-8 flex flex-col content-box self-start">
          <h4 class="title">
            Users
          </h4>
            <GalleryCards/>
        </div>
      </div>
    </section>
  </GalleryLayout>
</template>

<script>
import GalleryLayout from '~/components/layout/GalleryLayout';
import GalleryCards from '~/components/common/GalleryCards';

export default {
  name: 'Gallery',
  components: {
    GalleryLayout,
    GalleryCards
  },
  head: {
    title: 'Gallery'
  },
   middleware: ['auth'],
};
</script>

<style  lang="scss" scoped>
#dashboard-page {
  padding: 1.5rem 0;
  width: 100%;
  margin: 0 auto;
  overflow-y: hidden;

  .content-box.self-start {
    min-height: max-content;
   padding: .5rem 0
  }
  .title{
    font-size: 2rem;
    line-height: 2rem;
    padding: 1.5rem;
    padding-bottom: 1rem;
    font-weight: 500;
  }

  .panel-to-panel-divider {
    margin: .5rem 1.5rem;
    border-bottom: 1px solid $grey-bg;
  }
}

#profile-meter-wrapper {
  max-width: 24rem;
  width: calc(100% - 2.25rem);
  position: fixed;
  bottom: 6rem;
  right: 1.25rem;
}

#profile-meter-button {
  display: flex;
  border-radius: 8px;
  box-shadow: 0px 8px 42px 11px rgba(0, 0, 0, 0.1);
}
</style>
