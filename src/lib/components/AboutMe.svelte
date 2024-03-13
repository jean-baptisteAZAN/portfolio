<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { currentLang, translations} from '$lib/utils/store';
	
	let faceDiv;
	let shadowDiv;
	let lang = $currentLang;

	onMount(() => {
		window.addEventListener('mousemove', moveShadow);
	});

	function moveShadow(event) {
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

<div id="AboutMeMobile" class="md:hidden flex flex-col items-center justify-center container-me py-20 gap-8">
	<img src="/face.png" alt="Jean-Baptiste Azan" class="w-60 h-60 rounded-full" />
	<h1 class="text-center">
		<span class="text-4xl font-bold">AZAN</span><br />
		<span class="text-4xl font-bold">Jean-Baptiste</span><br />
		<span class="text-4xl font-bold text-tertiary-600">{translations[$currentLang].poste}</span><br/>
	</h1>
	<a href="#Contact">
		<button class="mt-[0.3rem] bg-tertiary-500 text-white px-5 py-2 md:px-7 md:py-3 text-lg md:text-xl font-extrabold rounded-lg hover:scale-105 transition-all">
			{translations[$currentLang].btnFirst}
		</button>
	</a>
</div>

<div id="AboutMeDesktop" class="container-me w-screen hidden md:block">
	<div class="relative w-[20%] h-[20rem] lg:left-60 2xl:left-80 top-20 2xl:top-40">
		<div bind:this={faceDiv} class="face" />
		<div bind:this={shadowDiv} class="shadow bg-primary-500 " />
	</div>
	<div class="lg:w-full 2xl:w-[80%] relative">
		<div class="absolute right-[10%]">
			<h1>
				<span class="text-4xl font-bold">AZAN</span><br />
				<span class="text-4xl font-bold">Jean-Baptiste</span><br />
				<span class="text-4xl font-bold text-tertiary-600">{translations[$currentLang].poste}</span><br/>
			</h1>
			<a href="#Contact">
				<button class="mt-[1rem] bg-tertiary-500 text-white px-7 py-3 text-xl font-extrabold rounded-lg hover:scale-105 transition-all">
					{translations[$currentLang].btnFirst}
				</button>
			</a>
		</div>
	</div>
</div>

<style>
	.container-me {
			background-image: radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / .33) 0px, transparent 50%),
			radial-gradient(at 98% 1%, rgba(var(--color-tertiary-500) / .33) 0px, transparent 50%);
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
