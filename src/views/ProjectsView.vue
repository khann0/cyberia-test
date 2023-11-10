<template>
  <main class="main">
    <the-crumbs></the-crumbs>
    <projects-section />
    <feedback-section />
  </main>
</template>

<script>
import ProjectsSection from '@/components/ProjectsSection.vue';
import FeedbackSection from '@/components/FeedbackSection.vue';
import TheCrumbs from '@/components/TheCrumbs.vue';
export default {
  name: 'ProjectsView',
  components: { ProjectsSection, FeedbackSection, TheCrumbs }
};
</script>

<style></style>