import axios from 'axios';

export const projectsModule = {
  state: () => ({
    projects: [],
    categories: [],
    selectedCategory: '',
  }),
  getters: {
    filteredProjects(state) {
      if (state.selectedCategory) {
        let sorted = state.projects.filter(project => {
          let fits = false;
          project.categories.forEach(category => {
            if (category.id == state.selectedCategory) {
              fits = true;
            }
          });
          return fits;
        });
        console.log(sorted);
        return sorted;
      } else {
        return state.projects;
      }
    },
  },
  mutations: {
    setProjects(state, projects) {
      state.projects = projects;
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
    setSelectedCategory(state, selectedCategory) {
      state.selectedCategory = selectedCategory;
    },
  },
  actions: {
    async fetchProjects({ commit }) {
      try {
        const response = await axios.get(
          `https://backend.cyberia.studio/api/v1/projects`,
        );
        commit('setProjects', response.data.items);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchCategories({ commit }) {
      try {
        const response = await axios.get(
          `https://backend.cyberia.studio/api/v1/project-categories`,
        );
        commit('setCategories', response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  namespaced: true,
};
