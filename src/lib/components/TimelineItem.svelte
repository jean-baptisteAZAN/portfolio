<script lang="ts">

	import { getDrawerStore, type DrawerSettings } from '@skeletonlabs/skeleton';
	interface Props {
		title: string;
		date: string;
		role: string;
		position?: 'left' | 'right';
		drawerId: string;
		icon: string;
	}

	let {
		title,
		date,
		role,
		position = 'left',
		drawerId,
		icon
	}: Props = $props();
	const drawerStore = getDrawerStore();

	function openDrawer(): void {
		const drawerSettings: DrawerSettings = {
			id: drawerId,
			position: position === 'left' ? 'right' : 'left'
		};
		drawerStore.open(drawerSettings);
	}
</script>

<div class="mt-6 sm:mt-0 sm:mb-12">
	<div class="flex flex-col sm:flex-row items-center">
		<div class="flex justify-{position === 'left' ? 'start' : 'end'} w-full mx-auto items-center">
			<div class="w-full sm:w-1/2 {position === 'left' ? 'sm:pr-8 lg:pl-[10rem] 2xl:pl-[30rem]' : 'sm:pl-8 lg:pr-[10rem] 2xl:pr-[30rem]'}">
				<div class="p-4 bg-surface-200 rounded shadow">
					<p class="font-bold text-3xl font-monserrat text-center md:text-left">
						{title}
					</p>
					<p class="text-center md:text-left">
						{date}
					</p>
					<p class="text-center md:text-left">
						{role}
					</p>
					<div class="flex items-center justify-center md:justify-start">
						<button
							onclick={openDrawer}
							class="mt-4 btn hover:scale-105 hover:variant-filled-surface variant-filled transition-all"
						>
							Learn More
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="rounded-full bg-surface-300 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
			{@html icon}
		</div>
	</div>
</div>