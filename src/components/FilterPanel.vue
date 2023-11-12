<template>
  <ul class="filter">
    <li
      class="filter__category"
      :class="{ filter__category_active: category.id == this.selectedCategory }"
      v-for="category in categories"
      :key="category.id"
      @click="this.setSelectedCategory(category.id)"
    >
      {{ category.name }}
    </li>
  </ul>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'filter-panel',
  props: {
    categories: { type: Array },
  },
  methods: {
    ...mapMutations({
      setSelectedCategory: 'projects/setSelectedCategory',
    }),
  },
  computed: {
    ...mapState({
      selectedCategory: state => state.projects.selectedCategory,
    }),
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/base';

.filter {
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  gap: 129px;

  font-family: $ff-rubik;
  font-size: 20px;
  line-height: normal;
  font-weight: 300;

  &__category {
    padding: 10px 29px;

    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: $bs-black;
    cursor: pointer;
    border-radius: 7px;
    text-align: center;

    background-color: $clr-bg;

    transition:
      background-color 0.2s ease-in-out,
      color 0.2s ease-in-out;

    &:hover {
      background-color: $clr-main;
      color: #303958;
    }

    &_active {
      background-color: $clr-accent;
    }
  }
}

@media (max-width: 991px) {
  .filter {
    font-family: $ff-os;
    font-size: 16px;
    font-weight: 400;
  }
}

@media (max-width: 767px) {
  .filter {
    flex-flow: wrap;
    gap: 17px 7px;
    font-size: 12px;

    &__category {
      width: calc(50% - 7px);
      padding: 10px 5px;
    }
  }
}
</style>
