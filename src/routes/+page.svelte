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
		// Load ScrollTrigger dynamically to avoid import errors
		import('gsap/ScrollTrigger').then(module => {
			const ScrollTrigger = module.default;
			gsap.registerPlugin(ScrollTrigger);
			
			// Setup scroll animations for other sections
			sections.forEach(section => {
				gsap.from(section, {
					scrollTrigger: {
						trigger: section,
						start: "top 80%",
						toggleActions: "play none none none"
					},
					y: 60,
					opacity: 0,
					duration: 0.8,
					ease: "power2.out"
				});
			});
		});

		// Load Calendly
		const script = document.createElement('script');
		script.src = 'https://assets.calendly.com/assets/external/widget.js';
		script.async = true;
		script.onload = () => {
			calendlyLoaded = true;
		};
		document.body.appendChild(script);

		// Initial page animation
		const tl = gsap.timeline();
		
		// Navbar animation
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
		
		// Cards animation with stagger
		if (cardsRef) {
			const cardItems = cardsRef.querySelectorAll('.card-item');
			if (cardItems.length > 0) {
				tl.from(cardItems, {
					y: 50,
					opacity: 0,
					stagger: 0.2,
					duration: 0.6,
					ease: "power2.out"
				}, "-=0.2");
			}
		}

		// Float animation for talk button
		if (talkButtonRef) {
			gsap.to(talkButtonRef, {
				y: -10,
				duration: 1.5,
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut"
			});
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

	// Action for section binding
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
