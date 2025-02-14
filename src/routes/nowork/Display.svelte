<script>
	import { onMount } from 'svelte';
	import Self from './Display.svelte';
	let { item } = $props();

	let childrenCopy = $state(item.children);

	$effect(() => {
		let updatedChildren = item.children;
		childrenCopy = updatedChildren;
		console.log('Updated children', updatedChildren);
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
