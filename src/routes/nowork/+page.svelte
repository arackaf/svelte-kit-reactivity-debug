<script lang="ts">
	import Display from './Display.svelte';
	import NewItem from './NewItem.svelte';

	let { data } = $props();
	let items = $derived(data.payload);

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

	$effect(() => {
		console.log('AAA', { stackedItems });
	});
</script>

<div class="m-10 flex flex-col items-start gap-2 p-10">
	<NewItem />

	{#each stackedItems as item (item.id)}
		<Display {item} />
	{/each}
</div>
