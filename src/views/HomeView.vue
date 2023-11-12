<template>
  <main class="main">
    <projects-section :isPreview="true" />
  </main>
</template>

<script>
import ProjectsSection from '@/components/ProjectsSection.vue';
export default {
  name: 'HomeView',
  components: { ProjectsSection },
};
</script>
