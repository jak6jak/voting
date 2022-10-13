<script lang="ts">
	import type { element } from 'svelte/internal';
	import src from '/src/images/redo.svg';
    import Movie from '$lib/Movie.svelte'
	import { Movielist } from './stores';
	import { fade } from 'svelte/transition';
	import MovieSelection from '$lib/MovieSelection.svelte';

	export let id;
	export let title: String;
	export let description: String;
	export let year: Date = undefined;
	export let length: Date = undefined;
	export let imageSrc: URL = undefined;
	export let movieResultsLength = 0;

	let ShowReslection = false;

	function handleMessage(event){
		ShowReslection = !ShowReslection;
	}

	//https://www.themoviedb.org/t/p/w440_and_h660_face/lr11mCT85T1JanlgjMuhs9nMht4.jpg
</script>

{#if ShowReslection == false}
<Movie
{id}
{title}
{description}
{year}
{length}
{imageSrc}
{movieResultsLength}
on:reselect={handleMessage}
></Movie>
{:else}
<MovieSelection on:reselect={handleMessage} {id}></MovieSelection>
{/if}

<!----
<div class="absolute top-0 right-0">
    <button
        on:click={removeComponent}
        class="flex-row w-10 h-10 bg-gold-metallic drop-shadow-lg hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full"
        >X</button
    >
    {#if movieResultsLength > 1}
        <button
            class="flex-row w-10 h-10 bg-gold-metallic drop-shadow-lg hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full"
        >
            <img class="h-5 w-5" {src} alt="choose different movie" />
        </button>
    {/if}
</div>
-->
<!--
<div transition:fade class="flex columns-3 drop-shadow-2xl mx-5 p-2 my-1 rounded-lg bg-cultured">
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
	
</div>

-->
