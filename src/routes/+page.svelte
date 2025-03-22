<script>
	import FaceBlock from '$lib/components/hp/FaceBlock.svelte';
	import Cards from '$lib/components/hp/Cards.svelte';
	import Projects from '$lib/components/hp/Projects.svelte';
	import Timeline from '$lib/components/hp/Timeline.svelte';
	import Testimonials from '$lib/components/hp/Testimonials.svelte';
	import Form from '$lib/components/hp/Form.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';

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
	<title>Jean-Baptiste Azan</title>
	<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
</svelte:head>

<Navbar />
<FaceBlock />
<Cards />
<Projects />
<!--<Education/>-->
<Testimonials />
<Timeline />
<Form />

<button
	class="btn fixed bottom-7 right-7 z-50 transition-all duration-500 preset-filled hover:scale-110"
	onclick={openCalendly}
>
	<span class="badge-icon absolute -right-2 -top-2 z-10 preset-filled-primary-500">1</span>
	{$_('lets_talk')}
</button>
