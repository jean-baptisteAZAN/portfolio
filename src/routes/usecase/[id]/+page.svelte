<script lang="ts">
	import { page } from '$app/stores';
	import { _, isLoading } from 'svelte-i18n';
	import Preview from '$lib/components/hp/Preview.svelte';
	import Icon from '@iconify/svelte';
	import { scale, fly } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';
	import { derived } from 'svelte/store';

	// Use a derived store to reactively update the useCases when translations change
	const useCases = derived([_, page], ([$_, $page]) => ({
		'1': {
			title: $_('timeline1'),
			date: $_('timeline1Date'),
			role: $_('timeline1Role'),
			description: $_('projectDescriptions.timeline1Desc'),
			website: 'https://www.marcheauxfleursdeparis.fr/',
			color: '#FF3E00',
			gradientFrom: '#FF3E00',
			gradientTo: '#FF8F00',
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
			color: '#38BDF8',
			gradientFrom: '#38BDF8',
			isAvailable: true,
			gradientTo: '#0EA5E9',
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
			color: '#E434AA',
			isAvailable: true,
			gradientFrom: '#E434AA',
			gradientTo: '#F87BE5',
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
			color: '#000000',
			gradientFrom: '#2B2B2B',
			gradientTo: '#545454',
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
			color: '#FF3E00',
			gradientFrom: '#FF3E00',
			gradientTo: '#FF8F00',
			icon: 'bi:houses-fill',
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
			color: '#2C0156',
			gradientFrom: '#E6C834',
			gradientTo: '#2C0156',
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
			color: '#0f219e',
			gradientFrom: '#0f219e',
			gradientTo: '#ecb300',
			isAvailable: false,
			icon: 'carbon:collaborate',
			techStack: [
				{ name: 'Nuxt.js', icon: 'logos:nuxt' },
				{ name: 'React-Native', icon: 'vscode-icons:file-type-reacttemplate' },
				{ name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
				{ name: 'NestJS', icon: 'logos:nestjs' },
				{ name: 'PostrgeSQL', icon: 'logos:postgresql' }
			]
		}
	}));

	function hexToRGBA(hex: string, alpha: number = 1) {
		let r = parseInt(hex.slice(1, 3), 16),
			g = parseInt(hex.slice(3, 5), 16),
			b = parseInt(hex.slice(5, 7), 16);
		return `rgba(${r}, ${g}, ${b}, ${alpha})`;
	}

	let isHovering = $state(false);
</script>

<svelte:head>
	<title>{$page.params.id}</title>
</svelte:head>

{#if !$isLoading && $useCases[$page.params.id]}
	{@const currentCase = $useCases[$page.params.id]}
	<div class="relative min-h-screen">
		<button
			class="fixed left-5 top-5 z-50 md:left-10 md:top-14"
			onmouseenter={() => (isHovering = true)}
			onmouseleave={() => (isHovering = false)}
		>
			<a
				href="/"
				class="group relative flex transform items-center gap-2 overflow-hidden rounded-full bg-primary-800 px-6 py-3 transition-all duration-300 hover:scale-110"
			>
				<div
					class="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				></div>

				<Icon
					icon="lucide:arrow-left"
					class="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1"
				/>

				{#if isHovering}
					<div class="absolute inset-0" in:scale={{ duration: 600, delay: 100, easing: elasticOut }}>
						<div
							class="animate-pulse-slow absolute inset-0 blur-xl"
							style={`
								background: linear-gradient(to right, ${hexToRGBA(currentCase.gradientFrom, 0.3)}, ${hexToRGBA(currentCase.gradientTo, 0.3)});
							`}
						></div>
					</div>
				{/if}
			</a>
		</button>

		<header
			class="relative mt-40 flex items-center justify-center overflow-hidden md:mt-0 md:min-h-screen"
		>
			<!-- Content -->
			<div class="relative z-10 mx-auto max-w-5xl space-y-12 px-4 text-center">
				<div
					class="flex items-center justify-center gap-6 font-monserrat text-sm uppercase tracking-wider"
					in:fly={{ y: 50, duration: 1000, delay: 200 }}
				>
					<span
						class="transform text-3xl transition-transform duration-300 hover:rotate-12 hover:scale-125 md:text-5xl"
					>
						<Icon icon={currentCase.icon} />
					</span>
					<span
						class="rounded-full border border-white/10 bg-white/10 px-6 py-3 text-white/90 shadow-lg backdrop-blur-md transition-shadow duration-300 hover:shadow-xl"
					>
						{@html currentCase.date}
					</span>
				</div>

				<h1
					class="animate-gradient-text font-monserrat text-5xl font-bold leading-tight md:text-9xl"
					in:fly={{ y: 50, duration: 1000, delay: 400 }}
				>
					{@html currentCase.title}
				</h1>

				<p
					class="inline-block rounded-full border border-white/10 bg-white/10 px-8 py-4 font-monserrat text-2xl text-white/90 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
					in:fly={{ y: 50, duration: 1000, delay: 600 }}
				>
					{@html currentCase.role}
				</p>
			</div>
		</header>

		<main class="relative z-20">
			<div class="container mx-auto px-4 py-32">
				<div class="mb-20 grid gap-16 md:grid-cols-2">
					<!-- Description -->
					<div
						class="hover:shadow-3xl transform rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl transition-shadow duration-300 hover:-translate-y-1"
					>
						<div class="prose prose-lg prose-invert max-w-none">
							<h2 class="animate-gradient-text mb-8 font-monserrat text-4xl font-bold">
								{$_($page.url.pathname.includes('/fr/') ? 'fr' : 'en') === 'fr' ? 'À propos du projet' : 'About this project'}
							</h2>
							<p class="font-monserrat text-lg leading-relaxed text-white/80">
								{@html currentCase.description}
							</p>
						</div>
					</div>

					<!-- Tech Stack -->
					<div
						class="hover:shadow-3xl transform rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl transition-shadow duration-300 hover:-translate-y-1"
					>
						<h2 class="animate-gradient-text mb-12 font-monserrat text-4xl font-bold">
							{$_('techStack')}
						</h2>

						<div class="grid grid-cols-2 gap-6">
							{#each currentCase.techStack as tech}
								<div
									class="group transform rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-2 transition-all duration-500 hover:rotate-1 hover:scale-105 hover:border-white/20 hover:from-white/10 hover:to-white/15 md:p-6"
								>
									<div class="flex items-center gap-4">
										<Icon icon={tech.icon} width="50" height="50" />
										<span
											class="font-monserrat text-xs font-medium text-white/90 transition-colors duration-300 group-hover:text-white lg:text-xl"
										>
											{tech.name}
										</span>
									</div>
								</div>
							{/each}
						</div>
					</div>
				</div>

				{#if currentCase.isAvailable}
					<div transition:scale={{ duration: 800, easing: elasticOut }} class="mt-32">
						<Preview
							website={currentCase.website}
							gradientFrom={currentCase.gradientFrom}
							gradientTo={currentCase.gradientTo}
							color={currentCase.color}
							icon={currentCase.icon}
						/>
					</div>
				{/if}
			</div>
		</main>
	</div>
{:else}
	<div class="flex h-screen w-screen items-center justify-center">
		<div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-500"></div>
	</div>
{/if}

<style>
	.animate-gradient-text {
		background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
		background-size: 400% 400%;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: gradient 15s ease infinite;
	}

	.animate-pulse-slow {
		animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	}

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	@keyframes blob {
		0% {
			transform: translate(0px, 0px) scale(1);
		}
		33% {
			transform: translate(30px, -50px) scale(1.1);
		}
		66% {
			transform: translate(-20px, 20px) scale(0.9);
		}
		100% {
			transform: translate(0px, 0px) scale(1);
		}
	}

	.animate-blob {
		animation: blob 7s infinite;
	}

	.animation-delay-2000 {
		animation-delay: 2s;
	}

	.animation-delay-4000 {
		animation-delay: 4s;
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	.backdrop-blur-xl {
		backdrop-filter: blur(24px);
		-webkit-backdrop-filter: blur(24px);
	}
</style>
 