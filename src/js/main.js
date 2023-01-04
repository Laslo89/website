import '../scss/styles.scss'
import { useDarkTheme } from './theme-switcher.js'
import { registerDialogListener } from './dialog.js'
import { Slider } from './slider.js'
import './contact-button'

const systemColorModeDark = window.matchMedia('(prefers-color-scheme: dark)').matches

if (systemColorModeDark === true) {
  useDarkTheme()
}

/**
 * create dialog for projects
 */
registerDialogListener(
  "#dialog-projects",
  ["#project-button", (dialog) => dialog.open()],
  [
    "#project-button-small",
    (dialog) => {
      const projectSection = document.getElementById("work");
      projectSection.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
      setTimeout(() => dialog.open(), 350);
    },
  ]
);

/**
 * create dialog for imprint
 */
registerDialogListener(
  "#dialog-imprint",
  ["#imprint-button", (dialog) => dialog.open()],
);

/**
 * create dialog for privacy
 */
registerDialogListener(
  "#dialog-privacy",
  ["#privacy-button", (dialog) => dialog.open()],
);
