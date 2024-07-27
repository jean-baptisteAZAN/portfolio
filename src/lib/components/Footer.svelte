<script>
	import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from 'flowbite-svelte';
</script>

<Footer>
	<FooterCopyright by="Jean-Baptiste™" year={2024} classSpan="text-gray-200" />
	<FooterLinkGroup
		ulClass="flex flex-row justify-center items-center mt-3 text-sm text-gray-200 dark:text-gray-400 mb-5"
	>
		<FooterLink target="_blank" aria-label="Politique de confidentialité" href="https://www.privacypolicies.com/live/b12de624-c789-492d-8f9b-6bad2c8409aa"
			>Politique de confidentialité</FooterLink
		>
	</FooterLinkGroup>
</Footer>
