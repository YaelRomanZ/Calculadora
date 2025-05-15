let pantalla = document.getElementById('pantalla');
let resultadoPantalla = document.getElementById('resultado');

function insertar(numero) {
	pantalla.value += numero;
}

function operar(operador) {
	pantalla.value += operador;
}

function calcular() {
	try {
		resultadoPantalla.value = eval(pantalla.value);
		resultadoPantalla.classList.add('mostrar'); //AYMT. Esta linea agrega la clase requerida para la animación del segundo input
	} catch (error) {
		resultadoPantalla.value = 'Error';
		resultadoPantalla.classList.add('mostrar'); //AYMT. Esta linea agrega una animacion cuando se muestre el texto "Error"
	}
	pantalla.value = ''; //AYMT. Limpia el primer input despues de realizar el calculo
}

function borrar() {
	pantalla.value = '';
	resultadoPantalla.value = '';
	resultadoPantalla.classList.remove('mostrar'); //AYMT. Oculta el resultado del calculo.
}

// Themes

/**
 * **Change Theme**
 *
 * Changes the theme of the calculator based on the selected option.
 *
 * @returns {void}
 */
function changeTheme() {
	// Get the value of select element
	const theme = document.getElementById('theme').value;
	// Set the data-theme attribute on the document element
	document.documentElement.setAttribute('data-theme', theme);

	// Check if the #rememberTheme checkbox is checked to store theme in local storage
	const remember = document.getElementById('rememberTheme').checked;
	if (remember) localStorage.setItem('selectedTheme', theme);
}

/**
 * **Toggle Remember Theme**
 *
 * Sets the rememberTheme checkbox state in local storage.
 *
 * @returns {void}
 */
function toggleRememberTheme() {
	// Get the value of #rememberTheme checkbox and set it in local storage
	const remember = document.getElementById('rememberTheme').checked;
	localStorage.setItem('rememberTheme', remember);

	// Get the value of #theme select element and set it in local storage
	const theme = document.getElementById('theme').value;
	localStorage.setItem('selectedTheme', theme);

	// If the checkbox is unchecked, remove the selectedTheme from local storage
	if (!remember) localStorage.removeItem('selectedTheme');
}

/**
 * **Apply Stored Theme Settings**
 *
 * Applies the stored theme settings from local storage when the page loads.
 *
 * @returns {void}
 */
function applyStoredThemeSettings() {
	// Check if the #rememberTheme checkbox is checked and get the stored theme
	const remember = localStorage.getItem('rememberTheme') === 'true';
	const storedTheme = localStorage.getItem('selectedTheme');

	// Set the local storage value in the #rememberTheme checkbox
	document.getElementById('rememberTheme').checked = remember;

	// If remember and storedTheme are true and not null, set the data-theme attribute and set the stored theme in the select element
	if (remember && storedTheme) {
		document.documentElement.setAttribute('data-theme', storedTheme);
		document.getElementById('theme').value = storedTheme;
	}
}

window.onload = applyStoredThemeSettings;

// Mobile

const hamburgerBtn = document.getElementById('hamburger-btn');
const themeControls = document.querySelector('.theme-controls');

hamburgerBtn.addEventListener('click', () => {
	const isOpen = themeControls.classList.toggle('open');
	hamburgerBtn.setAttribute('aria-expanded', isOpen);
});
