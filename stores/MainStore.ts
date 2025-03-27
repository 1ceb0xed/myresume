import axios from 'axios'
export const useMainStore = defineStore('main', () => {
  const animationStore = useAnimationStore()
  const API_LINK = 'https://fa48b5eabf9315d8.mokky.dev/Experience'
  const experienceData = ref([])
  const projectsData = ref([])

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
        const projectsResponse = await axios.get('https://fa48b5eabf9315d8.mokky.dev/Projects')
        projectsData.value = projectsResponse.data
        localStorage.setItem('experienceData', JSON.stringify(experienceResponse.data))
        localStorage.setItem('projectsData', JSON.stringify(projectsResponse.data))
      } catch (err) {
        console.log(err)
      }
    }
  }

  onMounted(async (): Promise<void> => {
    await fetchApi()
    animationStore.headerAnimation()
    animationStore.cursorAnimation()
    animationStore.animationOpacity()
    animationStore.scrollOmMount()
  })
  return {
    experienceData,
    projectsData,
  }
})
