function emailTest(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
function addingClasses() {
	let nameColumn = document.querySelectorAll(".price__column");
	for (let i = 0; i < nameColumn.length; i++) {
		let allColumn = nameColumn[i];
		allColumn.addEventListener("click", function (e) {
			allColumn.classList.toggle('_active');
			e.preventDefault();
		});
	}

	let sliderSearch = document.querySelectorAll(".gallery-featured__slid");
	for (let i = 0; i < sliderSearch.length; i++) {
		let slide = sliderSearch[i];
		slide.addEventListener("mousemove", function (e) {
			for (let i = 0; i < sliderSearch.length; i++) {
				let slide = sliderSearch[i];
				slide.classList.remove('_active');
			}
			slide.classList.add('_active');
			e.preventDefault();

		});
	}
} addingClasses();

function headerDark() {
	const main = document.querySelector("#main");
	const header = document.querySelector("#header");
	let headerSize = document.querySelector('.header__content');
	window.addEventListener('scroll', function () {
		let scrollTop = document.documentElement.scrollTop;
		let scrollWidth = document.documentElement.scrollWidth;

		if (scrollTop >= (main.offsetHeight - header.offsetHeight * 1.1)) {
			headerSize.style.height = '55px';
			headerSize.style.padding = '0px';
			header.classList.add("dark");
		}else if (scrollWidth < 768) {
			headerSize.style.height = '55px';
		}else {
			headerSize.style.height = '110px';
			headerSize.style.paddingTop = '50px';
			header.classList.remove("dark");
		}
	});
}
headerDark();

/*
//прогрессбар с помощью svg
const circle = document.querySelector('.progress-ring__circle');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
	const offset = circumference - percent / 100 * circumference;
	circle.style.strokeDashoffset = offset;
}
setProgress(80);

*/

var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('body').classList.add('ie');
}
if (isMobile.any()) {
	document.querySelector('body').classList.add('_touch');
}
//=================
//testWebP
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('_webp');
	} else {
		document.querySelector('body').classList.add('_no-webp');
	}
});
//=================
function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll("._ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();

if (document.querySelector('.wrapper')) {
	document.querySelector('.wrapper').classList.add('_loaded');
}
let unlock = true;

//=================
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
	let delay = 500;
	let menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		}
	});
};
function menu_close() {
	let iconMenu = document.querySelector(".icon-menu");
	let menuBody = document.querySelector(".menu__body");
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
}
//=================
function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
//=================
let tabs = document.querySelectorAll("._tabs");
for (let i = 0; i < tabs.length; i++) {
	let tab = tabs[i];
	let tabs_items = tab.querySelectorAll("._tabs-item");
	let tabs_blocks = tab.querySelectorAll("._tabs-block");
	for (let i = 0; i < tabs_items.length; i++) {
		let tabs_item = tabs_items[i];
		tabs_item.addEventListener("click", function (e) {
			for (let i = 0; i < tabs_items.length; i++) {
				let tabs_item = tabs_items[i];
				tabs_item.classList.remove('_active');
				tabs_blocks[i].classList.remove('_active');
			}
			tabs_item.classList.add('_active');
			tabs_blocks[i].classList.add('_active');
			e.preventDefault();
		});
	}
}
//=================
let headerSearch = document.querySelectorAll('.header');
for (let i = 0; i < headerSearch.length; i++) {
	const header = headerSearch[i];
	const topOffse = header.offsetHeight;
	const topOffset = topOffse /2;

	const yakors = header.querySelectorAll(".menu__link");
	for (let i = 0; i < yakors.length; i++) {
		const yakor = yakors[i];

		yakor.addEventListener("click", function (e) {
			const dataSaersh = yakor.dataset.scroll.substring(1);
			const scrollTarget = document.getElementById(dataSaersh);

			const elementPosition = scrollTarget.getBoundingClientRect().top;
			const offsetPosition = elementPosition - topOffset;
			window.scrollBy({
				top: offsetPosition,
				behavior: 'smooth'
			})
			e.preventDefault();
		});

		window.addEventListener('scroll', function () {
			const elementId = yakor.dataset.scroll;
			const idPosition = document.querySelector(elementId).offsetTop;
			const idHeight = document.querySelector(elementId).offsetHeight;

			const scroll = document.documentElement.scrollTop;
			(scroll > idPosition - topOffset * 1.1 && scroll < (idPosition + idHeight - topOffset * 1.1)) ? addClass(i) : removeClass(i);

			function addClass(k) {
				yakor.classList.remove('_active');
				yakors[k].classList.add('_active');
			}
			function removeClass(k) {
				yakors[k].classList.remove('_active');
			}
		});
	}
}
//=================
let btnArrows = document.querySelectorAll('.arrow');
for (let i = 0; i < btnArrows.length; i++) {
	let btnArrow = btnArrows[i];
	btnArrow.addEventListener('click', function (e) {
		e.preventDefault();

		const href = this.getAttribute('href').substring(1);
		const scrollTarget = document.getElementById(href);

		const topOffse = document.querySelector('.header').offsetHeight;
		const topOffset = topOffse / 2;

		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
		})
	});
}
//=================
const filtItem = document.querySelectorAll('.filter__item');
const filtCard = document.querySelectorAll('.portfolio__item');

