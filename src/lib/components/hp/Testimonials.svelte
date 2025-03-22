<script lang="ts">
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
</script>

{#if !$isLoading}
	<section class="py-16 bg-surface-100-800-token">
		<div class="container mx-auto px-4">
			<h2 class="h3 text-center mb-10">{$_('testimonials.title')}</h2>
			
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				{#each $testimonials as testimonial}
					<!-- Skeleton Card -->
					<div class="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 card-hover overflow-hidden">
						<!-- Card Header -->
						<header class="p-4 flex items-center space-x-4 border-b border-surface-200-800">
							<div class="avatar">
								<img src={testimonial.img} alt={testimonial.name} class="h-12 w-12 rounded-full" />
							</div>
							<div>
								<h3 class="font-bold">{testimonial.name}</h3>
								<p class="text-sm opacity-60">{testimonial.username}</p>
							</div>
						</header>
						
						<!-- Card Content -->
						<article class="p-4">
							<p class="italic">{testimonial.body}</p>
						</article>
					</div>
				{/each}
			</div>
		</div>
	</section>
{:else}
	<div class="flex h-60 w-full items-center justify-center">
		<div class="h-16 w-16 animate-spin rounded-full border-4 border-t-4 border-primary-500 border-t-transparent"></div>
	</div>
{/if}
