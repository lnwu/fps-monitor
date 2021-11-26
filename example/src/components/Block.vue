<template>
  <div
    ref="block"
    class="w-[100px] h-[100px] bg-blue-500 absolute"
    :style="style"
  />
</template>

<script setup lang="ts">
  import { ref, onMounted, nextTick } from "vue"
  import { random } from "../utils/random"

  const block = ref<HTMLDivElement | null>(null)

  const leftToRight = Math.random() > 0.5

  const offset = random()
  const style = {
    left: leftToRight ? 0 : `${offset}%`,
    top: leftToRight ? `${offset}%` : 0,
  }
</script>
