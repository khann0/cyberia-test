<template>
  <projects-section :isPreview="true" />
</template>

<script>
import ProjectsSection from '@/components/ProjectsSection.vue';
export default {
  name: 'HomeView',
  components: { ProjectsSection },
};
</script>
