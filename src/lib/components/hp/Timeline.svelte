<script lang="ts">
	import { _, isLoading } from 'svelte-i18n';
	import Icon from '@iconify/svelte';
	import { derived } from 'svelte/store';

	const timelineItems = derived(_, ($_) => [
		{
			id: '9',
			position: 'start',
			title: 'CareCall',
			date: '2024',
			role: 'Backend Developer',
			icon: 'mdi:phone-in-talk'
		},
		{
			id: '8',
			position: 'end',
			title: 'Archimeuble',
			date: '2023',
			role: 'AI Chatbot Developer',
			icon: 'mdi:sofa'
		},
		{
			id: '7',
			position: 'start',
			title: $_('timeline7'),
			date: $_('timeline7Date'),
			role: $_('timeline7Role'),
			icon: 'carbon:collaborate'
		},
		{
			id: '6',
			position: 'start',
			title: $_('timeline6'),
			date: $_('timeline6Date'),
			role: $_('timeline6Role'),
			icon: 'fluent:food-16-filled'
		},
		{
			id: '5',
			position: 'start',
			title: $_('timeline5'),
			date: $_('timeline5Date'),
			role: $_('timeline5Role'),
			icon: 'circum:mobile-1'
		},
		{
			id: '4',
			position: 'end',
			title: $_('timeline4'),
			date: $_('timeline4Date'),
			role: $_('timeline4Role'),
			icon: 'bi:houses-fill'
		},
		{
			id: '3',
			position: 'start',
			title: $_('timeline3'),
			date: $_('timeline3Date'),
			role: $_('timeline3Role'),
			icon: 'ph:dress-fill'
		},
		{
			id: '2',
			position: 'end',
			title: $_('timeline2'),
			date: $_('timeline2Date'),
			role: $_('timeline2Role'),
			icon: 'bi:person-arms-up'
		},
		{
			id: '1',
			position: 'start',
			title: $_('timeline1'),
			date: $_('timeline1Date'),
			role: $_('timeline1Role'),
			icon: 'bi:flower3'
		}
	]);
</script>

{#if !$isLoading}
	<div class="mb-20">
		<h3 class="py-10 text-center font-monserrat text-4xl font-bold">
			{@html $_('journey')}
		</h3>

		<div class="scrollbar-hide overflow-auto px-4">
			<div class="flex min-w-max space-x-6 px-4 py-8 md:space-x-10">
				{#each $timelineItems as item}
					<a
						href="/usecase/{item.id}"
						rel="external"
						class="group relative w-[300px] flex-shrink-0 overflow-hidden rounded-xl border-[1px] border-primary-500 p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-surface-300/50 md:w-[400px]"
					>
						<div
							class="absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
						></div>
						<div class="relative z-10">
							<div class="mb-4 flex items-center gap-4">
								<div
									class="flex h-12 w-12 items-center justify-center rounded-full bg-surface-300/50 transition-transform duration-300 group-hover:scale-110"
								>
									<Icon icon={item.icon} class="h-6 w-6" />
								</div>
								<span class="text-sm font-medium opacity-75">{@html item.date}</span>
							</div>
							<h4 class="mb-2 font-monserrat text-xl font-bold">
								{@html item.title}
							</h4>
							<p class="mb-4 text-surface-600 dark:text-surface-300">
								{@html item.role}
							</p>
							<div
								class="btn inline-flex items-center rounded-lg font-medium text-primary-500 transition-transform duration-300 preset-filled-primary-500 group-hover:translate-x-2"
							>
								{$_('learnMoreButton')}
								<Icon icon="lucide:arrow-right" class="ml-2 h-4 w-4" />
							</div>
						</div>
					</a>
				{/each}
			</div>
		</div>
		<div
			class="mt-6 flex items-center justify-center gap-2 text-center text-sm text-surface-600 dark:text-surface-300"
		>
			<Icon icon="lucide:mouse" class="h-4 w-4" />
		</div>
	</div>
{/if}

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
