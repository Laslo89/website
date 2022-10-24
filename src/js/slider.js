export class Slider {
  /**
   * @type {Number} - id of current slide
   */
  #currentSlideIndex = 0
  /**
   * @type {HTMLElement[]} - list of slide elements
   */
  slides = null
  /**
   * @type {HtmlElement} - button to reach previous slide
   */
  buttonPrev = null
  /**
   * @type {HtmlElement} - button to reach next slide
   */
  buttonNext = null
  /**
   * @type { Function<MouseEvent> } - click handler for buttonPrev
   */
  prevSlideHandler = (event) => {
    this.#handleButtonClick(this.#currentSlideIndex - 1)
  }
  /**
   * @type { Function<MouseEvent> } - click handler for buttonNext
   */
  nextSlideHandler = (event) => {
    this.#handleButtonClick(this.#currentSlideIndex + 1)
  }
  /**
   * @type { Function<AnimationEvent> } - animation end event handler for enter and leave animations
   */
  handleAnimationEnd = (event) => {
    if(event.animationName.includes('in')) {
      event.target.style.visibility = 'visible'
    }
    if(event.animationName.includes('out')) {
      event.target.style.visibility = null
    }
    event.target.classList.remove(`slider--${event.animationName}`)
  }

  constructor() {
    const slides = document.querySelectorAll('.projects__project-list-item')
    this.slides = Array.from(slides)
    this.buttonPrev = document.querySelector('.projects__button-prev')
    this.buttonNext = document.querySelector('.projects__button-next')
    this.buttonPrev.addEventListener('click', this.prevSlideHandler)
    this.buttonNext.addEventListener('click', this.nextSlideHandler)

    this.slides.forEach(
      (slide, index) => {
      if (index === this.#currentSlideIndex) {
        slide.style.visibility = 'visible'
      }
      slide.addEventListener('animationend', this.handleAnimationEnd)
    })
  }

  set currentSlideIndex(newIndex) {
    this.#changeCurrentSlide(newIndex, this.#currentSlideIndex)
    this.#currentSlideIndex = newIndex
  }

  /**
   * Sets new current slide index
   * @param {number} nextSlideIndex
   */
  #handleButtonClick(nextSlideIndex) {
    const lastSlideIndex = this.slides.length - 1
    const firstSlideIndex = 0

    if (nextSlideIndex > lastSlideIndex || nextSlideIndex < firstSlideIndex) {
      return
    }
    if (nextSlideIndex === lastSlideIndex) {
      console.log('last index');
      // set next button to disabled
    }
    if (nextSlideIndex === firstSlideIndex) {
      console.log('first index');
      // set prev button to disabled
    }
    this.currentSlideIndex = nextSlideIndex
  }

  /**
   * handles entrance and exit of current and next slide
   * @param {number} nextIndex
   * @param {number} oldIndex
   */
  #changeCurrentSlide(nextIndex, oldIndex) {
    const currentSlide = this.slides[oldIndex]
    const nextSlide = this.slides[nextIndex]
    const direction = this.#getDirection(nextIndex, oldIndex)
    const leaveAnimationClass = this.#getAnimationClass('leave', direction)
    const enterAnimationClass = this.#getAnimationClass('enter', direction)
    currentSlide.classList.add(leaveAnimationClass)
    nextSlide.classList.add(enterAnimationClass)
  }

  /**
   * Gets animation direction
   * @param {number} indexA
   * @param {number} indexB
   * @returns {'left' | 'right'}
   */
  #getDirection(indexA, indexB) {
    if(indexA > indexB) {
      return 'left'
    }
    return 'right'
  }

  /**
   * Gets animation class for a slide
   * @param {'leave' | 'enter'} type
   * @param {'left' | 'right'} direction
   */
  #getAnimationClass(type = 'enter', direction) {
    if (type === 'leave') {
      return `slider--slide-out-${direction}`
    }
    return `slider--slide-in-${direction}`
  }

  destroy() {
    this.buttonPrev.addEventListener('click', this.prevSlideHandler)
    this.buttonNext.addEventListener('click', this.nextSlideHandler)
    this.slides.forEach(
      (slide, index) => {
      slide.style.visibility = null
      slide.removeEventListener('animationend', this.handleAnimationEnd)
    })
  }
}
