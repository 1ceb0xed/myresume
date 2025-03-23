<script setup>
defineProps({
  item: Object,
})
</script>
<template>
  <div class="mt-[1.5vw]">
    <div
      class="mx-[15vw] pt-[1vw] px-[2vw] pb-[2.5vw] group transition duration-300 bg-transparent hover:bg-white/10 rounded-xl"
    >
      <div class="flex justify-center">
        <h2
          name="project-name"
          class="transition duration-300 hover:scale-105 inline-block flex justify-center text-[2vw] mb-[1vw] hover:text-white cursor-pointer"
        >
          {{ item.label }}
        </h2>
      </div>
      <div class="flex gap-[2vw]">
        <img :src="item.img" class="w-[20vw] h-[15vw]" />
        <h2 name="description" class="text-lg text-[#D3D3D3]">{{ item.description }}</h2>
      </div>
    </div>
  </div>
</template>
