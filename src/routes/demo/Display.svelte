<script>
	import { onMount, untrack } from 'svelte';
	import Self from './Display.svelte';
	let { item } = $props();

	let childrenCopy = $state(item.children);
	let childrenTracked = $derived(item.children);

	// WORKS
	// $effect(() => {
	// console.log(
	// 	untrack(() => childrenCopy.length),
	// 	untrack(() => childrenTracked.length)
	// );
	// 	childrenCopy = childrenTracked;
	// });

	// NO WORK
	$effect(() => {
		console.log({ childrenTracked });
	});
	$effect(() => {
		let updatedChildren = childrenTracked;
		let currentChildrenLength = untrack(() => childrenCopy.length);

		console.log('----');
		console.log(
			untrack(() => childrenCopy.length),
			untrack(() => childrenTracked.length)
		);
		console.log(currentChildrenLength, updatedChildren.length);
		console.log('----');

		if (updatedChildren.length !== currentChildrenLength) {
			console.log('FIRE FIRE FIRE', childrenTracked);
			childrenCopy = childrenTracked;
		}
	});

	onMount(() => {
		console.log('MOUNT2');
	});
</script>

<span>{item.id} {item.name}</span>
<br />

{#if childrenCopy.length}
	{#each childrenCopy as child (child.id)}
		<Self item={child} />
	{/each}
{/if}
