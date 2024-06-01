import { writable } from 'svelte/store';
import en from '../translations/en.json';
import fr from '../translations/fr.json';

export const translations = {
	en,
	fr
};
function getDefaultLanguage() {
	if (typeof navigator !== 'undefined') {
		const browserLanguage = navigator.language || navigator.languages[0];
		return browserLanguage.startsWith('fr') ? 'fr' : 'en';
	}
	return 'en';
}

export const currentLang = writable(getDefaultLanguage());

export function switchLanguage(lang) {
	currentLang.set(lang);
}
