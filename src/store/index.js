import { createStore } from 'vuex';
import { projectsModule } from './projectsModule';

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    projects: projectsModule,
  },
});
