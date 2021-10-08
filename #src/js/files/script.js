let menuParents = document.querySelectorAll('.menu-page__parent');
const searchSelect = document.querySelector('.search-page__title');
const checkboxCategories = document.querySelectorAll('.categories-search__checkbox');

if (isMobile.any()) {
	// let menuParents = document.querySelectorAll('.menu-page__parent > a');

	for (let index = 0; index < menuParents.length; index++) {

		const menuParent = menuParents[index];

		menuParent.addEventListener("click", function (e) {
			menuParent.parentElement.classList.toggle('_active');
			e.preventDefault();
		});
	}
} else {
	for (let index = 0; index < menuParents.length; index++) {
		const menuParent = menuParents[index];

		menuParent.addEventListener("mouseenter", function (e) {
			menuParent.classList.add('_active');
		});
		menuParent.addEventListener("mouseleave", function (e) {
			menuParent.classList.remove('_active');
		});
	}
}

let menuPageBurger = document.querySelector('.menu-page__burger');
let menuPageBody = document.querySelector('.menu-page__body');
_slideUp(menuPageBody)

menuPageBurger.addEventListener("click", function (e) {
	_slideToggle(menuPageBody)

	menuPageBurger.classList.toggle('_active');
});

const categorySearch = document.querySelector('.categories-search');
_slideUp(categorySearch)
searchSelect.addEventListener("click", function (e) {
	searchSelect.classList.toggle('_active')
	_slideToggle(categorySearch)
});

for (let index = 0; index < checkboxCategories.length; index++) {
	let checkboxCategory = checkboxCategories[index];

	checkboxCategory.addEventListener("change", function (e) {
		checkboxCategory.classList.toggle('_active')

		let checkboxActiveCategories = document.querySelectorAll('.categories-search__checkbox._active');

		if (checkboxActiveCategories.length > 0) {
			searchSelect.classList.add('_categories')
			let searchQuantity = document.querySelector('.search-page__quantity');
			searchQuantity.innerHTML = searchQuantity.getAttribute('data-text') + (checkboxActiveCategories.length)
		} else {
			searchSelect.classList.remove('_categories')
		}
	});
}