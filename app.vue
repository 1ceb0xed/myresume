<script setup>
import { onMounted, ref } from 'vue'
const isHeaderOnRight = ref(Boolean)
onMounted(() => {
  // window.scrollTo({ top: 0, behavior: 'smooth' })

  const scrollAmount = window.scrollY
  console.log(scrollAmount)
  const header = document.getElementById('header')
  if (scrollAmount > 57) {
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
      animation-name: headerRightOn;
      animation-duration:1s;
      animation-fill-mode: forwards;
      `
    } else if (scrollAmount <= 57) {
      header.style.animation = 'headerRightOff 500ms forwards'
      isHeaderOnRight.value = false
    }
    addEventListener('animationend', (event) => {
      if (event.animationName === 'headerRightOff') {
        header.removeAttribute('style')
        header.style.animation = 'headerTopOn 500ms forwards'
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

const text = () => {
  console.log('ready')

  header.style.animation = 'headerTopOn 1s forwards'
}

// top-[1.5vw]
</script>

<template>
  <section
    class="relative scroll-smooth w-full h-full bg-[rgb(15,15,15)] leading-relaxed text-slate-400 antialiased selection:bg-[rgb(208,44,175,0.15)]"
  >
    <div class="relative">
      <header id="header" class="absolute flex w-full r-[2vw] justify-around gap-7px top-[1.5vw]">
        <button class="text-xl text-[#D3D3D3]">About Me</button>
        <button class="text-xl text-[#D3D3D3]">Experience</button>
        <button class="text-xl text-[#D3D3D3]">Contacts</button>
      </header>

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
<style>
@media (min-width: 1024px) {
  #pointer {
    background: radial-gradient(600px at 1100px 500px, rgba(208, 44, 175, 0.15), transparent 80%);
  }
}
@keyframes headerRightOn {
  0% {
    right: -140px;
  }
  100% {
    right: 0px;
  }
}
@keyframes headerRightOff {
  0% {
    right: 0px;
  }
  100% {
    right: -140px;
  }
}
@keyframes headerTopOn {
  0% {
    top: -25px;
  }
  100% {
    top: 1.5vw;
  }
}
</style>
rgba(150, 161, 190, 0.15) selection:bg-[rgb(197,201,211)]
