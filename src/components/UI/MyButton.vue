<template>
  <button :class="class"><slot></slot></button>
</template>

<script setup>
const props = defineProps(['class']);
</script>

<style lang="scss" scoped>
button {
  border-radius: 100px;
  padding: 10px 20px;
  cursor: pointer;
  background-color: #fff;
  text-align: center;
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
}

.button-blue {
  background: #01a7fd;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  width: 16%;
  align-self: flex-start;
}

.button-white {
  font-size: 14px;
  color: #01a7fd;
  font-weight: 400;
  border: 2px solid #01a7fd;
  width: 33%;
}
</style>
