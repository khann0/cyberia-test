<template>
  <the-crumbs></the-crumbs>
  <projects-section />
  <feedback-section />
</template>

<script>
import ProjectsSection from '@/components/ProjectsSection.vue';
import FeedbackSection from '@/components/FeedbackSection.vue';
import TheCrumbs from '@/components/TheCrumbs.vue';

export default {
  name: 'ProjectsView',
  components: { ProjectsSection, FeedbackSection, TheCrumbs },
};
</script>

<style></style>
