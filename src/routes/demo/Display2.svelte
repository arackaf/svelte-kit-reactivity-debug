<script>
	import { onMount, untrack } from 'svelte';
	import Self from './Display.svelte';
	let { item } = $props();

	let children = $derived(item.children);

	onMount(() => {
		console.log('MOUNT2');
	});
</script>

<span>{item.id} {item.name}</span>
<br />

{#if children.length}
	{#each children as child (child.id)}
		<Self item={child} />
	{/each}
{/if}
