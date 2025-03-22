<script lang="ts">
	import { currentLang, switchLanguage } from '$lib/utils/store';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { _ } from 'svelte-i18n';

	let toggleRef: HTMLElement | undefined = $state();
	let isFrench: boolean = false;
	let isDarkMode = $state(true); // Initialize with the current setting

	onMount(() => {
		if (toggleRef) {
			gsap.fromTo(toggleRef as HTMLElement, { opacity: 0 }, { opacity: 1, duration: 0.5 });
		}
		
		// Check if dark mode is already set in localStorage
		const storedTheme = localStorage.getItem('theme');
		if (storedTheme) {
			isDarkMode = storedTheme === 'dark';
		} else {
			// Default to user preference
			isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
		}
		
		// Apply the theme on initial load
		updateTheme(isDarkMode);
	});

	function toggleLanguage(): void {
		isFrench = !isFrench;
		if (toggleRef) {
			gsap.fromTo(
				toggleRef as HTMLElement,
				{ x: -10, opacity: 0 },
				{ x: 0, opacity: 1, duration: 0.5 }
			);
		}
		switchLanguage(isFrench ? 'fr' : 'en');
	}
	
	function toggleTheme(): void {
		isDarkMode = !isDarkMode;
		updateTheme(isDarkMode);
		
		// Save preference to localStorage
		localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
	}
	
	function updateTheme(darkMode: boolean): void {
		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<div class="fixed right-5 top-5 z-50 flex items-center gap-3">
	<!-- Light/Dark Switch -->
	<button
		class="flex h-12 w-12 items-center justify-center rounded-full bg-surface-200 dark:bg-surface-800 transition-all duration-200 hover:scale-110 shadow-lg"
		onclick={toggleTheme}
		aria-label={isDarkMode ? $_('switchToLight') || 'Switch to light mode' : $_('switchToDark') || 'Switch to dark mode'}
	>
		{#if isDarkMode}
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-300">
				<circle cx="12" cy="12" r="5"></circle>
				<line x1="12" y1="1" x2="12" y2="3"></line>
				<line x1="12" y1="21" x2="12" y2="23"></line>
				<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
				<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
				<line x1="1" y1="12" x2="3" y2="12"></line>
				<line x1="21" y1="12" x2="23" y2="12"></line>
				<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
				<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
			</svg>
		{:else}
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700">
				<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
			</svg>
		{/if}
	</button>
	
	<!-- Language Toggle -->
	<button
		class="flex h-12 w-12 items-center justify-center rounded-full bg-surface-200 dark:bg-surface-800 transition-all duration-200 hover:scale-110 shadow-lg"
		onclick={toggleLanguage}
		bind:this={toggleRef}
		aria-label={$currentLang === 'fr'
			? 'Changer la langue en anglais'
			: 'Changer la langue en français'}
	>
		<span class="text-2xl">
			{$currentLang === 'fr' ? '🇫🇷' : '🇬🇧'}
		</span>
	</button>
</div> 