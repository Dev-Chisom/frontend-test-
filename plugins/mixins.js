import Vue from 'vue';

Vue.mixin({

  methods: {
    parseStaticUrl (path = '/') {
      if (this.$config.staticPath) {
        return `${this.$config.staticPath}${path}`;
      }
      return path;
    },
    togglePageSidebar () {
      this.setShowPageSidebar(!this.showPageSidebar);
      this.activeTabName = '';
    },
    openPageSidebar () {
      const screenWidth = window.innerWidth;
      if (screenWidth < 1800 && screenWidth >= 1440) {
        this.setShowPageSidebar(true);
        return;
      }

      this.setShowPageSidebar(true);
    },
  }
})
