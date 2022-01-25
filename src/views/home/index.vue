<template>
  <div>
    <h1>{{ data.title }}</h1>
    <p>{{ date }}</p>
    <Section
      v-for="(item, key) in data.sections"
      :item="item"
      :key="key"
      @deleteSection="deleteSection(item.section_title)"
      @deleteQuestion="
        (id) => deleteQuestion({ id, sectionId: item.section_title })
      "
    />
  </div>
</template>

<script>
import { getAssessment_data } from "@/services/index.js";

//components
import Section from "./components/section.vue";

export default {
  components: {
    Section,
  },
  data: function () {
    return {
      data: {},
    };
  },
  computed: {
    date() {
      const dateRes = this.data.created_at
        ? new Date(this.data.created_at)
        : new Date();
      return `${dateRes.getDay()}/${dateRes.getMonth()}/${dateRes.getFullYear()}`;
    },
  },
  methods: {
    deleteSection(id) {
      this.data.sections = this.data.sections.filter(
        (item) => item.section_title !== id
      );
    },
    deleteQuestion({ id, sectionId }) {
      this.data.sections = this.data.sections.map((item) => {
        if (item.section_title !== sectionId) {
          return item;
        } else {
          let res = item.questions.filter((item) => item.instructions !== id);
          return { ...item, questions: res };
        }
      });
    },
  },
  async mounted() {
    const res = await getAssessment_data();
    this.data = res.data;
  },
};
</script>
