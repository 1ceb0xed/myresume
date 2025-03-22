<script setup>
defineProps({
  item: Object,
})
</script>
<template>
  <div>
    <div name="container">
      <div name="name-company" class="text-[1.5vw]">{{ item.company }}</div>
      <div name="post" class="text-[1.1vw]">{{ item.post }}</div>
      <div name="information" class="text-[1vw] max-w-[50vw] mt-[0.8vw] text-[#D3D3D3]">
        {{ item.information }}
      </div>
      <div class="flex gap-[1vw] mt-[1vw]">
        <AppCardExperienceTechnologies v-for="obj in item.technologies" :obj="obj" />
      </div>
    </div>
  </div>
</template>