filtItem.forEach(event => {
	event.addEventListener('click', () => {
		filtItem.forEach(item => {
			item.classList.remove('_active');
		});
		event.classList.add('_active');

		const currentCategory = event.dataset.filter;
		filter(currentCategory, filtCard);
	})
})
function filter(category, items) {
	items.forEach(item => {
		const isItemFiltered = item.classList.contains(category);
		const isShowAll = category.toLowerCase() === 'all';

		if (!isItemFiltered && !isShowAll) {
			item.classList.add('anime');
			item.classList.add('hide');
		} else {
			item.classList.remove('anime');
			item.classList.remove('hide');
		}
	})
}
filtCard.forEach((card) => {
	card.ontransitionend = function () {
		if (card.classList.contains('anime')) card.classList.add('hide');
	}
})
let filtItemBig = document.querySelectorAll('.filter__item')
let portfItemBig = document.querySelectorAll('.portfolio__item_big');
filtItemBig.forEach(event => {
	const currentCategory = event.dataset.filter;
	event.addEventListener('click', () => {
		portfItemBig.forEach(item => {
			if (currentCategory != 'all') {
				item.classList.add('dnon');
			} else {
				item.classList.remove('dnon');
			}
		});
	})
})
//=================
//Popups
let popup_link = document.querySelectorAll('._popup-link');
let popups = document.querySelectorAll('.popup');
for (let i = 0; i < popup_link.length; i++) {
	const el = popup_link[i];
	el.addEventListener('click', function (e) {
		if (unlock) {
			let item = el.getAttribute('href').replace('#', '');

			let video = el.getAttribute('data-video');
			//=================
			// popup_open(item, video);
			//=================
			for (let i = 0; i < popups.length; i++) {
				let searchPopup = popups[i];
				if (searchPopup.classList.contains('.popup-login')) {
					popup_open_login(item);
				} else {
					popup_open(item, video);
				}
			}
		}
		e.preventDefault();
	})
}
for (let i = 0; i < popups.length; i++) {
	const popup = popups[i];
	popup.addEventListener("click", function (e) {
		if (!e.target.closest('.popup__body')) {
			popup_close(e.target.closest('.popup'));
		}
	});
}

function popup_open(item, video = '') {

	let activePopup = document.querySelectorAll('.popup._active');
	if (activePopup.length > 0) {
		popup_close('', false);
	}
	// let curent_popup = document.querySelector('.popup_' + item);
	let curent_popup = document.querySelector('.popup');
	// let textForm = document.querySelector('.popup__form').innerHTML = item;

	if (curent_popup && unlock) {
		if (video != '' && video != null) {
			let popup_video = document.querySelector('.popup_video');
			popup_video.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		}
		if (!document.querySelector('.menu__body._active')) {
			body_lock_add(500);
		}
		curent_popup.classList.add('_active');
		history.pushState('', '', '#' + item);
	}
}
function popup_open_login(item) {
	let activePopup = document.querySelectorAll('.popup._active');
	if (activePopup.length > 0) {
		popup_close('', false);
	}
	let curent_popup = document.querySelector('#popup-login');
	let textForm = document.querySelector('.popup__form-login').innerHTML = item;

	if (curent_popup && unlock) {

		if (!document.querySelector('.menu__body._active')) {
			body_lock_add(500);
		}
		curent_popup.classList.add('_active');
		history.pushState('', '', '#' + item);
	}
}
function popup_close(item, bodyUnlock = true) {
	if (unlock) {
		if (!item) {
			for (let i = 0; i < popups.length; i++) {
				const popup = popups[i];
				let video = popup.querySelector('.popup__video');
				if (video) {
					video.innerHTML = '';
				}
				popup.classList.remove('_active');
			}
		} else {
			let video = item.querySelector('.popup__video');
			if (video) {
				video.innerHTML = '';
			}
			item.classList.remove('_active');
		}
		if (!document.querySelector('.menu__body._active') && bodyUnlock) {
			body_lock_remove(500);
		}
		history.pushState('', '', window.location.href.split('#')[0]);
	}
}
let popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');
if (popup_close_icon) {
	for (let index = 0; index < popup_close_icon.length; index++) {
		const el = popup_close_icon[index];
		el.addEventListener('click', function () {
			popup_close(el.closest('.popup'));
		})
	}
}
document.addEventListener('keydown', function (e) {
	if (e.which == 27) {
		popup_close();
	}
});

