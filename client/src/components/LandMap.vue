<template>
  <div id="map" class="card-height">
    <div class="card-title has-text-weight-semibold box has-background-dark has-text-light" >Map</div>
    <!-- <start></start> -->
    <div ref="map" :class="{ rotate90ccw: isRotaing }" class="map-image"></div>
    <button style="position: relative; bottom: 300px" @click="rotateCCW">Rotate</button>
  </div>
</template>

<script>
import Start from "@/components/Start.vue";
import { constants } from 'crypto';

export default {
  name: "land-map",
  components: {
    Start
  },
  data() {
    return {
      isRotaing: false
    };
  },
  methods: {
    rotateCCW() {
      this.isRotaing = !this.isRotaing;
      
      const $map = this.$refs["map"];
      const style = window.getComputedStyle($map, null);
      const mapAngle = style.getPropertyValue("transform");
    },

    // rotateCCW() {
    //   this.isRotaing = !this.isRotaing;
    // }
  },
  mounted() {}
};
</script>

<style scoped>
#map {
  padding: 20px 5px 0 5px;
}

.map-image {
  position: relative;
  top: -74%;
  width: 887px;
  height: 887px;
  margin: 0 auto;
  z-index: 5;
  background: url("../../public/map/map-base.png");
}

.card-title {
  z-index: 10;
  position: relative;
}

.rotate90ccw {
  transition: transform 0.8s ease-in-out;
  transform: rotate(90deg);
}

.grid {
  background-size: 40px 40px;
  background-image: linear-gradient(to right, grey 1px, transparent 1px),
    linear-gradient(to bottom, grey 1px, transparent 1px);
}
</style>