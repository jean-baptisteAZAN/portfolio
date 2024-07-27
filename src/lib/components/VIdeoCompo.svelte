<script>
	import { twMerge } from 'tailwind-merge';
	import { gsap } from 'gsap';
	import { fade } from 'svelte/transition';
	export let videoName;
	export let posterSrc;
	export let videoSrc;
	export let Side = '';
	export let redirectLink = '';

	let video, titleContainer, videoContainer;
	let classes = '';

	let titleAnimationDone = false;
	let isPlaying = false;

	function playVideo() {
		video.play();
		isPlaying = true;
		if (!titleAnimationDone) {
			animateTitleAndVideo();
			titleAnimationDone = true;
		}
	}

	function pauseAndResetVideo() {
		video.pause();
		video.load();
	}

	function animateTitleAndVideo() {
		const titleFromX = Side === 'left' ? -300 : 300;
		const titleToX = Side === 'left' ? -200 : 200;
		const videoToX = Side === 'left' ? 300 : -300;

		gsap
			.timeline()
			.fromTo(
				titleContainer,
				{ x: titleFromX, opacity: 0 },
				{ x: titleToX, opacity: 1, duration: 2 }
			)
			.to(videoContainer, { x: videoToX, duration: 2 }, 0);
	}

	$: titleClass = Side === 'left' ? 'left-0 ml-[30%]' : 'right-0';
</script>

<div class="hidden md:flex justify-center items-center overflow-hidden">
	<div bind:this={titleContainer} class={twMerge(`w-1/2 absolute opacity-0`, titleClass)}>
		<p class="text-3xl font-bold text-secondary-400-500-token">
			{videoName}
		</p>
	</div>
	<a
		href={redirectLink}
		target="_blank"
		aria-label="Redirection to the project website"
		bind:this={videoContainer}
		class={twMerge('w-1/2 relative', classes)}
		on:mouseenter={playVideo}
		on:mouseleave={pauseAndResetVideo}
	>
		<div
			out:fade={{ duration: 900 }}
			class:hidden-class={isPlaying}
			class="backdrop-blur-md absolute w-full h-full rounded-3xl"
		/>
		<svg
			out:fade={{ duration: 900 }}
			class:hidden-class={isPlaying}
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			class="bi bi-mouse absolute w-[2rem] left-0 right-0 top-[50%] mx-auto animate-bounce"
			viewBox="0 0 16 16"
		>
			<path
				d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5"
			/>
		</svg>
			<div class:hidden-class={!isPlaying}
								class="bg-red-600 w-full h-full absolute bg-transparent bg-opacity-60 rounded-3xl">
				<img src="/Adfinitas.png" class="absolute bottom-3 right-3 w-20 z-50 " alt="Logo d'Adfinitas">
			</div>
		<video bind:this={video} class="rounded-3xl" poster={posterSrc} loop muted>
			<source src={videoSrc} type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	</a>
</div>

<a href={redirectLink} target="_blank" aria-label="Redirection to the project website" class="flex flex-col items-center justify-center gap-5 md:hidden relative">
	<p class="text-3xl font-bold text-secondary-400-500-token text-center">{videoName}</p>
	<div class="bg-red-600 w-full h-full absolute bg-transparent bg-opacity-60 rounded-3xl">
		<img src="/Adfinitas.png" class="absolute bottom-3 right-3 w-10  z-50 " alt="Logo d'Adfinitas">
	</div>
	<img src={posterSrc} class="rounded-lg" alt="Présentation d'un projet de developpement web" />
</a>

<style>
	.hidden-class {
		display: none;
	}
</style>
