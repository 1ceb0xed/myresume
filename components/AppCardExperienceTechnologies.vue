<script setup>
defineProps({
  obj: String,
})
</script>

<template>
  <div class="text-white bg-slate-800 p-[0.35vw] rounded-lg">
    {{ obj }}
  </div>
</template>
