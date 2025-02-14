<script lang="ts">
	import Display from './Display.svelte';
	import Display2 from './Display2.svelte';

	let nextId = $state(-1);
	let items = $state([
		{ id: 1, name: 'Item 1' },
		{ id: 2, name: 'Item 1 a', parent: 1 }
	]);

	function stackAndGetTopLevelItems(items: any[]) {
		const result = items.map((item) => ({
			...item,
			children: [] as any[]
		}));

		result.forEach((parent) => {
			parent.children.push(...result.filter((child) => child.parent == parent.id));
		});

		return result.filter((item) => item.parent == null);
	}
	let stackedItems = $derived(stackAndGetTopLevelItems(items));
</script>

<div class="m-10 flex flex-col items-start gap-2 p-10">
	<button
		class="border p-2"
		onclick={() => {
			items.push({ id: nextId--, name: 'new ', parent: 2 });
		}}>Add</button
	>
	{#each stackedItems as item (item.id)}
		<Display {item} />
	{/each}
	<hr class="w-full" />
	{#each stackedItems as item (item.id)}
		<Display2 {item} />
	{/each}
</div>
