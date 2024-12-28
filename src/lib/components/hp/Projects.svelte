<script>
	import { currentLang, translations } from '$lib/utils/store.js';
	import VideoCompo from '$lib/components/hp/VideoCompo.svelte';
</script>

<section class="bg-surface-100-800-token bg-gradient-white-blue mt-20 md:mt-0">
	<header class="text-center">
		<h2 id="Projects" class="text-4xl mb-10 md:mb-0 font-bold">
			{translations[$currentLang].someProjects}
		</h2>
	</header>
	<div
		class="flex flex-col mt-[2%] 2xl:mt-[5%] relative items-center justify-center w-full overflow-hidden px-10 gap-10"
	>
		<article>
			<VideoCompo
				posterSrc="/spaPlaceholder.jpg"
				videoName={translations[$currentLang].project1}
				videoSrc="/spaVideo.mp4"
				Side="right"
				redirectLink="https://lp.la-spa.fr/preuvesdamour/"
				isAdfi={true}
			/>
		</article>
		<article>
			<VideoCompo
				posterSrc="/oden-placehoolder.png"
				videoName={translations[$currentLang].project4}
				videoSrc="/oden-video.mp4"
				Side="left"
				redirectLink="https://oden-app.com/"
			/>
		</article>
		<article>
			<VideoCompo
				posterSrc="/placeholderUnhcr.jpg"
				videoName={translations[$currentLang].project2}
				videoSrc="/sunnydayVideo.mp4"
				Side="right"
				redirectLink="https://unhcr-agir.fr/sunnyday"
				isAdfi={true}
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
