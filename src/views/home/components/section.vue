<template>
  <div>
    <modal v-if="isModal" />
    <div class="section__header">
      <h2>{{ item.section_title }}</h2>
      <button class="btn btn__edit" @click="openEditModal">edit</button>
      <button class="btn btn__delete" @click="deleteSection()">delete</button>
    </div>
    <span>Count questions {{ item.questions.length }}</span>
    <component
      v-for="(question, key) in item.questions"
      :key="key"
      :is="question.type"
      :question="question"
    >
      <h4>{{ key + 1 }}. {{ question.instructions }}</h4>
      <div>
        <button class="btn btn__edit" @click="openEditModal">edit</button>
        <button
          class="btn btn__delete"
          @click="deleteQuestion(question.instructions)"
        >
          delete
        </button>
      </div>
    </component>
  </div>
</template>

<script>
//components
import value from "./questions/value.vue";
import multiple from "./questions/multiple.vue";
import open_text from "./questions/open_text.vue";
import modal from "./modal.vue";

export default {
  components: {
    value,
    multiple,
    open_text,
    modal,
  },
  props: ["item"],
  data: function () {
    return {
      isModal: false,
    };
  },
  methods: {
    deleteSection() {
      this.$emit("deleteSection");
    },
    deleteQuestion(id) {
      this.$emit("deleteQuestion", id);
    },
    openEditModal() {
      this.isModal = true;
    },
  },
};
</script>

<style lang="css">
.section__header {
  display: flex;
}
.btn {
  width: 100px;
  height: 30px;
  color: white;
}
.btn__delete {
  background: red;
}
.btn__edit {
  background: blue;
}
</style>
