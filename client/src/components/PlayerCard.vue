<template>
  <div class="card-height">
    <div class="has-text-weight-semibold box has-background-dark has-text-light">Player Card</div>
    <div class="columns">
      <div v-for="(attribute, index) in attributes" :key="`attr-${index}`" :ref="`${attribute}`" class="column">
        {{ attribute | capitalize }}
        <div v-for="(pegValue, index) in pegValues" :key="`value-${index}`" class="columns">
          <div class="column is-one-third has-text-right">{{ pegValue }}</div>
          <div class="column is-one-quarter" :ref="`tens-${pegValue}`">
            <i class="fas fa-circle fa-xs"></i>
          </div>
          <div class="column is-one-quarter" :ref="`ones-${pegValue}`">
            <i class="fas fa-circle fa-xs"></i>
          </div>
          <div class="column"></div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column"></div>
    </div>
    <div class="columns" ref="specials" style="margin-right: 14px;">
      <template v-for="(special, index) in specials" :ref="special">
        <div class="column has-text-right" :ref="`${special}`" :key="`special-${index}`">
          <i class="fas fa-circle fa-xs"></i>
        </div>
        <div class="column has-text-left" :key="index">&nbsp;{{ special | capitalize }}</div>
      </template>
    </div>
    <div class="columns">
      <div class="column"></div>
    </div>
    <div class="columns">
      <template v-for="(key, index) in keys" ref="keys">
        <div class="column" :key="`keys-${index}`">{{ key.name }}</div>
      </template>
    </div>
    <div class="columns" ref="keys">
      <template v-for="(key, index) in keys">
        <div class="column" :key="`key-${index}`">
          <i class="fas fa-circle fa-xs"></i>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "player-card",
  data() {
    return {
      pegHtml: '<i class="fas fa-circle fa-sm has-text-danger"></i>',
      attributes: ["knights", "gold", "food"],
      pegValues: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      specials: ["scout", "beast", "sword", "healer"],
      keys: [
        { name: "1st Key", value: 1 },
        { name: "2nd Key", value: 2 },
        { name: "3rd Key", value: 3 }
      ],
      initialValues: [
        { attr: "knights", value: 10 },
        { attr: "gold", value: 30 },
        { attr: "food", value: 25 }
      ]
    };
  },
  methods: {
    setPegPosition(attr, value) {
      if (!attr || !value) throw "attribute and value are required";
      if (value > 99 || value < 0) throw "value must be between 0 and 99";

      let tens;
      let ones;
      let $pegCol = this.$refs[attr][0];

      if (value < 10) {
        tens = 0;
        ones = value;
      } else {
        let digits = value
          .toString()
          .split("")
          .map(Number);

        tens = digits[0];
        ones = digits[1];
      }

      $pegCol.children[tens].children[1].innerHTML = this.pegHtml;
      $pegCol.children[ones].children[2].innerHTML = this.pegHtml;
    },
    toggleSpecial(name) {
      if (this.specials.indexOf(name) === -1)
        throw `name is not valid; valid names: ${this.specials.join(", ")}`;

      this.$refs[name][0].innerHTML = this.pegHtml;
    },
    setKey(key) {
      this.$refs["keys"].children[key - 1].innerHTML = this.pegHtml;
    }
  },
  mounted() {
    for (let init of this.initialValues) {
      this.setPegPosition(init.attr, init.value);
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";

      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style scoped>
.columns {
  padding-top: 10px !important;
  margin-bottom: 5px !important;
}

.columns > .column {
  padding: 3px !important;
  margin: 0 !important;
}
</style>