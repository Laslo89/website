import '../scss/styles.scss'
import { useDarkTheme } from './theme-switcher.js'
import { registerDialogListener } from './dialog.js'
import { Slider } from './slider.js'

const systemColorModeDark = window.matchMedia('(prefers-color-scheme: dark)').matches

if (systemColorModeDark === true) {
  useDarkTheme()
}

registerDialogListener('#dialog')
