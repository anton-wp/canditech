<template>
  <div>
    <slot />
    <div v-for="(item, key) in question.options" :key="key">
      <input
        type="radio"
        :name="question.instructions"
        :id="item"
        v-model="value"
      />
      <label :for="item" :class="{ active: item === question.answer }">{{
        item
      }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: ["question"],
  data: function () {
    return {
      value: null,
    };
  },
};
</script>

<style>
.active {
  background: green;
}
</style>
