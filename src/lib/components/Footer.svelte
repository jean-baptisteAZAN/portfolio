<script>
	import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from 'flowbite-svelte';
</script>

<Footer>
	<FooterCopyright by="Jean-Baptiste™" year={2024} />
	<FooterLinkGroup
		ulClass="flex flex-row justify-center items-center mt-3 text-sm text-gray-500 dark:text-gray-400 mb-5"
	>
		<FooterLink href="https://www.privacypolicies.com/live/b12de624-c789-492d-8f9b-6bad2c8409aa"
			>Politique de confidentialité</FooterLink
		>
		<FooterLink href="/#Contact">Contact</FooterLink>
	</FooterLinkGroup>
</Footer>
