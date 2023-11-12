<template>
  <section class="projects">
    <div class="container projects__container">
      <h1 v-if="!isPreview" class="title projects__title">Проекты</h1>
      <a v-else href="" class="title-link" @click="$router.push(`/projects`)">
        <h2 class="title projects__title">Проекты</h2>
        <span
          ><svg
            class="title-link__icon"
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Arrowlink">
              <g id="ArrowRight">
                <path
                  id="Vector"
                  d="M7.96875 25.5H43.0312"
                  stroke="#EEF3FF"
                  stroke-width="3.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M28.6875 11.1562L43.0312 25.5L28.6875 39.8438"
                  stroke="#EEF3FF"
                  stroke-width="3.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </g></svg
        ></span>
      </a>
      <filter-panel
        v-if="!isPreview"
        class="projects__filter"
        :categories="categories.items"
      />
      <projects-list
        :projects="isPreview ? filteredProjects.slice(0, 6) : filteredProjects"
      ></projects-list>
    </div>
  </section>
</template>

<script>
import FilterPanel from '@/components/FilterPanel.vue';
import ProjectsList from '@/components/ProjectsList.vue';

import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  props: {
    isPreview: Boolean,
  },
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
@import '@/assets/styles/base';

.projects {
  &__title {
    margin-bottom: 78px;
  }

  &__filter {
    margin-bottom: 174px;
  }

  &__more {
    display: none;
  }
}

.title-link {
  display: flex;
  justify-content: space-between;
  color: $clr-main;
  transition: color 0.3s ease-in-out;

  & title {
    color: currentColor;
  }

  &__icon path {
    stroke: currentColor;
  }

  &:hover {
    color: $clr-accent;
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

    &__more {
      display: block;
      margin: 0 auto;
    }
  }

  .title-link span {
    display: none;
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
@media (max-width: 575px) {
  .projects__more {
    width: 100%;
  }
}
</style>
