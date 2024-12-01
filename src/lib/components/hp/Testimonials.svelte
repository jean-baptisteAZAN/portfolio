<script>
	import Marquee from '$lib/components/hp/Marquee.svelte';
	import ReviewCard from '$lib/components/hp/ReviewCard.svelte';

	const reviews = [
		{
			name: "Romain Leroy",
			username: "DSI chez Immodirect France",
			body:	"Jean-Baptiste a répondu à nos attentes et respecté les délais avec un travail sérieux et appliqué.",
			img: "/testi1.jpeg",
		},
		{
			name: "Mr MEUNIER",
			username: "Secretaire général - Association DEFENSE ET SAUVEGARDE DU MARCHE AUX FLEURS REINE ELIZABETH II\n",
			body: "Prestataire de qualité, réactif et à l'écoute. Il a été force de proposition et de bon conseil pour notre projet. Je recommande fortement car notre projet a été mené à terme.\"\n.",
			img: "/img_4.png",
		},
		{
			name: "Mr MEUNIER",
			username: "Secretaire général - Association DEFENSE ET SAUVEGARDE DU MARCHE AUX FLEURS REINE ELIZABETH II\n",
			body: "Prestataire de qualité, réactif et à l'écoute. Il a été force de proposition et de bon conseil pour notre projet. Je recommande fortement car notre projet a été mené à terme.\"\n.",
			img: "/img_4.png",
		},
		{
			name: "Mr MEUNIER",
			username: "Secretaire général - Association DEFENSE ET SAUVEGARDE DU MARCHE AUX FLEURS REINE ELIZABETH II\n",
			body: "Prestataire de qualité, réactif et à l'écoute. Il a été force de proposition et de bon conseil pour notre projet. Je recommande fortement car notre projet a été mené à terme.\"\n.",
			img: "/img_4.png",
		},
	];

	let firstRow = reviews.slice(0, reviews.length / 2);
</script>

<div
	class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg  py-20 md:shadow-xl"
>
	<Marquee pauseOnHover class="[--duration:20s]">
		{#each firstRow as item}
			<ReviewCard {...item} />
		{/each}
	</Marquee>
	<div
		class="pointer-events-none absolute inset-y-0 left-0 w-1/3 "
	></div>
</div>
