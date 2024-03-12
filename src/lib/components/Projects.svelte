<script>
	import VIdeoCompo from '$lib/components/VIdeoCompo.svelte';
	import {currentLang, translations} from '$lib/utils/store.js';
	let lang = $currentLang;
</script>

<div class="bg-surface-100-800-token bg-gradient-white-blue mt-20 md:mt-0">
	<h4 id="Projects" class="text-4xl mb-10 md:mb-0 text-center font-monserrat font-bold">{translations[lang].someProjects}</h4>
	<div class="flex flex-col mt-[2%] 2xl:mt-[5%] relative items-center justify-center w-screen px-10 gap-10">
		<VIdeoCompo
			posterSrc="/spaPlaceholder.png"
			videoName={translations[lang].project1}
			videoSrc="/spaVideo.mp4"
			Side="right"
			redirectLink="https://lp.la-spa.fr/preuvesdamour/"
		/>
		<VIdeoCompo
			posterSrc="/placeholderUnhcr.png"
			videoName={translations[lang].project2}
			videoSrc="/sunnydayVideo.mp4"
			Side="left"
			redirectLink="https://unhcr-agir.fr/sunnyday"
		/>
	</div>
</div>

<style>
	@media (min-width: 768px) {
		.bg-gradient-white-blue {
				background-image: radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / .33) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(var(--color-primary-500) / .33) 0px, transparent 50%);
		}
  }
</style>
