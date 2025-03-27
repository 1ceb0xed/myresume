<script setup>
const { experienceData, projectsData } = storeToRefs(useMainStore())
</script>
<template>
  <div class="absolute w-full h-[3630px] bg-[rgb(15,15,15)]"></div>
  <section
    class="relative scroll-smooth w-full h-full bg-[rgb(15,15,15)] leading-relaxed text-slate-400 antialiased selection:bg-[rgb(208,44,175,0.15)]"
  >
    <div class="relative">
      <AppHeader />
      <div class="width-full h-[10vw]"></div>
      <AppAboutMe id="about_me" />
      <div class="blockAnimation">
        <h2
          id="experience"
          class="flex justify-center text-[2.5vw] mt-[7vw] mb-[8vw] text-[#C04C8A]"
        >
          Experience
        </h2>
        <AppCardExperience
          id="experience"
          class="m-[2.5vw] p-[0.5vw]"
          v-for="item in experienceData"
          :item="item"
        />
      </div>
      <div class="blockAnimation">
        <h2 id="projects" class="flex justify-center text-[2.5vw] mt-[7vw] mb-[8vw] text-[#C04C8A]">
          Projects
        </h2>
        <AppProjects v-for="item in projectsData" :item="item" class="" />
      </div>
      <AppFooter id="contacts" />
    </div>

    <div
      id="pointer"
      class="lg:pointer-events-none lg:fixed lg:inset-0 lg:z-30 lg:transition lg:duration-300 lg:absolute"
    ></div>
  </section>
</template>
<style>
.block {
  opacity: 0;
  transform: translateY(50px);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
}

.block.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
