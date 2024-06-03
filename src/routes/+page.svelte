<script>
	import Header from '$lib/components/Header.svelte';
	import AboutMe from '$lib/components/AboutMe.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import WhatIDo from '$lib/components/WhatIDo.svelte';
	import Form from '$lib/components/Form.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import Offer from '$lib/components/Offer.svelte';
	import metaImg from "$lib/assets/metaImg.png";
</script>


<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Jean-baptiste AZAN's portfolio</title>
	<meta name="title" content="Jean-baptiste AZAN's portfolio" />
	<meta name="description" content="Discover the portfolio of Jean-Baptiste Azan, freelance web developer. Explore his skills, completed projects and contact him for a free quote. Visit Jeanbaptisteazan.fr to find out more." />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.jeanbaptisteazan.fr/" />
	<meta property="og:title" content="Jean-baptiste AZAN's portfolio" />
	<meta property="og:description" content="Discover the portfolio of Jean-Baptiste Azan, freelance web developer. Explore his skills, completed projects and contact him for a free quote. Visit Jeanbaptisteazan.fr to find out more." />
	<meta property="og:image" content={metaImg} />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://www.jeanbaptisteazan.fr/" />
	<meta property="twitter:title" content="Jean-baptiste AZAN's portfolio" />
	<meta property="twitter:description" content="Discover the portfolio of Jean-Baptiste Azan, freelance web developer. Explore his skills, completed projects and contact him for a free quote. Visit Jeanbaptisteazan.fr to find out more." />
	<meta property="twitter:image" content={metaImg} />
</svelte:head>

<Header />
<AboutMe />
<WhatIDo />
<Projects />
<Timeline />
<Offer />
<Form/>
