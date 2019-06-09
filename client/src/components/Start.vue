<template>
  <div style="margin-top: 50px;">
    <div class="columns">
      <div class="column">
        <span class="is-size-5">Choose your Kingdom!</span>
      </div>
    </div>
    <div v-for="(kingdom, index) in kingdoms" :key="index" class="columns">
      <div class="column is-one-quarter"></div>
      <div class="column">
        <button class="button is-medium is-fullwidth is-medium-light has-text-weight-bold">
            {{ kingdom.name }}
            <!-- <i :class="kingdom.icon" class="has-text-white is-size-4 has-text-weight-light"></i> -->
          </button>
      </div>
      <div class="column is-one-quarter"></div>
    </div>
    <i class=" has-text-white is-size-4"></i>
    <i class=" has-text-white is-size-4"></i>
    <i class=" has-text-white is-size-4"></i>
  </div>
</template>

<script>
export default {
  name: "start",
  data() {
    return {
      kingdoms: [
        { name: "Vurdo", icon: "flaticon-shield-with-crown" },
        { name: "Slearith", icon: "flaticon-shield-1" },
        { name: "Deoven", icon: "flaticon-shield-with-twig" },
        { name: "Kado", icon: "flaticon-shield-with-star" }
      ]
    };
  }
};
</script>

<style scoped>
[class^="flaticon-"]:before,
[class*=" flaticon-"]:before,
[class^="flaticon-"]:after,
[class*=" flaticon-"]:after {
  font-size: 1em;
}
</style>