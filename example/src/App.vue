<template>
  <main class="container mx-auto max-w-screen-lg relative min-h-screen">
    <Block v-for="index in blocks" :key="index" />
  </main>
  <Action @onAdd="onAdd" @onRemove="onRemove" />
</template>

<script setup lang="ts">
  import Block from "./components/Block.vue"
  import Action from "./components/Action.vue"
  import { ref } from "vue"

  const blocks = ref([] as number[])

  const onAdd = () => blocks.value.push(blocks.value.length)
  const onRemove = () => blocks.value.pop()
</script>
