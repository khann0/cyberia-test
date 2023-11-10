<template>
  <ul class="filter">
    <li
      class="filter__category"
      v-for="(category, idx) in categories"
      :key="`category${idx}`"
    >
      {{ category }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'filter-panel',
  data() {
    return {
      categories: [
        'Продвижение',
        'Разработка',
        'Мобильное приложение',
        'Юзабилити - аудит',
      ],
      chosen: null,
    };
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/base';

.filter {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  font-family: $ff-rubik;
  font-size: 20px;
  line-height: normal;
  font-weight: 300;

  &__category {
    padding: 10px 29px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: $clr-bg;
    box-shadow: $bs-black;
    cursor: pointer;
    border-radius: 7px;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

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
    &__category {
    }
  }
}

@media (max-width: 767px) { 
  .filter {
    flex-flow: wrap;
    gap: 17px 7px;
    font-size: 12px;
    &__category {
      width: calc(50% - 7px);
    }
  }
}
</style>