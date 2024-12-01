<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { currentLang, translations } from '$lib/utils/store';

	let faceDiv = $state();
	let shadowDiv = $state();

	onMount(() => {
		window.addEventListener('mousemove', moveShadow);
	});

	function moveShadow(event: MouseEvent) {
		const faceRect = faceDiv.getBoundingClientRect();
		const faceCenterX = faceRect.left + faceRect.width / 2;
		const faceCenterY = faceRect.top + faceRect.height / 2;

		let diffX = event.clientX - faceCenterX;
		let diffY = event.clientY - faceCenterY;

		const maxDistance =
			Math.sqrt(Math.pow(faceRect.width, 2) + Math.pow(faceRect.height, 2)) * 0.05;
		const distance = Math.sqrt(diffX * diffX + diffY * diffY);
		if (distance > maxDistance) {
			diffX = (diffX / distance) * maxDistance;
			diffY = (diffY / distance) * maxDistance;
		}

		gsap.to(shadowDiv, {
			x: diffX,
			y: diffY,
			duration: 0.8
		});
	}
</script>

<div
	id="AboutMeMobile"
	class="container-me flex flex-col items-center justify-center gap-8 py-20 md:hidden"
>
	<img
		src="/face.jpg"
		alt="Jean-Baptiste Azan, Développeur web Lille"
		class="h-60 w-60 rounded-full"
	/>
	<h1 class="text-center">
		<span class="text-4xl font-bold">AZAN</span><br />
		<span class="text-4xl font-bold">Jean-Baptiste</span><br />
		<span class="px-10 text-center text-4xl font-bold text-tertiary-600">
			{translations[$currentLang].poste}
		</span>
	</h1>
	<a
		href="#Contact"
		class="group relative mt-[1rem] inline-flex items-center overflow-hidden rounded-full border-2 border-tertiary-600 px-12 py-3 text-lg font-medium text-tertiary-600 hover:bg-gray-50 hover:text-white"
	>
		<span
			class="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-tertiary-600 opacity-100 transition-all group-hover:top-0 group-hover:h-full"
		></span>
		<span
			class="ease absolute right-0 flex h-10 w-10 translate-x-full transform items-center justify-start duration-300 group-hover:translate-x-0"
		>
			<svg
				class="h-5 w-5"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M14 5l7 7m0 0l-7 7m7-7H3"
				/></svg
			>
		</span>
		<span class="relative text-base">{@html translations[$currentLang].btnFirst}</span>
	</a>
</div>

<div id="AboutMeDesktop" class="container-me hidden w-full md:block">
	<div class="relative top-20 h-[20rem] w-[20%] lg:left-60 2xl:left-80 2xl:top-40">
		<div bind:this={faceDiv} class="face"></div>
		<div bind:this={shadowDiv} class="bg-primary-500 shadow"></div>
	</div>
	<div class="relative lg:w-full 2xl:w-[80%]">
		<div class="absolute right-[10%]">
			<h1>
				<span class="text-4xl font-bold">AZAN</span><br />
				<span class="text-4xl font-bold">Jean-Baptiste</span><br />
				<span class="text-4xl font-bold text-tertiary-600">{translations[$currentLang].poste}</span
				><br />
			</h1>
			<a
				href="#Contact"
				class="group relative mt-[1rem] inline-flex items-center overflow-hidden rounded-full border-2 border-tertiary-600 px-12 py-3 text-lg font-medium text-tertiary-600 hover:bg-gray-50 hover:text-white"
			>
				<span
					class="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-tertiary-600 opacity-100 transition-all group-hover:top-0 group-hover:h-full"
				></span>
				<span
					class="ease absolute right-0 flex h-10 w-10 translate-x-full transform items-center justify-start duration-300 group-hover:translate-x-0"
				>
					<svg
						class="h-5 w-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M14 5l7 7m0 0l-7 7m7-7H3"
						/></svg
					>
				</span>
				<span class="relative">{@html translations[$currentLang].btnFirst}</span>
			</a>
		</div>
	</div>
</div>

<style>
	.container-me {
		background-image: radial-gradient(
				at 0% 0%,
				rgba(var(--color-primary-500) / 0.33) 0px,
				transparent 50%
			),
			radial-gradient(at 98% 1%, rgba(var(--color-tertiary-500) / 0.33) 0px, transparent 50%);
	}
	.face {
		width: 100%;
		height: 100%;
		background: url('/face.jpg') no-repeat center center;
		border-radius: 50%;
		background-size: cover;
		position: absolute;
	}
	.shadow {
		width: 105%;
		height: 105%;
		border-radius: 50%;
		position: absolute;
		z-index: -1;
	}
</style>
