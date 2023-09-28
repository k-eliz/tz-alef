<script setup>
import MainHeader from './components/MainHeader.vue';
</script>

<template>
  <div>
    <main-header></main-header>
    <router-view></router-view>
  </div>
</template>

<style>
html {
  box-sizing: border-box;
}

* {
  padding: 0px;
  margin: 0px;
  border: none;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
}

body {
  font-family: 'Montserrat', sans-serif;
}

.container {
  max-width: 616px;
  margin: 0 auto;
  padding: 30px 15px;
}

input {
  outline: none;
}
</style>
