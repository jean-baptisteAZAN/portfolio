<script>
	export let path, text;
</script>

<div
	class="w-[90%] md:w-[20%] md:h-[18rem] card variant-glass p-4 shadow-lg md:p-10 space-y-4 text-center flex flex-col items-center justify-center hover:scale-105 transition-all duration-300"
>
	<img src={path} alt="Frontend Developer" class="w-20 h-20" />
	<span>{text}</span>
</div>
