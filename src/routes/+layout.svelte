<script lang="ts">
	import '../app.css';
	import '$lib/i18n'; // Initialize i18n
	import { isLoading } from 'svelte-i18n';
	let { children } = $props();
</script>

{#if !$isLoading}
	{@render children()}
{:else}
	<div class="flex h-screen w-screen items-center justify-center">
		<div class="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-primary-500"></div>
	</div>
{/if}
