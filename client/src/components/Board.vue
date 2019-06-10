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
// import store from "@/state/store";

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
      this.$store.board.commit('increment');
      console.log(this.$store.state.board.count);
    },
    rotateCCW() {
      this.boardAngle += 90;
      this.$refs['board'].style.transform = 'rotate(' + this.boardAngle + 'deg)';
      this.$store.board.commit('decrement');
      console.log(this.$store.state.board.count);
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
  margin: 0 auto;
  z-index: 5;
  background: url("../../public/map/map-main.png") no-repeat center;
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
  z-index: 6;
}
.cover-two {
  position: relative;
  top: -24.5%;
  height: 23px;
  widows: 100%;
  background-color: #fff !important;
  z-index: 7;
}

.rotate90ccw {
  transition: transform 0.8s ease-in-out;
}
</style>