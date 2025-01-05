<script lang="ts">
	import { cn } from "$lib/utils/utils";

	export let img: string;
	export let name: string;
	export let username: string;
	export let body: string;
</script>

<figure
	class={cn("card preset-filled-surface-100-900 border-[1px] border-surface-200-800 w-full max-w-md p-4")}
>
	<div class="flex flex-row items-center gap-2">
		<img class="rounded-full" width="60" height="60" alt="" src={img} />
		<div class="flex flex-col">
			<h5 class="text-sm font-medium dark:text-white">
				{name}
			</h5>
			<p class="text-xs font-medium dark:text-white/40">{username}</p>
		</div>
	</div>
	<blockquote class="mt-2 text-sm">{body}</blockquote>
</figure>
