<template>
    <Modal title="Add a new address" class="add-address-modal" @close="closeModal">
    <div class="">
     hello
    </div>
  </Modal>
</template>

<script>
import Modal from '~/components/modals/Modal';
export default {
 components: {
    Modal
  },
  methods: {
        closeModal () {
        this.$emit('close-modal');
    },
  }
}
</script>

<style>

</style>