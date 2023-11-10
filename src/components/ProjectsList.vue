<template>
  <div class="projects__list">
    <projects-list-item
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </div>
</template>

<script>
import ProjectsListItem from './ProjectsListItem.vue';

export default {
  components: { ProjectsListItem },
  props: {
    projects: { type: Array },
  },
}
</script>

<style lang="scss" scoped>
.projects__list {
  margin-bottom: 174px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 40px;
}
@media (max-width: 991px) {
  .projects__list {
    gap: 23px;
    margin-bottom: 86px;
  }
}
@media (max-width: 575px) {
  .projects__list{
    gap: 20px;
  }
  
}
</style>
