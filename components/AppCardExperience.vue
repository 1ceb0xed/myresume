<script setup>
defineProps({
  item: Object,
})
</script>
<template>
  <div>
    <div
      name="container"
      class="group transition duration-300 bg-transparent hover:bg-white/10 max-w-[50vw] rounded-xl p-[1vw]"
    >
      <a
        name="name-company"
        class="text-[1.5vw] hover:text-white relative transition-transform duration-300 origin-left hover:scale-105 block cursor-pointer"
      >
        {{ item.company }}
      </a>
      <h2 name="post" class="text-[1.1vw]">{{ item.post }}</h2>
      <p name="information" class="text-[1vw] mt-[0.8vw] text-[#D3D3D3]">
        {{ item.information }}
      </p>
      <div class="flex gap-[1vw] mt-[1vw]">
        <AppCardExperienceTechnologies v-for="obj in item.technologies" :obj="obj" />
      </div>
    </div>
  </div>
</template>
