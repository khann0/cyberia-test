<template>
  <a href="" class="project" @click="why">
    <img :src="this.project.image_dark" alt="" class="project__image" />
    <h2 class="project__title">{{ this.project.title }}</h2>
    <p class="project__descr">{{ this.project.description }}</p>
  </a>
</template>

<script>
export default {
  props: {
    project: { type: Object },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/base';

.project {
  padding: 243px 29px 29px;
  position: relative;
  grid-column: 2 span;
  border-radius: 7px;
  color: $clr-card;

  &::before {
    content: '';
    width: 100%;
    height: 100%;

    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    z-index: 5;

    border-radius: 5px;
    background-image: linear-gradient(
      0deg,
      #090b21 36.98%,
      rgba(49, 51, 65, 0) 181.42%
    );
    transition: opacity 0.3s ease;
  }

  &::after {
    content: '';
    width: 100%;
    height: 100%;

    position: absolute;
    left: 0;
    top: 0;
    z-index: 4;

    border-radius: 5px;
    transition: background-image 0.3s ease-in-out;
    background-image: linear-gradient(
      0deg,
      #090b21 0%,
      rgba(49, 51, 65, 0) 70.08%
    );
  }

  &:hover::before {
    opacity: 0.7;
  }
}

.project__image {
  width: 100%;
  height: 100%;

  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;

  object-fit: cover;
  border-radius: 8px;
}

.project__title,
.project__descr {
  position: relative;
  z-index: 5;
}

.project__title {
  font-family: $ff-rubik;
  font-size: 28px;
  line-height: normal;
  font-weight: 500;

  &::before {
    content: '';
    width: 24px;
    height: 24px;

    position: absolute;
    display: block;
    top: -32px;

    background-image: url('@/assets/images/project-decor.svg');
  }
}
.project__descr {
  margin-top: 7px;
}

@media (max-width: 991px) {
  .project {
    grid-column: 3 span;
  }
}

@media (max-width: 767px) {
  .project {
    padding: 216px 29px 29px;

    &__title {
      font-size: 18px;
    }

    &__descr {
      font-size: 13px;
      line-height: normal;
    }
  }
}

@media (max-width: 575px) {
  .project {
    grid-column: 6 span;
  }
}
</style>
