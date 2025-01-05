<script lang="ts">
	import Icon from '@iconify/svelte';
	let { icon, text } = $props();
</script>

<div class="relative h-full md:p-8">
	<div
		class="group relative h-full w-full rounded-xl  md:border-surface-300/20
     p-8 transition-all duration-500
     border-2
    ease-out hover:-translate-y-2 hover:border-primary-400
    hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)]"
	>
		<div class="relative mb-6">
			<Icon
				icon={icon}
				class="w-16 h-16 text-primary-400 md:text-surface-300/20 md:group-hover:text-primary-400 transition-all duration-500"
			/>
			<div
				class="absolute -bottom-2 left-0 h-1 w-8 rounded-full
        bg-surface-300/30 transition-all
        duration-500 group-hover:w-16 group-hover:bg-primary-400"
			></div>
		</div>

		<p class="font-monserrat text-lg leading-relaxed text-primary-400 md:text-surface-300/20 transition-all md:group-hover:text-primary-400">
			{text}
		</p>
	</div>
</div>

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	div {
		animation: fadeIn 0.5s ease-out forwards;
	}
</style>
