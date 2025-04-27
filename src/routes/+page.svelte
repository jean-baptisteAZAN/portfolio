<script lang="ts">
	import FaceBlock from '$lib/components/hp/FaceBlock.svelte';
	import Cards from '$lib/components/hp/Cards.svelte';
	import Projects from '$lib/components/hp/Projects.svelte';
	import Timeline from '$lib/components/hp/Timeline.svelte';
	import Testimonials from '$lib/components/hp/Testimonials.svelte';
	import Form from '$lib/components/hp/Form.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import gsap from 'gsap';

	// Section references for animations
	let sections: HTMLElement[] = $state([]);
	let navbarRef: HTMLElement | undefined = $state();
	let faceRef: HTMLElement | undefined = $state();
	let cardsRef: HTMLElement | undefined = $state();
	let projectsRef: HTMLElement | undefined = $state();
	let testimonialsRef: HTMLElement | undefined = $state();
	let timelineRef: HTMLElement | undefined = $state();
	let formRef: HTMLElement | undefined = $state();
	let talkButtonRef: HTMLElement | undefined = $state();
	let pageLoaded = $state(false);
	let calendlyLoaded = $state(false);

	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://assets.calendly.com/assets/external/widget.js';
		script.async = true;
		script.onload = () => {
			calendlyLoaded = true;
		};
		document.body.appendChild(script);

		const tl = gsap.timeline();
		
		if (navbarRef) {
			tl.from(navbarRef, {
				y: -50,
				opacity: 0,
				duration: 0.8,
				ease: "power3.out"
			});
		}
		
		// Face block animation
		if (faceRef) {
			tl.from(faceRef, {
				y: 30,
				opacity: 0,
				duration: 0.8,
				ease: "back.out(1.7)"
			}, "-=0.4");
		}

		// Mark page as loaded for conditional rendering
		pageLoaded = true;
	});

	function openCalendly() {
		// Use window object with any casting to access Calendly
		const calendlyApi = (window as any).Calendly;
		if (calendlyApi) {
			calendlyApi.initPopupWidget({
				url: 'https://calendly.com/jbazan-pro/jean-baptiste-azan-freelance-developer'
			});
		}
	}

	function sectionAction(node: HTMLElement) {
		sections = [...sections, node];
		return {
			destroy() {
				sections = sections.filter(s => s !== node);
			}
		};
	}
</script>

<svelte:head>
	<title>Jean-Baptiste Azan</title>
	<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
</svelte:head>

<div class="page-wrapper overflow-x-hidden">
	<div bind:this={navbarRef}>
		<Navbar />
	</div>
	
	<div bind:this={faceRef}>
		<FaceBlock />
	</div>
	
	<div bind:this={cardsRef}>
		<Cards />
	</div>
	
	<div bind:this={projectsRef} use:sectionAction>
		<Projects />
	</div>
	
	<!--<Education/>-->
	
	<div bind:this={testimonialsRef} use:sectionAction>
		<Testimonials />
	</div>
	
	<div bind:this={timelineRef} use:sectionAction>
		<Timeline />
	</div>
	
	<div bind:this={formRef} use:sectionAction>
		<Form />
	</div>

	<button
		bind:this={talkButtonRef}
		class="btn fixed bottom-7 right-7 z-50 transition-all duration-500 preset-filled hover:scale-110"
		onclick={openCalendly}
	>
		<span class="badge-icon absolute -right-2 -top-2 z-10 preset-filled-primary-500 pulse-animation">1</span>
		{$_('lets_talk')}
	</button>
</div>

<style>
	.page-wrapper {
		position: relative;
	}
	
	/* Pulse animation for the badge */
	.pulse-animation {
		animation: pulse 2s infinite;
	}
	
	@keyframes pulse {
		0% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(var(--color-primary-500), 0.7);
		}
		
		70% {
			transform: scale(1);
			box-shadow: 0 0 0 10px rgba(var(--color-primary-500), 0);
		}
		
		100% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(var(--color-primary-500), 0);
		}
	}
</style>
