<template>
  <AuthLayout>
    <section class="auth-page__section w-full max-w-md m-auto self-center">
    <div class="container">
        <h2 class="auth-page__title">
        Welcome Back
      </h2>
      <SignIn class="mt-4" />
    </div>
    </section>
  </AuthLayout>
</template>

<script>
import AuthLayout from '~/components/layout/AuthLayout';
import SignIn from '~/components/form/SignIn';

export default {
  components: {
    AuthLayout,
    SignIn,
  },
  head: {
    title: 'Sign in'
  },
  middleware: ['auth'],
};
</script>

<style lang="scss" scoped>
.auth-page__section{
    display: grid;
    place-items: center;

    .container{
      width: 24rem;
    }
}
</style>
