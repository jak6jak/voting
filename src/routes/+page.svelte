<script lang="ts">
	import MovieListing from '$lib/MovieListing.svelte';
	import MovieSelection from '$lib/MovieSelection.svelte';
	import { Movielist } from '../lib/stores';
	import { invalidateAll, goto } from '$app/navigation';
	import { applyAction } from '$app/forms';

	/** @type {import('./$types').PageData} */
	export let data;
	/** @type {import('./$types').ActionData} */
	export let form;

	let textArea: HTMLTextAreaElement;
	let formSubmit: HTMLFormElement;
	let count = 0;
	console.log(form);
	function handleForm(event) {
		if (event.keyCode == 13) {
			formSubmit.requestSubmit();
		}
	}

	async function handleSubmit(event) {
		const data = new FormData(this);
		const response = await fetch(this.action, {
			method: 'POST',
			body: data
		});
		/** @type {import('@sveltejs/kit').ActionResult} */
		const result = await response.json();

		if (result.type === 'success') {
			// re-run all `load` functions, following the successful update
			await invalidateAll();
		}

		applyAction(result);

		Movielist.update((n) => {
			console.log(result.data);
			return [...result.data, ...n];
		});
		formSubmit.reset();
		console.log($Movielist);
	}
</script>

<div
	class="min-h-screen grow h-fit shrink-0 bg-gradient-to-b from-background-dark to-background-light"
>
	<h1 class="text-5xl font-bold text-center p-8 text-gold-metallic">Movie Night Polls!</h1>
	<h2 class="text-2xl text-center p-8 text-gold-metallic">Select Movies to vote on!</h2>
	<div class="container grow h-fit mx-auto">
		<form
			bind:this={formSubmit}
			on:submit|preventDefault={handleSubmit}
			on:keydown={handleForm}
			method="POST"
			class="flex gap-1"
		>
			<textarea
				autofocus
				bind:this={textArea}
				rows="1"
				name="search"
				class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
				placeholder="Create poll by typing movies into here. Multiple movies seperated by new line"
			/>
		</form>
		{#each $Movielist as movie (movie.id)}
			{#if movie.total_results > 0}
				<MovieListing
					id={movie.id}
					movieResultsLength={movie.results.length}
					title={movie.results[movie.ChosenMovieIndex].title}
					description={movie.results[movie.ChosenMovieIndex].overview}
					year={movie.results[movie.ChosenMovieIndex].release_date}
					imageSrc={'https://www.themoviedb.org/t/p/w440_and_h660_face/' +
						movie.results[movie.ChosenMovieIndex].poster_path}
				/>
			{:else}
				<MovieListing
					id={movie.id}
					title={movie.results[0].title}
					description={'Not found in database'}
				/>
			{/if}
		{/each}
	</div>
</div>

<style>
	.white-space2 {
		white-space: pre-wrap;
	}
</style>
