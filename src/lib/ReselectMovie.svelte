<script>
	import src from '/src/images/redo.svg';
    import {createEventDispatcher} from 'svelte';
    
    const dispatch = createEventDispatcher();

    function reselectMovie(){
        console.log("hello")
        dispatch('reselect');
    }
</script>

<button on:click={reselectMovie}
	class="flex-row w-10 h-10 bg-gold-metallic drop-shadow-lg hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full"
>
	<img class="h-5 w-5" {src} alt="choose different movie" />
</button>
