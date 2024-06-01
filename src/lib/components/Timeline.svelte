<script lang="ts">
	import { currentLang, translations } from '$lib/utils/store.js';
	import { getDrawerStore, type DrawerSettings } from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();
	
	function openDrawer(index: string, position: string): void {
		const drawerSettings: DrawerSettings = {
			id: index,
			position: position
		};
		drawerStore.open(drawerSettings);
	}
</script>

<h3 class="text-4xl pt-20 pb-10 text-center font-monserrat font-bold">
	{@html translations[$currentLang].journey}
</h3>

<div class="flex flex-col justify-center sm:py-1">
	<div class=" sm:max-w-screen sm:mx-auto w-full px-2 sm:px-0">
		<div class="relative text-gray-700 antialiased text-sm font-semibold">
			
			<div class="hidden sm:block w-1 bg-surface-300 absolute h-full left-1/2 transform -translate-x-1/2"/>
			
			<div class="mt-6 sm:mt-0 sm:mb-12">
				<div class="flex flex-col sm:flex-row items-center">
					<div class="flex justify-start w-full mx-auto items-center">
						<div class="w-full sm:w-1/2 sm:pr-8 lg:pl-[10rem] 2xl:pl-[30rem]">
							<div class="p-4 bg-white rounded shadow">
								<p class="font-bold text-3xl font-monserrat text-center md:text-left">
									{@html translations[$currentLang].timeline1}
								</p>
								<p class="text-center md:text-left">
									{@html translations[$currentLang].timeline1Date}
								</p>
								<p class="text-center md:text-left">
									{@html translations[$currentLang].timeline1Role}
								</p>
								<div class="flex items-center justify-center md:justify-start">
									<button on:click={()=> openDrawer("1", "right")} class="mt-4 btn hover:scale-105 hover:variant-filled-surface variant-filled transition-all">
										{translations[$currentLang].learnMoreButton}
									</button>
								</div>
							</div>
						</div>
					</div>
					<div class="rounded-full bg-surface-300 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-flower3" viewBox="0 0 16 16">
							<path d="M11.424 8c.437-.052.811-.136 1.04-.268a2 2 0 0 0-2-3.464c-.229.132-.489.414-.752.767C9.886 4.63 10 4.264 10 4a2 2 0 1 0-4 0c0 .264.114.63.288 1.035-.263-.353-.523-.635-.752-.767a2 2 0 0 0-2 3.464c.229.132.603.216 1.04.268-.437.052-.811.136-1.04.268a2 2 0 1 0 2 3.464c.229-.132.489-.414.752-.767C6.114 11.37 6 11.736 6 12a2 2 0 1 0 4 0c0-.264-.114-.63-.288-1.035.263.353.523.635.752.767a2 2 0 1 0 2-3.464c-.229-.132-.603-.216-1.04-.268M9 4a2 2 0 0 1-.045.205q-.059.2-.183.484a13 13 0 0 1-.637 1.223L8 6.142l-.135-.23a13 13 0 0 1-.637-1.223 4 4 0 0 1-.183-.484A2 2 0 0 1 7 4a1 1 0 1 1 2 0M3.67 5.5a1 1 0 0 1 1.366-.366 2 2 0 0 1 .156.142q.142.15.326.4c.245.333.502.747.742 1.163l.13.232-.265.002a13 13 0 0 1-1.379-.06 4 4 0 0 1-.51-.083 2 2 0 0 1-.2-.064A1 1 0 0 1 3.67 5.5m1.366 5.366a1 1 0 0 1-1-1.732l.047-.02q.055-.02.153-.044.202-.048.51-.083a13 13 0 0 1 1.379-.06q.135 0 .266.002l-.131.232c-.24.416-.497.83-.742 1.163a4 4 0 0 1-.327.4 2 2 0 0 1-.155.142M9 12a1 1 0 0 1-2 0 2 2 0 0 1 .045-.206q.058-.198.183-.483c.166-.378.396-.808.637-1.223L8 9.858l.135.23c.241.415.47.845.637 1.223q.124.285.183.484A1.3 1.3 0 0 1 9 12m3.33-6.5a1 1 0 0 1-.366 1.366 2 2 0 0 1-.2.064q-.202.048-.51.083c-.412.045-.898.061-1.379.06q-.135 0-.266-.002l.131-.232c.24-.416.497-.83.742-1.163a4 4 0 0 1 .327-.4q.07-.074.114-.11l.041-.032a1 1 0 0 1 1.366.366m-1.366 5.366a2 2 0 0 1-.155-.141 4 4 0 0 1-.327-.4A13 13 0 0 1 9.74 9.16l-.13-.232.265-.002c.48-.001.967.015 1.379.06q.308.035.51.083.098.024.153.044l.048.02a1 1 0 1 1-1 1.732zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
						</svg>
					</div>
				</div>
			</div>
			<div class="mt-6 sm:mt-0 sm:mb-12">
				<div class="flex flex-col sm:flex-row items-center">
					<div class="flex justify-end w-full mx-auto items-center">
						<div class="w-full sm:w-1/2 sm:pl-8 lg:pr-[10rem] 2xl:pr-[30rem]">
							<div class="p-4 bg-white rounded shadow">
								<p class="font-bold text-3xl font-monserrat text-center md:text-left">
									{@html translations[$currentLang].timeline2}
								</p>
								<p class="text-center md:text-left">
									{@html translations[$currentLang].timeline2Date}
								</p>
								<p class="text-center md:text-left">
									{@html translations[$currentLang].timeline2Role}
								</p>
								<div class="flex items-center justify-center md:justify-start">
									<button on:click={()=> openDrawer("2", 'left')} class="mt-4 btn hover:scale-105 hover:variant-filled-surface variant-filled transition-all">
										{translations[$currentLang].learnMoreButton}
									</button>
								</div>
							</div>
						</div>
					</div>
					<div class="rounded-full bg-surface-300 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-person-arms-up" viewBox="0 0 16 16">
							<path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
							<path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z"/>
						</svg>
					</div>
				</div>
			</div>
			<div class="mt-6 sm:mt-0 sm:mb-12">
				<div class="flex flex-col sm:flex-row items-center">
					<div class="flex justify-start w-full mx-auto items-center">
						<div class="w-full sm:w-1/2 sm:pr-8 lg:pl-[10rem] 2xl:pl-[30rem]">
							<div class="p-4 bg-white rounded shadow">
								<p class="font-bold text-3xl font-monserrat text-center md:text-left">
									{@html translations[$currentLang].timeline3}
								</p>
								<p class="text-center md:text-left">
									{@html translations[$currentLang].timeline3Date}
								</p>
								<p class="text-center md:text-left">
									{@html translations[$currentLang].timeline3Role}
								</p>
								<div class="flex items-center justify-center md:justify-start">
								<button on:click={()=> openDrawer("3", "right")} class="mt-4 btn hover:scale-105 hover:variant-filled-surface variant-filled transition-all">
									{translations[$currentLang].learnMoreButton}
								</button>
								</div>
							</div>
						</div>
					</div>
					<div class="rounded-full bg-surface-300 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-diamond-half" viewBox="0 0 16 16">
							<path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM8 .989c.127 0 .253.049.35.145l6.516 6.516a.495.495 0 0 1 0 .7L8.35 14.866a.5.5 0 0 1-.35.145z"/>
						</svg>
					</div>
				</div>
			</div>
			<div class="mt-6 sm:mt-0">
				<div class="flex flex-col sm:flex-row items-center">
					<div class="flex justify-end w-full mx-auto items-center">
						<div class="w-full sm:w-1/2 sm:pl-8 lg:pr-[10rem] 2xl:pr-[30rem]">
							<div class="p-4 bg-white rounded shadow">
								<p class="font-bold text-3xl font-monserrat text-center md:text-left">
									{@html translations[$currentLang].timeline4}
								</p>
								<p class="text-center md:text-left">
									{@html translations[$currentLang].timeline4Date}
								</p>
								<p class="text-center md:text-left">
									{@html translations[$currentLang].timeline4Role}
								</p>
								<div class="flex items-center justify-center md:justify-start">
								<button on:click={()=> openDrawer('4', "left")} class="mt-4 btn hover:scale-105 hover:variant-filled-surface variant-filled transition-all">
									{translations[$currentLang].learnMoreButton}
								</button>
								</div>
							</div>
						</div>
					</div>
					<div class="rounded-full bg-surface-300 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-houses-fill" viewBox="0 0 16 16">
							<path d="M7.207 1a1 1 0 0 0-1.414 0L.146 6.646a.5.5 0 0 0 .708.708L1 7.207V12.5A1.5 1.5 0 0 0 2.5 14h.55a2.5 2.5 0 0 1-.05-.5V9.415a1.5 1.5 0 0 1-.56-2.475l5.353-5.354z"/>
							<path d="M8.793 2a1 1 0 0 1 1.414 0L12 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l1.854 1.853a.5.5 0 0 1-.708.708L15 8.207V13.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 13.5V8.207l-.146.147a.5.5 0 1 1-.708-.708z"/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
