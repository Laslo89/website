const contactButton = document.querySelector('#contact-button')
const contactView = document.querySelector('#contact')

contactButton.addEventListener('click', () => {
  contactView.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
})
