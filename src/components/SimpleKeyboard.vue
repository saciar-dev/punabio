<template>
  <div :class="keyboardClass"></div>
</template>

<script>
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";
import layoutPort from "simple-keyboard-layouts/build/layouts/brazilian";
import layoutEsp from "simple-keyboard-layouts/build/layouts/spanish";

export default {

  name: "SimpleKeyboard",
  props: {
    keyboardClass: {
      default: "simple-keyboard",
      type: String
    },
    input: {
      type: String
    },
    lang: {
      type: String
    }
  },
  data: () => ({
    keyboard: null,
  }),
  mounted() {
    if (this.lang == 'es') {
      this.keyboard = new Keyboard(this.keyboardClass, {
        onChange: this.onChange,
        onKeyPress: this.onKeyPress,
        theme: "simple-keyboard hg-theme-default hg-layout-default",

        ...layoutEsp
      });
    }
    else {
      this.keyboard = new Keyboard(this.keyboardClass, {
        onChange: this.onChange,
        onKeyPress: this.onKeyPress,
        theme: "simple-keyboard hg-theme-default hg-layout-default",
        ...layoutPort
      });
    }
  },
  methods: {
    onChange(input) {
      this.$emit("onChange", input);
    },
    onKeyPress(button) {
      this.$emit("onKeyPress", button);

      /**
       * If you want to handle the shift and caps lock buttons
       */
      if (button === "{shift}" || button === "{lock}") this.handleShift();
    },
    handleShift() {
      let currentLayout = this.keyboard.options.layoutName;
      let shiftToggle = currentLayout === "default" ? "shift" : "default";

      this.keyboard.setOptions({
        layoutName: shiftToggle
      });
    }
  },
  watch: {
    input(input) {
      this.keyboard.setInput(input);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hg-theme-default {
  background-color: transparent;
  font-size: 1.5rem;
}

</style>
