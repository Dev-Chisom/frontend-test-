<template>
  <Modal title="User Name" class="add-address-modal" @close="closeModal">
    <div class="card__tile">
      <img
        :src="user.image"
        class="card__tile-image"
        alt=""
      />
      <div class="card__tile-info">
        <p>
          <span class="circle">
            <img
              :src="parseStaticUrl('/svg/user.svg')"
              alt="user"
              class="icon"
            />
          </span>
          <span class="card__tile-text">{{ user.name }}</span>
        </p>
        <p>
          <span class="circle">
            <img
              :src="parseStaticUrl('/svg/email.svg')"
              alt="email"
              class="icon"
            />
          </span>
          <span class="card__tile-text">{{ user.email }}</span>
        </p>
        <p>
          <span class="circle">
            <img
              :src="parseStaticUrl('/svg/phone.svg')"
              alt="phone"
              class="icon"
            />
          </span>
          <span class="card__tile-text">{{ user.phone }}</span>
        </p>
        <p>
          <span class="circle">
            <img
              :src="parseStaticUrl('/svg/location.svg')"
              alt="location"
              class="icon"
            />
          </span>
          <span class="card__tile-text">{{ user.address.street }} {{ user.address.city }}</span>
        </p>
        <p>
          <span class="circle">
            <img
              :src="parseStaticUrl('/svg/website.svg')"
              alt="website"
              class="icon"
            />
          </span>
          <span class="card__tile-text">{{ user.website }}</span>
        </p>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from "~/components/modals/Modal";
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  components: {
    Modal,
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>

<style lang="scss" scoped>
.card__tile {
  display: flex;

  & p {
    display: flex;
    align-items: center;
    margin-left: 2.4rem;
  }
  &-text {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 0.6rem;

    
  @include for-phone-only {
    
    font-size: .8rem;
    margin-bottom: 0.4rem;
  }
  }
  &-image {
    width: 50%;
    height: auto;
    object-fit: contain;
  }
  .icon {
    width: 1.4rem;
    height: 1.4rem;

    @include for-phone-only {
    width: 1rem;
    height: 1rem;
  }
  }
  .circle {
    width: 2rem;
    height: 2rem;
    border: 2px solid #000;
    border-radius: 50%;
    margin-bottom: 0.6rem;
    margin-right: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

       @include for-phone-only {
    width: 1.8rem;
    height: 1.8rem;
  }
  }
}
</style>