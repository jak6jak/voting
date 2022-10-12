<script>
import { Movielist } from './stores';

export let id;

function removeComponent() {
		Movielist.update((n) => {
			return n.filter((element) => {
				if (element.id != id) return element;
			});
		});
	}

</script>
    <button
        on:click={removeComponent}
        class="flex-row w-10 h-10 bg-gold-metallic drop-shadow-lg hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full"
        >X</button>
