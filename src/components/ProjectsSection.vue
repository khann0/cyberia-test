<template>
  <section class="projects">
    <div class="container projects__container">
      <h1 class="title projects__title">Проекты</h1>
      <filter-panel class="projects__filter"></filter-panel>
      <projects-list></projects-list>
    </div>
  </section>
</template>

<script>
import FilterPanel from '@/components/FilterPanel.vue';
import ProjectsList from '@/components/ProjectsList.vue';
export default {
  components: { FilterPanel, ProjectsList }
}
</script>

<style lang="scss">
.projects {
  &__title {
    margin-bottom: 78px;
  }
  &__filter {
    margin-bottom: 174px;
  }
}

@media (max-width: 991px) {
  .projects {
    &__title {
      margin-bottom: 82px;
    }
    &__filter {
      margin-bottom: 52px;
    }
  }
}
@media (max-width: 767px) {
  .projects {
    &__title {
      margin-bottom: 42px;
    }
    &__filter {
      margin-bottom: 97px;
    }
  }  
}
</style>