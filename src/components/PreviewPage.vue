<template>
  <div class="container">
    <div class="person-data">
      <h3 class="data">Персональные данные</h3>
      <p v-if="isVisible" class="user-information">{{ kidsStore.userName }}, {{ kidsStore.userAge }} лет</p>
      <p v-else>Данных нет</p>
    </div>
    <div class="kids-data">
      <h3>Дети</h3>
      <div v-for="kid in kidsStore.kids" class="kid">{{ kid.name }}, {{ kid.age }} лет</div>
    </div>
  </div>
  <main-footer></main-footer>
</template>

<script setup>
import { useKidsStore } from '../store/kids';
import { computed } from 'vue';
import MainFooter from './MainFooter.vue';
const kidsStore = useKidsStore();
const isVisible = computed(() => {
  if (kidsStore.userName === '' && kidsStore.userAge === null) {
    return false;
  } else {
    return true;
  }
});
</script>

<style lang="scss" scoped>
.data {
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
}
.person-data {
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.user-information {
  font-size: 16px;
  font-weight: 700;
}

.kid {
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  padding: 10px 20px;
  background-color: #f1f1f1;
}

.kids-data {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}
</style>
