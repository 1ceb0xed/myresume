import axios from 'axios'
export const useMainStore = defineStore('main', () => {
  const API_LINK = 'https://fa48b5eabf9315d8.mokky.dev/Experience'
  const experienceData = ref([])
  const projectsData = ref([])
  const isHeaderOnRight = ref<boolean | null>(null)

  const fetchApi = async (): Promise<void> => {
    const experiencesStoredData = localStorage.getItem('experienceData')
    const projectsStoredData = localStorage.getItem('projectsData')
    if (experiencesStoredData && projectsStoredData) {
      experienceData.value = JSON.parse(experiencesStoredData)
      projectsData.value = JSON.parse(projectsStoredData)
    } else {
      try {
        const experienceResponse = await axios.get(API_LINK)
        experienceData.value = experienceResponse.data
        const projectsResponse = await axios.get<>('https://fa48b5eabf9315d8.mokky.dev/Projects')
        projectsData.value = projectsResponse.data
        localStorage.setItem('experienceData', JSON.stringify(experienceResponse.data))
        localStorage.setItem('projectsData', JSON.stringify(projectsResponse.data))
      } catch (err) {
        console.log(err)
      }
    }
  }

  const headerAnimation = (): void => {
    const scrollAmount = window.scrollY
    const header = document.getElementById('header') as HTMLDivElement
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
      addEventListener('animationend', (event: AnimationEvent) => {
        if (event.animationName === 'header_right_off') {
          header.removeAttribute('style')
          header.style.animation = 'header_top_on 500ms forwards'
        }
      })
    })
  }

  const cursorAnimation = (): void => {
    const cursor = document.getElementById('pointer') as HTMLDivElement
    cursor.style.display = 'none'
    document.addEventListener('mouseleave', () => {
      cursor.style.display = 'none'
    })
    document.addEventListener('mousemove', (e) => {
      cursor.style.display = 'block'
      cursor.style.left = `${e.clientX - 1100}px`
      cursor.style.top = `${e.clientY - 500}px`
    })
  }

  onMounted(async (): Promise<void> => {
    await fetchApi()
    headerAnimation()
    cursorAnimation()
    await nextTick(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  })
  return {
    experienceData,
    projectsData,
  }
})
