<template>
  <div class="gallery-text-input" :class="inverted ? 'inverted' : ''">
    <input
      :id="idName"
      :type="computedType"
      :class="className"
      :required="required"
      :disabled="disabled"
      :placeholder="placeholder"
      :value="value"
      :autocomplete="autocomplete"
      :inputmode="inputmode"
      :step="step"
      :min="min"
      @input="onInput"
      @focus="$emit('focus')"
      @change="$emit('change')"
      @keyup="$emit('keyup')"
    >
    <label :for="idName" class="raised-label">
      {{ label || placeholder }}
    </label>
    <button v-if="type === 'password'" type="button" toggle-password @click="toggleShowPassword">
      {{ showPasswordText }}
    </button>
    <div v-else-if="appendText" class="append-text">
      {{ appendText }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputText',
  props: {
    value: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    inverted: {
      type: Boolean,
      default: false,
    },
    className: {
      type: String,
      default: '',
    },
    idName: {
      type: String,
      default: '',
    },
    autocomplete: {
      type: String,
      default: 'on',
    },
    inputmode: {
      type: String,
      default: null,
    },
    step: {
      type: String,
      default: null,
    },
    min: {
      type: String,
      default: null,
    },
    appendText: {
      type: String,
      default: null,
    },
  },
  data () {
    return {
      showPassword: false,
    };
  },
  computed: {
    computedType () {
      return this.type === 'password' && this.showPassword ? 'text' : this.type;
    },
    showPasswordText () {
      return this.showPassword ? 'Hide' : 'Show';
    }
  },
  methods: {
    onInput (event) {
      this.$emit('input', event.target.value);
    },
    toggleShowPassword () {
      this.showPassword = !this.showPassword;
    }
  }
};
</script>

<style lang="scss" scoped>
.gallery-text-input {
  display: flex;
  position: relative;
  flex-flow: column-reverse;
  width: 100%;

  button{
    background-color: transparent;
    background-image: none;
    outline: none;
    border: 0;
    cursor: pointer;
  }

  input {
    & + label + button[toggle-password] {
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
      color: $primary;

      &:focus,
      &:hover {
        color: lighten( $primary, 10%);
      }
    }

    &:focus {
      & + label + .append-text {
        border-left: 1px solid $secondary;
      }
    }
  }

  &.inverted {
    background-color: $grey-bg-lightest;
    color: $grey-dark;
  }

  .append-text {
    position: absolute;
    font-size: 14px;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    top: 1px;
    right: 1px;
    height: calc(3rem - 2px);
    background-color: $light;
    border-radius: 0 3px 3px 0;
    border-left: 1px solid $grey-dark;
    color: $grey;
  }
}
</style>
