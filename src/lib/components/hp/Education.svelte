<script lang="ts">
	import { currentLang, translations } from '$lib/utils/store';
	import Icon from '@iconify/svelte';

	const educationData = [
		{
			year: "2022 - 2027",
			school: "EPITECH",
			title: {
				fr: "Expert en technologie de l'information",
				en: "IT Expert"
			},
			description: {
				fr: "Formation d'expert en technologie de l'information à travers une pédagogie par projets. Développement de compétences approfondies en programmation système, web et mobile.",
				en: "IT Expert training through project-based learning. Development of advanced skills in system programming, web and mobile development."
			},
			icon: "ph:student-duotone",
			mainSkills: ["C/C++", "Python", "JavaScript", "TypeScript"],
			additionalSkills: ["DevOps", "System Architecture", "Agile", "Mobile Development"]
		},
		{
			year: "2011 - 2022",
			school: "Notre Dame de la Providence",
			title: {
				fr: "Baccalauréat",
				en: "High School Diploma"
			},
			description: {
				fr: "Formation générale avec spécialisation scientifique, développant des compétences analytiques et une base solide pour les études supérieures.",
				en: "General education with scientific specialization, developing analytical skills and a solid foundation for higher education."
			},
			icon: "ph:graduation-cap-duotone",
			mainSkills: ["Sciences", "Mathématiques", "Analyse"],
			additionalSkills: ["Travail d'équipe", "Communication", "Gestion du temps"]
		},
		{
			year: "2023",
			school: "TOEIC",
			title: {
				fr: "Certification TOEIC",
				en: "TOEIC Certification"
			},
			description: {
				fr: "Score de 850 points attestant d'un niveau B2/C1 en anglais, démontrant une forte capacité à communiquer dans un contexte professionnel international.",
				en: "Score of 850 points certifying B2/C1 level in English, demonstrating strong ability to communicate in an international professional context."
			},
			icon: "ph:certificate-duotone",
			mainSkills: ["English Proficiency", "Technical Communication"],
			additionalSkills: ["Business English", "International Collaboration"]
		}
	];
</script>

<section id="education" class="education-section relative py-24">
	<div class="container mx-auto px-4">
		<h2 class="text-4xl font-bold text-center mb-20">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-tertiary-400">
                {$currentLang === 'fr' ? 'Formation' : 'Education'}
            </span>
		</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
			{#each educationData as education}
				<div class="group">
					<div class="p-6 h-full rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-lg hover:bg-white/[0.05] transition-all duration-300 hover:shadow-2xl">
						<!-- Header -->
						<div class="flex items-start justify-between mb-6">
							<div class="flex-1">
								<div class="inline-flex items-center gap-2 px-4 py-1 rounded-full
                                          bg-primary-500/20 text-primary-400 text-sm font-medium mb-4">
									<Icon icon="ph:calendar-duotone" class="w-4 h-4" />
									{education.year}
								</div>
								<h3 class="text-2xl font-bold mb-1">{education.school}</h3>
								<p class="text-tertiary-400">{education.title[$currentLang]}</p>
							</div>
							<div class="w-12 h-12 rounded-2xl bg-primary-500/20 flex items-center justify-center">
								<Icon icon={education.icon} class="w-6 h-6 text-primary-400" />
							</div>
						</div>

						<!-- Description -->
						<p class="text-white/70 mb-6 leading-relaxed">
							{education.description[$currentLang]}
						</p>
						<div class="space-y-4">
							<!-- Main skills -->
							<div class="flex flex-wrap gap-2">
								{#each education.mainSkills as skill}
										<span class="px-3 py-1 text-sm rounded-full bg-tertiary-500/20 text-tertiary-400 border border-tertiary-500/20">
												{skill}
										</span>
								{/each}
							</div>
							<!-- Additional skills -->
							<div class="flex flex-wrap gap-2">
								{#each education.additionalSkills as skill}
                                    <span class="px-3 py-1 text-sm rounded-full
                                               bg-primary-500/10 text-primary-400/80">
                                        {skill}
                                    </span>
								{/each}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
    .education-section {
        background-image:
                radial-gradient(at 0% 0%, rgba(var(--color-primary-500) / 0.33) 0px, transparent 50%),
                radial-gradient(at 98% 1%, rgba(var(--color-tertiary-500) / 0.33) 0px, transparent 50%);
    }
</style>
