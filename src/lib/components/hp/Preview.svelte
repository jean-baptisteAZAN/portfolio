<script lang="ts">
	import Icon from '@iconify/svelte';
	interface Props {
		website: string;
		gradientFrom: string;
		gradientTo: string;
		color: string;
		icon: string;
	}

	let { website, gradientFrom, gradientTo, color, icon }: Props = $props();

	let iframeLoaded = $state(false);
	let iframeError = $state(false);

	function handleIframeLoad() {
		iframeLoaded = true;
	}

	function handleIframeError() {
		iframeError = true;
	}
</script>

<div class="relative mb-20 rounded-xl">
	<div
		class="h-[80vh] w-full overflow-hidden rounded-xl p-1 shadow-lg md:aspect-video"
		style="background: linear-gradient(135deg, {gradientFrom}, {gradientTo})"
	>
		<div class="relative h-full w-full overflow-hidden rounded-none bg-surface-900">
			<!-- Loading State -->
			{#if !iframeLoaded && !iframeError}
				<div class="absolute inset-0 flex items-center justify-center bg-surface-900">
					<div class="animate-pulse text-6xl" style="color: {color}">
						<Icon {icon} />
					</div>
				</div>
			{/if}

			<!-- Iframe -->
			{#if !iframeError}
				<iframe
					src={website}
					title="Site Preview"
					class="h-full w-full border-0 transition-opacity duration-500"
					style="opacity: {iframeLoaded ? '1' : '0'}"
					onload={handleIframeLoad}
					onerror={handleIframeError}
				></iframe>
			{/if}

			<!-- Error State -->
			{#if iframeError}
				<div class="absolute inset-0 flex flex-col items-center justify-center gap-4">
					<p class="font-monserrat text-xl text-surface-500">Prévisualisation non disponible</p>
					<a
						href={website}
						target="_blank"
						rel="noopener noreferrer"
						class="variant-filled btn transition-transform hover:scale-105"
						style="background: linear-gradient(135deg, {gradientFrom}, {gradientTo})"
					>
						Visiter le site →
					</a>
				</div>
			{/if}

			<!-- Browser-like top bar -->
			<div
				class="absolute -top-1 left-0 right-0 flex h-8 items-center gap-2 rounded-lg bg-surface-800/80 px-4 backdrop-blur-sm"
			>
				<div class="flex gap-2">
					<div class="h-3 w-3 rounded-full bg-red-500"></div>
					<div class="h-3 w-3 rounded-full bg-yellow-500"></div>
					<div class="h-3 w-3 rounded-full bg-green-500"></div>
				</div>
				<div class="ml-4 flex-1">
					<div class="mx-auto max-w-md truncate rounded-full bg-surface-700/50 px-4 py-1 text-xs">
						{website}
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Decorative elements -->
	<div
		class="absolute -bottom-6 -right-6 h-24 w-24 rounded-full opacity-20 blur-xl"
		style="background: linear-gradient(135deg, {gradientFrom}, {gradientTo})"
	></div>
	<div
		class="absolute -left-6 -top-6 h-24 w-24 rounded-full opacity-20 blur-xl"
		style="background: linear-gradient(135deg, {gradientTo}, {gradientFrom})"
	></div>
</div>
