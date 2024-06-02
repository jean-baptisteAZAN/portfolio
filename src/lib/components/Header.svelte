<script lang="ts">
	import { currentLang, translations, switchLanguage } from '$lib/utils/store';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	
	let selectedItem: any = 'about';
	let toggleRef: HTMLElement;
	let isFrench: boolean = false;

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
		if (window.innerWidth <= 768) {
			location.href = '#AboutMeMobile';
		} else {
			location.href = '#AboutMeDesktop';
		}
	}

	function toggleLanguage(): void {
		isFrench = !isFrench;
		gsap.fromTo(toggleRef, { x: -10, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 });
		switchLanguage(isFrench ? 'fr' : 'en');
	}
</script>

<div class="header gap-3 md:gap-10 sticky backdrop-blur-lg z-50 h-[3rem] w-full">
	<div class="absolute left-1 md:left-10 top-3 z-50">
		<LightSwitch/>
	</div>
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
		class="text-white font-bold rounded-lg shadow"
		on:click={toggleLanguage}
		bind:this={toggleRef}
	>
		{#if $currentLang === 'fr'}
			<svg class=" w-10 h-10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet"><path fill="#ED2939" d="M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4v18z"></path><path fill="#002495" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5H4z"></path><path fill="#EEE" d="M12 5h12v26H12z"></path></svg>
			{:else}
			<svg class=" w-10 h-10 rounded-xl" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
					 viewBox="0 0 130 120" enable-background="new 0 0 130 120" xml:space="preserve">
					<g id="Infos">
						<rect id="BG" x="-200" y="-1160" fill="#D8D8D8" width="2180" height="1700"/>
					</g>
									<g id="Others">
					</g>
									<g id="Europe">
						<g id="Row_5">
							<g>
								<polygon fill="#2A66B7" points="20.2,120 46.3,120 46.3,95.8 			"/>
								<polygon fill="#2A66B7" points="46.3,0 20.6,0 46.3,23.9 			"/>
								<polygon fill="#2A66B7" points="0,78.7 0,101.4 24.6,78.7 			"/>
								<polygon fill="#2A66B7" points="130,101.8 130,78.7 105.1,78.7 			"/>
								<polygon fill="#2A66B7" points="0,18.2 0,41.3 24.9,41.3 			"/>
								<polygon fill="#2A66B7" points="130,41.3 130,18.6 105.4,41.3 			"/>
								<polygon fill="#2A66B7" points="83.7,120 109.4,120 83.7,96.1 			"/>
								<polygon fill="#2A66B7" points="109.8,0 83.7,0 83.7,24.2 			"/>
								<g>
									<polygon fill="#DC4437" points="85.1,78.7 83.7,78.7 83.7,86.5 119.7,120 129.4,120 130,120 130,111.4 94.8,78.7 				"/>
									<polygon fill="#DC4437" points="44.9,41.3 46.3,41.3 46.3,33.5 10.3,0 0.6,0 0,0 0,8.6 35.2,41.3 				"/>
									<polygon fill="#DC4437" points="34.9,78.7 0,110.9 0,120 9.8,120 46.3,86.3 46.3,78.7 44.8,78.7 				"/>
									<polygon fill="#DC4437" points="120.2,0 83.7,33.7 83.7,41.3 85.2,41.3 95.1,41.3 130,9.1 130,0 				"/>
									<polygon fill="#DC4437" points="76.7,0 53.3,0 53.3,48.3 0,48.3 0,71.7 53.3,71.7 53.3,120 76.7,120 76.7,71.7 130,71.7
										130,48.3 76.7,48.3 				"/>
								</g>
								<g>
									<polygon fill="#FFFFFF" points="95.1,41.3 83.7,41.3 83.7,33.7 120.2,0 115,0 109.8,0 83.7,24.2 83.7,0 76.7,0 76.7,48.3
										130,48.3 130,41.3 105.4,41.3 130,18.6 130,13.8 130,9.1 				"/>
									<polygon fill="#FFFFFF" points="46.3,23.9 20.6,0 15.5,0 10.3,0 46.3,33.5 46.3,41.3 35.2,41.3 0,8.6 0,13.4 0,18.2 24.9,41.3
										0,41.3 0,48.3 53.3,48.3 53.3,0 46.3,0 				"/>
									<polygon fill="#FFFFFF" points="76.7,71.7 76.7,120 83.7,120 83.7,96.1 109.4,120 114.5,120 119.7,120 83.7,86.5 83.7,78.7
										94.8,78.7 130,111.4 130,106.6 130,101.8 105.1,78.7 130,78.7 130,71.7 92.5,71.7 				"/>
									<polygon fill="#FFFFFF" points="0,71.7 0,78.7 24.6,78.7 0,101.4 0,106.2 0,110.9 34.9,78.7 46.3,78.7 46.3,86.3 9.8,120
										15,120 20.2,120 46.3,95.8 46.3,120 53.3,120 53.3,71.7 52.4,71.7 				"/>
								</g>
							</g>
						</g>
										<g id="Row_4">
						</g>
										<g id="Row_3">
						</g>
										<g id="Row_2">
						</g>
										<g id="Row_1">
						</g>
					</g>
			</svg>
		{/if}
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
