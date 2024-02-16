const menuBody = document.querySelector(".menu");
const lang = document.querySelector('.header__lang');
const linkOne = document.querySelector('.menu__linkk');
const linkTwo = document.querySelector('.menu__link');
const menuList = document.querySelector('.menu__list');

const innerHTMLOfLang = lang.innerHTML;
const innerHTMLOfLinkOne = linkOne.innerHTML;
const innerHTMLOfLinkTwo = linkTwo.innerHTML;

// ??  for languages
document.addEventListener("click", menu);
function menu(event) {
	if (event.target.closest('.header__lang')) {
		menuBody.classList.toggle('_active');
	}
	if (!event.target.closest('.menu')) {
		menuBody.classList.remove('_active');
	}
	if (event.target.closest('.menu__linkk')) {
		lang.innerHTML = innerHTMLOfLinkOne;
	}
	if (!event.target.closest('.menu')) {
		lang.innerHTML = innerHTMLOfLang;
	}
	if (event.target.closest('.menu__link')) {
		lang.innerHTML = innerHTMLOfLinkTwo;
	}
	if (!event.target.closest('.menu')) {
		lang.innerHTML = innerHTMLOfLang;
	}
	if (event.target.closest('.header__lang')) {
		lang.classList.toggle('_active');
	}
	if (!event.target.closest('.menu')) {
		lang.classList.remove('_active');
	}
	if (event.target.closest('.menu__linkk')) {
		lang.classList.toggle('double');
	}
	if (!event.target.closest('.menu')) {
		lang.classList.remove('double');
	}
}
document.addEventListener("keyup", scroll);
document.addEventListener("keydown", scroll);

function scroll(event) {
	if (event.key === ",") {
		menuList.scrollBy({
			top: 15,
			left: 0,
			behavior: "smooth",
		});
	};
	if (event.key === ".") {
		menuList.scrollBy({
			top: -15,
			left: 0,
			behavior: "smooth",
		});
	};
};

//  ??  for burger menu
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const button = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile__nav');

button.addEventListener('click', menuBurger);
function menuBurger() {
	mobileMenu.classList.toggle('active');
}
// menuBurger();

// ??   close menu button
const closeButton = mobileMenu.lastElementChild;
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