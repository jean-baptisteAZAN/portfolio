<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { _, isLoading } from 'svelte-i18n';

	let faceDiv: HTMLElement | undefined = $state();
	let shadowDiv: HTMLElement | undefined = $state();
	let titleRef: HTMLElement | undefined = $state();
	let subtitleRef: HTMLElement | undefined = $state();
	let ctaButtonRef: HTMLElement | undefined = $state();
	let isLoaded = $state(false);

	onMount(() => {
		window.addEventListener('mousemove', moveShadow);
		
		// Animation sequence for title elements
		const tl = gsap.timeline({ delay: 0.3 });
		
		if (titleRef && subtitleRef && ctaButtonRef) {
			// Split text animation for title
			const titleText = titleRef.innerHTML || '';
			titleRef.innerHTML = '';
			
			titleText.split('<br>').forEach((line, index) => {
				const lineDiv = document.createElement('div');
				lineDiv.style.overflow = 'hidden';
				
				const textSpan = document.createElement('span');
				textSpan.innerHTML = line;
				textSpan.style.display = 'inline-block';
				
				lineDiv.appendChild(textSpan);
				if (titleRef) {
					titleRef.appendChild(lineDiv);
				}
				
				tl.from(textSpan, {
					y: 100,
					opacity: 0,
					duration: 0.7,
					ease: "power3.out"
				}, index * 0.1);
			});
			
			// Animate subtitle from bottom
			tl.from(subtitleRef, {
				y: 30,
				opacity: 0,
				duration: 0.6,
				ease: "power2.out"
			}, "-=0.3");
			
			// Button animation
			tl.from(ctaButtonRef, {
				scale: 0.8,
				opacity: 0,
				duration: 0.5,
				ease: "back.out(1.7)"
			}, "-=0.2");
		}
		
		isLoaded = true;
	});

	function moveShadow(event: MouseEvent) {
		if (!faceDiv) return;

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

		if (shadowDiv) {
			gsap.to(shadowDiv, {
				x: diffX,
				y: diffY,
				duration: 0.8
			});
		}
	}
</script>

{#if !$isLoading}
	<div
		id="AboutMeMobile"
		class="container-me flex flex-col items-center justify-center gap-8 py-20 md:hidden"
	>
		<div class="relative">
			<img
				src="/face.jpg"
				alt="Jean-Baptiste Azan, Développeur web Lille"
				class="h-60 w-60 rounded-full animated-border"
			/>
			<div class="gradient-blob"></div>
		</div>
		
		<h1 bind:this={titleRef} class="text-center">
			<span class="text-4xl font-bold">AZAN</span><br />
			<span class="text-4xl font-bold">Jean-Baptiste</span><br />
			<span bind:this={subtitleRef} class="px-10 text-center text-3xl font-bold text-tertiary-600">
				{$_('poste')}
			</span>
		</h1>
		<a
			bind:this={ctaButtonRef}
			href="#Contact"
			class="group relative inline-flex items-center overflow-hidden rounded-full border-2 border-tertiary-600 px-12 py-3 text-lg font-medium text-tertiary-600 hover:bg-gray-50 hover:text-white md:mt-[1rem]"
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
			<span class="relative text-base">{@html $_('btnFirst')}</span>
		</a>
	</div>

	<div id="AboutMeDesktop" class="container-me hidden md:block">
		<div class="mx-auto flex max-w-7xl flex-row items-center justify-between gap-8 py-28 px-4 lg:px-8">
			<!-- Left side with face image -->
			<div class="relative h-[20rem] w-[20rem]">
				<div bind:this={faceDiv} class="face"></div>
				<div bind:this={shadowDiv} class="bg-primary-500 shadow"></div>
				<div class="gradient-blob"></div>
			</div>
			
			<!-- Right side with text content -->
			<div class="flex flex-col items-start">
				<h1 bind:this={titleRef} class="mb-6">
					<span class="text-5xl font-bold">AZAN</span><br />
					<span class="text-5xl font-bold">Jean-Baptiste</span><br />
					<span bind:this={subtitleRef} class="text-4xl font-bold text-tertiary-600">{$_('poste')}</span>
				</h1>
				<a
					bind:this={ctaButtonRef}
					href="#Contact"
					class="group relative inline-flex items-center overflow-hidden rounded-full border-2 border-tertiary-600 px-12 py-3 text-lg font-medium text-tertiary-600 hover:bg-gray-50 hover:text-white"
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
					<span class="relative">{@html $_('btnFirst')}</span>
				</a>
			</div>
		</div>
	</div>
{/if}

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
		z-index: 2;
	}
	.shadow {
		width: 105%;
		height: 105%;
		border-radius: 50%;
		position: absolute;
		z-index: 1;
	}
	
	.gradient-blob {
		position: absolute;
		width: 250px;
		height: 250px;
		background: linear-gradient(135deg, rgba(var(--color-primary-500), 0.6), rgba(var(--color-tertiary-500), 0.6));
		border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
		filter: blur(30px);
		opacity: 0.5;
		z-index: 0;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		animation: blob-movement 8s infinite alternate ease-in-out;
	}
	
	.animated-border {
		position: relative;
		z-index: 2;
		border: 3px solid transparent;
		background-clip: padding-box;
		animation: border-pulse 4s infinite;
	}
	
	@keyframes border-pulse {
		0%, 100% {
			box-shadow: 0 0 15px rgba(var(--color-primary-500), 0.5);
		}
		50% {
			box-shadow: 0 0 25px rgba(var(--color-tertiary-500), 0.7);
		}
	}
	
	@keyframes blob-movement {
		0% {
			border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
		}
		25% {
			border-radius: 70% 30% 50% 50% / 30% 60% 40% 70%;
		}
		50% {
			border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
		}
		75% {
			border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
		}
		100% {
			border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
		}
	}
</style>
