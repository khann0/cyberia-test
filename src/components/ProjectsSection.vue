<template>
  <section class="projects">
    <div class="container projects__container">
      <h1 class="title projects__title">Проекты</h1>
      <filter-panel class="projects__filter" :categories="categories.items" />
      <projects-list :projects="filteredProjects"></projects-list>
    </div>
  </section>
</template>

<script>
import FilterPanel from '@/components/FilterPanel.vue';
import ProjectsList from '@/components/ProjectsList.vue';

import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  components: { FilterPanel, ProjectsList },
  methods: {
    ...mapMutations({
      setProjects: 'projects/setProjects',
      setCategories: 'projects/setCategories',
      setSelectedCategory: 'projects/setSelectedCategory',
    }),
    ...mapActions({
      fetchProjects: 'projects/fetchProjects',
      fetchCategories: 'projects/fetchCategories',
    }),
  },
  mounted() {
    this.fetchProjects();
    this.fetchCategories();
  },
  computed: {
    ...mapState({
      projects: state => state.projects.projects,
      categories: state => state.projects.categories,
      selectedCategory: state => state.projects.selectedCategory,
    }),
    ...mapGetters({
      filteredProjects: 'projects/filteredProjects',
    }),
  },
};
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
