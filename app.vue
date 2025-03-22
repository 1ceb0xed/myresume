<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
const isHeaderOnRight = ref(Boolean)

const API_LINK = 'https://fa48b5eabf9315d8.mokky.dev/Experience'
const experienceData = ref([])
const projectsData = ref([])

const fetchApi = async () => {
  try {
    const experienceResponse = await axios.get(API_LINK)
    experienceData.value = experienceResponse.data
    const projectsResponse = await axios.get('https://fa48b5eabf9315d8.mokky.dev/Projects')
    projectsData.value = projectsResponse.data
  } catch (err) {
    console.log('err')
  }
}

const test = () => {
  console.log(experienceData.value)
}

onMounted(async () => {
  await fetchApi()
  // window.scrollTo({ top: 0, behavior: 'smooth' })
  const scrollAmount = window.scrollY
  const header = document.getElementById('header')
  if (scrollAmount > 57) {
    // тут добавить отдельную переменную
    header.style.cssText = `
      top:0;
      right: 0px;
      position: fixed;
      width:auto;
      height: 100%;
      padding-right: 1.5vw;
      display:flex;
      flex-direction:column;
      justify-content:center;
      gap:40px;`
  }
  addEventListener('scroll', () => {
    const scrollAmount = window.scrollY
    if (scrollAmount > 57 && !isHeaderOnRight.value) {
      // тут добавить отдельную переменную
      header.style.cssText = `
      top: 0;
      right: -140px;
      position: fixed;
      display: flex;
      width: auto;
      height: 100%;
      padding-right: 1.5vw;
      flex-direction:column;
      justify-content:center;
      gap:40px;
      animation-name: header_right_on;
      animation-duration:1s;
      animation-fill-mode: forwards;
      `
    } else if (scrollAmount <= 57) {
      header.style.animation = 'header_right_off 500ms forwards'
      isHeaderOnRight.value = false
    }
    addEventListener('animationend', (event) => {
      if (event.animationName === 'header_right_off') {
        header.removeAttribute('style')
        header.style.animation = 'header_top_on 500ms forwards'
      }
    })
  })

  const cursor = document.getElementById('pointer')
  cursor.style.display = 'none'
  document.addEventListener('mouseleave', () => {
    cursor.style.display = 'none'
  })
  document.addEventListener('mousemove', (e) => {
    cursor.style.display = 'block'
    cursor.style.left = `${e.clientX - 1100}px`
    cursor.style.top = `${e.clientY - 500}px`
  })
})
</script>
w-96 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255)]
hover:transition
<template>
  <section
    class="relative scroll-smooth w-full h-full bg-[rgb(15,15,15)] leading-relaxed text-slate-400 antialiased selection:bg-[rgb(208,44,175,0.15)]"
  >
    <div class="relative">
      <header id="header" class="absolute flex w-full r-[2vw] justify-around gap-7px top-[1.5vw]">
        <button class="text-xl text-[#D3D3D3] hover:text-white hover:font-medium">About Me</button>
        <button class="text-xl text-[#D3D3D3] hover:text-white hover:font-medium">
          Experience
        </button>
        <button class="text-xl text-[#D3D3D3] hover:text-white hover:font-medium">Projects</button>
        <button class="text-xl text-[#D3D3D3] hover:text-white hover:font-medium">Contacts</button>
      </header>

      <div class="width-full h-[10vw]"></div>

      <section>
        <div class="p-10 pl-[5vw] pr-[15vw] grid grid-cols-2 items-center">
          <div name="image" class="p-[1vw] w-auto h-auto">
            <img
              src="./public/photo_2025-03-16_14-14-39.jpg"
              alt="my_photo"
              class="w-lg rounded-[2vw]"
            />
          </div>
          <div name="block_about_me" class="text-2xl">
            <div name="my_name" class="text-[3vw] flex justify-start">TIMONIN KIRILL</div>
            <div name="about_me" class="pt-[2vw]">
              <h2 class="text-[#D3D3D3] p-[1vw]">
                Меня зовут Тимонин Кирилл, мне 18 лет, и я являюсь middle frontend разработчиком с
                глубокими знаниями в области веб-разработки. Образование я получил как специалист по
                кибербезопасности, что позволяет мне учитывать важные аспекты безопасности на всех
                этапах разработки. Мой опыт охватывает работу с современными фреймворками и
                библиотеками, включая Vue.js, и я стремлюсь создавать качественные и безопасные
                веб-приложения, соблюдая лучшие практики разработки. Я активно развиваюсь в своей
                профессиональной сфере, постоянно совершенствуя навыки и стремясь к внедрению
                инновационных решений в проекты. Моя цель — работать в команде профессионалов, где я
                смогу не только применить свои знания, но и учиться новым подходам в области
                frontend разработки.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <div class="flex justify-center text-[2.5vw] mt-[7vw] mb-[8vw]">Experience</div>
      <AppCardExperience class="m-[2.5vw] p-[1.5vw]" v-for="item in experienceData" :item="item" />

      <div class="flex justify-center text-[2.5vw] mt-[7vw] mb-[8vw]">Projects</div>
      <AppProjects v-for="item in projectsData" :item="item" />
      <footer class="flex justify-around pt-1000 pb-10">
        <button>Contacts</button>
      </footer>
    </div>

    <div
      id="pointer"
      class="lg:pointer-events-none lg:fixed lg:inset-0 lg:z-30 lg:transition lg:duration-300 lg:absolute"
    ></div>
  </section>
</template>
rgba(150, 161, 190, 0.15) selection:bg-[rgb(197,201,211)]
