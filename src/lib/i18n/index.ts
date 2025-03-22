import { addMessages, init, getLocaleFromNavigator, register } from 'svelte-i18n';
import en from '../translations/en.json';
import fr from '../translations/fr.json';

register('en', () => Promise.resolve(en));
register('fr', () => Promise.resolve(fr));

// Initialize svelte-i18n
init({
	fallbackLocale: 'en',
	initialLocale: getLocaleFromNavigator()
});

// Add our translations
addMessages('en', en);
addMessages('fr', fr);
