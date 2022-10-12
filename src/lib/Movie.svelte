<script>
	import DeleteMovie from "./DeleteMovie.svelte";

    export let id;
	export let title;
	export let description;
	export let year = undefined;
	export let length = undefined;
	export let imageSrc = undefined;
	export let movieResultsLength = 0;
</script>

<div class="flex columns-3 drop-shadow-2xl mx-5 p-2 my-1 rounded-lg bg-cultured">
	<div class="w-16 h-24 col-span-1 shrink-0 mx-1">
		{#if imageSrc != undefined}
			<img src={imageSrc} alt="movie poster" />
		{/if}
	</div>
	<div class="w-4/6">
		<h1 class="text-xl w-30 smr-5 shrink truncate">
			{title}
		</h1>
		{#if year != undefined}
			<h1 class="text-xl inline text-smoky-black">{new Date(year).getFullYear()}</h1>
		{/if}

		{#if length != undefined}
			<h1 class="text-xl inline text-gray-600">{length}</h1>
		{/if}

		<p class="text-sm mr-5 line-clamp-6">
			{description}
		</p>
	</div>
    <DeleteMovie {id}></DeleteMovie>
</div>
