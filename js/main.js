const switchThemeInput = document.querySelector('#themeSwitch') // my input theme switcher
const body = document.querySelector('body')
const headingAndNumberTexts = document.querySelectorAll('.general-text') // selected all my white card texts and white main heading
const secondaryInfoTexts = document.querySelectorAll('.secondary-text') // selected all my gray color texts, also inside cards
const headingBackground = document.querySelector('.heading-bg')
const switchLabel = document.querySelector('.theme-switch-label')
const switchKnob = document.querySelector('.theme-switch-switcher')
const SocialCards = document.querySelectorAll('.card') // selected all my media cards
const overviewHeading = document.querySelector('.overview__heading') // overview - today text

function changeWhiteText() {
	for (let i = 0; i < headingAndNumberTexts.length; i++) {
		headingAndNumberTexts[i].classList.toggle('white')
	}
}

function changeGrayText() {
	for (let i = 0; i < secondaryInfoTexts.length; i++) {
		secondaryInfoTexts[i].classList.toggle('white')
	}
}

function changeCardsColor() {
	for (let i = 0; i < SocialCards.length; i++) {
		SocialCards[i].classList.toggle('white')
	}
}

switchThemeInput.addEventListener('click', e => {
	body.classList.toggle('white')
	headingBackground.classList.toggle('white')
	changeWhiteText()
	changeGrayText()
	switchLabel.classList.toggle('white')
	switchKnob.classList.toggle('white')
	changeCardsColor()
	overviewHeading.classList.toggle('white')
})
 
