<script>
	import { invalidateAll } from '$app/navigation';
</script>

<button
	class="border p-3"
	onclick={() => {
		setTimeout(() => {
			invalidateAll();
		}, 50);
	}}
>
	Add
</button>
