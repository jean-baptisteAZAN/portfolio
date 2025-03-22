<script>
	import Marquee from '$lib/components/hp/Marquee.svelte';
	import ReviewCard from '$lib/components/hp/ReviewCard.svelte';

	let testimonials = $state([
		{
			name: 'Romain Leroy',
			username: 'DSI chez Immodirect France',
			body: 'Jean-Baptiste a répondu à nos attentes et respecté les délais avec un travail sérieux et appliqué.',
			img: '/testi1.jpeg'
		},
		{
			name: 'Mr MEUNIER',
			username:
				'Secretaire général - Association DEFENSE ET SAUVEGARDE DU MARCHE AUX FLEURS REINE ELIZABETH II',
			body: "Prestataire de qualité, réactif et à l'écoute. Il a été force de proposition et de bon conseil pour notre projet. Je recommande fortement car notre projet a été mené à terme.",
			img: '/img_4.png'
		},
		{
			name: 'Melusine Secq',
			username: 'Présidente BDE F’estice',
			body: 'Merci à Jean Baptiste pour son application hyper fonctionnelle, pour sa réactivité et pour son écoute à toutes nos demandes. La collaboration est une vraie réussite ! Je vous le recommande vivement.',
			img: '/espas-estice.png'
		}
	]);
	let firstRow = $derived(testimonials.slice(0, testimonials.length));
	let secondRow = $derived([...testimonials].reverse());
</script>

<div class="relative bg-gradient-to-br py-20">
	<div class="w-full">
		<h2 class="mb-16 text-center text-4xl font-bold">Ce qu'ils pensent de notre collaboration</h2>

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
