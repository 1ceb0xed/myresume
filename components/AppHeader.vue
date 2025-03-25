<script setup>
const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div id="header" class="absolute flex w-full r-[2vw] justify-around gap-7px top-[1.5vw]">
    <button
      @click="scrollToSection('about_me')"
      class="transition duration-300 hover:scale-105 text-xl text-[#D3D3D3] hover:text-white cursor-pointer"
    >
      About Me
    </button>
    <button
      @click="scrollToSection('experience')"
      class="transition duration-300 hover:scale-105 text-xl text-[#D3D3D3] hover:text-white cursor-pointer"
    >
      Experience
    </button>
    <button
      @click="scrollToSection('projects')"
      class="transition duration-300 hover:scale-105 text-xl text-[#D3D3D3] hover:text-white cursor-pointer"
    >
      Projects
    </button>
    <button
      @click="scrollToSection('contacts')"
      class="transition duration-300 hover:scale-105 text-xl text-[#D3D3D3] hover:text-white cursor-pointer"
    >
      Contacts
    </button>
  </div>
</template>
