<script setup>
defineProps({
  item: Object,
})
</script>

<template>
  <div>
    <div class="mx-[15vw]">
      <div name="project-name" class="flex justify-center text-[2vw] mb-[1vw] text-white">
        {{ item.label }}
      </div>
      <div>
        <img :src="item.img" class="w-[20vw] h-[20vw]" />
        <h2 name="description">{{ item.description }}</h2>
      </div>
    </div>
  </div>
</template>
