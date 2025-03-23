<script setup>
defineProps({
  obj: String,
})
</script>

<template>
  <button
    class="text-white bg-slate-800 p-[0.35vw] rounded-lg transition duration-300 hover:scale-115"
  >
    {{ obj }}
  </button>
</template>
