<script lang="ts">
	import { currentLang, translations } from '$lib/utils/store.js';
	import Icon from '@iconify/svelte';

	const timelineItems = [
		{
			id: "6",
			position: "start",
			title: translations[$currentLang].timeline6,
			date: translations[$currentLang].timeline6Date,
			role: translations[$currentLang].timeline6Role,
			icon: "fluent:food-16-filled"
		},
		{
			id: "5",
			position: "start",
			title: translations[$currentLang].timeline5,
			date: translations[$currentLang].timeline5Date,
			role: translations[$currentLang].timeline5Role,
			icon: "circum:mobile-1"
		},
		{
			id: "4",
			position: "end",
			title: translations[$currentLang].timeline4,
			date: translations[$currentLang].timeline4Date,
			role: translations[$currentLang].timeline4Role,
			icon: "bi:houses-fill"
		},
		{
			id: "3",
			position: "start",
			title: translations[$currentLang].timeline3,
			date: translations[$currentLang].timeline3Date,
			role: translations[$currentLang].timeline3Role,
			icon: "bi:diamond-half"
		},
		{
			id: "2",
			position: "end",
			title: translations[$currentLang].timeline2,
			date: translations[$currentLang].timeline2Date,
			role: translations[$currentLang].timeline2Role,
			icon: "bi:person-arms-up"
		},
		{
			id: "1",
			position: "start",
			title: translations[$currentLang].timeline1,
			date: translations[$currentLang].timeline1Date,
			role: translations[$currentLang].timeline1Role,
			icon: "bi:flower3"
		}
	];
</script>

<div class="mb-20">
	<h3 class="text-4xl py-10 text-center font-monserrat font-bold">
		{@html translations[$currentLang].journey}
	</h3>

	<div class="scrollbar-hide overflow-auto px-4">
		<div class="flex space-x-6 md:space-x-10 py-8 min-w-max px-4">
			{#each timelineItems as item}
				<a
					href="/usecase/{item.id}"
					rel="external"
					class="border-[1px] border-primary-500 group flex-shrink-0 w-[300px] md:w-[400px] hover:bg-surface-300/50 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
				>
					<div class="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br from-primary-900 to-primary-500"></div>
					<div class="relative z-10">
						<!-- Icon and Date -->
						<div class="flex items-center gap-4 mb-4">
							<div class="w-12 h-12 rounded-full bg-surface-300/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
								<Icon icon={item.icon} class="w-6 h-6" />
							</div>
							<span class="text-sm font-medium opacity-75">{@html item.date}</span>
						</div>
						<h4 class="text-xl font-bold font-monserrat mb-2">
							{@html item.title}
						</h4>
						<p class="text-surface-600 dark:text-surface-300 mb-4">
							{@html item.role}
						</p>
						<div class="inline-flex items-center preset-filled-primary-500 text-primary-500 font-medium btn rounded-lg group-hover:translate-x-2 transition-transform duration-300">
							{translations[$currentLang].learnMoreButton}
							<Icon icon="lucide:arrow-right" class="ml-2 w-4 h-4" />
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
	<div class="mt-6 text-center text-sm text-surface-600 dark:text-surface-300 flex items-center justify-center gap-2">
		<Icon icon="lucide:mouse" class="w-4 h-4" />
	</div>
</div>

<style>
    /* Hide scrollbar */
    .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .scrollbar-hide::-webkit-scrollbar {
        display: none;
    }
</style>
