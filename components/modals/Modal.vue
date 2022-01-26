<template>
  <div :class="`${size ? `modal-${sizeMap[size]}` : ''}`" class="modal active">
    <div class="modal-overlay" @click="closeModal" />
    <div class="modal-container">
      <div v-if="title" class="modal-header">
        <span v-if="showCloseIconButton" class="modal-close-btn" @click="closeModal">
          <img :src="parseStaticUrl('/svg/close.svg')" alt="close">
        </span>
        <div class="modal-title" v-text="title" />
      </div>
      <div :class="modalBodyClass" class="modal-body">
        <slot />
      </div>
      <div v-if="$slots.footer" class="modal-footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    modalBodyClass: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'medium',
      validator (val) {
        return ['small', 'medium', 'large', 'full'].includes(val);
      }
    },
    showCloseIconButton: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      sizeMap: {
        small: 'sm',
        medium: 'md',
        large: 'lg',
        full: 'full'
      }
    };
  },
  methods: {
    closeModal () {
      this.$emit('close');
    }
  }
};
</script>

<style lang="scss">
.modal {
  display: none;
  align-items: flex-start;
  justify-content: center;
  opacity: 0;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  &.active {
    display: flex;
    opacity: 1;
    z-index: 1001;
    .modal-overlay {
      background: rgba($dark, 0.55);
      position: fixed;
      display: block;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      cursor: pointer;
    }
    @keyframes slideDown {
      0% {
        opacity: 0;
        transform: translateY(-20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .modal-container {
      animation: slideDown 0.5s ease 1;
      z-index: 11;
    }
  }
  &.modal-sm {
    .modal-container {
      max-width: 480px;
    }
  }
  &.modal-md {
    .modal-container {
      max-width: 768px;
    }
  }
  &.modal-lg {
    .modal-overlay {
      background: $light;
    }
    .modal-container {
      box-shadow: none;
      max-width: 1080px;
    }
  }
  .modal-container {
    box-shadow: 0 3px 1.8rem 0 rgba(0, 0, 0, 0.12);
    background: $light;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    margin-top: 10vh;
    max-height: 75vh;
    width: 100%;
    max-width: 768px;
    text-align: initial;
    .modal-header {
      position: relative;
      display: flex;
      align-items: center;
      padding: 1rem;
      color: $dark-grey;
      box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1);
      font-size: inherit;
      .modal-title {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 0;
      }
      .modal-close-btn {
        position: absolute;
        right: 1.25rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        transition: ease all 0.25s;
        &:focus,
        &:hover {
          color: $red;
          transform: rotate(180deg);
          cursor: pointer;
        }
      }
    }
    .modal-body {
      position: relative;
      overflow-y: auto;
      padding: 2rem;
      p:not(:last-child) {
        margin-bottom: 0;
      }
    }
    .modal-footer {
      display: flex;
      justify-content: flex-end;
      padding: 0.5rem 1rem;
      & > div {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
      }
    }
  }
  &.modal-full {
    .modal-container {
      background-color: transparent;
      box-shadow: none;
      max-width: 100%;
      max-height: 100%;
      width: 100%;
      height: fit-content;
      margin-top: 0;
    }
    .modal-header {
      background-color: $light;
      .modal-title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 85%;
      }
    }
    .modal-body,
    .modal-footer {
      padding: 0;
      margin-top: 0;
    }
  }
  &.address-list-modal {
    &[limited-height] {
      .modal-container {
        max-height: 55vh;
      }
    }
  }
}
</style>
