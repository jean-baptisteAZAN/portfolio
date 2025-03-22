<script>
	import Marquee from '$lib/components/hp/Marquee.svelte';
	import ReviewCard from '$lib/components/hp/ReviewCard.svelte';
	import { _, isLoading } from 'svelte-i18n';
	import { derived } from 'svelte/store';

	// Use derived store to update testimonials when language changes
	const testimonials = derived(_, ($_) => [
		{
			name: $_('testimonials.person1.name') || 'Romain Leroy',
			username: $_('testimonials.person1.role') || 'CIO at Immodirect France',
			body: $_('testimonials.person1.quote') || 'Jean-Baptiste met our expectations and respected deadlines with serious and diligent work.',
			img: '/testi1.jpeg'
		},
		{
			name: $_('testimonials.person2.name') || 'Mr MEUNIER',
			username: $_('testimonials.person2.role') || 'General Secretary - DEFENSE AND PRESERVATION OF THE QUEEN ELIZABETH II FLOWER MARKET Association',
			body: $_('testimonials.person2.quote') || "Quality service provider, responsive and attentive. He made helpful suggestions and gave good advice for our project. I highly recommend him as our project was completed successfully.",
			img: '/img_4.png'
		},
		{
			name: $_('testimonials.person3.name') || 'Melusine Secq',
			username: $_('testimonials.person3.role') || 'President of BDE F\'estice',
			body: $_('testimonials.person3.quote') || 'Thank you to Jean Baptiste for his highly functional application, for his responsiveness and for listening to all our requests. The collaboration was a real success! I highly recommend him.',
			img: '/espas-estice.png'
		}
	]);

	$: firstRow = $testimonials?.slice(0, $testimonials?.length) || [];
	$: secondRow = [...($testimonials || [])].reverse();
</script>

{#if !$isLoading}
	<div class="relative bg-gradient-to-br py-20">
		<div class="w-full">
			<h2 class="mb-16 text-center text-4xl font-bold">{$_('testimonials.title')}</h2>

			<div class="relative flex flex-col overflow-hidden">
				<Marquee pauseOnHover class="[--duration:30s]">
					{#each firstRow as item}
						<ReviewCard {...item} />
					{/each}
				</Marquee>
				<Marquee reverse pauseOnHover class="[--duration:30s]">
					{#each secondRow as item}
						<ReviewCard {...item} />
					{/each}
				</Marquee>

				<!-- Effets de fondu sur les bords -->
				<div
					class="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-surface-900"
				></div>
				<div
					class="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-surface-900"
				></div>
			</div>
		</div>
	</div>
{:else}
	<div class="flex h-60 w-full items-center justify-center">
		<div class="h-16 w-16 animate-spin rounded-full border-4 border-t-4 border-primary-500 border-t-transparent"></div>
	</div>
{/if}
