import { Slider } from './slider.js'

export class Dialog {
  constructor(id) {
    this.slider = null
    this.id = id
    this.el = document.querySelector(id)
    this.closeButton = this.el.querySelector('.base-dialog__button-close')

    this.handleCloseButtonClick = () => {
      this.close()
      document.removeEventListener('click',this.handleClickOutside)
    }

    this.closeButton.addEventListener('click', this.handleCloseButtonClick)

    this.handleClickOutside = ({ clientX, clientY }) => {
      if(this.#isClickInside(clientX, clientY)) {
        return
      }
      this.close()
      document.removeEventListener('click',this.handleClickOutside)
    }

    this.handleEnterAnimationEnd = (event) => {
      this.prependEnterAnimationClass()
    }

    this.handleLeaveAnimationEnd = (event) => {
      this.prependLeaveAnimationClass()
    }
  }

  set #isOpen(value) {
    if(value === true) {
      document.addEventListener('click', this.handleClickOutside)
    }
  }

  #disableBodyScroll() {
    document.body.style.height = '100vh'
    document.body.style.overflow = 'hidden'
  }

  #enableBodyScroll() {
    document.body.style.removeProperty('height')
    document.body.style.removeProperty('overflow')
  }

  #isClickInside(mouseX, mouseY) {
    const dialog = this.el.getBoundingClientRect()
    const isNotAboveArea = dialog.top <= mouseY
    const isNotBelowArea = dialog.top + dialog.height >= mouseY
    const isNotLeftOfArea = dialog.left <= mouseX
    const isNotRightOfArea = dialog.left + dialog.width >= mouseX
    return isNotAboveArea && isNotBelowArea && isNotLeftOfArea && isNotRightOfArea
  }

  appendEnterAnimationClass() {
    this.el.classList.add('base-dialog--enter-animation')
    this.el.addEventListener('animationend', this.handleEnterAnimationEnd)
  }

  prependEnterAnimationClass() {
    this.el.classList.remove('base-dialog--enter-animation')
    this.el.removeEventListener('animationend', this.handleEnterAnimationEnd)
    this.#isOpen = true
  }

  appendLeaveAnimationClass() {
    this.el.classList.add('base-dialog--leave-animation')
    this.el.addEventListener('animationend', this.handleLeaveAnimationEnd)
  }

  prependLeaveAnimationClass() {
    this.el.classList.remove('base-dialog--leave-animation')
    this.el.removeEventListener('animationend', this.handleLeaveAnimationEnd)
    this.el.close()
  }

  open() {
    this.el.showModal()
    this.appendEnterAnimationClass()
    this.#disableBodyScroll()
    this.slider = new Slider()
  }

  close() {
    this.slider.destroy();
    this.appendLeaveAnimationClass()
    this.#enableBodyScroll()
    this.#isOpen = false
  }
}


/**
 * @typedef {Array<String, Function>}  IdHandlerPair
 */
/**
 * @param {String} dialogId - identifier of dialog element
 * @param {IdHandlerPair[]} IdHandlerPairs - identifier of dialog trigger elements
 */
export function registerDialogListener(dialogId, ...idHandlerPairs) {
  const dialog = new Dialog(dialogId);
  idHandlerPairs.forEach(
    ([identifier, handler]) => {
      const el = document.querySelector(identifier)
      el.addEventListener('click', () => handler(dialog))
    }
  )
}
