<script lang="ts">
    import { page } from '$app/stores';
    import { currentLang, translations } from '$lib/utils/store';
    import Preview from '$lib/components/hp/Preview.svelte';
    import Icon from '@iconify/svelte';
    import { scale, fly } from 'svelte/transition';
    import { elasticOut } from 'svelte/easing';
    const useCases = {
        "1": {
            title: translations[$currentLang].timeline1,
            date: translations[$currentLang].timeline1Date,
            role: translations[$currentLang].timeline1Role,
            description: translations[$currentLang].projectDescriptions.timeline1Desc,
            website: "https://www.marcheauxfleursdeparis.fr/",
            color: "#FF3E00",
            gradientFrom: "#FF3E00",
            gradientTo: "#FF8F00",
            icon: "bi:flower3",
            isAvailable: false,
            techStack: [
                { name: "SvelteKit", icon: "devicon:svelte" },
                { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
            ]
        },
        "2": {
            title: translations[$currentLang].timeline2,
            date: translations[$currentLang].timeline2Date,
            role: translations[$currentLang].timeline2Role,
            description: translations[$currentLang].projectDescriptions.timeline2Desc,
            website: "https://www.adfinitas.fr",
            color: "#38BDF8",
            gradientFrom: "#38BDF8",
            isAvailable: true,
            gradientTo: "#0EA5E9",
            icon: "bi:person-arms-up",
            techStack: [
                { name: "SvelteKit", icon: "devicon:svelte" },
                { name: "TypeScript", icon: "logos:typescript-icon" },
                { name: "GitHub", icon: "bi:github" },
                { name: "Firebase", icon: "logos:firebase" },
                {name: "MJML", icon: "vscode-icons:file-type-mjml" },
                {name: "Brevo", icon: "simple-icons:brevo" }
            ]
        },
        "3": {
            title: translations[$currentLang].timeline3,
            date: translations[$currentLang].timeline3Date,
            role: translations[$currentLang].timeline3Role,
            description: translations[$currentLang].projectDescriptions.timeline3Desc,
            website: "https://1robepour1soir.com/fr_FR/",
            color: "#E434AA",
            isAvailable: true,
            gradientFrom: "#E434AA",
            gradientTo: "#F87BE5",
            icon: "bi:diamond-half",
            techStack: [
                { name: "TypeScript", icon: "logos:typescript-icon" },
                { name: "Flask", icon: "logos:flask" },
                { name: "PostgreSQL", icon: "logos:postgresql" },
                { name: "Docker", icon: "logos:docker-icon" },
            ]
        },
        "4": {
            title: translations[$currentLang].timeline4,
            date: translations[$currentLang].timeline4Date,
            role: translations[$currentLang].timeline4Role,
            description: translations[$currentLang].projectDescriptions.timeline4Desc,
            website: "https://www.immodirectfrance.com",
            color: "#000000",
            gradientFrom: "#2B2B2B",
            gradientTo: "#545454",
            icon: "bi:houses-fill",
            isAvailable: true,
            techStack: [
                { name: "Next.js", icon: "teenyicons:nextjs-solid" },
                { name: "GraphQL", icon: "logos:graphql" },
                { name: "Directus", icon: "simple-icons:directus" },
                { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" }
            ]
        },
        "5": {
            title: translations[$currentLang].timeline5,
            date: translations[$currentLang].timeline5Date,
            role: translations[$currentLang].timeline5Role,
            description: translations[$currentLang].projectDescriptions.timeline5Desc,
            website: "https://www.oden-app.com",
            color: "#FF3E00",
            gradientFrom: "#FF3E00",
            gradientTo: "#FF8F00",
            icon: "bi:houses-fill",
            isAvailable: true,
            techStack: [
                { name: "React Native", icon: "vscode-icons:file-type-reacttemplate" },
                { name: "Expo", icon: "logos:expo" },
                { name: "TypeScript", icon: "logos:typescript-icon" },
                { name: "GitHub", icon: "bi:github" },
                { name: "RNFirebase", icon: "logos:firebase" }
            ]
        },
        "6": {
            title: translations[$currentLang].timeline6,
            date: translations[$currentLang].timeline6Date,
            role: translations[$currentLang].timeline6Role,
            description: translations[$currentLang].projectDescriptions.timeline6Desc,
            website: "https://www.ehbam.fr",
            color: "#2C0156",
            gradientFrom: "#E6C834",
            gradientTo: "#2C0156",
            icon: "fluent:food-16-filled",
            isAvailable: true,
            techStack: [
                { name: "Node.js", icon: "logos:nodejs" },
                { name: "SvelteKit", icon: "devicon:svelte" },
                { name: "Vercel", icon: "logos:vercel" },
                { name: "Digital Ocean", icon: "logos:digital-ocean" },
                { name: "Stripe", icon: "logos:stripe" },
                { name: "Directus", icon: "simple-icons:directus" }
            ]
        }
    };

    function hexToRGBA(hex: string, alpha: number = 1) {
        let r = parseInt(hex.slice(1, 3), 16),
          g = parseInt(hex.slice(3, 5), 16),
          b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    let currentCase = $derived({
        ...useCases[$page.params.id],
        title: translations[$currentLang][`timeline${$page.params.id}`],
        date: translations[$currentLang][`timeline${$page.params.id}Date`],
        role: translations[$currentLang][`timeline${$page.params.id}Role`],
        description: translations[$currentLang].projectDescriptions[`timeline${$page.params.id}Desc`]
    });

    let isHovering = $state(false);

    let buttonHoverGradient = $derived(`
        background: linear-gradient(to right, ${hexToRGBA(currentCase.gradientFrom, 0.3)}, ${hexToRGBA(currentCase.gradientTo, 0.3)});
    `);

</script>

<svelte:head>
    <title>{currentCase.name}</title>
</svelte:head>

<div class="min-h-screen relative g" >
    <button
      class="fixed left-10 top-14 z-50"
      onmouseenter={() => isHovering = true}
      onmouseleave={() => isHovering = false}
    >
        <a
          href="/"
          class="relative bg-primary-800 group flex items-center gap-2 px-6 py-3 rounded-full transform hover:scale-110 transition-all duration-300 overflow-hidden"
        >
            <div
              class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>

            <Icon
              icon="lucide:arrow-left"
              class="w-5 h-5 relative z-10 group-hover:-translate-x-1 transition-transform duration-300"
            />

            {#if isHovering}
                <div
                  class="absolute inset-0"
                  in:scale={{duration: 600, delay: 100, easing: elasticOut}}
                >
                    <div
                      class="absolute inset-0 animate-pulse-slow blur-xl"
                      style={buttonHoverGradient}
                    ></div>
                </div>
            {/if}
        </a>
    </button>

    <header class="relative min-h-screen flex items-center justify-center overflow-hidden">
        <!-- Content -->
        <div class="relative z-10 text-center space-y-12 px-4 max-w-5xl mx-auto">
            <div
              class="flex items-center justify-center gap-6 text-sm uppercase tracking-wider font-monserrat"
              in:fly={{ y: 50, duration: 1000, delay: 200 }}
            >
                <span
                  class="text-5xl transform hover:scale-125 transition-transform duration-300 hover:rotate-12"
                >
                    <Icon icon={currentCase.icon} />
                </span>
                <span class="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-white/90 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/10">
                    {@html currentCase.date}
                </span>
            </div>

            <h1
              class="text-7xl md:text-9xl font-bold font-monserrat leading-tight animate-gradient-text"
              in:fly={{ y: 50, duration: 1000, delay: 400 }}
            >
                {@html currentCase.title}
            </h1>

            <p
              class="text-2xl font-monserrat bg-white/10 backdrop-blur-md px-8 py-4 rounded-full inline-block text-white/90 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 hover:scale-105"
              in:fly={{ y: 50, duration: 1000, delay: 600 }}
            >
                {@html currentCase.role}
            </p>
        </div>
    </header>

    <main class="relative z-20">
        <div class="container mx-auto px-4 py-32">
            <div class="grid md:grid-cols-2 gap-16 mb-20">
                <!-- Description -->
                <div class="backdrop-blur-xl bg-white/5 p-10 rounded-3xl border border-white/10 shadow-2xl hover:shadow-3xl transition-shadow duration-300 transform hover:-translate-y-1">
                    <div class="prose prose-lg prose-invert max-w-none">
                        <h2 class="text-4xl font-bold font-monserrat mb-8 animate-gradient-text">
                            {$currentLang === 'fr' ? 'À propos du projet' : 'About this project'}
                        </h2>
                        <p class="font-monserrat leading-relaxed text-lg text-white/80">
                            {@html currentCase.description}
                        </p>
                    </div>
                </div>

                <!-- Tech Stack -->
                <div class="backdrop-blur-xl bg-white/5 p-10 rounded-3xl border border-white/10 shadow-2xl hover:shadow-3xl transition-shadow duration-300 transform hover:-translate-y-1">
                    <h2 class="text-4xl font-bold font-monserrat mb-12 animate-gradient-text">
                        {translations[$currentLang].techStack}
                    </h2>

                    <div class="grid grid-cols-2 gap-6">
                        {#each currentCase.techStack as tech}
                            <div
                              class="group p-6 rounded-2xl transition-all duration-500 hover:scale-105 transform hover:rotate-1 bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/15 border border-white/10 hover:border-white/20"
                            >
                                <div class="flex items-center gap-4">
                                    <Icon
                                      icon={tech.icon}
                                      width="50"
                                      height="50"
                                    />
                                    <span class="font-monserrat font-medium text-white/90 group-hover:text-white transition-colors duration-300">
                                        {tech.name}
                                    </span>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>

            {#if currentCase.isAvailable}
                <div transition:scale={{duration: 800, easing: elasticOut}} class="mt-32">
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
