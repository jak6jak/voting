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

