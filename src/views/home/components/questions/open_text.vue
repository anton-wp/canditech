<template>
  <div>
    <slot />
    <textarea v-model="value" placeholder="Answer goes here..." />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      value: "",
    };
  },
};
</script>
