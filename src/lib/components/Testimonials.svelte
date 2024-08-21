<script>
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import { translations, currentLang } from '$lib/utils/store.js';
	import { Star, StarHalf } from 'lucide-svelte';
	import {redirect} from '@sveltejs/kit';

	let carousel;
	
</script>

<h1 class="h1 text-center p-10">
	Mes avis clients
</h1>
<section class="pb-5 md:pb-20 md:px-20">
	{#if browser}
		<Carousel
			bind:this={carousel}
		>
			<a href="https://immodirectfrance.com/" target="_blank" class="card  flex flex-col md:flex-row p-2 md:gap-5 items-center justify-center relative md:w-40 md:h-[30rem]">
				<div class="hidden md:block w-1/3 bg-cover bg-no-repeat bg-[url('/placeholder-testi1.png')] h-full rounded-l-3xl"/>
				<img src="/testi1.jpeg" alt="Testimonial" class="rounded-full w-60 h-60 object-cover md:left-1/4 md:absolute"/>
				<div class="md:w-2/3 p-10 md:p-20 md:pl-40">
					<h2 class="h2">
						Romain Leroy |
						<span class="h3 text-tertiary-600 font-semibold">
							DSI chez Immodirect France
						</span>
					</h2>
					<div class="flex flex-row ">
						<Star fill="red" strokeWidth={0} />
						<Star fill="red" strokeWidth={0} />
						<Star fill="red" strokeWidth={0} />
						<Star fill="red" strokeWidth={0} />
						<StarHalf fill="red" strokeWidth={0} />
					</div>
					<h3 class="h3 mt-4 md:mt-14">
						"Jean-Baptiste a répondu à nos attentes et respecté les délais avec un travail sérieux et appliqué."
					</h3>
					<button class="mt-10 btn hover:scale-105 hover:variant-filled-surface variant-filled transition-all">
						Voir le projet
					</button>
				</div>
			</a>
			<a href="https://www.marcheauxfleursdeparis.fr/" target="_blank" class="card  flex flex-col md:flex-row p-2 md:gap-5 items-center justify-center relative md:w-40 md:h-[30rem]">
				<div class="hidden md:block w-1/3 bg-cover bg-no-repeat bg-[url('/placeholder-test2.png')] h-full rounded-l-3xl"/>
				<img src="/img_4.png" alt="Testimonial" class="rounded-full w-60 h-60 object-cover md:left-1/4 md:absolute"/>
				<div class="md:w-2/3 p-10 md:p-20 md:pl-40">
					<h2 class="h2">
						Mr MEUNIER |
						<span class="h3 text-tertiary-600 font-semibold">
							Secretaire général - Association DEFENSE ET SAUVEGARDE DU MARCHE AUX FLEURS REINE ELIZABETH II
						</span>
					</h2>
					<div class="flex flex-row ">
						<Star fill="red" strokeWidth={0} />
						<Star fill="red" strokeWidth={0} />
						<Star fill="red" strokeWidth={0} />
						<Star fill="red" strokeWidth={0} />
						<Star fill="red" strokeWidth={0} />
					</div>
					<h3 class="h3 mt-4 md:mt-14">
						"Prestataire de qualité, réactif et à l'écoute. Il a été force de proposition et de bon conseil pour notre projet. Je recommande fortement car notre projet a été mené à terme."
					</h3>
					<button class="mt-10 btn hover:scale-105 hover:variant-filled-surface variant-filled transition-all">
						Voir le projet
					</button>
				</div>
			</a>
		</Carousel>
	{/if}
</section>


<style>
	.left-div {
      background-image: linear-gradient(
              40deg,
              hsl(240deg 100% 20%) 0%,
              hsl(289deg 100% 21%) 25%,
              hsl(315deg 100% 27%) 41%,
              hsl(329deg 100% 36%) 51%,
              hsl(337deg 100% 43%) 59%,
              hsl(357deg 91% 59%) 67%,
              hsl(17deg 100% 59%) 75%,
              hsl(34deg 100% 53%) 83%,
              hsl(45deg 100% 50%) 91%,
              hsl(55deg 100% 50%) 100%
      );
	}
</style>
