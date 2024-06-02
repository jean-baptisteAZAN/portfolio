<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { currentLang, translations } from '$lib/utils/store';

	let faceDiv: HTMLDivElement;
	let shadowDiv: HTMLDivElement;

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
	class="md:hidden flex flex-col items-center justify-center container-me py-20 gap-8"
>
	<img
		src="/face.png"
		alt="Jean-Baptiste Azan, Développeur web Lille"
		class="w-60 h-60 rounded-full"
	/>
	<h1 class="text-center">
		<span class="text-4xl font-bold">AZAN</span><br />
		<span class="text-4xl font-bold">Jean-Baptiste</span><br />
		<span class="text-4xl font-bold text-tertiary-600">{translations[$currentLang].poste}</span><br
		/>
	</h1>
	<a
		href="#Contact"
		class="mt-[1rem] relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-primary-400 border-2 border-primary-400 rounded-full hover:text-white group hover:bg-gray-50"
	>
		<span
			class="absolute left-0 block w-full h-0 transition-all bg-tertiary-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"
		/>
		<span
			class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease"
		>
			<svg
				class="w-5 h-5"
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

<div id="AboutMeDesktop" class="container-me w-full hidden md:block">
	<div class="relative w-[20%] h-[20rem] lg:left-60 2xl:left-80 top-20 2xl:top-40">
		<div bind:this={faceDiv} class="face" />
		<div bind:this={shadowDiv} class="shadow bg-primary-500" />
	</div>
	<div class="lg:w-full 2xl:w-[80%] relative">
		<div class="absolute right-[10%]">
			<h1>
				<span class="text-4xl font-bold">AZAN</span><br />
				<span class="text-4xl font-bold">Jean-Baptiste</span><br />
				<span class="text-4xl font-bold text-tertiary-600">{translations[$currentLang].poste}</span
				><br />
			</h1>
			<a
				href="#Contact"
				class="mt-[1rem] relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-tertiary-600 border-2 border-tertiary-600 rounded-full hover:text-white group hover:bg-gray-50"
			>
				<span
					class="absolute left-0 block w-full h-0 transition-all bg-tertiary-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"
				/>
				<span
					class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease"
				>
					<svg
						class="w-5 h-5"
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
		background: url('/face.png') no-repeat center center;
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
