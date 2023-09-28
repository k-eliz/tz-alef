import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useKidsStore = defineStore('kids', () => {
  const kids = ref([]);

  const userName = ref('');
  const userAge = ref(null);

  function setUserName(name) {
    userName.value = name;
    console.log(userName);
  }

  function setUserAge(age) {
    userAge.value = age;
    console.log(userAge);
    kids.value.age;
  }

  return { kids, setUserAge, setUserName, userAge, userName };
});
