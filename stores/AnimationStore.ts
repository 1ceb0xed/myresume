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

  //попробовать через видимость блока, изначально загружаясь выдается дефолтный класс и проигрывается анимация появления
  //вторым условием идет проврка чтобы это была не первая загрузка страница + видимость блока тут сначала уже проигрывается анимация закрытия блока справа
  // затем стили меняются на дефолтные и проигрывается анимация появления блока
  // третье условие если блок не виден, то меняются стили на стили правого хеадера и проигрывается анимация появления справа
  // всего 2 стиля - верхний хеадер и правй с right 0 также 3 анимации, появление верхнего хеадера, закрытие правого хеадера и открыие правого хеадера
  //дефолтный хеадер сразу имеет встроенную анимацию появления в себя и ее мы больше никуда не прописываем
  //правый хеадер будет иметь 2 стиля либо сделать просто смену одного пункта анимации открытие на закрытие сначала попробовать 2 разных стиля
  //также сделать условие что если страница загружается на центре то анимация появления не проигрываалась, а сразу выдавались стили
  //из последнего условия придетмя делать не разными стилями с анимациями а просто один и тотже стиль только присваивать 2 разные анимации а потом очищать их

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
