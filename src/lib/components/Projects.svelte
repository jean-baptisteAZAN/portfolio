<script>
	import VIdeoCompo from '$lib/components/VIdeoCompo.svelte';
	import { currentLang, translations } from '$lib/utils/store.js';
</script>

<section class="bg-surface-100-800-token bg-gradient-white-blue mt-20 md:mt-0">
	<header class="text-center">
		<h2 id="Projects" class="text-4xl mb-10 md:mb-0 font-monserrat font-bold">
			{translations[$currentLang].someProjects}
		</h2>
	</header>
	<div
		class="flex flex-col mt-[2%] 2xl:mt-[5%] relative items-center justify-center w-full overflow-hidden px-10 gap-10"
	>
		<article>
			<VIdeoCompo
				posterSrc="/spaPlaceholder.jpg"
				videoName={translations[$currentLang].project1}
				videoSrc="/spaVideo.mp4"
				Side="right"
				redirectLink="https://lp.la-spa.fr/preuvesdamour/"
			/>
		</article>
		<article>
			<VIdeoCompo
				posterSrc="/placeholderUnhcr.jpg"
				videoName={translations[$currentLang].project2}
				videoSrc="/sunnydayVideo.mp4"
				Side="left"
				redirectLink="https://unhcr-agir.fr/sunnyday"
			/>
		</article>
		<article>
			<VIdeoCompo
				posterSrc="/ifi_curie_placeholder.jpg"
				videoName={translations[$currentLang].project3}
				videoSrc="/ifi_curie_video.mp4"
				Side="right"
				redirectLink="https://ifi.curie.fr"
			/>
		</article>
	</div>
</section>

<style>
    @media (min-width: 768px) {
        .bg-gradient-white-blue {
            background-image: radial-gradient(
                    at 0% 0%,
                    rgba(var(--color-primary-500) / 0.33) 0px,
                    transparent 50%
            ),
            radial-gradient(at 100% 0%, rgba(var(--color-tertiary-50) / 0.33) 0px, transparent 50%);
        }
    }
</style>
