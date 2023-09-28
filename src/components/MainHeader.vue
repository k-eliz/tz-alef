<template>
  <header class="header">
    <img class="logo" src="../assets/logo.png" alt="Alef" />
    <nav class="nav">
      <router-link to="/" class="nav-item">Форма</router-link>
      <router-link to="/preview" class="nav-item">Превью</router-link>
    </nav>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
  align-items: center;
  border: 1px solid rgba(241, 241, 241, 1);
}
.nav {
  display: flex;
  gap: 24px;
}
.nav-item {
  font-size: 14px;
  font-weight: 400;
  color: var(--colors-gray, rgba(17, 17, 17, 0.48));
}
</style>