//=================
let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
//=================
window.onscroll = function (e) {
	let lengthPage = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
	document.getElementById("page_progress").value = lengthPage;
}
//==================
function _interplayClasses(els, el, class_name) {
	for (var i = 0; i < els.length; i++) {
		let el = els[i];
		el.classList.remove(class_name);
	}
	el.classList.add(class_name);
}
//=================
(function () {
	if (!Element.prototype.closest) {
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();
document.addEventListener('DOMContentLoaded', function () {
	let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');
	let forms = document.querySelectorAll('form');
	if (forms.length > 0) {
		for (let i = 0; i < forms.length; i++) {
			const el = forms[i];
			el.addEventListener('submit', formSend);
		}
	}
	async function formSend(e) {
		let btn = e.target;
		let form = btn.closest('form');
		let message = form.getAttribute('data-message');
		let error = formValidate(form);

		let formData = new FormData(form);

		if (error == 0) {
			//SendForm
			formClean(form);
			if (message) {
				popup_open_login(message);
				e.preventDefault();
			}
			e.preventDefault();
		} else {
			let formError = form.querySelectorAll('._error');
			if (formError && form.classList.contains('_goto-error')) {
				_goto(formError[0], 1000, 50);
			}
			e.preventDefault();
		}
	}
	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');
		if (formReq.length > 0) {
			for (let i = 0; i < formReq.length; i++) {
				const el = formReq[i];
				error += formValidateInput(el);
			}
		}

		return error;
	}
	function formValidateInput(input) {
		let error = 0;
		let input_g_value = input.getAttribute('data-value');
		console.log(input.getAttribute("type"));

		if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
			if (input.value != input_g_value) {
				let em = input.value.replace(" ", "");

				input.value = em;
			}
			if (emailTest(input) || input.value == input_g_value) {
				formAddError(input);
				error++;
			} else {
				formRemoveError(input);
			}
		} else {
			if (input.value == '' || input.value == input_g_value) {
				formAddError(input);
				error++;
			} else {
				formRemoveError(input);
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');

		let inputError = input.parentElement.querySelector('.form__error');
		if (inputError) {
			input.parentElement.removeChild(inputError);
		}
		let inputErrorText = input.getAttribute('data-error');
		if (inputErrorText && inputErrorText != '') {
			input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + inputErrorText + '</div>');
		}
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');

		let inputError = input.parentElement.querySelector('.form__error');
		if (inputError) {
			input.parentElement.removeChild(inputError);
		}
	}
	function formClean(form) {
		let inputs = form.querySelectorAll('input,textarea');

		for (let index = 0; index < inputs.length; index++) {
			const el = inputs[index];
			el.parentElement.classList.remove('_focus');
			el.classList.remove('_focus');
			el.value = el.getAttribute('data-value');
		}
		let checkboxes = form.querySelectorAll('.checkbox__input');
		if (checkboxes.length > 0) {
			for (let index = 0; index < checkboxes.length; index++) {
				const checkbox = checkboxes[index];
				checkbox.checked = false;
			}
		}
		let selects = form.querySelectorAll('select');
		if (selects.length > 0) {
			for (let index = 0; index < selects.length; index++) {
				const select = selects[index];
				const select_default_value = select.getAttribute('data-default');
				select.value = select_default_value;
				select_item(select);
			}
		}
	}


	let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
	inputs_init(inputs);

	function inputs_init(inputs) {
		if (inputs.length > 0) {
			for (let i = 0; i < inputs.length; i++) {
				const input = inputs[i];
				const input_g_value = input.getAttribute('data-value');
				input_placeholder_add(input);
				if (input.value != '' && input.value != input_g_value) {
					input_focus_add(input);
				}
				input.addEventListener('focus', function (e) {
					if (input.value == input_g_value) {
						input_focus_add(input);
						input.value = '';
					}
					formRemoveError(input);
				});
				input.addEventListener('blur', function (e) {
					if (input.value == '') {
						input.value = input_g_value;
						input_focus_remove(input);
						if (input.classList.contains('_mask')) {
							input_clear_mask(input, input_g_value);
						}
					}
				});
			}
		}
	}
	function input_placeholder_add(input) {
		const input_g_value = input.getAttribute('data-value');
		if (input.value == '' && input_g_value != '') {
			input.value = input_g_value;
		}
	}
	function input_focus_add(input) {
		input.classList.add('_focus');
		input.parentElement.classList.add('_focus');
	}
	function input_focus_remove(input) {
		input.classList.remove('_focus');
		input.parentElement.classList.remove('_focus');
	}
	function input_clear_mask(input, input_g_value) {
		input.inputmask.remove();
		input.value = input_g_value;
		input_focus_remove(input);
	}
});



let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
	selects_init();
}
function selects_init() {
	for (let index = 0; index < selects.length; index++) {
		const select = selects[index];
		select_init(select);
	}
	document.addEventListener('click', function (e) {
		selects_close(e);
	});
	document.addEventListener('keydown', function (e) {
		if (e.which == 27) {
			selects_close(e);
		}
	});
}
function selects_close(e) {
	const selects = document.querySelectorAll('.select');
	if (!e.target.closest('.select')) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			select.classList.remove('_active');
			_slideUp(select_body_options, 100);
		}
	}
}
function select_init(select) {
	const select_parent = select.parentElement;
	const select_modifikator = select.getAttribute('class');
	const select_selected_option = select.querySelector('option:checked');
	select.setAttribute('data-default', select_selected_option.value);
	select.style.display = 'none';

	select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

	let new_select = select.parentElement.querySelector('.select');
	new_select.appendChild(select);
	select_item(select);
}
function select_item(select) {
	const select_parent = select.parentElement;
	const select_items = select_parent.querySelector('.select__item');
	const select_options = select.querySelectorAll('option');
	const select_selected_option = select.querySelector('option:checked');
	const select_selected_text = select_selected_option.text;
	const select_type = select.getAttribute('data-type');

	if (select_items) {
		select_items.remove();
	}

	let select_type_content = '';
	if (select_type == 'input') {
		select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
	} else {
		select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
	}

	select_parent.insertAdjacentHTML('beforeend',
		'<div class="select__item">' +
		'<div class="select__title">' + select_type_content + '</div>' +
		'<div class="select__options">' + select_get_options(select_options) + '</div>' +
		'</div></div>');

	select_actions(select, select_parent);
}
function select_actions(original, select) {
	const select_item = select.querySelector('.select__item');
	const select_body_options = select.querySelector('.select__options');
	const select_options = select.querySelectorAll('.select__option');
	const select_type = original.getAttribute('data-type');
	const select_input = select.querySelector('.select__input');

	select_item.addEventListener('click', function () {
		let selects = document.querySelectorAll('.select');
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			if (select != select_item.closest('.select')) {
				select.classList.remove('_active');
				_slideUp(select_body_options, 100);
			}
		}
		_slideToggle(select_body_options, 100);
		select.classList.toggle('_active');
	});

	for (let index = 0; index < select_options.length; index++) {
		const select_option = select_options[index];
		const select_option_value = select_option.getAttribute('data-value');
		const select_option_text = select_option.innerHTML;

		if (select_type == 'input') {
			select_input.addEventListener('keyup', select_search);
		} else {
			if (select_option.getAttribute('data-value') == original.value) {
				select_option.style.display = 'none';
			}
		}
		select_option.addEventListener('click', function () {
			for (let index = 0; index < select_options.length; index++) {
				const el = select_options[index];
				el.style.display = 'block';
			}
			if (select_type == 'input') {
				select_input.value = select_option_text;
				original.value = select_option_value;
			} else {
				select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
				original.value = select_option_value;
				select_option.style.display = 'none';
			}
		});
	}
}
function select_get_options(select_options) {
	if (select_options) {
		let select_options_content = '';
		for (let index = 0; index < select_options.length; index++) {
			const select_option = select_options[index];
			const select_option_value = select_option.value;
			if (select_option_value != '') {
				const select_option_text = select_option.text;
				select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
			}
		}
		return select_options_content;
	}
}
function select_search(e) {
	let select_block = e.target.closest('.select ').querySelector('.select__options');
	let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
	let select_search_text = e.target.value.toUpperCase();

	for (let i = 0; i < select_options.length; i++) {
		let select_option = select_options[i];
		let select_txt_value = select_option.textContent || select_option.innerText;
		if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
			select_option.style.display = "";
		} else {
			select_option.style.display = "none";
		}
	}
}
function selects_update_all() {
	let selects = document.querySelectorAll('select');
	if (selects) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			select_item(select);
		}
	}
}
//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			let sliderPaggination = document.createElement('div');
			sliderPaggination.classList.add('slider-pagination');
			sliderPaggination.classList.add('swiper-pagination');
			slider_wrapper.after(sliderPaggination);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let slider_team = new Swiper('.team__content', {
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 30,
	autoHeight: true,
	speed: 800,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});
let slider_reviews = new Swiper('.reviews__content', {
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 20,
	autoHeight: true,
	speed: 800,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});
