import { writable } from 'svelte/store';
import en from '../translations/en.json';
import fr from '../translations/fr.json';

export const translations = {
	en,
	fr
};

export const currentLang = writable('fr');

export function switchLanguage(lang) {
	currentLang.set(lang);
}
