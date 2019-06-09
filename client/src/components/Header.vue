<template>
  <div>
    <nav class="navbar is-dark is-fixed-top" role="navigation">
      <div class="navbar-brand">
        <div class="navbar-item">
          <button class="button is-medium-dark">Knight Tower</button>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-medium-light is-small" @click="loginModalActive=true">
              <strong>Log in</strong>
            </a>
            <a class="button is-medium-light is-small" @click="signupModalActive=true">
              <strong>Sign up</strong>
            </a>
          </div>
        </div>
      </div>
    </nav>
    <section>
      <b-modal :active.sync="loginModalActive" :width="640" scroll="keep">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Login</p>
              </div>
            </div>
          </div>
        </div>
      </b-modal>
    </section>
    <section>
      <b-modal :active.sync="signupModalActive" :width="640" scroll="keep">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Sign Up</p>
              </div>
            </div>
          </div>
        </div>
      </b-modal>
    </section>
  </div>
</template>

<script>
export default {
  name: "site-header",
  data() {
    return {
      loginModalActive: false,
      signupModalActive: false
    };
  }
};
</script>

<style scoped>
.dis {
  display: inline-block;
}
</style>
