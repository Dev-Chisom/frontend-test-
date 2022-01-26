<template>
  <aside class="gallery-dashboard-sidebar">
    <nav class="hide" mobile>
      <div class="gallery-dashboard-sidebar gallery-dashboard-sidebar__header">
        <div class="title">Hi Username</div>
      </div>

      <div
        v-for="(section, index) in navSectionsArr"
        :key="index"
        class="nav-section"
        mobile
      >
        <div
          v-if="section.title"
          class="nav-section-title"
          v-text="section.title || ''"
        />
        <ul>
          <li
            v-for="(nav, key) in section.navLinks || []"
            :key="key"
            @click="closePageSidebar"
          >
            <a
              v-if="nav.click"
              :href="nav.link || '#'"
              @click.prevent="nav.click ? nav.click() : null"
            >
              <span v-text="nav.title || ''" />
            </a>
            <nuxt-link v-else :to="nav.link || '#'">
              <span v-text="nav.title || ''" />
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>

    <nav class="desktop-view" desktop>
      <div
        v-for="(section, index) in navSectionsArr"
        :key="index"
        class="nav-section"
        desktop
      >
        <div
          v-if="section.title"
          class="nav-section-title"
          v-text="section.title || ''"
        />
        <ul>
          <li
            v-for="(nav, key) in section.navLinks || []"
            :key="key"
            :mobile-only="nav.mobileOnly"
          >
            <a
              v-if="nav.click"
              :href="nav.link || '#'"
              @click.prevent="nav.click ? nav.click() : null"
            >
              <span v-text="nav.title || ''" />
            </a>
            <nuxt-link v-else :to="nav.link || '#'">
              <span v-text="nav.title || ''" />
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </aside>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    navSectionsArr() {
      return [
        {
          title: null,
          navLinks: [
            {
              link: "/gallery",
              title: "Home",
            },
            {
              link: "/gallery",
              title: "Gallery",
            },
            {
              link: "/gallery",
              title: "Lorem",
            },
            {
              link: "/gallery",
              title: "Ipsum",
            },
          ],
        },
      ];
    },
  },
  methods: {
    ...mapActions({
      closePageSidebar: "page/closePageSidebar",
    }),
  },
};
</script>

<style lang="scss" scoped>
.gallery-dashboard-sidebar {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: transparent;

  @include for-desktop-only {
    height: 100%;
  }
  .hide {
    @include for-desktop-only {
      display: none;
    }
  }
  .desktop-view {
    display: none;
    @include for-desktop-only {
      display: block;
      padding-top: 1rem;
    }
  }

  & .title {
    font-size: 1.25rem;
    line-height: 1.75rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 1rem;
  }
  nav[mobile] {
    width: 100%;
    padding: 1rem;

    & > .nav-section[mobile] {
      .nav-section-title {
        cursor: default;
        padding: 0 1rem;
        opacity: 0;
      }

      & > ul {
        li {
          background: $light;
          list-style: none;
          padding: 0;
          margin: 0;

          a {
            display: flex;
            align-items: center;
            padding: 0.75rem 1.5rem;
            color: $grey-dark;
            margin-bottom: 2px;
            text-decoration: none;

            span {
              display: inline-block;
              height: 1.5rem;
              line-height: 25px;
              font-size: 1.4rem;
            }

            span:last-child {
              width: 9.5rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: 1.4rem;
            }
          }

          &.active,
          &:hover {
            a {
              background-color: $grey-bg-lightest;
              color: $dark;
              cursor: pointer;
              border-radius: 8px;
            }

            & + li {
              border-top-right-radius: 1rem;
            }
          }
        }
      }
    }
  }

  nav[desktop] {
    padding-bottom: calc(12.25rem + 3.5rem + 1rem);

    & > .nav-section[desktop] {
      .nav-section-title {
        cursor: default;
        padding: 0 1rem;
        opacity: 0;
      }

      & > ul {
        li {
          background: transparent;
          list-style: none;
          padding: 0;
          margin: 0;

          &[mobile-only] {
            display: none;
          }

          li {
            a {
              padding-left: 3.2rem;
            }
          }

          a {
            display: flex;
            align-items: center;
            padding: 0.75rem 1.25rem;
            color: $grey-dark;
            margin: 0.25rem 1rem;

            span {
              display: inline-block;
              height: 1.5rem;
              line-height: 25px;
              font-size:1.4rem;
            }

            span:last-child {
              width: 9.5rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size:1.4rem;
            }
          }

          &.active,
          &:hover {
            a {
              background-color: $light;
              color: $dark;
              cursor: pointer;
              border-radius: 4px;

              i {
                filter: brightness(0%);
              }
            }

            & + li {
              border-top-right-radius: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>
