<template>
  <div class="container">
    <div class="form-page">
      <h1 class="title">Персональные данные</h1>
      <form class="form" action="#">
        <my-input type="text" title="Имя" v-model="name"></my-input>
        <my-input type="number" title="Возраст" v-model="age"></my-input>
      </form>
      <div class="kids">
        Дети (макс. 5)
        <my-button v-show="isVisible" @click="addKid" class="button-white"
          ><i class="fa-solid fa-plus"></i>Добавить ребенка</my-button
        >
      </div>
      <div>
        <FormKid
          v-for="(kid, index) in kids"
          :age="kid.age"
          :name="kid.name"
          :index="index"
          :id="kid.id"
          @input-kid="onInputKid"
          @delete-kid="deleteKidById(kid.id)"
        ></FormKid>
      </div>
      <my-button @click="applyChanges" class="button-blue">Сохранить</my-button>
    </div>
  </div>
  <main-footer></main-footer>
</template>

<script setup>
import { ref, computed } from 'vue';
import MyInput from './UI/MyInput.vue';
import MyButton from './UI/MyButton.vue';
import FormKid from './FormKid.vue';
import { useKidsStore } from '../store/kids';
import { useToast } from 'vue-toastification';
import MainFooter from './MainFooter.vue';

const kidsStore = useKidsStore();
const name = ref(kidsStore.userName);
const age = ref(kidsStore.userAge);
const kids = ref([...kidsStore.kids]);

const toast = useToast();

function onInputKid(newKid, index) {
  kids.value[index] = newKid;
}

function addKid() {
  if (kids.value.length >= 5) {
    return;
  }
  kids.value.push({ id: Math.random() * 1e8, name: '', age: 0 });
}

function deleteKidById(id) {
  kids.value = kids.value.filter((elem) => {
    return elem.id !== id;
  });
}

function applyChanges() {
  if (validation() === true) {
    kidsStore.userName = name.value;
    kidsStore.userAge = age.value;
    kidsStore.kids = kids.value;
    toast.success('Данные сохранены!');
  }
}

function validation() {
  let errorFound = false;
  if (name.value === '' || age.value <= 0) {
    errorFound = true;
    toast.error('Некорректные данные пользователя!');
  }
  for (let i = 0; i < kids.value.length; i++) {
    if (kids.value[i].name === '' || kids.value[i].age <= 0) {
      errorFound = true;
      toast.error('Некорректные данные ребенка!');
      break;
    }
  }
  return !errorFound;
}

const isVisible = computed(() => {
  if (kids.value.length === 5) {
    return false;
  } else {
    return true;
  }
});
</script>

<style lang="scss" scoped>
.form-page {
  display: flex;
  flex-direction: column;
}
.title {
  color: #111;
  font-size: 16px;
  font-weight: 500;
}

.form-page {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.kids {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
}
</style>
