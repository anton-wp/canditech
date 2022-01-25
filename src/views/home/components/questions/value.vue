<template>
  <div>
    <slot />
    <input type="text" v-model="value" placeholder="Answer goes here..." />
    <br />
    <span>Expect Answer: {{ question.answer }}</span>
  </div>
</template>

<script>
export default {
  props: ["question"],
  data: function () {
    return {
      value: "",
    };
  },
};
</script>
