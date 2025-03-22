<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { gsap } from 'gsap';
	import { fade } from 'svelte/transition';

	interface Props {
		videoName: string;
		posterSrc: string;
		videoSrc: string;
		Side?: string;
		redirectLink?: string;
		isAdfi?: boolean;
	}

	let {
		videoName,
		posterSrc,
		videoSrc,
		Side = '',
		redirectLink = '',
		isAdfi = false
	}: Props = $props();
	let video = $state(),
		titleContainer = $state(),
		videoContainer = $state();
	let classes = '';

	let titleAnimationDone = false;
	let isPlaying = $state(false);

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

	let titleClass = $derived(Side === 'left' ? 'left-0 ml-[30%]' : 'right-0');
</script>

<div class="hidden items-center justify-center overflow-hidden md:flex">
	<div bind:this={titleContainer} class={twMerge(`absolute w-1/2 opacity-0`, titleClass)}>
		<p class="text-secondary-400-500-token text-3xl font-bold">
			{@html videoName}
		</p>
	</div>
	<a
		href={redirectLink}
		target="_blank"
		aria-label="Redirection to the project website"
		bind:this={videoContainer}
		class={twMerge('relative w-1/2', classes)}
		onmouseenter={playVideo}
		onmouseleave={pauseAndResetVideo}
	>
		<div
			out:fade={{ duration: 900 }}
			class:hidden-class={isPlaying}
			class="absolute h-full w-full rounded-3xl backdrop-blur-md"
		></div>
		<svg
			out:fade={{ duration: 900 }}
			class:hidden-class={isPlaying}
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			class="bi bi-mouse absolute left-0 right-0 top-[50%] mx-auto w-[2rem] animate-bounce"
			viewBox="0 0 16 16"
		>
			<path
				d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5"
			/>
		</svg>
		{#if isAdfi}
			<div
				class:hidden-class={!isPlaying}
				class="absolute h-full w-full rounded-3xl bg-red-600 bg-transparent bg-opacity-60"
			>
				<img
					src="/Adfinitas.png"
					class="absolute bottom-3 right-3 z-50 w-20"
					alt="Logo d'Adfinitas"
				/>
			</div>
		{/if}
		<video bind:this={video} class="rounded-3xl" poster={posterSrc} loop muted>
			<source src={videoSrc} type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	</a>
</div>

<a
	href={redirectLink}
	target="_blank"
	aria-label="Redirection to the project website"
	class="relative flex flex-col items-center justify-center gap-5 md:hidden"
>
	<p class="text-secondary-400-500-token text-center text-3xl font-bold">{@html videoName}</p>
	{#if isAdfi}
		<div class="absolute h-full w-full rounded-3xl bg-red-600 bg-transparent bg-opacity-60">
			<img
				src="/Adfinitas.png"
				class="absolute bottom-3 right-3 z-50 w-10"
				alt="Logo d'Adfinitas"
			/>
		</div>
	{/if}
	<img src={posterSrc} class="rounded-lg" alt="Présentation d'un projet de developpement web" />
</a>

<style>
	.hidden-class {
		display: none;
	}
</style>
