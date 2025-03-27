export const useAnimationStore = defineStore('animation', () => {
  const isHeaderOnRight = ref<boolean | null>(true)
  const animationOpacity = (): void => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.3 },
    )
    document.querySelectorAll('.block_animation').forEach((block) => observer.observe(block))
  }

  const headerAnimation = (): void => {
    const scrollAmount = window.scrollY
    const header = document.getElementById('header') as HTMLDivElement
    if (scrollAmount > 57) {
      console.log('first' + header.style.cssText) // testRight
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
        console.log('second' + header.style.cssText) //testRightSecond
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
        console.log('third' + header.style.cssText)
        header.style.animation = 'header_right_off 500ms forwards'
        isHeaderOnRight.value = false
      }
      addEventListener('animationend', (event: AnimationEvent) => {
        if (event.animationName === 'header_right_off') {
          console.log('fourth' + header.style.cssText)
          header.removeAttribute('style')
          header.style.animation = 'header_top_on 500ms forwards'
        }
      })
    })
  }

  const scrollOmMount = async (): Promise<void> => {
    await nextTick(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
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

  return { headerAnimation, cursorAnimation, animationOpacity, scrollOmMount }
})
