<script lang="ts">
	import { currentLang, translations, switchLanguage } from '$lib/utils/store';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';

	let selectedItem = $state('about');
	let toggleRef = $state();
	let isFrench: boolean = false;
	let redirectionDone: boolean = false;

	onMount(() => {
		gsap.fromTo(toggleRef, { opacity: 0 }, { opacity: 1, duration: 0.5 });
		updateCursor();
	});
	function selectItem(item: string): void {
		if (item === 'about') {
			navigateToAboutMe();
		}
		selectedItem = item;
		updateCursor();
	}
	function updateCursor(): void {
		setTimeout(() => {
			const activeElement = document.querySelector(`.${selectedItem}`);
			if (activeElement) {
				document.getElementById('cursor').style.left = `${activeElement.offsetLeft}px`;
				document.getElementById('cursor').style.width = `${activeElement.offsetWidth}px`;
			}
		}, 0);
	}

	function navigateToAboutMe(): void {
		if (redirectionDone)
			if (window.innerWidth <= 768) {
				location.href = '#AboutMeMobile';
			} else {
				location.href = '#AboutMeDesktop';
			}
		redirectionDone = true;
	}

	function toggleLanguage(): void {
		isFrench = !isFrench;
		gsap.fromTo(toggleRef, { x: -10, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 });
		switchLanguage(isFrench ? 'fr' : 'en');
	}
</script>

<div class="header sticky z-50 h-[3rem] w-full gap-3 backdrop-blur-lg md:gap-10">
	<a href="#AboutMeDesktop" class="menu-item about" onclick={() => selectItem('about')}
		>{translations[$currentLang].header.about}</a
	>
	<a href="#Projects" class="menu-item projects" onclick={() => selectItem('projects')}
		>{translations[$currentLang].header.projects}</a
	>
	<a href="#Contact" class="menu-item contact" onclick={() => selectItem('contact')}
		>{translations[$currentLang].header.contact}</a
	>
	<div id="cursor" class={selectedItem}></div>
</div>
<div class=" absolute right-1 top-1 z-50 md:right-10">
	<button
		class="rounded-lg font-bold text-white"
		onclick={toggleLanguage}
		bind:this={toggleRef}
		aria-label={$currentLang === 'fr'
			? 'Changer la langue en anglais'
			: 'Changer la langue en français'}
	>
		<span class="text-4xl">
			{$currentLang === 'fr' ? '🇫🇷' : '🇬🇧'}
		</span>
	</button>
</div>

<style>
	.header {
		font-family: 'Montserrat', sans-serif;
		top: 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.menu-item {
		cursor: pointer;
		position: relative;
	}

	#cursor {
		position: absolute;
		bottom: 0;
		height: 2px;
		background-color: rgba(var(--color-primary-500) / 1);
		transition:
			left 0.3s ease,
			width 0.3s ease;
	}
</style>
