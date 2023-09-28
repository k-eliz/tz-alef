<template>
  <div class="name">
    <h6 class="title">{{ title }}</h6>
    <input @input="getValue" :value="props.modelValue" class="input" :type="props.type" />
  </div>
</template>

<script setup>
const props = defineProps(['title', 'modelValue', 'type']);
const emit = defineEmits(['update:modelValue']);

function getValue(event) {
  const value = event.target.value;
  emit('update:modelValue', value);
}
</script>

<style lang="scss" scoped>
.name {
  padding: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  border: 1px solid rgba(241, 241, 241, 1);
  border-radius: 5px;
}

.title {
  color: var(--colors-gray, rgba(17, 17, 17, 0.48));
  font-size: 13px;
  font-weight: 400;
}

.input {
  color: var(--colors-black, #111);
  font-size: 14px;
  font-weight: 400;
}
</style>
