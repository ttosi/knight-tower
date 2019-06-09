<template>
  <div id="board" class="card-height">
    <div class="card-title has-text-weight-semibold box has-background-dark has-text-light">Board</div>
    <!-- <start></start> -->
    <div class="cover-one has-background-light"></div>
    <div class="cover-two has-background-dark"></div>
    <div ref="board" class="board-image rotate90ccw"></div>
    <button style="position: absolute; top: 800px;" @click="rotateCC">Rotate CC</button>
    <button style="position: absolute; top: 800px; right: 400px;" @click="rotateCCW">Rotate CCW</button>
  </div>
</template>

<script>
import Start from "@/components/Start.vue";
import { constants } from "crypto";
import { setTimeout } from 'timers';

export default {
  name: "board",
  components: {
    Start
  },
  data() {
    return {
      boardAngle: 0
    };
  },
  methods: {
    rotateCC() {
      this.boardAngle -= 90;
      this.$refs['board'].style.transform = 'rotate(' + this.boardAngle + 'deg)';
    },
    rotateCCW() {
      this.boardAngle += 90;
      this.$refs['board'].style.transform = 'rotate(' + this.boardAngle + 'deg)';
    }
  },
  mounted() {}
};
</script>

<style scoped>

.board-image {
  position: relative;
  top: -111%;
  width: 100%;
  height: 200%;
  /* height: 850px; */
  margin: 0 auto;
  z-index: 5;
  background: url("../../public/map/map-base.png") no-repeat center;
  background-size: contain;
}

.card-title {
  z-index: 10;
  position: relative;
}

.cover-one {
  position: relative;
  top: -17.5%;
  height: 20px;
  widows: 100%;
  /* border: 1px solid red; */
  z-index: 6;
}
.cover-two {
  position: relative;
  top: -24.5%;
  height: 23px;
  widows: 100%;
  background-color: #fff !important;
  /* border: 1px solid red; */
  z-index: 7;
}

.rotate90ccw {
  transition: transform 0.8s ease-in-out;
}
</style>