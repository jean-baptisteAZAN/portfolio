import { locale } from 'svelte-i18n';
import en from '../translations/en.json';
import fr from '../translations/fr.json';

export const translations = {
	en,
	fr
};

export function switchLanguage(lang) {
	locale.set(lang);
}

// Export the locale store for components that need it
export { locale as currentLang };
