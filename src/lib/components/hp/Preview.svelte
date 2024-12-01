<script lang="ts">
	import Icon from '@iconify/svelte';
	interface Props {
		website: string;
		gradientFrom: string;
		gradientTo: string;
		color: string;
		icon: string;
	}

	let {
		website,
		gradientFrom,
		gradientTo,
		color,
		icon
	}: Props = $props();

	let iframeLoaded = $state(false);
	let iframeError = $state(false);

	function handleIframeLoad() {
		iframeLoaded = true;
	}

	function handleIframeError() {
		iframeError = true;
	}
</script>

<div class="mb-20  relative rounded-xl">
	<div
		class="w-full h-[80vh] md:aspect-video rounded-xl overflow-hidden p-1 shadow-lg"
		style="background: linear-gradient(135deg, {gradientFrom}, {gradientTo})"
	>
		<div class="w-full h-full bg-surface-900 rounded-none overflow-hidden relative">
			<!-- Loading State -->
			{#if !iframeLoaded && !iframeError}
				<div class="absolute inset-0 flex items-center justify-center bg-surface-900">
					<div class="text-6xl animate-pulse" style="color: {color}">
						<Icon icon={icon} />
					</div>
				</div>
			{/if}

			<!-- Iframe -->
			{#if !iframeError}
				<iframe
					src={website}
					title="Site Preview"
					class="w-full h-full border-0 transition-opacity duration-500"
					style="opacity: {iframeLoaded ? '1' : '0'}"
					onload={handleIframeLoad}
					onerror={handleIframeError}
				></iframe>
			{/if}

			<!-- Error State -->
			{#if iframeError}
				<div class="absolute inset-0 flex flex-col items-center justify-center gap-4">
					<p class="text-surface-500 text-xl font-monserrat">
						Prévisualisation non disponible
					</p>
					<a
						href={website}
						target="_blank"
						rel="noopener noreferrer"
						class="btn variant-filled hover:scale-105 transition-transform"
						style="background: linear-gradient(135deg, {gradientFrom}, {gradientTo})"
					>
						Visiter le site →
					</a>
				</div>
			{/if}

			<!-- Browser-like top bar -->
			<div class="absolute -top-1 left-0 right-0 h-8 rounded-lg bg-surface-800/80 backdrop-blur-sm flex items-center px-4 gap-2">
				<div class="flex gap-2">
					<div class="w-3 h-3 rounded-full bg-red-500"></div>
					<div class="w-3 h-3 rounded-full bg-yellow-500"></div>
					<div class="w-3 h-3 rounded-full bg-green-500"></div>
				</div>
				<div class="flex-1 ml-4">
					<div class="bg-surface-700/50 rounded-full px-4 py-1 text-xs truncate max-w-md mx-auto">
						{website}
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Decorative elements -->
	<div class="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-20 blur-xl"
			 style="background: linear-gradient(135deg, {gradientFrom}, {gradientTo})"></div>
	<div class="absolute -top-6 -left-6 w-24 h-24 rounded-full opacity-20 blur-xl"
			 style="background: linear-gradient(135deg, {gradientTo}, {gradientFrom})"></div>
</div>
