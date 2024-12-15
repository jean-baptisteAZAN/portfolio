<script>
	import FaceBlock from '$lib/components/hp/FaceBlock.svelte';
	import Cards from '$lib/components/hp/Cards.svelte';
	import Projects from '$lib/components/hp/Projects.svelte';
	import Timeline from '$lib/components/hp/Timeline.svelte';
	import Testimonials from '$lib/components/hp/Testimonials.svelte';
	import Form from '$lib/components/hp/Form.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { currentLang, translations } from '$lib/utils/store';
	// Load Calendly script
	import { onMount } from 'svelte';
	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://assets.calendly.com/assets/external/widget.js';
		script.async = true;
		document.body.appendChild(script);
	});

	function openCalendly() {
		Calendly.initPopupWidget({
			url: 'https://calendly.com/jbazan-pro/jean-baptiste-azan-freelance-developer'
		});
	}
</script>

<svelte:head>
	<title> Jean-Baptiste Azan </title>
	<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
</svelte:head>

<Navbar />
<FaceBlock />
<Cards />
<Projects/>
<!--<Testimonials/>-->
<Timeline/>
<Form/>

<button class="fixed btn preset-filled bottom-7 right-7 hover:scale-110 transition-all" onclick={openCalendly}>
	<span class="badge-icon preset-filled-primary-500 absolute -right-2 -top-2 z-10">1</span>
	{translations[$currentLang].lets_talk}
</button>
