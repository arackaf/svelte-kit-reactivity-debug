<script>
	import Display from './Display.svelte';
	let nextId = $state(-1);
	let stateObj = $state({
		items: [
			{
				id: 1,
				name: 'a',
				children: [{ id: 2, name: 'aa', children: [{ id: 5, name: 'aa i', children: [] }] }]
			},
			{ id: 3, name: 'b', children: [] },
			{ id: 4, name: 'c', children: [] }
		]
	});
</script>

<div class="m-10 flex flex-col items-start gap-2 p-10">
	<button
		class="border p-3"
		onclick={() => {
			stateObj.items[0].children[0].children.push({ id: nextId--, name: 'new', children: [] });
		}}>Add</button
	>

	{#each stateObj.items as item (item.id)}
		<Display {item} />
	{/each}
</div>
