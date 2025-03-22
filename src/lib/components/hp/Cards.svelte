<script lang="ts">
	import Card from '$lib/components/hp/Card.svelte';
	import Marquee from '$lib/components/hp/Marquee.svelte';
	import Icon from '@iconify/svelte';
	import { _, isLoading } from 'svelte-i18n';

	const logos = [
		{
			id: 'svelte',
			icon: 'logos:svelte-icon',
			color: '#FF3E00'
		},
		{
			id: 'tailwind',
			icon: 'logos:tailwindcss-icon',
			color: '#38BDF8'
		},
		{
			id: 'nextJS',
			icon: 'logos:nextjs',
			color: '#000000'
		},
		{
			id: 'NuxtJS',
			icon: 'logos:nuxt-icon',
			color: '#00C58E'
		},
		{
			id: 'Bun',
			icon: 'devicon:bun',
			color: '#000000'
		},
		{
			id: 'nestjs',
			icon: 'logos:nestjs',
			color: '#E0234E'
		},
		{
			id: 'firebase',
			icon: 'logos:firebase',
			color: '#FFCA28'
		},
		{
			id: 'postgresql',
			icon: 'logos:postgresql',
			color: '#336791'
		},
		{
			id: 'Kubernetes',
			icon: 'logos:kubernetes',
			color: '#326CE5'
		},
		{
			id: 'docker',
			icon: 'logos:docker-icon',
			color: '#2496ED'
		},
		{
			id: 'gcp',
			icon: 'logos:google-cloud',
			color: '#4285F4'
		},
		{
			id: 'digitalOcean',
			icon: 'logos:digital-ocean',
			color: '#0080FF'
		},
		{
			id: 'aws',
			icon: 'logos:aws',
			color: '#FF9900'
		}
	];
	let hoveredId: string | null = $state(null);
</script>

{#if !$isLoading}
	<div class="flex flex-col items-center justify-center gap-3 px-3 md:mt-[20rem] lg:flex-row">
		<div class="card-item">
			<Card icon="iconamoon:star-fill" text={$_('card1')} />
		</div>
		<div class="card-item">
			<Card icon="mdi:tools" text={$_('card2')} />
		</div>
		<div class="card-item">
			<Card icon="mdi:people" text={$_('card3')} />
		</div>
	</div>

	<div class="marquee-container relative hidden h-40 py-40 md:block">
		<Marquee class="[--duration:20s]">
			{#each logos as logo}
				<div
					class="mx-8 w-16 transition-all duration-500"
					class:grayscale={hoveredId !== logo.id}
					onmouseenter={() => (hoveredId = logo.id)}
					onmouseleave={() => (hoveredId = null)}
				>
					<Icon icon={logo.icon} width="100%" height="100%" />
				</div>
			{/each}
		</Marquee>

		<div
			class="from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r"
		></div>
		<div
			class="from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l"
		></div>
	</div>
{/if}

<style>
	.marquee-container {
		background-image: radial-gradient(
				at 0% 100%,
				rgba(var(--color-primary-500) / 0.33) 0px,
				transparent 50%
			),
			radial-gradient(at 100% 100%, rgba(var(--color-tertiary-50) / 0.33) 0px, transparent 50%);
	}

	.grayscale {
		filter: grayscale(100%);
	}
</style>
