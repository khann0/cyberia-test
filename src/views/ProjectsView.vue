<template>
  <main class="main">
    <projects-section />
    <feedback-section />
  </main>
</template>

<script>
import ProjectsSection from '@/components/ProjectsSection.vue';
import FeedbackSection from '@/components/FeedbackSection.vue';
export default {
  name: 'ProjectsView',
  components: {ProjectsSection, FeedbackSection}
}
</script>

<style>

</style>