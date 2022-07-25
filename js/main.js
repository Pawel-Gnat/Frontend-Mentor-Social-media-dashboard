const switchThemeInput = document.querySelector('#themeSwitch') // my input theme switcher
const body = document.querySelector('body')

switchThemeInput.addEventListener('click', e => {
	body.classList.toggle('white')
})
