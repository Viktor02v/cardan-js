const lang = document.querySelector('.header__lang');
const langButton = document.querySelector('.drop-button');
const langList = document.querySelector('.dropdown-list');
const langItems = document.querySelectorAll('.dropdown-item');
// ??  for languages
// !! click for drop down to appear
langButton.addEventListener('click', drop);
function drop(event) {
	langList.classList.toggle('dropdown-list--visible');
	langButton.classList.toggle('dropdown-button--visible');
}
// !! click to change the text of button
langItems.forEach(function (langItem) {
	langItem.addEventListener('click', function (event) {
		langList.classList.remove('dropdown-list--visible');
		langButton.innerText = this.innerText;
		event.stopPropagation();
		langButton.focus();
	});
});
// !! click beyond a dropdown for it to disappear
document.addEventListener('click', function (e) {
	if (e.target !== langButton) {
		langList.classList.remove('dropdown-list--visible');
		langButton.classList.remove('dropdown-button--visible');
	}
});
// !! click on the keys "escape" and "tab" for it to disappear
document.addEventListener('keydown', function (e) {
	if (e.key === 'Tab' || e.key === 'Return') {
		langList.classList.remove('dropdown-list--visible');
		langButton.classList.remove('dropdown-button--visible');
	}
});
//  ??  for burger menu
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const button = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile__nav');

button.addEventListener('click', menuBurger);
function menuBurger(event) {
	if (event.target.closest(".burger")) {
		console.log('nope');
		button.classList.toggle("close")
		mobileMenu.classList.toggle('active');
		document.body.style.overflow = "hidden";
	}
	if (!event.target.closest(".close")) {
		console.log('yep');
		mobileMenu.classList.remove('active');
		document.body.style.overflow = "auto";
	}
}

// ?? Hide a mobile__nav
window.addEventListener('resize', shrink);
function shrink(event) {
	if (window.innerWidth >= 1100) {
		mobileMenu.classList.remove('active');
		document.body.style.overflow = "auto";
	}
};



// ??   close menu button
const closeButton = mobileMenu.lastElementChild;
// console.log(closeButton);
closeButton.addEventListener('click', function (e) {
	mobileMenu.classList.remove('active');
});

// ?? lang menu into burger
const burgerLang = closeButton.previousElementSibling;
const mobileLang = document.querySelector('.mobile-lang');
// console.log(mobileLang);
burgerLang.addEventListener('click', openLang);
function openLang() {
	mobileLang.classList.toggle('is-click');
};

// ??  Scroll top-nav
const topNav = document.querySelector(".header");

document.addEventListener("scroll", flip);
function flip(event) {
	if (window.pageYOffset > 0) {
		topNav.classList.add('is-scroll');
	}
	if (window.pageYOffset <= 0) {
		topNav.classList.remove('is-scroll');
	}
};

// ?? Scroll into main
const advantagesBlock = document.querySelector(".advantages");
const mainReferance = document.querySelector('.reference-main');
mainReferance.addEventListener("click", scrollToAdventsages);
function scrollToAdventsages() {
	advantagesBlock.scrollIntoView({
		block: 'start',
		inline: "nearest",
		behavior: "smooth",
	});
};

// ?? Scroll into beginning/home
const bottomLogoBack = document.querySelector('.footer__logo-logotype');
const mainPage = document.querySelector('.page-home')
bottomLogoBack.addEventListener("click", scrollHome);
function scrollHome() {
	mainPage.scrollIntoView({
		block: 'start',
		inline: "nearest",
		behavior: "smooth",
	})
};