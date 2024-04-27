<script lang="ts">
	import { currentLang, translations, switchLanguage } from '$lib/utils/store';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	let selectedItem: any = 'about';
	let toggleRef: HTMLElement;
	let isFrench: boolean = false;

	onMount(() => {
		gsap.fromTo(toggleRef, { opacity: 0 }, { opacity: 1, duration: 0.5 });
		updateCursor();
	});
	function selectItem(item: string):void {
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

	function navigateToAboutMe():void {
		if (window.innerWidth <= 768) {
			location.href = '#AboutMeMobile';
		} else {
			location.href = '#AboutMeDesktop';
		}
	}

	function toggleLanguage():void {
		isFrench = !isFrench;
		gsap.fromTo(toggleRef, { x: -10, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 });
		switchLanguage(isFrench ? 'fr' : 'en');
	}
</script>

<div class="header gap-10 sticky backdrop-blur-lg z-50 h-[3rem] w-full">
	<a href="#AboutMeDesktop" class="menu-item about" on:click={() => selectItem('about')}
		>{translations[$currentLang].header.about}</a
	>
	<a href="#Projects" class="menu-item projects" on:click={() => selectItem('projects')}
		>{translations[$currentLang].header.projects}</a
	>
	<a href="#Contact" class="menu-item contact" on:click={() => selectItem('contact')}
		>{translations[$currentLang].header.contact}</a
	>
	<div id="cursor" class={selectedItem} />
</div>
<div class=" absolute right-1 md:right-10 top-1 z-50">
	<button
		class="px-3 py-1 md:px-4 md:py-2 bg-blue-500 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition-all"
		on:click={toggleLanguage}
		bind:this={toggleRef}
	>
		{$currentLang}
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
		transition: left 0.3s ease, width 0.3s ease;
	}
</style>
