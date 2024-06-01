import { writable } from 'svelte/store';
import en from '../translations/en.json';
import fr from '../translations/fr.json';

export const translations = {
	en,
	fr
};

const browserLanguage = navigator.language || navigator.languages[0];
const defaultLang = browserLanguage.startsWith('fr') ? 'fr' : 'en';

export const currentLang = writable(defaultLang);

export function switchLanguage(lang) {
	currentLang.set(lang);
}
