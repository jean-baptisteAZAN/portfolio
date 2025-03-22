<script>
	import { _, isLoading } from 'svelte-i18n';
	import VideoCompo from '$lib/components/hp/VideoCompo.svelte';
</script>

{#if !$isLoading}
	<section class="bg-surface-100-800-token education-section bg-gradient-white-blue mt-20 md:mt-0">
		<header class="text-center">
			<h2 id="Projects" class="text-4xl mb-10 md:mb-0 font-bold">
				{$_('someProjects')}
			</h2>
		</header>
		<div
			class="flex flex-col mt-[2%] 2xl:mt-[5%] relative items-center justify-center w-full overflow-hidden px-10 gap-10"
		>
			<article>
				<VideoCompo
					posterSrc="/spaPlaceholder.jpg"
					videoName={$_('project1')}
					videoSrc="/spaVideo.mp4"
					Side="right"
					redirectLink="https://lp.la-spa.fr/preuvesdamour/"
					isAdfi={true}
				/>
			</article>
			<article>
				<VideoCompo
					posterSrc="/oden-placehoolder.png"
					videoName={$_('project4')}
					videoSrc="/oden-video.mp4"
					Side="left"
					redirectLink="https://oden-app.com/"
				/>
			</article>
			<article>
				<VideoCompo
					posterSrc="/placeholderUnhcr.jpg"
					videoName={$_('project2')}
					videoSrc="/sunnydayVideo.mp4"
					Side="right"
					redirectLink="https://unhcr-agir.fr/sunnyday"
					isAdfi={true}
				/>
			</article>
		</div>
	</section>
{/if}

<style>
    @media (min-width: 768px) {
        .bg-gradient-white-blue {
            background-image:
                    radial-gradient(at 0% 0%, rgba(var(--color-primary-500) / 0.33) 0px, transparent 50%),
                    radial-gradient(at 100% 0%, rgba(var(--color-tertiary-50) / 0.33) 0px, transparent 50%)
        }
    }
</style>
