<script lang="ts">
	import { onMount } from 'svelte';
	let selectedItem:any = 'about';
	
	onMount(() => {
		updateCursor();
	});
	function selectItem(item) {
		selectedItem = item;
		updateCursor();
	}
	function updateCursor() {
		setTimeout(() => {
			const activeElement = document.querySelector(`.${selectedItem}`);
			if (activeElement) {
				document.getElementById('cursor').style.left = `${activeElement.offsetLeft}px`;
				document.getElementById('cursor').style.width = `${activeElement.offsetWidth}px`;
			}
		}, 0);
	}
</script>

<div class="header gap-10 sticky backdrop-blur-lg z-50 h-[3rem] w-screen">
	<a href="#AboutMe" class="menu-item about" on:click={() => selectItem('about')}>About Me</a>
	<a href="#Projects" class="menu-item projects" on:click={() => selectItem('projects')}>Projects</a>
	<a href="#Contact" class="menu-item contact" on:click={() => selectItem('contact')}>Contact</a>
	<div id="cursor" class={selectedItem} />
</div>


<style>
	.header {
		font-family: 'Montserrat', sans-serif;
		top: 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.menu-item {
		cursor: pointer;
		position: relative;
	}

	#cursor {
		position: absolute;
		bottom: 0;
		height: 2px;
		background-color: rgba(var(--color-primary-500) / 1);
		transition: left 0.3s ease, width 0.3s ease;
	}
</style>
