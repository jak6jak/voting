<script>
	import { Movielist } from './stores';
    import {createEventDispatcher} from 'svelte';
    
    export let id;
    const dispatch = createEventDispatcher();

    function reselectMovie(){
        dispatch('reselect');
    }

	let MovieObjectIndex = $Movielist.findIndex((element) => element.id == id);
    let MovieObject = $Movielist[MovieObjectIndex];
	console.log(MovieObject);

    function selectMovie(i){
        Movielist.update((n) => {
            n[MovieObjectIndex].ChosenMovieIndex = i;
            reselectMovie();
            return n;
        });
    }

</script>

<div class="flex overflow-auto drop-shadow-2xl mx-5 p-2 my-1 rounded-lg bg-cultured">
	<h1>Choose Movie:</h1>
		{#each MovieObject.results as movie, i}
			<div class= "mx-4 min-w-fit">
            <button on:click={() => selectMovie(i)}>
            <img class="min-w-full drop-shadow-lg" 
            src={'https://www.themoviedb.org/t/p/w92/' + movie.poster_path} />
            </button>

			<p class="text-center">{new Date(movie.release_date).getFullYear()}</p>
            </div>
		{/each}
</div>
