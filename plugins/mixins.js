import Vue from 'vue';

Vue.mixin({

  methods: {

    validateEmailAddress (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },

    parseStaticUrl (path = '/') {
      if (this.$config.staticPath) {
        return `${this.$config.staticPath}${path}`;
      }
      return path;
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
