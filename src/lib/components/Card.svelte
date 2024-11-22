<script>
	export let path, text;
</script>

<div
	class=" card variant-glass p-4 shadow-lg md:p-10 space-y-4 text-center flex flex-col items-center justify-center hover:scale-105 transition-all duration-300"
>
	<img src={path} alt="Déscritption du poste de développeur web" class="w-20 h-20 fill-current" />
	<span>{text}</span>
</div>
