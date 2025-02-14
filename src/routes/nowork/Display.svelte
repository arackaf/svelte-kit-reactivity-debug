<script>
	import { onMount, untrack } from 'svelte';
	import Self from './Display.svelte';
	let { item } = $props();

	let childrenCopy = $state(item.children);
	let childrenTracked = $derived(item.children);

	$effect(() => {
		let updatedChildren = childrenTracked;
		let currentChildren = untrack(() => childrenCopy);
		let currentChildrenLength = untrack(() => childrenCopy.length);
		//console.log('Logging', { currentChildren, updatedChildren });

		if (updatedChildren.length !== currentChildrenLength) {
			childrenCopy = updatedChildren;
		}
	});

	onMount(() => {
		console.log('MOUNT2');
	});
</script>

<span>{item.name}</span>
<br />

{#if childrenCopy.length}
	{#each childrenCopy as child (child.id)}
		<Self item={child} />
	{/each}
{/if}
