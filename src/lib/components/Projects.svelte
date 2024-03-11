<script>
	import VIdeoCompo from '$lib/components/VIdeoCompo.svelte';
</script>

<div class="bg-surface-100-800-token "
		 style="background-image: radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / .33) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(var(--color-primary-500) / .33) 0px, transparent 50%);}">
	<h4 id="Projects" class="text-4xl text-center font-monserrat font-bold">Some of my latest projects</h4>
	<div class="flex flex-col mt-[2%] 2xl:mt-[5%] relative items-center justify-center w-screen px-10 gap-10">
		<VIdeoCompo
			posterSrc="/spaPlaceholder.png"
			videoName="SPA's end year Landing Page"
			videoSrc="/spaVideo.mp4"
			Side="right"
			redirectLink="https://lp.la-spa.fr/preuvesdamour/"
		/>
		<VIdeoCompo
			posterSrc="/placeholderUnhcr.png"
			videoName="UNHCR's Landing Page"
			videoSrc="/sunnydayVideo.mp4"
			Side="left"
			redirectLink="https://unhcr-agir.fr/sunnyday"
		/>
	</div>
</div>
