<script lang="ts">
	import SimpleNav from '$lib/components/SimpleNav.svelte';
	import Icon from '@iconify/svelte';
	import { _, isLoading } from 'svelte-i18n';
	import { page } from '$app/stores';
	import { derived, get } from 'svelte/store';
	import { type TechStack } from '$lib/utils/types';
	import { onMount } from 'svelte';

	// Define the UseCase type with all needed properties
	interface UseCase {
		title: string;
		date: string;
		role: string;
		description: string;
		website?: string;
		color: string;
		gradientFrom: string;
		gradientTo: string;
		icon: string;
		isAvailable: boolean;
		techStack: TechStack[];
	}

	// Define valid IDs
	type ValidID = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

	// Store the current ID from URL
	const id = $page.params.id as ValidID;

	// Create a derived store for all use cases with their details
	const useCases = derived([_, page], ([$_, $page]): Record<ValidID, UseCase> => ({
		'1': {
			title: $_('timeline1'),
			date: $_('timeline1Date'),
			role: $_('timeline1Role'),
			description: $_('projectDescriptions.timeline1Desc'),
			website: 'https://www.marcheauxfleursdeparis.fr/',
			color: 'primary',
			gradientFrom: 'primary',
			gradientTo: 'tertiary',
			icon: 'bi:flower3',
			isAvailable: false,
			techStack: [
				{ name: 'SvelteKit', icon: 'devicon:svelte' },
				{ name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' }
			]
		},
		'2': {
			title: $_('timeline2'),
			date: $_('timeline2Date'),
			role: $_('timeline2Role'),
			description: $_('projectDescriptions.timeline2Desc'),
			website: 'https://www.adfinitas.fr',
			color: 'secondary',
			gradientFrom: 'secondary',
			gradientTo: 'tertiary',
			isAvailable: true,
			icon: 'bi:person-arms-up',
			techStack: [
				{ name: 'SvelteKit', icon: 'devicon:svelte' },
				{ name: 'TypeScript', icon: 'logos:typescript-icon' },
				{ name: 'GitHub', icon: 'bi:github' },
				{ name: 'Firebase', icon: 'logos:firebase' },
				{ name: 'MJML', icon: 'vscode-icons:file-type-mjml' },
				{ name: 'Brevo', icon: 'simple-icons:brevo' }
			]
		},
		'3': {
			title: $_('timeline3'),
			date: $_('timeline3Date'),
			role: $_('timeline3Role'),
			description: $_('projectDescriptions.timeline3Desc'),
			website: 'https://1robepour1soir.com/fr_FR/',
			color: 'tertiary',
			isAvailable: true,
			gradientFrom: 'tertiary',
			gradientTo: 'primary',
			icon: 'bi:diamond-half',
			techStack: [
				{ name: 'TypeScript', icon: 'logos:typescript-icon' },
				{ name: 'Flask', icon: 'logos:flask' },
				{ name: 'PostgreSQL', icon: 'logos:postgresql' },
				{ name: 'Docker', icon: 'logos:docker-icon' }
			]
		},
		'4': {
			title: $_('timeline4'),
			date: $_('timeline4Date'),
			role: $_('timeline4Role'),
			description: $_('projectDescriptions.timeline4Desc'),
			website: 'https://www.immodirectfrance.com',
			color: 'surface',
			gradientFrom: 'surface',
			gradientTo: 'primary',
			icon: 'bi:houses-fill',
			isAvailable: true,
			techStack: [
				{ name: 'Next.js', icon: 'teenyicons:nextjs-solid' },
				{ name: 'GraphQL', icon: 'logos:graphql' },
				{ name: 'Directus', icon: 'simple-icons:directus' },
				{ name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' }
			]
		},
		'5': {
			title: $_('timeline5'),
			date: $_('timeline5Date'),
			role: $_('timeline5Role'),
			description: $_('projectDescriptions.timeline5Desc'),
			website: 'https://www.oden-app.com',
			color: 'primary',
			gradientFrom: 'primary',
			gradientTo: 'tertiary',
			icon: 'circum:mobile-1',
			isAvailable: true,
			techStack: [
				{ name: 'React Native', icon: 'vscode-icons:file-type-reacttemplate' },
				{ name: 'Expo', icon: 'logos:expo' },
				{ name: 'TypeScript', icon: 'logos:typescript-icon' },
				{ name: 'GitHub', icon: 'bi:github' },
				{ name: 'RNFirebase', icon: 'logos:firebase' }
			]
		},
		'6': {
			title: $_('timeline6'),
			date: $_('timeline6Date'),
			role: $_('timeline6Role'),
			description: $_('projectDescriptions.timeline6Desc'),
			website: 'https://www.ehbam.fr',
			color: 'secondary',
			gradientFrom: 'secondary',
			gradientTo: 'tertiary',
			icon: 'fluent:food-16-filled',
			isAvailable: true,
			techStack: [
				{ name: 'Node.js', icon: 'logos:nodejs' },
				{ name: 'SvelteKit', icon: 'devicon:svelte' },
				{ name: 'Vercel', icon: 'logos:vercel' },
				{ name: 'Digital Ocean', icon: 'logos:digital-ocean' },
				{ name: 'Stripe', icon: 'logos:stripe' },
				{ name: 'Directus', icon: 'simple-icons:directus' }
			]
		},
		'7': {
			title: $_('timeline7'),
			date: $_('timeline7Date'),
			role: $_('timeline7Role'),
			description: $_('projectDescriptions.timeline7Desc'),
			color: 'tertiary',
			website: 'https://proppl.io/',
			gradientFrom: 'tertiary',
			gradientTo: 'primary',
			isAvailable: false,
			icon: 'carbon:collaborate',
			techStack: [
				{ name: 'Nuxt.js', icon: 'logos:nuxt' },
				{ name: 'React-Native', icon: 'vscode-icons:file-type-reacttemplate' },
				{ name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
				{ name: 'NestJS', icon: 'logos:nestjs' },
				{ name: 'PostgreSQL', icon: 'logos:postgresql' }
			]
		},
		'8': {
			title: 'Archimeuble',
			date: '2023',
			role: 'AI Chatbot Developer',
			description: 'Developed an AI-powered chatbot for generating custom homemade furniture designs. The solution helps customers visualize and customize furniture pieces before ordering, improving customer satisfaction and reducing design iterations.',
			website: 'https://archimeuble.com/',
			color: 'primary',
			gradientFrom: 'primary',
			gradientTo: 'secondary',
			icon: 'mdi:sofa',
			isAvailable: true,
			techStack: [
				{ name: 'OpenAI API', icon: 'simple-icons:openai' },
				{ name: 'PHP', icon: 'logos:php' },
				{ name: 'Three.js', icon: 'logos:threejs' },
				{ name: 'JavaScript', icon: 'logos:javascript' }
			]
		},
		'9': {
			title: 'CareCall',
			date: '2024',
			role: 'Backend Developer',
			description: 'Integrated GoCardless payment API and developed a testing framework in TypeScript to interact with voice agents. The solution helps healthcare providers automate call management and improve patient satisfaction.',
			website: 'https://www.carecall.ai/',
			color: 'secondary',
			gradientFrom: 'secondary',
			gradientTo: 'primary',
			icon: 'mdi:phone-in-talk',
			isAvailable: true,
			techStack: [
				{ name: 'TypeScript', icon: 'logos:typescript-icon' },
				{ name: 'GoCardless API', icon: 'simple-icons:gocardless' },
				{ name: 'OpenAI API', icon: 'simple-icons:openai' },
				{ name: 'PostgreSQL', icon: 'logos:postgresql' },
				{ name: 'Docker', icon: 'logos:docker-icon' },
				{ name: 'NestJS', icon: 'logos:nestjs' },
				{ name: 'Node.js', icon: 'logos:nodejs' }
			]
		}
	}));

	// Get previous and next project IDs for navigation
	$: prevId = id === '1' ? '9' : String(Number(id) - 1) as ValidID;
	$: nextId = id === '9' ? '1' : String(Number(id) + 1) as ValidID;

	// Get the current use case from the store
	$: currentUseCase = $useCases[id];

	// Scroll to top on mount
	onMount(() => {
		window.scrollTo(0, 0);
	});
</script>

<svelte:head>
	<title>{$useCases[id].title} - Jean-Baptiste Azan</title>
</svelte:head>

<SimpleNav />

<div class="min-h-screen bg-gradient-to-b">
	{#if !$isLoading}
		<div class="container mx-auto max-w-7xl pt-24 pb-32 px-6 lg:px-8">
			<!-- Back button -->
			<a 
				href="/" 
				class="btn mb-12 flex w-fit items-center gap-2 preset-filled-surface-200 transition-transform hover:scale-105 duration-300"
			>
				<Icon icon="lucide:arrow-left" class="h-5 w-5" />
				<span class="font-medium">{$_('back')}</span>
			</a>

			<!-- Hero Section -->
			<div 
				class="relative mb-20 overflow-hidden rounded-3xl p-1 shadow-xl"
				style="background: linear-gradient(135deg, var(--color-{currentUseCase.gradientFrom}-500), var(--color-{currentUseCase.gradientTo}-500));"
			>
				<div class="relative rounded-2xl bg-surface-100-900-token p-8 md:p-12">
					<div class="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<div class="mb-6 inline-flex items-center gap-4 rounded-full bg-surface-200/50 dark:bg-surface-700/50 py-2 px-4">
								<div 
									class="flex h-10 w-10 items-center justify-center rounded-full transition-transform" 
									style="background-color: var(--color-{currentUseCase.gradientFrom}-500);"
								>
									<Icon icon={currentUseCase.icon} class="h-5 w-5 text-white" />
								</div>
								<span class="text-sm font-medium">{@html currentUseCase.date}</span>
							</div>
							<h1 class="mb-4 font-monserrat text-4xl md:text-6xl font-bold">{@html currentUseCase.title}</h1>
							<p class="mb-6 text-xl md:text-2xl text-surface-600 dark:text-surface-300">{@html currentUseCase.role}</p>
							
							{#if currentUseCase.website}
								<a 
									href={currentUseCase.website} 
									target="_blank" 
									rel="noopener noreferrer" 
									class="btn flex items-center gap-2 preset-tonal-primary transition-transform hover:scale-105 duration-300"
								>
									<Icon icon="lucide:external-link" class="h-5 w-5" />
									<span class="font-medium">{$_('visitSite')}</span>
								</a>
							{/if}
						</div>
						
						<!-- Tech stack for desktop -->
						<div class="hidden md:block">
							<div class="rounded-xl glass p-8 backdrop-blur-sm">
								<h3 class="mb-6 font-monserrat text-2xl font-semibold">{$_('techStack')}</h3>
								<div class="flex flex-wrap gap-4">
									{#each currentUseCase.techStack as tech}
										<div class="flex items-center gap-2 rounded-full bg-surface-100/50 px-4 py-2 dark:bg-surface-700/50 transition-transform hover:scale-110">
											<Icon icon={tech.icon} class="h-6 w-6" />
											<span class="text-base font-medium">{tech.name}</span>
										</div>
									{/each}
								</div>
							</div>
						</div>
					</div>
					
					<!-- Decorative elements -->
					<div class="absolute -bottom-20 -right-20 h-40 w-40 rounded-full opacity-20 blur-2xl"
						style="background: linear-gradient(135deg, var(--color-{currentUseCase.gradientFrom}-500), var(--color-{currentUseCase.gradientTo}-500));"
					></div>
					<div class="absolute -top-20 -left-20 h-40 w-40 rounded-full opacity-20 blur-2xl"
						style="background: linear-gradient(135deg, var(--color-{currentUseCase.gradientTo}-500), var(--color-{currentUseCase.gradientFrom}-500));"
					></div>
				</div>
			</div>

			<!-- Tech stack for mobile -->
			<div class="mb-16 md:hidden">
				<div class="rounded-xl border border-surface-300/20 p-6 dark:bg-surface-800/50">
					<h3 class="mb-6 font-monserrat text-xl font-semibold">{$_('techStack')}</h3>
					<div class="flex flex-wrap gap-4">
						{#each currentUseCase.techStack as tech}
							<div class="flex items-center gap-2 rounded-full bg-surface-100 px-3 py-1.5 dark:bg-surface-700">
								<Icon icon={tech.icon} class="h-5 w-5" />
								<span class="text-sm">{tech.name}</span>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<!-- Project Description -->
			<div class="mb-20">
				<h2 class="mb-6 font-monserrat text-3xl font-bold">{$_('aboutProject')}</h2>
				<div class="prose prose-lg max-w-none dark:prose-invert">
					<p class="text-lg md:text-xl">{currentUseCase.description}</p>
				</div>
			</div>

			<!-- Project Preview (if available) -->
			{#if currentUseCase.isAvailable && currentUseCase.website}
				<div class="mb-20">
					<h2 class="mb-6 font-monserrat text-3xl font-bold">{$_('projectPreview')}</h2>
					<div 
						class="relative mb-6 h-[60vh] w-full overflow-hidden rounded-xl p-1 shadow-lg md:aspect-video"
						style="background: linear-gradient(135deg, var(--color-{currentUseCase.gradientFrom}-500), var(--color-{currentUseCase.gradientTo}-500));"
					>
						<div class="relative h-full w-full overflow-hidden rounded-lg bg-surface-900">
							<!-- Browser-like top bar -->
							<div class="absolute top-0 left-0 right-0 z-10 flex h-10 items-center gap-2 rounded-t-lg bg-surface-800/80 px-4 backdrop-blur-sm">
								<div class="flex gap-2">
									<div class="h-3 w-3 rounded-full bg-red-500"></div>
									<div class="h-3 w-3 rounded-full bg-yellow-500"></div>
									<div class="h-3 w-3 rounded-full bg-green-500"></div>
								</div>
								<div class="ml-4 flex-1">
									<div class="mx-auto max-w-md truncate rounded-full bg-surface-700/50 px-4 py-1 text-xs">
										{currentUseCase.website}
									</div>
								</div>
							</div>
							
							<iframe 
								src={currentUseCase.website} 
								title={currentUseCase.title} 
								class="h-full w-full border-0"
							></iframe>
						</div>
					</div>

					{#if currentUseCase.website}
						<a 
							href={currentUseCase.website} 
							target="_blank" 
							rel="noopener noreferrer" 
							class="btn flex items-center gap-2 preset-tonal-primary transition-transform hover:scale-105 duration-300"
						>
							<Icon icon="lucide:external-link" class="h-5 w-5" />
							<span class="font-medium">{$_('visitSite')}</span>
						</a>
					{/if}
				</div>
			{/if}

			<!-- Navigation buttons (Previous/Next Project) -->
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
				<a 
					href="/usecase/{prevId}" 
					rel="external"
					class="group flex flex-col card p-6 border-surface-300/20 preset-filled-surface-200-800 hover:shadow-xl transition-all duration-300"
				>
					<div class="flex items-center gap-4 mb-3">
						<Icon icon="lucide:arrow-left" class="h-5 w-5 transition-transform group-hover:-translate-x-1" />
						<span class="font-medium text-lg">{$_('previousProject')}</span>
					</div>
					<div class="flex items-center gap-3">
						<div 
							class="flex h-10 w-10 items-center justify-center rounded-full" 
							style="background-color: var(--color-{$useCases[prevId].gradientFrom}-500);"
						>
							<Icon icon={$useCases[prevId].icon} class="h-5 w-5 text-white" />
						</div>
						<span class="font-monserrat font-bold text-lg">{@html $useCases[prevId].title}</span>
					</div>
				</a>
				
				<a 
					href="/usecase/{nextId}" 
					rel="external"
					class="group flex flex-col card p-6 border-surface-300/20 preset-filled-surface-200-800 hover:shadow-xl transition-all duration-300"
				>
					<div class="flex items-center justify-end gap-4 mb-3">
						<span class="font-medium text-lg">{$_('nextProject')}</span>
						<Icon icon="lucide:arrow-right" class="h-5 w-5 transition-transform group-hover:translate-x-1" />
					</div>
					<div class="flex items-center justify-end gap-3">
						<span class="font-monserrat font-bold text-lg">{@html $useCases[nextId].title}</span>
						<div 
							class="flex h-10 w-10 items-center justify-center rounded-full" 
							style="background-color: var(--color-{$useCases[nextId].gradientFrom}-500);"
						>
							<Icon icon={$useCases[nextId].icon} class="h-5 w-5 text-white" />
						</div>
					</div>
				</a>
			</div>
		</div>
	{:else}
		<div class="flex h-screen w-screen items-center justify-center">
			<div class="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-primary-500"></div>
			<span class="ml-4 text-xl">{$_('loading')}</span>
		</div>
	{/if}
</div>

<style>
	.bg-gradient-to-b {
		background-image: radial-gradient(
				at 0% 0%,
				rgba(var(--color-primary-500) / 0.33) 0px,
				transparent 50%
			),
			radial-gradient(at 98% 1%, rgba(var(--color-tertiary-500) / 0.33) 0px, transparent 50%);
	}
	
	.glass {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
	}
</style>
