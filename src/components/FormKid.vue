<template>
  <div class="form-kid">
    <MyInput type="text" @input="onKidInfoChange" v-model="name" title="Имя"></MyInput>
    <MyInput type="number" @input="onKidInfoChange" v-model="age" title="Возраст"></MyInput>
    <button @click="deleteKid" class="delete">Удалить</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import MyInput from './UI/MyInput.vue';

const props = defineProps(['age', 'name', 'index', 'id']);
const emit = defineEmits(['input-kid', 'delete-kid']);

const name = ref(props.name);
const age = ref(props.age);

function onKidInfoChange() {
  emit(
    'input-kid',
    {
      id: props.id,
      name: name.value,
      age: age.value,
    },
    props.index,
  );
}

function deleteKid() {
  emit('delete-kid', props.index);
}
</script>

<style lang="scss" scoped>
.form-kid {
  display: flex;
  flex-direction: row;
  gap: 18px;
  padding-top: 20px;
}
.form-kid:first-child {
  padding-top: 0;
}

.delete {
  font-size: 14px;
  font-weight: 400;
  background-color: transparent;
  color: #01a7fd;
}
</style>
