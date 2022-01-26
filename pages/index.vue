<template>
  <div class="page-container">
    Loading...
  </div>
</template>

<script>
export default {
  components: {},
  asyncData ({ redirect, store }) {
    return redirect('/auth/signin/');
  },
  head: {
    title: 'Page Loading...'
  }
};
</script>

<style lang="scss" scoped>
.page-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
}
</style>