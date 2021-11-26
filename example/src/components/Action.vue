<template>
  <div class="fixed right-[20px] top-[50px]">
    <button class="border-2 px-2 py-1 rounded mb-2" @click="$.emit('onAdd')">
      Add
    </button>
    <br />
    <button class="border-2 px-2 py-1 rounded mb-2" @click="$.emit('onRemove')">
      Remove
    </button>
    <br />
  </div>
</template>

<script setup lang="ts">
  defineEmits<{ onAdd: () => void; onRemove: () => void }>()
</script>
