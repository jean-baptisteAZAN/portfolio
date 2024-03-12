<script lang="ts">
	import { currentLang, translations, switchLanguage} from '$lib/utils/store';
	import { onMount } from 'svelte';
	import { SlideToggle } from '@skeletonlabs/skeleton';
	
	let selectedItem:any = 'about';
	let lang = $currentLang;
	let isFrench:boolean = false;
	
	onMount(() => {
		updateCursor();
	});
	function selectItem(item) {
		if (item === "about") {
			navigateToAboutMe();
		}
		selectedItem = item;
		updateCursor();
	}
	function updateCursor() {
		setTimeout(() => {
			const activeElement = document.querySelector(`.${selectedItem}`);
			if (activeElement) {
				document.getElementById('cursor').style.left = `${activeElement.offsetLeft}px`;
				document.getElementById('cursor').style.width = `${activeElement.offsetWidth}px`;
			}
		}, 0);
	}

	function navigateToAboutMe() {
		if (window.innerWidth <= 768) {
			location.href = "#AboutMeMobile";
		} else {
			location.href = "#AboutMeDesktop";
		}
	}

	function toggleLanguage() {
		isFrench = !isFrench;
		switchLanguage(isFrench ? 'fr' : 'en');
	}
</script>

<div class="header gap-10 sticky backdrop-blur-lg z-50 h-[3rem] w-screen">
	<a href="#AboutMe" class="menu-item about" on:click={() => selectItem('about')}>{translations[lang].header.about}</a>
	<a href="#Projects" class="menu-item projects" on:click={() => selectItem('projects')}>{translations[lang].header.projects}</a>
	<a href="#Contact" class="menu-item contact" on:click={() => selectItem('contact')}>{translations[lang].header.contact}</a>
	<div id="cursor" class={selectedItem} />
<!--	<SlideToggle name="slider-large" checked={isFrench} on:click={toggleLanguage} active="bg-primary-500" size="lg" />-->
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
