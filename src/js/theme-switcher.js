const themeSwitcherEl = document.querySelector('#theme-switcher');

export function useDarkTheme() {
  document.body.classList.add('theme-dark');
}

export function useLightTheme() {
  document.body.classList.remove('theme-dark');
}

function changeColorMode() {
  if(document.body.classList.contains('theme-dark') === true) {
    useLightTheme()
  } else {
    useDarkTheme()
  }
}


themeSwitcherEl.onclick = changeColorMode
